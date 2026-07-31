"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ENGLISH_LEVELS, getLessonsByLevel } from "@/data/english";
import {
  DEFAULT_ENGLISH_PROGRESS,
  levelCompletion,
  loadEnglishProgress,
  type EnglishProgress,
} from "@/lib/english-progress";
import { PageHero, Panel } from "@/components/ui";
import { cn } from "@/lib/utils";

export function EnglishHub() {
  const [progress, setProgress] = useState<EnglishProgress>(DEFAULT_ENGLISH_PROGRESS);

  useEffect(() => {
    setProgress(loadEnglishProgress());
  }, []);

  const continueHref =
    progress.lastLessonId != null && progress.lastLessonId.startsWith("en-a1-")
      ? `/english/A1/${progress.lastLessonId}`
      : "/english/A1";

  return (
    <div>
      <PageHero
        eyebrow="General English · CEFR"
        title="English Path A1–C2"
        description="Six CEFR modules from beginner to proficiency. A1 Premium is live — open the card to start. Higher levels are marked under construction until we unlock them."
        action={
          <Link
            href={continueHref}
            className="mt-2 inline-flex w-fit rounded-md bg-pulse px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            {progress.lastLessonId?.startsWith("en-a1-") ? "Continue A1 →" : "Start A1 →"}
          </Link>
        }
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENGLISH_LEVELS.map((level) => {
            const ready = level.status === "ready";
            const lessons = getLessonsByLevel(level.id);
            const stats = levelCompletion(
              lessons.map((l) => l.id),
              progress,
            );

            const inner = (
              <Panel
                className={cn(
                  "h-full",
                  ready
                    ? "transition group-hover:border-ward/40"
                    : "border-dashed border-ink/20 bg-ink/[0.02] opacity-90",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ward">
                    {level.label}
                  </p>
                  {!ready ? (
                    <span className="rounded-md bg-amber/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/70">
                      Em construção
                    </span>
                  ) : (
                    <span className="rounded-md bg-ward/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ward">
                      Pronto
                    </span>
                  )}
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold text-ink">{level.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{level.blurb}</p>

                {ready ? (
                  <div className="mt-5">
                    <div className="mb-1.5 flex items-center justify-between text-xs text-ink/50">
                      <span>
                        {stats.done}/{stats.total} lessons
                      </span>
                      <span className="font-mono">{stats.percent}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                      <div
                        className="h-full rounded-full bg-ward transition-all"
                        style={{ width: `${stats.percent}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 rounded-lg border border-ink/10 bg-white/60 px-3 py-2 text-xs text-ink/50">
                    Módulo em construção — em breve no mesmo formato Premium do A1.
                  </div>
                )}

                <p
                  className={cn(
                    "mt-4 text-sm font-semibold",
                    ready ? "text-ward group-hover:underline" : "text-ink/35",
                  )}
                >
                  {ready ? `Open ${level.id} →` : "Em construção"}
                </p>
              </Panel>
            );

            if (!ready) {
              return (
                <div key={level.id} aria-disabled className="cursor-not-allowed">
                  {inner}
                </div>
              );
            }

            return (
              <Link key={level.id} href={`/english/${level.id}`} className="group block">
                {inner}
              </Link>
            );
          })}
        </div>

        <Panel className="bg-scrub/50">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            How it works
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>1. Open the A1 card to enter the full Premium track.</li>
            <li>2. Each ready lesson includes listen, speak (pronunciation), write and drills.</li>
            <li>3. Score 70%+ to complete — checkpoints every 5 lessons.</li>
            <li>4. A2–C2 unlock next; keep A1 vocab warm in Study meanwhile.</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
