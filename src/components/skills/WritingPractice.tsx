"use client";

import { useState } from "react";
import type { WritingCase } from "@/domain/types";
import { recordAttempt } from "@/lib/progress";
import { countWords } from "@/lib/utils";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";

export function WritingPractice({ writingCase }: { writingCase: WritingCase }) {
  const [started, setStarted] = useState(false);
  const [letter, setLetter] = useState("");
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const timer = useCountdown(writingCase.timeLimitSec, started && !submitted);
  const words = countWords(letter);

  const onSubmit = () => {
    setSubmitted(true);
    const checked = writingCase.rubric.filter((r) => checks[r.id]).length;
    const wordScore =
      words >= writingCase.wordTarget.min && words <= writingCase.wordTarget.max + 30 ? 1 : 0.6;
    const rubricScore = checked / writingCase.rubric.length;
    const scorePercent = Math.round((rubricScore * 0.75 + wordScore * 0.25) * 100);
    recordAttempt({
      skill: "writing",
      contentId: writingCase.id,
      scorePercent,
      durationSec: writingCase.timeLimitSec - timer.remaining,
      details: { words, checked },
    });
  };

  if (!started) {
    return (
      <Panel>
        <h2 className="font-display text-2xl text-ink">{writingCase.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {writingCase.specialty} · {writingCase.taskType} · target {writingCase.wordTarget.min}–
          {writingCase.wordTarget.max} words · 40 min
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">{writingCase.task}</p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Start writing
        </button>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <TimerBadge label={timer.label} />
        <span
          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
            words >= writingCase.wordTarget.min && words <= writingCase.wordTarget.max
              ? "bg-ward/10 text-ward"
              : "bg-ink/5 text-ink/60"
          }`}
        >
          {words} words
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel className="max-h-[75vh] overflow-y-auto">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">Case notes</h3>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {writingCase.caseNotes}
          </pre>
          <p className="mt-4 rounded-xl bg-scrub/70 p-3 text-sm text-ink/70">{writingCase.task}</p>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Your letter
            </label>
            <textarea
              value={letter}
              disabled={submitted}
              onChange={(e) => setLetter(e.target.value)}
              rows={18}
              className="mt-3 w-full resize-y rounded-xl border border-ink/15 bg-white p-3 text-sm leading-relaxed outline-none ring-ward focus:ring-2"
              placeholder="Write a full professional letter (not note form)…"
            />
          </Panel>

          {!submitted ? (
            <button
              type="button"
              onClick={onSubmit}
              className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
            >
              Finish & self-assess
            </button>
          ) : (
            <>
              <Panel>
                <h3 className="font-display text-xl text-ink">Rubric checklist</h3>
                <p className="mt-1 text-sm text-ink/60">
                  Tick what you achieved, then compare with the sample.
                </p>
                <ul className="mt-4 space-y-3">
                  {writingCase.rubric.map((r) => (
                    <label key={r.id} className="flex items-start gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={!!checks[r.id]}
                        onChange={(e) =>
                          setChecks((c) => ({ ...c, [r.id]: e.target.checked }))
                        }
                        className="mt-1"
                      />
                      <span>
                        <span className="font-semibold text-ink">{r.criterion}</span>
                        <span className="block text-ink/60">{r.description}</span>
                      </span>
                    </label>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={onSubmit}
                  className="mt-4 rounded-md border border-ink/15 px-4 py-2 text-sm font-medium"
                >
                  Save score to Progress
                </button>
              </Panel>
              <button
                type="button"
                onClick={() => setShowSample((v) => !v)}
                className="text-sm font-semibold text-ward underline-offset-2 hover:underline"
              >
                {showSample ? "Hide sample letter" : "Show sample letter"}
              </button>
              {showSample && (
                <Panel className="bg-scrub/50">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
                    {writingCase.sampleLetter}
                  </pre>
                </Panel>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
