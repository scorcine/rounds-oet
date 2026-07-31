"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { EnglishLesson, EnglishQuizItem } from "@/domain/english";
import { ENGLISH_PASS_PERCENT } from "@/domain/english";
import { getLessonsByLevel } from "@/data/english";
import { recordEnglishLesson } from "@/lib/english-progress";
import { cancelSpeech, speakDialogueDual } from "@/lib/listening-tts";
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

function speakPhrases(phrases: { en: string }[]) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  cancelSpeech();
  const voices = window.speechSynthesis.getVoices();
  const en =
    voices.find((v) => /en-GB/i.test(v.lang)) ??
    voices.find((v) => /en(-|_|$)/i.test(v.lang)) ??
    null;
  let i = 0;
  const next = () => {
    if (i >= phrases.length) return;
    const u = new SpeechSynthesisUtterance(phrases[i++]!.en);
    u.rate = 0.9;
    if (en) u.voice = en;
    u.onend = () => window.setTimeout(next, 280);
    u.onerror = () => window.setTimeout(next, 280);
    window.speechSynthesis.speak(u);
  };
  window.setTimeout(next, 80);
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
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    cancelSpeech();
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
    setRecUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, [lesson.id]);

  useEffect(
    () => () => {
      cancelSpeech();
      if (recUrl) URL.revokeObjectURL(recUrl);
    },
    [recUrl],
  );

  const siblings = getLessonsByLevel(lesson.level);
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  const nextLesson = idx >= 0 ? siblings[idx + 1] : undefined;
  const isReview = lesson.kind === "review";

  const listenQs = lesson.listening?.questions ?? [];
  const allQuizItems = [...listenQs, ...lesson.quiz];

  const quizResult = useMemo(() => {
    if (!submitted) return null;
    return scoreQuiz(lesson.quiz, answers);
  }, [submitted, answers, lesson.quiz]);

  const listenResult = useMemo(() => {
    if (!listenSubmitted || !listenQs.length) return null;
    return scoreQuiz(listenQs, listenAnswers);
  }, [listenSubmitted, listenAnswers, listenQs]);

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
      cancelSpeech();
      setListenPlaying(false);
      return;
    }
    speakDialogueDual(lesson.listening.script, lesson.listening.script.replace(/\n/g, " "), {
      onStart: () => setListenPlaying(true),
      onEnd: () => setListenPlaying(false),
    });
  };

  const togglePhrases = () => {
    if (speakingPhrases) {
      cancelSpeech();
      setSpeakingPhrases(false);
      return;
    }
    setSpeakingPhrases(true);
    speakPhrases(lesson.phrases);
    window.setTimeout(
      () => setSpeakingPhrases(false),
      Math.max(4000, lesson.phrases.length * 2500),
    );
  };

  const hearModelLine = (line: string) => {
    cancelSpeech();
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(line);
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
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
            Speaking
          </p>
          <p className="mt-2 text-sm text-ink/60">{lesson.speaking.tip}</p>
          <div className="mt-4 space-y-2">
            {lesson.speaking.lines.map((line) => (
              <div
                key={line}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-ink/10 bg-white px-3 py-2"
              >
                <p className="text-sm font-medium text-ink">{line}</p>
                <button
                  type="button"
                  onClick={() => hearModelLine(line)}
                  className="rounded-md border border-ink/15 px-2.5 py-1 text-xs font-semibold text-ink"
                >
                  Hear
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {!recording ? (
              <button
                type="button"
                onClick={startRecording}
                className="rounded-md bg-pulse px-4 py-2 text-sm font-bold text-white"
              >
                Record yourself
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
          {recUrl ? (
            <audio controls src={recUrl} className="mt-3 w-full" />
          ) : null}
          {speakDone ? (
            <p className="mt-3 text-sm font-semibold text-ward">Speaking practice marked done.</p>
          ) : (
            <p className="mt-3 text-xs text-ink/45">Record or mark done to complete this step.</p>
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
            {allQuizItems.length > lesson.quiz.length
              ? ` (+${listenQs.length} listening)`
              : ""}
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
                  href="/english/A2"
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
                >
                  A1 done — open A2 →
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
