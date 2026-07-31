"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { EnglishLesson, EnglishQuizItem } from "@/domain/english";
import { ENGLISH_PASS_PERCENT } from "@/domain/english";
import { getLessonsByLevel } from "@/data/english";
import { recordEnglishLesson } from "@/lib/english-progress";
import {
  playEnglishSpeech,
  playEnglishSpeechSequence,
  stopAllEnglishSpeech,
} from "@/lib/english-tts";
import {
  getSpeechRecognition,
  listenOnce,
  scorePronunciation,
  type PronunciationResult,
} from "@/lib/pronunciation";
import { Panel } from "@/components/ui";
import { cn, countWords } from "@/lib/utils";

function answersMatch(user: string, answer: string, accepted?: string[]): boolean {
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const u = norm(user);
  if (!u) return false;
  if (u === norm(answer)) return true;
  return (accepted ?? []).some((a) => norm(a) === u);
}

function scoreQuiz(
  items: EnglishQuizItem[],
  answers: Record<string, string>,
): { correct: number; detail: Record<string, boolean>; scorePercent: number } {
  let correct = 0;
  const detail: Record<string, boolean> = {};
  for (const q of items) {
    const user = answers[q.id] ?? "";
    const ok =
      q.type === "mcq"
        ? Number(user) === q.correctIndex
        : answersMatch(user, q.answer, q.acceptedAnswers);
    detail[q.id] = ok;
    if (ok) correct += 1;
  }
  const scorePercent = items.length ? Math.round((correct / items.length) * 100) : 100;
  return { correct, detail, scorePercent };
}

