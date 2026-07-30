"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { ExamAttempt, ExamSectionId, SectionResult } from "@/domain/exam";
import { EXAM_SECTION_MINUTES } from "@/domain/exam";
import {
  finalizeExamAttempt,
  formatDelta,
  saveExamAttempt,
  scoreListeningAnswers,
  scoreReadingAnswers,
} from "@/lib/exam-store";
import { getMockExamBlueprint, OFFICIAL_TARGETS, EXAM_PAPERS, type ExamPaperId } from "@/data/exam-blueprint";
import { heuristicWritingFeedback } from "@/lib/writing-feedback";
import { heuristicSpeakingFeedback } from "@/lib/speaking-feedback";
import { formatTime, countWords } from "@/lib/utils";
import { percentToGradeForSkill } from "@/domain/skills";
import { Panel } from "@/components/ui";
import { buildExamBandReport } from "@/lib/band-report";
import { EstimatedBandReport } from "@/components/band/EstimatedBandReport";

type Phase =
  | "intro"
  | "listening"
  | "reading"
  | "writing"
  | "speaking"
  | "results";

function useSectionClock(running: boolean) {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);
  return {
    elapsed,
    reset: () => setElapsed(0),
    setElapsed,
  };
}

function useQuestionTimer(activeId: string | null, enabled: boolean) {
  const timings = useRef<Record<string, number>>({});
  const lastId = useRef<string | null>(null);
  const lastTick = useRef<number>(Date.now());

  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => {
      const now = Date.now();
      const cur = lastId.current;
      if (cur) {
        timings.current[cur] = (timings.current[cur] ?? 0) + Math.round((now - lastTick.current) / 1000);
      }
      lastTick.current = now;
    }, 1000);
    return () => window.clearInterval(id);
  }, [enabled]);

  useEffect(() => {
    const now = Date.now();
    const prev = lastId.current;
    if (prev && enabled) {
      timings.current[prev] = (timings.current[prev] ?? 0) + Math.round((now - lastTick.current) / 1000);
    }
    lastId.current = activeId;
    lastTick.current = now;
  }, [activeId, enabled]);

  return timings;
}

