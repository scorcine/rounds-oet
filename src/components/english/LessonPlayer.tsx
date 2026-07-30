"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { EnglishLesson, EnglishQuizItem } from "@/domain/english";
import { getLessonsByLevel } from "@/data/english";
import { recordEnglishLesson } from "@/lib/english-progress";
import { Panel } from "@/components/ui";
import { cn } from "@/lib/utils";

function answersMatch(user: string, answer: string, accepted?: string[]): boolean {
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const u = norm(user);
  if (!u) return false;
  if (u === norm(answer)) return true;
  return (accepted ?? []).some((a) => norm(a) === u);
}

export function EnglishLessonPlayer({ lesson }: { lesson: EnglishLesson }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [savedScore, setSavedScore] = useState<number | null>(null);

  const siblings = getLessonsByLevel(lesson.level);
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  const nextLesson = idx >= 0 ? siblings[idx + 1] : undefined;

  const result = useMemo(() => {
    if (!submitted) return null;
    let correct = 0;
    const detail: Record<string, boolean> = {};
    for (const q of lesson.quiz) {
      const user = answers[q.id] ?? "";
      const ok =
        q.type === "mcq"
          ? Number(user) === q.correctIndex
          : answersMatch(user, q.answer, q.acceptedAnswers);
      detail[q.id] = ok;
      if (ok) correct += 1;
    }
    const scorePercent = Math.round((correct / lesson.quiz.length) * 100);
    return { correct, scorePercent, detail };
  }, [submitted, answers, lesson]);

  const onSubmit = () => {
    setSubmitted(true);
    let correct = 0;
    for (const q of lesson.quiz) {
      const user = answers[q.id] ?? "";
      const ok =
        q.type === "mcq"
          ? Number(user) === q.correctIndex
          : answersMatch(user, q.answer, q.acceptedAnswers);
      if (ok) correct += 1;
    }
    const scorePercent = Math.round((correct / lesson.quiz.length) * 100);
    setSavedScore(scorePercent);
    if (scorePercent >= 50) {
      recordEnglishLesson(lesson.id, scorePercent);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ward">
        <Link href={`/english/${lesson.level}`} className="hover:underline">
          {lesson.level}
        </Link>
        <span className="text-ink/25">·</span>
        <span>Lesson {lesson.order}</span>
        <span className="text-ink/25">·</span>
        <span>{lesson.minutes} min</span>
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
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
          Phrase bank · EN / PT
        </p>
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
      </Panel>

      <div className="space-y-4">
        <h2 className="font-display text-3xl font-bold text-ink">Quick quiz</h2>
        {lesson.quiz.map((q, i) => (
          <QuizCard
            key={q.id}
            index={i}
            q={q}
            value={answers[q.id] ?? ""}
            disabled={submitted}
            ok={result?.detail[q.id]}
            onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))}
          />
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-md bg-pulse px-5 py-2.5 text-sm font-bold text-white"
        >
          Check answers
        </button>
      ) : (
        result && (
          <Panel className="bg-scrub/60">
            <p className="font-display text-4xl text-ink">{result.scorePercent}%</p>
            <p className="mt-1 text-sm text-ink/65">
              {result.correct} of {lesson.quiz.length} correct
              {savedScore != null && savedScore >= 50
                ? " · lesson marked complete"
                : " · score 50%+ to mark complete"}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/english/${lesson.level}`}
                className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
              >
                Back to {lesson.level}
              </Link>
              {nextLesson ? (
                <Link
                  href={`/english/${lesson.level}/${nextLesson.id}`}
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
                >
                  Next lesson →
                </Link>
              ) : (
                <Link
                  href={lesson.level === "A1" ? "/english/A2" : "/lessons"}
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
                >
                  {lesson.level === "A1" ? "Go to A2 →" : "OET Lessons →"}
                </Link>
              )}
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
    <Panel
      className={cn(
        disabled && ok === true && "border-ward/40",
        disabled && ok === false && "border-pulse/40",
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
      {disabled && (
        <p className={cn("mt-3 text-sm", ok ? "text-ward" : "text-pulse")}>
          {ok ? "Correct. " : "Not quite. "}
          {q.explanation}
          {q.type === "gap" && !ok ? (
            <span className="block text-ink/55">Expected: {q.answer}</span>
          ) : null}
        </p>
      )}
    </Panel>
  );
}