export function EnglishLessonPlayer({ lesson }: { lesson: EnglishLesson }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [listenAnswers, setListenAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [listenSubmitted, setListenSubmitted] = useState(false);
  const [savedScore, setSavedScore] = useState<number | null>(null);
  const [speakingPhrases, setSpeakingPhrases] = useState(false);
  const [listenPlaying, setListenPlaying] = useState(false);
  const [writingText, setWritingText] = useState("");
  const [writingChecked, setWritingChecked] = useState(false);
  const [speakDone, setSpeakDone] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [listeningLine, setListeningLine] = useState<string | null>(null);
  const [pronunciation, setPronunciation] = useState<Record<string, PronunciationResult>>({});
  const [drillAnswers, setDrillAnswers] = useState<Record<string, string>>({});
  const [drillSubmitted, setDrillSubmitted] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    stopAllEnglishSpeech();
    setAnswers({});
    setListenAnswers({});
    setSubmitted(false);
    setListenSubmitted(false);
    setSavedScore(null);
    setSpeakingPhrases(false);
    setListenPlaying(false);
    setWritingText("");
    setWritingChecked(false);
    setSpeakDone(false);
    setRecording(false);
    setListeningLine(null);
    setPronunciation({});
    setDrillAnswers({});
    setDrillSubmitted(false);
    setRecUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, [lesson.id]);

  useEffect(
    () => () => {
      stopAllEnglishSpeech();
      if (recUrl) URL.revokeObjectURL(recUrl);
    },
    [recUrl],
  );

  const siblings = getLessonsByLevel(lesson.level);
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  const nextLesson = idx >= 0 ? siblings[idx + 1] : undefined;
  const isReview = lesson.kind === "review";

  const listenQs = lesson.listening?.questions ?? [];
  const drills = lesson.drills ?? [];
  const speechSupported = typeof window !== "undefined" && Boolean(getSpeechRecognition());

  const quizResult = useMemo(() => {
    if (!submitted) return null;
    return scoreQuiz(lesson.quiz, answers);
  }, [submitted, answers, lesson.quiz]);

  const listenResult = useMemo(() => {
    if (!listenSubmitted || !listenQs.length) return null;
    return scoreQuiz(listenQs, listenAnswers);
  }, [listenSubmitted, listenAnswers, listenQs]);

  const drillResult = useMemo(() => {
    if (!drillSubmitted || !drills.length) return null;
    return scoreQuiz(drills, drillAnswers);
  }, [drillSubmitted, drillAnswers, drills]);

  const bestPronunciation = useMemo(() => {
    const scores = Object.values(pronunciation).map((p) => p.scorePercent);
    if (!scores.length) return null;
    return Math.max(...scores);
  }, [pronunciation]);

  const writingWords = countWords(writingText);
  const writingOk =
    !lesson.writing ||
    (writingWords >= lesson.writing.minWords &&
      (!(lesson.writing.keywords?.length) ||
        lesson.writing.keywords.some((k) =>
          writingText.toLowerCase().includes(k.toLowerCase()),
        )));

  const premiumReady =
    (!lesson.listening || listenSubmitted) &&
    (!lesson.speaking || speakDone) &&
    (!lesson.writing || (writingChecked && writingOk));

  const onSubmitQuiz = () => {
    if (lesson.listening && !listenSubmitted) {
      setListenSubmitted(true);
    }
    setSubmitted(true);
    const q = scoreQuiz(lesson.quiz, answers);
    const l = lesson.listening
      ? scoreQuiz(listenQs, listenAnswers)
      : { scorePercent: 100, correct: 0, detail: {} };
    // Weighted: quiz 70%, listening 30% if present
    const scorePercent = lesson.listening
      ? Math.round(q.scorePercent * 0.7 + l.scorePercent * 0.3)
      : q.scorePercent;
    setSavedScore(scorePercent);
    const activitiesOk = premiumReady || (!lesson.listening && !lesson.speaking && !lesson.writing);
    if (scorePercent >= ENGLISH_PASS_PERCENT && (activitiesOk || isReview)) {
      // For premium: require activities; for review allow if quiz+listen ok
      if (!lesson.speaking || speakDone) {
        if (!lesson.writing || (writingChecked && writingOk)) {
          recordEnglishLesson(lesson.id, scorePercent);
        }
      }
    }
  };

  // Recompute completion when activities catch up after quiz submit
  useEffect(() => {
    if (savedScore == null || savedScore < ENGLISH_PASS_PERCENT) return;
    if (lesson.speaking && !speakDone) return;
    if (lesson.writing && !(writingChecked && writingOk)) return;
    if (lesson.listening && !listenSubmitted) return;
    recordEnglishLesson(lesson.id, savedScore);
  }, [
    savedScore,
    speakDone,
    writingChecked,
    writingOk,
    listenSubmitted,
    lesson.speaking,
    lesson.writing,
    lesson.listening,
    lesson.id,
  ]);

  const playListening = () => {
    if (!lesson.listening) return;
    if (listenPlaying) {
      stopAllEnglishSpeech();
      setListenPlaying(false);
      return;
    }
    // Play each dialogue turn with studio English TTS (natural pronunciation)
    const turns = lesson.listening.script
      .split(/\n/)
      .map((l) => l.replace(/^[A-Za-z][A-Za-z ]{0,20}:\s*/, "").trim())
      .filter(Boolean);
    void playEnglishSpeechSequence(turns, {
      onStart: () => setListenPlaying(true),
      onEnd: () => setListenPlaying(false),
    });
  };

  const togglePhrases = () => {
    if (speakingPhrases) {
      stopAllEnglishSpeech();
      setSpeakingPhrases(false);
      return;
    }
    setSpeakingPhrases(true);
    void playEnglishSpeechSequence(
      lesson.phrases.map((p) => p.en),
      {
        onStart: () => setSpeakingPhrases(true),
        onEnd: () => setSpeakingPhrases(false),
      },
    );
  };

  const hearModelLine = (line: string) => {
    void playEnglishSpeech(line);
  };

  const practiseLine = async (line: string) => {
    if (!speechSupported) {
      alert("Pronunciation check needs Chrome/Edge with microphone access.");
      return;
    }
    stopAllEnglishSpeech();
    setListeningLine(line);
    try {
      const heard = await listenOnce("en-GB");
      const result = scorePronunciation(line, heard || "");
      setPronunciation((prev) => ({ ...prev, [line]: result }));
      if (result.scorePercent >= 60) setSpeakDone(true);
    } catch {
      alert("Could not hear you — check the microphone and try again in a quiet place.");
    } finally {
      setListeningLine(null);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
        stream.getTracks().forEach((t) => t.stop());
        setSpeakDone(true);
      };
      mediaRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch {
      alert("Microphone permission is required to practise speaking.");
    }
  };

  const stopRecording = () => {
    mediaRef.current?.stop();
    setRecording(false);
  };

  const markedComplete =
    savedScore != null &&
    savedScore >= ENGLISH_PASS_PERCENT &&
    (!lesson.speaking || speakDone) &&
    (!lesson.writing || (writingChecked && writingOk));

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ward">
        <Link href={`/english/${lesson.level}`} className="hover:underline">
          {lesson.level}
        </Link>
        <span className="text-ink/25">·</span>
        <span>
          {isReview ? "Checkpoint" : `Lesson ${Math.floor(lesson.order)}`}/
          {siblings.filter((s) => s.kind !== "review").length}
        </span>
        <span className="text-ink/25">·</span>
        <span>{lesson.minutes} min</span>
        {isReview ? (
          <span className="rounded-md bg-pulse/15 px-2 py-0.5 text-pulse">Review</span>
        ) : (
          <span className="rounded-md bg-ward/15 px-2 py-0.5">Premium</span>
        )}
      </div>

      <div>
        <h1 className="font-display text-4xl font-bold text-ink">{lesson.title}</h1>
        <p className="mt-2 text-sm text-ink/55">{lesson.topic}</p>
      </div>

      <Panel>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
          Goals
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
          {lesson.goals.map((g) => (
            <li key={g}>• {g}</li>
          ))}
        </ul>
      </Panel>

      {lesson.teach.map((block) => (
        <Panel key={block.heading}>
          <h2 className="font-display text-2xl font-bold text-ink">{block.heading}</h2>
          <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink/75">
            {block.body}
          </p>
        </Panel>
      ))}

      <Panel className="bg-scrub/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            Phrase bank · EN / PT
          </p>
          <button
            type="button"
            onClick={togglePhrases}
            className="rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-paper"
          >
            {speakingPhrases ? "Stop audio" : "Hear phrases"}
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {lesson.phrases.map((p) => (
            <div
              key={p.en}
              className="grid gap-1 border-b border-ink/10 pb-3 last:border-0 sm:grid-cols-2 sm:gap-4"
            >
              <p className="text-sm font-semibold text-ink">{p.en}</p>
              <p className="text-sm text-ink/55">{p.pt}</p>
            </div>
          ))}
        </div>
        {lesson.practiceTip ? (
          <p className="mt-4 rounded-lg bg-white/70 px-3 py-2 text-xs leading-relaxed text-ink/60">
            Tip: {lesson.practiceTip}
          </p>
        ) : null}
      </Panel>

      {lesson.listening ? (
        <Panel>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            Listening
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink">
            {lesson.listening.title}
          </h2>
          <p className="mt-2 text-sm text-ink/60">{lesson.listening.prompt}</p>
          <button
            type="button"
            onClick={playListening}
            className="mt-4 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            {listenPlaying ? "Stop dialogue" : "Play dialogue"}
          </button>
          <div className="mt-4 space-y-3">
            {lesson.listening.questions.map((q, i) => (
              <QuizCard
                key={q.id}
                index={i}
                q={q}
                value={listenAnswers[q.id] ?? ""}
                disabled={listenSubmitted || submitted}
                ok={listenResult?.detail[q.id]}
                onChange={(v) => setListenAnswers((a) => ({ ...a, [q.id]: v }))}
              />
            ))}
          </div>
        </Panel>
      ) : null}

      {lesson.speaking ? (
        <Panel>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            Speaking · pronunciation
          </p>
          <p className="mt-2 text-sm text-ink/60">{lesson.speaking.tip}</p>
          {!speechSupported ? (
            <p className="mt-2 text-xs text-pulse">
              Automatic pronunciation works best in Chrome or Edge. You can still record and mark done.
            </p>
          ) : (
            <p className="mt-2 text-xs text-ink/45">
              Tap Practise, say the line clearly, and get an automatic score. Hear uses natural English studio voice.
            </p>
          )}
          <div className="mt-4 space-y-3">
            {lesson.speaking.lines.map((line) => {
              const result = pronunciation[line];
              return (
                <div key={line} className="rounded-lg border border-ink/10 bg-white p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-ink">{line}</p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => hearModelLine(line)}
                        className="rounded-md border border-ink/15 px-2.5 py-1 text-xs font-semibold text-ink"
                      >
                        Hear
                      </button>
                      <button
                        type="button"
                        disabled={listeningLine === line}
                        onClick={() => void practiseLine(line)}
                        className="rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-paper disabled:opacity-50"
                      >
                        {listeningLine === line ? "Listening…" : "Practise"}
                      </button>
                    </div>
                  </div>
                  {result ? (
                    <div className="mt-3 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 text-xs font-bold",
                            result.scorePercent >= 70
                              ? "bg-ward/15 text-ward"
                              : result.scorePercent >= 50
                                ? "bg-amber/20 text-ink"
                                : "bg-pulse/15 text-pulse",
                          )}
                        >
                          {result.scorePercent}% match
                        </span>
                        <span className="text-xs text-ink/45">
                          Heard: “{result.heard || "—"}”
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {result.words.map((w, i) => (
                          <span
                            key={`${w.target}-${i}`}
                            className={cn(
                              "rounded px-1.5 py-0.5 text-xs font-medium",
                              w.ok ? "bg-ward/10 text-ward" : "bg-pulse/10 text-pulse",
                            )}
                            title={w.heard ? `heard: ${w.heard}` : "missing"}
                          >
                            {w.target}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-ink/55">{result.tip}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {bestPronunciation != null ? (
            <p className="mt-3 text-sm text-ink/60">
              Best line score: <span className="font-semibold text-ink">{bestPronunciation}%</span>
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {!recording ? (
              <button
                type="button"
                onClick={startRecording}
                className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
              >
                Record (optional)
              </button>
            ) : (
              <button
                type="button"
                onClick={stopRecording}
                className="rounded-md bg-ink px-4 py-2 text-sm font-bold text-paper"
              >
                Stop recording
              </button>
            )}
            <button
              type="button"
              onClick={() => setSpeakDone(true)}
              className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
            >
              Mark speaking done
            </button>
          </div>
          {recUrl ? <audio controls src={recUrl} className="mt-3 w-full" /> : null}
          {speakDone ? (
            <p className="mt-3 text-sm font-semibold text-ward">Speaking practice marked done.</p>
          ) : (
            <p className="mt-3 text-xs text-ink/45">
              Score 60%+ on a line (or mark done) to complete this step.
            </p>
          )}
        </Panel>
      ) : null}

      {lesson.writing ? (
        <Panel>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            Writing
          </p>
          <p className="mt-2 text-sm text-ink/70">{lesson.writing.prompt}</p>
          <p className="mt-1 text-xs text-ink/45">
            Minimum {lesson.writing.minWords} words · {writingWords} now
          </p>
          <textarea
            value={writingText}
            onChange={(e) => {
              setWritingText(e.target.value);
              setWritingChecked(false);
            }}
            rows={4}
            className="mt-3 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none ring-ward focus:ring-2"
            placeholder="Write your answer in English…"
          />
          <button
            type="button"
            onClick={() => setWritingChecked(true)}
            className="mt-3 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            Check writing
          </button>
          {writingChecked ? (
            <div className="mt-3 space-y-2 text-sm">
              <p className={writingOk ? "font-semibold text-ward" : "font-semibold text-pulse"}>
                {writingOk
                  ? "Good — length and keywords look fine."
                  : `Need at least ${lesson.writing.minWords} words` +
                    (lesson.writing.keywords?.length
                      ? ` and one of: ${lesson.writing.keywords.join(", ")}`
                      : "")}
              </p>
              <p className="rounded-lg bg-scrub/60 px-3 py-2 text-ink/70">
                <span className="font-semibold text-ink">Sample: </span>
                {lesson.writing.sample}
              </p>
            </div>
          ) : null}
        </Panel>
      ) : null}

      <div className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-display text-3xl font-bold text-ink">
            {isReview ? "Checkpoint quiz" : "Grammar & vocab quiz"}
          </h2>
          <p className="text-xs text-ink/45">
            Pass mark {ENGLISH_PASS_PERCENT}% · {lesson.quiz.length} questions
            {listenQs.length ? ` (+${listenQs.length} listening)` : ""}
            {drills.length ? ` · ${drills.length} extra drills below` : ""}
          </p>
        </div>
        {lesson.quiz.map((q, i) => (
          <QuizCard
            key={q.id}
            index={i}
            q={q}
            value={answers[q.id] ?? ""}
            disabled={submitted}
            ok={quizResult?.detail[q.id]}
            onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          />
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={onSubmitQuiz}
          className="rounded-md bg-pulse px-5 py-2.5 text-sm font-bold text-white"
        >
          Check answers
        </button>
      ) : (
        quizResult && (
          <Panel className="bg-scrub/60">
            <p className="font-display text-4xl text-ink">{savedScore ?? quizResult.scorePercent}%</p>
            <p className="mt-1 text-sm text-ink/65">
              Quiz {quizResult.correct}/{lesson.quiz.length}
              {listenResult
                ? ` · Listening ${listenResult.correct}/${listenQs.length}`
                : ""}
              {bestPronunciation != null ? ` · Pronunciation best ${bestPronunciation}%` : ""}
              {markedComplete
                ? " · lesson marked complete"
                : ` · need ${ENGLISH_PASS_PERCENT}%+ and finish listen/speak/write steps`}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {!markedComplete ? (
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setListenAnswers({});
                    setSubmitted(false);
                    setListenSubmitted(false);
                    setSavedScore(null);
                  }}
                  className="rounded-md bg-pulse px-4 py-2 text-sm font-bold text-white"
                >
                  Try quiz again
                </button>
              ) : null}
              <Link
                href={`/english/${lesson.level}`}
                className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
              >
                Back to {lesson.level}
              </Link>
              {nextLesson && markedComplete ? (
                <Link
                  href={`/english/${lesson.level}/${nextLesson.id}`}
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
                >
                  Next →
                </Link>
              ) : null}
              {!nextLesson && markedComplete ? (
                <Link
                  href="/english"
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
                >
                  A1 done — see all modules →
                </Link>
              ) : null}
              <Link
                href="/study"
                className="rounded-md border border-ward/30 px-4 py-2 text-sm font-semibold text-ward"
              >
                A1 vocab in Study →
              </Link>
            </div>
          </Panel>
        )
      )}

      {drills.length ? (
        <div className="space-y-4 border-t border-ink/10 pt-8">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
                Extra drilling
              </p>
              <h2 className="mt-1 font-display text-3xl font-bold text-ink">Practice more</h2>
              <p className="mt-1 text-sm text-ink/55">
                Optional harder drills for more study hours — does not block lesson completion.
              </p>
            </div>
            <p className="text-xs text-ink/45">{drills.length} questions</p>
          </div>
          {drills.map((q, i) => (
            <QuizCard
              key={q.id}
              index={i}
              q={q}
              value={drillAnswers[q.id] ?? ""}
              disabled={drillSubmitted}
              ok={drillResult?.detail[q.id]}
              onChange={(v) => setDrillAnswers((a) => ({ ...a, [q.id]: v }))}
            />
          ))}
          {!drillSubmitted ? (
            <button
              type="button"
              onClick={() => setDrillSubmitted(true)}
              className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
            >
              Check drills
            </button>
          ) : (
            drillResult && (
              <Panel className="bg-scrub/50">
                <p className="font-display text-3xl text-ink">{drillResult.scorePercent}%</p>
                <p className="mt-1 text-sm text-ink/65">
                  {drillResult.correct} of {drills.length} drill questions correct
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDrillAnswers({});
                    setDrillSubmitted(false);
                  }}
                  className="mt-3 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
                >
                  Retry drills
                </button>
              </Panel>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

function QuizCard({
  index,
  q,
  value,
  disabled,
  ok,
  onChange,
}: {
  index: number;
  q: EnglishQuizItem;
  value: string;
  disabled: boolean;
  ok?: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-4",
        disabled && ok === true && "border-ward/40",
        disabled && ok === false && "border-pulse/40",
        !(disabled && (ok === true || ok === false)) && "border-ink/10",
      )}
    >
      <p className="text-sm font-semibold text-ink">
        {index + 1}. {q.prompt}
      </p>
      {q.type === "mcq" ? (
        <div className="mt-3 space-y-2">
          {q.options.map((opt, i) => (
            <label
              key={opt}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-ink/10 px-3 py-2 hover:bg-scrub/50"
            >
              <input
                type="radio"
                name={q.id}
                disabled={disabled}
                checked={value === String(i)}
                onChange={() => onChange(String(i))}
                className="mt-1"
              />
              <span className="text-sm text-ink/80">{opt}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-3 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none ring-ward focus:ring-2"
          placeholder="Type your answer"
        />
      )}
      {disabled && ok !== undefined && (
        <p className={cn("mt-3 text-sm", ok ? "text-ward" : "text-pulse")}>
          {ok ? "Correct. " : "Not quite. "}
          {q.explanation}
          {q.type === "gap" && !ok ? (
            <span className="block text-ink/55">Expected: {q.answer}</span>
          ) : null}
        </p>
      )}
    </div>
  );
}