export function ExamMode() {
  const [paperId, setPaperId] = useState<ExamPaperId>(1);
  const blueprint = useMemo(() => getMockExamBlueprint(paperId), [paperId]);
  const [phase, setPhase] = useState<Phase>("intro");
  const [startedAt, setStartedAt] = useState("");
  const [sections, setSections] = useState<SectionResult[]>([]);
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);
  const [scoring, setScoring] = useState(false);

  const [listenIdx, setListenIdx] = useState(0);
  const [listenAnswers, setListenAnswers] = useState<Record<string, string>>({});
  const [activeListenQ, setActiveListenQ] = useState<string | null>(null);
  const [listenPlays, setListenPlays] = useState<Record<string, number>>({});
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const listenClock = useSectionClock(phase === "listening");
  const listenTimings = useQuestionTimer(activeListenQ, phase === "listening");

  const [readIdx, setReadIdx] = useState(0);
  const [readAnswers, setReadAnswers] = useState<Record<string, string>>({});
  const [activeReadQ, setActiveReadQ] = useState<string | null>(null);
  const readClock = useSectionClock(phase === "reading");
  const readTimings = useQuestionTimer(activeReadQ, phase === "reading");

  const writingCase = blueprint.writing;
  const [letter, setLetter] = useState("");
  const writeClock = useSectionClock(phase === "writing");

  const [speakIdx, setSpeakIdx] = useState(0);
  const [speakTranscripts, setSpeakTranscripts] = useState<Record<string, string>>({});
  const [speakScores, setSpeakScores] = useState<number[]>([]);
  const speakClock = useSectionClock(phase === "speaking");

  const stopAudio = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioPlaying(false);
  }, []);

  const startExam = () => {
    stopAudio();
    setStartedAt(new Date().toISOString());
    setSections([]);
    setAttempt(null);
    setListenIdx(0);
    setListenAnswers({});
    setListenPlays({});
    setReadIdx(0);
    setReadAnswers({});
    setLetter("");
    setSpeakIdx(0);
    setSpeakTranscripts({});
    setSpeakScores([]);
    listenClock.reset();
    readClock.reset();
    writeClock.reset();
    speakClock.reset();
    setPhase("listening");
  };

  const finishListening = useCallback(() => {
    stopAudio();
    const scored = scoreListeningAnswers(
      listenAnswers,
      { ...listenTimings.current },
      blueprint.listening,
    );
    scored.section.usedSec = listenClock.elapsed;
    setSections((s) => [...s, scored.section]);
    readClock.reset();
    setPhase("reading");
  }, [blueprint.listening, listenAnswers, listenClock.elapsed, listenTimings, readClock, stopAudio]);

  const finishReading = useCallback(() => {
    const scored = scoreReadingAnswers(
      readAnswers,
      { ...readTimings.current },
      blueprint.reading,
    );
    scored.usedSec = readClock.elapsed;
    scored.allocatedSec =
      blueprint.readingPartASec + blueprint.readingPartBCSec;
    setSections((s) => [...s, scored]);
    writeClock.reset();
    setPhase("writing");
  }, [
    blueprint.reading,
    blueprint.readingPartASec,
    blueprint.readingPartBCSec,
    readAnswers,
    readClock.elapsed,
    readTimings,
    writeClock,
  ]);

  const finishWriting = useCallback(async () => {
    setScoring(true);
    let scorePercent = heuristicWritingFeedback(writingCase, letter).overallPercent;
    try {
      const res = await fetch("/api/feedback/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseId: writingCase.id, letter }),
      });
      if (res.ok) {
        const data = (await res.json()) as { overallPercent?: number };
        if (typeof data.overallPercent === "number") scorePercent = data.overallPercent;
      }
    } catch {
      /* heuristic already applied */
    }
    const words = countWords(letter);
    const section: SectionResult = {
      skill: "writing",
      allocatedSec: EXAM_SECTION_MINUTES.writing * 60,
      usedSec: writeClock.elapsed,
      scorePercent,
      correct: scorePercent >= 80 ? 1 : 0,
      total: 1,
      questionTimings: [
        {
          questionId: writingCase.id,
          contentId: writingCase.id,
          skill: "writing",
          part: writingCase.taskType,
          topic: writingCase.specialty,
          secondsSpent: writeClock.elapsed,
          correct: scorePercent >= 80,
          prompt: `${writingCase.title} · ${words} words`,
        },
      ],
    };
    setSections((s) => [...s, section]);
    setScoring(false);
    speakClock.reset();
    setPhase("speaking");
  }, [letter, speakClock, writeClock.elapsed, writingCase]);

  const finishSpeakingRole = useCallback(async () => {
    const rolePlay = blueprint.speaking[speakIdx];
    if (!rolePlay) return;
    setScoring(true);
    const transcript = speakTranscripts[rolePlay.id] ?? "";
    let scorePercent = heuristicSpeakingFeedback(rolePlay, transcript).overallPercent;
    try {
      const res = await fetch("/api/feedback/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rolePlayId: rolePlay.id, transcript }),
      });
      if (res.ok) {
        const data = (await res.json()) as { overallPercent?: number };
        if (typeof data.overallPercent === "number") scorePercent = data.overallPercent;
      }
    } catch {
      /* heuristic */
    }
    const nextScores = [...speakScores, scorePercent];
    setSpeakScores(nextScores);
    setScoring(false);

    if (speakIdx < blueprint.speaking.length - 1) {
      setSpeakIdx((i) => i + 1);
      return;
    }

    const avg = Math.round(nextScores.reduce((a, b) => a + b, 0) / nextScores.length);
    const speakSection: SectionResult = {
      skill: "speaking",
      allocatedSec: EXAM_SECTION_MINUTES.speaking * 60,
      usedSec: speakClock.elapsed,
      scorePercent: avg,
      correct: nextScores.filter((s) => s >= 80).length,
      total: blueprint.speaking.length,
      questionTimings: blueprint.speaking.map((rp, i) => ({
        questionId: rp.id,
        contentId: rp.id,
        skill: "speaking" as const,
        part: "roleplay",
        topic: rp.specialty,
        secondsSpent: Math.round(speakClock.elapsed / blueprint.speaking.length),
        correct: (nextScores[i] ?? 0) >= 80,
        prompt: rp.title,
      })),
    };
    setSections((prev) => {
      const all = [...prev, speakSection];
      const finalized = finalizeExamAttempt({ startedAt, sections: all });
      saveExamAttempt(finalized);
      setAttempt(finalized);
      return all;
    });
    setPhase("results");
  }, [
    blueprint.speaking,
    speakClock.elapsed,
    speakIdx,
    speakScores,
    speakTranscripts,
    startedAt,
  ]);

  const playListeningAudio = (extractId: string, ttsScript: string, audioUrl?: string) => {
    const used = listenPlays[extractId] ?? 0;
    if (used >= blueprint.listeningPlaysPerExtract) return;
    stopAudio();
    setListenPlays((p) => ({ ...p, [extractId]: used + 1 }));

    if (audioUrl) {
      const el = audioRef.current;
      if (el) {
        el.src = audioUrl;
        el.onended = () => setAudioPlaying(false);
        el.onerror = () => {
          setAudioPlaying(false);
          const u = new SpeechSynthesisUtterance(ttsScript);
          u.rate = 0.92;
          u.onend = () => setAudioPlaying(false);
          setAudioPlaying(true);
          window.speechSynthesis.speak(u);
        };
        void el.play().then(() => setAudioPlaying(true)).catch(() => {
          const u = new SpeechSynthesisUtterance(ttsScript);
          u.rate = 0.92;
          u.onend = () => setAudioPlaying(false);
          setAudioPlaying(true);
          window.speechSynthesis.speak(u);
        });
        return;
      }
    }
    const u = new SpeechSynthesisUtterance(ttsScript);
    u.rate = 0.92;
    u.onend = () => setAudioPlaying(false);
    setAudioPlaying(true);
    window.speechSynthesis.speak(u);
  };

  // Auto-finish when section time expires
  useEffect(() => {
    if (phase !== "listening") return;
    const allocated = EXAM_SECTION_MINUTES.listening * 60;
    if (listenClock.elapsed >= allocated) finishListening();
  }, [phase, listenClock.elapsed, finishListening]);

  useEffect(() => {
    if (phase !== "reading") return;
    const passage = blueprint.reading[readIdx];
    if (!passage) return;
    const allocated =
      passage.part === "A" ? blueprint.readingPartASec : blueprint.readingPartBCSec;
    if (readClock.elapsed < allocated) return;

    if (passage.part === "A") {
      const firstBc = blueprint.reading.findIndex((p) => p.part !== "A");
      if (firstBc === -1) {
        finishReading();
        return;
      }
      if (readIdx < firstBc) {
        setReadIdx(firstBc);
        readClock.reset();
        return;
      }
      // already on/after BC boundary with A clock exhausted — move to BC clock
      if (blueprint.reading[readIdx]?.part === "A") {
        setReadIdx(firstBc);
        readClock.reset();
      }
      return;
    }

    finishReading();
  }, [
    phase,
    readClock.elapsed,
    readClock,
    readIdx,
    blueprint.reading,
    blueprint.readingPartASec,
    blueprint.readingPartBCSec,
    finishReading,
  ]);

  useEffect(() => {
    if (phase !== "writing") return;
    if (writeClock.elapsed >= EXAM_SECTION_MINUTES.writing * 60 && !scoring) {
      void finishWriting();
    }
  }, [phase, writeClock.elapsed, finishWriting, scoring]);

  useEffect(() => {
    if (phase !== "speaking") return;
    if (speakClock.elapsed >= EXAM_SECTION_MINUTES.speaking * 60 && !scoring) {
      void finishSpeakingRole();
    }
  }, [phase, speakClock.elapsed, finishSpeakingRole, scoring]);

  if (phase === "intro") {
    return (
      <Panel>
        <h2 className="font-display text-3xl text-ink">Full-paper mock exam</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Official-shaped Listening and Reading papers ({OFFICIAL_TARGETS.listeningQuestions} +{" "}
          {OFFICIAL_TARGETS.readingQuestions} questions), plus one writing letter and two speaking
          role-plays. Choose a paper for content variation — bands remain study estimates only.
        </p>

        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Select paper</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {EXAM_PAPERS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPaperId(p.id)}
                className={`rounded-xl border px-3 py-3 text-left transition ${
                  paperId === p.id
                    ? "border-ward bg-ward/10 shadow-[0_0_24px_-12px_rgba(0,214,192,0.6)]"
                    : "border-ink/10 hover:border-ward/40"
                }`}
              >
                <p className="font-display text-lg font-bold text-ink">{p.label}</p>
                <p className="mt-1 text-xs text-ink/55">{p.theme}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-ink/10 bg-scrub/40 p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                {blueprint.paperLabel} · paper coverage
              </p>
              <p className="mt-1 font-display text-4xl font-bold text-ink">
                {blueprint.coveragePercent}%
              </p>
            </div>
            <p className="text-right text-sm text-ink/55">
              L {blueprint.listeningQuestionCount}/{OFFICIAL_TARGETS.listeningQuestions}
              <br />
              R {blueprint.readingQuestionCount}/{OFFICIAL_TARGETS.readingQuestions}
              <br />
              Audio {blueprint.audioReadyCount}/{blueprint.listening.length}
            </p>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-ward"
              style={{ width: `${blueprint.coveragePercent}%` }}
            />
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-ink/70">
          {blueprint.realismNotes.map((n) => (
            <li key={n}>· {n}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink/50">
          When time hits zero the section auto-submits. No transcript in Listening. Part A Reading
          includes cross-document matching.
        </p>
        <button
          type="button"
          onClick={startExam}
          className="mt-8 rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
        >
          Start {blueprint.paperLabel}
        </button>
      </Panel>
    );
  }

  if (phase === "listening") {
    const extract = blueprint.listening[listenIdx];
    if (!extract) return null;
    const allocated = EXAM_SECTION_MINUTES.listening * 60;
    const remaining = Math.max(0, allocated - listenClock.elapsed);
    const playsLeft =
      blueprint.listeningPlaysPerExtract - (listenPlays[extract.id] ?? 0);
    return (
      <SectionShell
        skill="listening"
        title={extract.title}
        meta={`Part ${extract.part} · ${extract.specialty} · extract ${listenIdx + 1}/${blueprint.listening.length}`}
        elapsed={listenClock.elapsed}
        remaining={remaining}
        onNext={() => {
          stopAudio();
          if (listenIdx < blueprint.listening.length - 1) setListenIdx((i) => i + 1);
          else finishListening();
        }}
        nextLabel={
          listenIdx < blueprint.listening.length - 1 ? "Next extract" : "Finish Listening"
        }
        locked={scoring}
      >
        <audio ref={audioRef} className="hidden" preload="none" />
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={playsLeft <= 0 || audioPlaying}
            onClick={() =>
              playListeningAudio(extract.id, extract.ttsScript, extract.audioUrl)
            }
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper disabled:opacity-40"
          >
            {audioPlaying
              ? "Playing…"
              : playsLeft > 0
                ? `Play audio (${playsLeft} left)`
                : "No plays left"}
          </button>
          <p className="text-sm text-ink/55">
            Listen first — no transcript in exam mode. Max {blueprint.listeningPlaysPerExtract}{" "}
            plays per extract.
          </p>
        </div>
        <div className="space-y-3">
          {extract.questions.map((q, qi) => (
            <div
              key={q.id}
              onFocusCapture={() => setActiveListenQ(q.id)}
              className="rounded-xl border border-ink/10 bg-white p-4"
            >
              <p className="text-sm font-semibold text-ink">
                {qi + 1}. {q.prompt}
              </p>
              {"options" in q ? (
                <div className="mt-2 space-y-1">
                  {q.options.map((opt, i) => (
                    <label key={opt} className="flex gap-2 text-sm text-ink/80">
                      <input
                        type="radio"
                        name={q.id}
                        checked={listenAnswers[q.id] === String(i)}
                        onChange={() => setListenAnswers((a) => ({ ...a, [q.id]: String(i) }))}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
                  value={listenAnswers[q.id] ?? ""}
                  onChange={(e) => setListenAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                  placeholder="Answer"
                />
              )}
            </div>
          ))}
        </div>
      </SectionShell>
    );
  }

  if (phase === "reading") {
    const passage = blueprint.reading[readIdx];
    if (!passage) return null;
    const allocated =
      passage.part === "A" ? blueprint.readingPartASec : blueprint.readingPartBCSec;
    const remaining = Math.max(0, allocated - readClock.elapsed);
    return (
      <SectionShell
        skill="reading"
        title={passage.title}
        meta={`Part ${passage.part} clock · ${passage.specialty} · ${readIdx + 1}/${blueprint.reading.length}`}
        elapsed={readClock.elapsed}
        remaining={remaining}
        onNext={() => {
          if (readIdx < blueprint.reading.length - 1) {
            const next = blueprint.reading[readIdx + 1];
            if (passage.part === "A" && next.part !== "A") readClock.reset();
            setReadIdx((i) => i + 1);
          } else finishReading();
        }}
        nextLabel={readIdx < blueprint.reading.length - 1 ? "Next passage" : "Finish Reading"}
      >
        <p className="mb-3 text-xs text-ink/50">
          Part A uses a separate {blueprint.readingPartASec / 60}′ clock (expeditious pace). Parts
          B/C share {blueprint.readingPartBCSec / 60}′.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <pre className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap rounded-xl bg-scrub/60 p-4 font-sans text-sm leading-relaxed text-ink/80">
            {passage.text}
          </pre>
          <div className="space-y-3">
            {passage.questions.map((q, qi) => (
              <div
                key={q.id}
                onFocusCapture={() => setActiveReadQ(q.id)}
                className="rounded-xl border border-ink/10 bg-white p-4"
              >
                <p className="text-sm font-semibold text-ink">
                  {qi + 1}. {q.prompt}
                </p>
                {"options" in q ? (
                  <div className="mt-2 space-y-1">
                    {q.options.map((opt, i) => (
                      <label key={opt} className="flex gap-2 text-sm text-ink/80">
                        <input
                          type="radio"
                          name={q.id}
                          checked={readAnswers[q.id] === String(i)}
                          onChange={() =>
                            setReadAnswers((a) => ({ ...a, [q.id]: String(i) }))
                          }
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
                    value={readAnswers[q.id] ?? ""}
                    onChange={(e) =>
                      setReadAnswers((a) => ({ ...a, [q.id]: e.target.value }))
                    }
                    placeholder="Answer"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    );
  }

  if (phase === "writing") {
    const allocated = EXAM_SECTION_MINUTES.writing * 60;
    const remaining = Math.max(0, allocated - writeClock.elapsed);
    const words = countWords(letter);
    return (
      <SectionShell
        skill="writing"
        title={writingCase.title}
        meta={`${writingCase.taskType} · target ${writingCase.wordTarget.min}–${writingCase.wordTarget.max} words · ${words} now`}
        elapsed={writeClock.elapsed}
        remaining={remaining}
        onNext={() => void finishWriting()}
        nextLabel={scoring ? "Scoring letter…" : "Finish Writing"}
        locked={scoring}
      >
        <p className="mb-3 text-xs text-ink/50">
          Scored on Purpose, Content, Conciseness, Genre, Organisation, Language — strict study
          rubric (AI when available).
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ward">
              Task
            </p>
            <p className="mb-3 text-sm text-ink/70">{writingCase.task}</p>
            <pre className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap rounded-xl bg-scrub/60 p-4 font-sans text-sm text-ink/80">
              {writingCase.caseNotes}
            </pre>
          </div>
          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            rows={18}
            disabled={scoring}
            className="w-full rounded-xl border border-ink/15 p-3 text-sm leading-relaxed disabled:opacity-60"
            placeholder="Write your professional letter…"
          />
        </div>
      </SectionShell>
    );
  }

  if (phase === "speaking") {
    const rolePlay = blueprint.speaking[speakIdx];
    if (!rolePlay) return null;
    const allocated = EXAM_SECTION_MINUTES.speaking * 60;
    const remaining = Math.max(0, allocated - speakClock.elapsed);
    const transcript = speakTranscripts[rolePlay.id] ?? "";
    return (
      <SectionShell
        skill="speaking"
        title={rolePlay.title}
        meta={`Role-play ${speakIdx + 1}/${blueprint.speaking.length} · ${rolePlay.setting}`}
        elapsed={speakClock.elapsed}
        remaining={remaining}
        onNext={() => void finishSpeakingRole()}
        nextLabel={
          scoring
            ? "Scoring…"
            : speakIdx < blueprint.speaking.length - 1
              ? "Score & next role-play"
              : "Score & finish exam"
        }
        locked={scoring}
      >
        <p className="mb-3 text-xs text-ink/50">
          Speak aloud as the professional, then paste (or type) what you said. Scored on
          Intelligibility, Fluency, Appropriateness, Resources — checklist alone is not enough.
        </p>
        <pre className="whitespace-pre-wrap rounded-xl bg-scrub/60 p-4 font-sans text-sm text-ink/80">
          {rolePlay.candidateCard}
        </pre>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ward">
          Interlocutor notes (for practice partner / self)
        </p>
        <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-ink/10 p-4 font-sans text-sm text-ink/70">
          {rolePlay.interlocutorCard}
        </pre>
        <label className="mt-4 block text-sm font-semibold text-ink">
          Your spoken sample (transcript)
          <textarea
            value={transcript}
            onChange={(e) =>
              setSpeakTranscripts((t) => ({ ...t, [rolePlay.id]: e.target.value }))
            }
            rows={8}
            disabled={scoring}
            className="mt-2 w-full rounded-xl border border-ink/15 p-3 text-sm leading-relaxed disabled:opacity-60"
            placeholder="Paste what you said in the role-play (≥ ~80–120 words for a fair score)…"
          />
        </label>
      </SectionShell>
    );
  }

  if (!attempt) return null;
  const bandReport = buildExamBandReport(attempt, "B");
  return (
    <div className="space-y-6">
      <EstimatedBandReport report={bandReport} title="Estimated OET band · this mock" />

      <Panel className="bg-ink text-paper">
        <p className="text-xs uppercase tracking-[0.2em] text-scrub/80">Strict mock complete</p>
        <p className="mt-2 font-display text-5xl">{attempt.overallPercent}%</p>
        <p className="mt-2 text-sm text-paper/65">
          Avg {attempt.pacing.avgSecPerQuestion}s per scored question · study estimate only
        </p>
      </Panel>

      <div className="grid gap-3 sm:grid-cols-2">
        {attempt.sections.map((s) => (
          <Panel key={s.skill}>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">{s.skill}</p>
            <p className="mt-1 font-display text-3xl text-ink">
              {s.scorePercent == null ? "—" : `${s.scorePercent}%`}
            </p>
            <p className="mt-1 text-sm text-ink/55">
              {s.scorePercent == null
                ? "Unscored"
                : `Est. ${percentToGradeForSkill(s.scorePercent, s.skill)} · not official`}
            </p>
            <p className="mt-1 text-sm text-ink/55">
              {formatTime(s.usedSec)} used / {formatTime(s.allocatedSec)} ·{" "}
              {formatDelta(
                attempt.pacing.sectionDeltas.find((d) => d.skill === s.skill)?.deltaSec ?? 0,
              )}
            </p>
          </Panel>
        ))}
      </div>

      <Panel>
        <h3 className="font-display text-2xl text-ink">Pacing report</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {attempt.pacing.sectionDeltas.map((d) => (
            <li key={d.skill} className="flex justify-between border-b border-ink/10 py-2">
              <span className="capitalize text-ink">{d.skill}</span>
              <span
                className={
                  d.status === "slow"
                    ? "text-pulse"
                    : d.status === "fast"
                      ? "text-ward"
                      : "text-ink/60"
                }
              >
                {d.status.replace("_", " ")} · {formatDelta(d.deltaSec)}
              </span>
            </li>
          ))}
        </ul>
        {attempt.pacing.slowestQuestions.length > 0 && (
          <>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Slowest questions
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-ink/70">
              {attempt.pacing.slowestQuestions.map((q) => (
                <li key={q.questionId}>
                  {q.secondsSpent}s · {q.skill} / {q.topic}
                  {q.correct === false ? " · incorrect" : ""}
                  {q.prompt ? ` — ${q.prompt.slice(0, 60)}` : ""}
                </li>
              ))}
            </ul>
          </>
        )}
      </Panel>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/analytics"
          className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Open analytics
        </Link>
        <Link
          href="/progress"
          className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
        >
          Progress & bands
        </Link>
        <button
          type="button"
          onClick={() => setPhase("intro")}
          className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
        >
          Run again
        </button>
      </div>
    </div>
  );
}

function SectionShell({
  skill,
  title,
  meta,
  elapsed,
  remaining,
  onNext,
  nextLabel,
  children,
  locked = false,
}: {
  skill: ExamSectionId;
  title: string;
  meta: string;
  elapsed: number;
  remaining: number;
  onNext: () => void;
  nextLabel: string;
  children: React.ReactNode;
  locked?: boolean;
}) {
  const warn = remaining < 5 * 60;
  return (
    <div className="space-y-4">
      <div className="sticky top-14 z-30 -mx-4 border-b border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Strict mock · {skill}
            </p>
            <p className="font-display text-xl text-ink">{title}</p>
            <p className="text-xs text-ink/50">{meta}</p>
          </div>
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-ink/50">used {formatTime(elapsed)}</span>
            <span
              className={`rounded-md px-2.5 py-1 ${warn ? "bg-pulse/15 text-pulse" : "bg-ink/5 text-ink"}`}
            >
              {formatTime(remaining)} left
            </span>
          </div>
        </div>
      </div>
      {children}
      <button
        type="button"
        onClick={onNext}
        disabled={locked}
        className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  );
}
