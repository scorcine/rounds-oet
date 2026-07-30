"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LISTENING_EXTRACTS } from "@/data/listening";
import { READING_PASSAGES } from "@/data/reading";
import { WRITING_CASES } from "@/data/writing";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import type { ExamAttempt, ExamSectionId, SectionResult } from "@/domain/exam";
import { EXAM_SECTION_MINUTES } from "@/domain/exam";
import {
  finalizeExamAttempt,
  formatDelta,
  saveExamAttempt,
  scoreListeningAnswers,
  scoreReadingAnswers,
} from "@/lib/exam-store";
import { formatTime, countWords } from "@/lib/utils";
import { Panel } from "@/components/ui";

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
  return { elapsed, reset: () => setElapsed(0) };
}

/** Tracks seconds spent on the currently focused question id. */
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
  const [phase, setPhase] = useState<Phase>("intro");
  const [startedAt, setStartedAt] = useState<string>("");
  const [sections, setSections] = useState<SectionResult[]>([]);
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null);

  // Listening state
  const [listenIdx, setListenIdx] = useState(0);
  const [listenAnswers, setListenAnswers] = useState<Record<string, string>>({});
  const [activeListenQ, setActiveListenQ] = useState<string | null>(null);
  const listenClock = useSectionClock(phase === "listening");
  const listenTimings = useQuestionTimer(activeListenQ, phase === "listening");

  // Reading state
  const [readIdx, setReadIdx] = useState(0);
  const [readAnswers, setReadAnswers] = useState<Record<string, number>>({});
  const [activeReadQ, setActiveReadQ] = useState<string | null>(null);
  const readClock = useSectionClock(phase === "reading");
  const readTimings = useQuestionTimer(activeReadQ, phase === "reading");

  // Writing
  const writingCase = WRITING_CASES[0];
  const [letter, setLetter] = useState("");
  const writeClock = useSectionClock(phase === "writing");

  // Speaking
  const rolePlay = SPEAKING_ROLEPLAYS[0];
  const [speakChecks, setSpeakChecks] = useState<Record<string, boolean>>({});
  const speakClock = useSectionClock(phase === "speaking");

  const startExam = () => {
    setStartedAt(new Date().toISOString());
    setSections([]);
    setAttempt(null);
    setListenIdx(0);
    setListenAnswers({});
    setReadIdx(0);
    setReadAnswers({});
    setLetter("");
    setSpeakChecks({});
    listenClock.reset();
    readClock.reset();
    writeClock.reset();
    speakClock.reset();
    setPhase("listening");
  };

  const finishListening = () => {
    const scored = scoreListeningAnswers(listenAnswers, { ...listenTimings.current });
    scored.section.usedSec = listenClock.elapsed;
    setSections((s) => [...s, scored.section]);
    setPhase("reading");
  };

  const finishReading = () => {
    const scored = scoreReadingAnswers(readAnswers, { ...readTimings.current });
    scored.usedSec = readClock.elapsed;
    setSections((s) => [...s, scored]);
    setPhase("writing");
  };

  const finishWriting = () => {
    const words = countWords(letter);
    const inRange =
      words >= writingCase.wordTarget.min && words <= writingCase.wordTarget.max + 40;
    const scorePercent = letter.trim().length < 40 ? 0 : inRange ? 75 : 55;
    const section: SectionResult = {
      skill: "writing",
      allocatedSec: EXAM_SECTION_MINUTES.writing * 60,
      usedSec: writeClock.elapsed,
      scorePercent,
      correct: inRange ? 1 : 0,
      total: 1,
      questionTimings: [
        {
          questionId: writingCase.id,
          contentId: writingCase.id,
          skill: "writing",
          part: writingCase.taskType,
          topic: writingCase.specialty,
          secondsSpent: writeClock.elapsed,
          correct: inRange,
          prompt: writingCase.title,
        },
      ],
    };
    setSections((s) => [...s, section]);
    setPhase("speaking");
  };

  const finishSpeaking = () => {
    const checked = rolePlay.criteria.filter((_, i) => speakChecks[`c${i}`]).length;
    const scorePercent = Math.round((checked / rolePlay.criteria.length) * 100);
    const speakSection: SectionResult = {
      skill: "speaking",
      allocatedSec: EXAM_SECTION_MINUTES.speaking * 60,
      usedSec: speakClock.elapsed,
      scorePercent,
      correct: checked,
      total: rolePlay.criteria.length,
      questionTimings: [
        {
          questionId: rolePlay.id,
          contentId: rolePlay.id,
          skill: "speaking",
          part: "roleplay",
          topic: rolePlay.specialty,
          secondsSpent: speakClock.elapsed,
          correct: scorePercent >= 60,
          prompt: rolePlay.title,
        },
      ],
    };
    setSections((prev) => {
      const all = [...prev, speakSection];
      const finalized = finalizeExamAttempt({ startedAt, sections: all });
      saveExamAttempt(finalized);
      setAttempt(finalized);
      return all;
    });
    setPhase("results");
  };

  if (phase === "intro") {
    return (
      <Panel>
        <h2 className="font-display text-3xl text-ink">Exam mode</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Real section timers for Listening ({EXAM_SECTION_MINUTES.listening}′), Reading (
          {EXAM_SECTION_MINUTES.reading}′), Writing ({EXAM_SECTION_MINUTES.writing}′) and Speaking (
          {EXAM_SECTION_MINUTES.speaking}′). We track time per question for a pacing report when you
          finish.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-ink/70">
          <li>· Listening & Reading are auto-scored</li>
          <li>· Writing scored by word-target heuristic (AI rubric in Phase 3)</li>
          <li>· Speaking uses your criterion checklist</li>
        </ul>
        <button
          type="button"
          onClick={startExam}
          className="mt-8 rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
        >
          Start full exam
        </button>
      </Panel>
    );
  }

  if (phase === "listening") {
    const extract = LISTENING_EXTRACTS[listenIdx];
    const allocated = EXAM_SECTION_MINUTES.listening * 60;
    const remaining = Math.max(0, allocated - listenClock.elapsed);
    return (
      <SectionShell
        skill="listening"
        title={extract.title}
        meta={`Part ${extract.part} · ${extract.specialty} · extract ${listenIdx + 1}/${LISTENING_EXTRACTS.length}`}
        elapsed={listenClock.elapsed}
        remaining={remaining}
        onNext={() => {
          if (listenIdx < LISTENING_EXTRACTS.length - 1) setListenIdx((i) => i + 1);
          else finishListening();
        }}
        nextLabel={listenIdx < LISTENING_EXTRACTS.length - 1 ? "Next extract" : "Finish Listening"}
      >
        <p className="mb-4 text-sm text-ink/60">
          Answer while working — focus a question to attribute pacing time.
        </p>
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
    const passage = READING_PASSAGES[readIdx];
    const allocated = EXAM_SECTION_MINUTES.reading * 60;
    const remaining = Math.max(0, allocated - readClock.elapsed);
    return (
      <SectionShell
        skill="reading"
        title={passage.title}
        meta={`Part ${passage.part} · ${passage.specialty} · ${readIdx + 1}/${READING_PASSAGES.length}`}
        elapsed={readClock.elapsed}
        remaining={remaining}
        onNext={() => {
          if (readIdx < READING_PASSAGES.length - 1) setReadIdx((i) => i + 1);
          else finishReading();
        }}
        nextLabel={readIdx < READING_PASSAGES.length - 1 ? "Next passage" : "Finish Reading"}
      >
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
                <div className="mt-2 space-y-1">
                  {q.options.map((opt, i) => (
                    <label key={opt} className="flex gap-2 text-sm text-ink/80">
                      <input
                        type="radio"
                        name={q.id}
                        checked={readAnswers[q.id] === i}
                        onChange={() => setReadAnswers((a) => ({ ...a, [q.id]: i }))}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
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
        onNext={finishWriting}
        nextLabel="Finish Writing"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <pre className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap rounded-xl bg-scrub/60 p-4 font-sans text-sm text-ink/80">
            {writingCase.caseNotes}
          </pre>
          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            rows={18}
            className="w-full rounded-xl border border-ink/15 p-3 text-sm leading-relaxed"
            placeholder="Write your letter…"
          />
        </div>
      </SectionShell>
    );
  }

  if (phase === "speaking") {
    const allocated = EXAM_SECTION_MINUTES.speaking * 60;
    const remaining = Math.max(0, allocated - speakClock.elapsed);
    return (
      <SectionShell
        skill="speaking"
        title={rolePlay.title}
        meta={`${rolePlay.setting} · ${rolePlay.specialty}`}
        elapsed={speakClock.elapsed}
        remaining={remaining}
        onNext={finishSpeaking}
        nextLabel="Finish exam"
      >
        <pre className="whitespace-pre-wrap rounded-xl bg-scrub/60 p-4 font-sans text-sm text-ink/80">
          {rolePlay.candidateCard}
        </pre>
        <Panel className="mt-4">
          <h3 className="font-display text-xl text-ink">Self-assessment</h3>
          <ul className="mt-3 space-y-2">
            {rolePlay.criteria.map((c, i) => (
              <label key={c} className="flex gap-2 text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={!!speakChecks[`c${i}`]}
                  onChange={(e) =>
                    setSpeakChecks((x) => ({ ...x, [`c${i}`]: e.target.checked }))
                  }
                />
                {c}
              </label>
            ))}
          </ul>
        </Panel>
      </SectionShell>
    );
  }

  // results
  if (!attempt) return null;
  return (
    <div className="space-y-6">
      <Panel className="bg-ink text-paper">
        <p className="text-xs uppercase tracking-[0.2em] text-scrub/80">Exam complete</p>
        <p className="mt-2 font-display text-5xl">{attempt.overallPercent}%</p>
        <p className="mt-2 text-sm text-paper/65">
          Avg {attempt.pacing.avgSecPerQuestion}s per scored question
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
}: {
  skill: ExamSectionId;
  title: string;
  meta: string;
  elapsed: number;
  remaining: number;
  onNext: () => void;
  nextLabel: string;
  children: React.ReactNode;
}) {
  const warn = remaining < 5 * 60;
  return (
    <div className="space-y-4">
      <div className="sticky top-14 z-30 -mx-4 border-b border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Exam · {skill}
            </p>
            <p className="font-display text-xl text-ink">{title}</p>
            <p className="text-xs text-ink/50">{meta}</p>
          </div>
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-ink/50">used {formatTime(elapsed)}</span>
            <span className={`rounded-md px-2.5 py-1 ${warn ? "bg-pulse/15 text-pulse" : "bg-ink/5 text-ink"}`}>
              {formatTime(remaining)} left
            </span>
          </div>
        </div>
      </div>
      {children}
      <button
        type="button"
        onClick={onNext}
        className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
      >
        {nextLabel}
      </button>
    </div>
  );
}
