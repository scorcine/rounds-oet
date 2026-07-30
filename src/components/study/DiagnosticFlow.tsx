"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DIAGNOSTIC_QUESTIONS } from "@/data/diagnostic";
import { COMPETENCIES } from "@/domain/study";
import { scoreDiagnostic, seedDeckFromDiagnostic } from "@/lib/study-store";
import type { DiagnosticResult } from "@/domain/study";
import { Panel } from "@/components/ui";

export function DiagnosticFlow() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const q = DIAGNOSTIC_QUESTIONS[index];
  const progressPct = Math.round((Object.keys(answers).length / DIAGNOSTIC_QUESTIONS.length) * 100);
  const competencyMeta = useMemo(
    () => Object.fromEntries(COMPETENCIES.map((c) => [c.id, c])),
    [],
  );

  const select = (optionIndex: number) => {
    const nextAnswers = { ...answers, [q.id]: optionIndex };
    setAnswers(nextAnswers);
    if (index < DIAGNOSTIC_QUESTIONS.length - 1) {
      setIndex(index + 1);
    } else {
      const scored = scoreDiagnostic(nextAnswers);
      seedDeckFromDiagnostic(scored);
      setResult(scored);
    }
  };

  if (result) {
    return (
      <div className="space-y-6">
        <Panel className="bg-ink text-paper">
          <p className="text-xs uppercase tracking-[0.2em] text-scrub/80">Placement result</p>
          <p className="mt-2 font-display text-5xl">{result.overallPercent}%</p>
          <p className="mt-2 text-sm text-paper/65">
            Daily goal set to {result.recommendedDailyGoal} reviews · deck seeded to your weak areas
          </p>
        </Panel>

        <div className="grid gap-3 sm:grid-cols-2">
          {result.byCompetency.map((c) => {
            const meta = competencyMeta[c.competency];
            const weak = result.weakCompetencies.includes(c.competency);
            return (
              <Panel key={c.competency} className={weak ? "border-pulse/40" : ""}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl text-ink">{meta.label}</h3>
                  {weak && (
                    <span className="rounded-md bg-pulse/15 px-2 py-0.5 text-xs font-semibold text-pulse">
                      Focus
                    </span>
                  )}
                </div>
                <p className="mt-2 font-mono text-2xl text-ink">{c.percent}%</p>
                <p className="text-sm text-ink/55">
                  {c.correct}/{c.total} correct
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10">
                  <div
                    className={`h-full rounded-full ${weak ? "bg-pulse" : "bg-ward"}`}
                    style={{ width: `${c.percent}%` }}
                  />
                </div>
              </Panel>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/study"
            className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
          >
            Start today’s reviews
          </Link>
          <Link
            href="/competencies"
            className="rounded-md border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink"
          >
            View competency map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-ink/55">
          <span>
            Question {index + 1} of {DIAGNOSTIC_QUESTIONS.length}
          </span>
          <span>{progressPct}% answered</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-ward transition-all"
            style={{ width: `${((index + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <Panel>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
          {competencyMeta[q.competency].label}
          {q.skillHint ? ` · ${q.skillHint}` : ""}
        </p>
        <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">{q.prompt}</h2>
        <div className="mt-6 space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              onClick={() => select(i)}
              className="block w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-left text-sm text-ink/85 transition hover:border-ward/40 hover:bg-scrub/50"
            >
              <span className="mr-3 font-mono text-xs text-ink/40">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          ))}
        </div>
      </Panel>

      {index > 0 && (
        <button
          type="button"
          onClick={() => setIndex((i) => i - 1)}
          className="text-sm font-medium text-ink/55 hover:text-ink"
        >
          ← Previous
        </button>
      )}
    </div>
  );
}
