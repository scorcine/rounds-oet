"use client";

import { useMemo, useState } from "react";
import type { ReadingPassage } from "@/domain/types";
import { recordAttempt } from "@/lib/progress";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";

export function ReadingPractice({ passage }: { passage: ReadingPassage }) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const timer = useCountdown(passage.timeLimitSec, started && !submitted);

  const result = useMemo(() => {
    if (!submitted) return null;
    let correct = 0;
    const detail: Record<string, boolean> = {};
    for (const q of passage.questions) {
      const ok = answers[q.id] === q.correctIndex;
      detail[q.id] = ok;
      if (ok) correct += 1;
    }
    return {
      correct,
      scorePercent: Math.round((correct / passage.questions.length) * 100),
      detail,
    };
  }, [submitted, answers, passage]);

  const onSubmit = () => {
    setSubmitted(true);
    let correct = 0;
    for (const q of passage.questions) {
      if (answers[q.id] === q.correctIndex) correct += 1;
    }
    const scorePercent = Math.round((correct / passage.questions.length) * 100);
    recordAttempt({
      skill: "reading",
      contentId: passage.id,
      scorePercent,
      durationSec: passage.timeLimitSec - timer.remaining,
    });
  };

  if (!started) {
    return (
      <Panel>
        <h2 className="font-display text-2xl text-ink">{passage.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          Part {passage.part} · {passage.specialty} · {Math.round(passage.timeLimitSec / 60)} min
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Start timed reading
        </button>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <TimerBadge label={timer.label} />
        <span className="rounded-md bg-ward/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ward">
          Part {passage.part}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel className="max-h-[70vh] overflow-y-auto">
          <h2 className="font-display text-2xl text-ink">{passage.title}</h2>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {passage.text}
          </pre>
        </Panel>

        <div className="space-y-4">
          {passage.questions.map((q, idx) => (
            <Panel key={q.id}>
              <p className="text-sm font-semibold text-ink">
                {idx + 1}. {q.prompt}
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={opt}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-ink/10 px-3 py-2 hover:bg-scrub/50"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      disabled={submitted}
                      checked={answers[q.id] === i}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                      className="mt-1"
                    />
                    <span className="text-sm text-ink/80">{opt}</span>
                  </label>
                ))}
              </div>
              {submitted && result && (
                <p className={`mt-3 text-sm ${result.detail[q.id] ? "text-ward" : "text-pulse"}`}>
                  {result.detail[q.id] ? "Correct. " : "Incorrect. "}
                  {q.explanation}
                </p>
              )}
            </Panel>
          ))}

          {!submitted ? (
            <button
              type="button"
              onClick={onSubmit}
              className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
            >
              Submit
            </button>
          ) : (
            result && (
              <Panel className="bg-scrub/60">
                <p className="font-display text-3xl text-ink">{result.scorePercent}%</p>
                <p className="mt-1 text-sm text-ink/65">
                  {result.correct}/{passage.questions.length} · saved to Progress
                </p>
              </Panel>
            )
          )}
        </div>
      </div>
    </div>
  );
}
