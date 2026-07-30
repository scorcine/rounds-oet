"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ENGLISH_LEVELS, getLessonsByLevel } from "@/data/english";
import {
  DEFAULT_ENGLISH_PROGRESS,
  levelCompletion,
  loadEnglishProgress,
  suggestedLevel,
  type EnglishProgress,
} from "@/lib/english-progress";
import { PageHero, Panel } from "@/components/ui";

export function EnglishHub() {
  const [progress, setProgress] = useState<EnglishProgress>(DEFAULT_ENGLISH_PROGRESS);

  useEffect(() => {
    setProgress(loadEnglishProgress());
  }, []);

  const suggest = suggestedLevel(progress);
  const continueHref =
    progress.lastLessonId != null
      ? `/english/${progress.lastLessonId.startsWith("en-a2") ? "A2" : "A1"}/${progress.lastLessonId}`
      : `/english/${suggest}`;

  return (
    <div>
      <PageHero
        eyebrow="General English · CEFR"
        title="English Path A1–A2"
        description="Build everyday English before (or alongside) OET Medicine. Short lessons with teach blocks, phrase banks and a quick quiz — Portuguese glosses included."
        action={
          <Link
            href={continueHref}
            className="mt-2 inline-flex w-fit rounded-md bg-pulse px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            {progress.lastLessonId ? "Continue learning →" : "Start A1 →"}
          </Link>
        }
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {ENGLISH_LEVELS.map((level) => {
            const lessons = getLessonsByLevel(level.id);
            const stats = levelCompletion(
              lessons.map((l) => l.id),
              progress,
            );
            return (
              <Link key={level.id} href={`/english/${level.id}`} className="group block">
                <Panel className="h-full transition group-hover:border-ward/40">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ward">
                    {level.label}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-ink">{level.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{level.blurb}</p>
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
                  <p className="mt-4 text-sm font-semibold text-ward group-hover:underline">
                    Open {level.id} →
                  </p>
                </Panel>
              </Link>
            );
          })}
        </div>

        <Panel className="bg-scrub/50">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ward">
            How it works
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>1. Read the teach blocks and phrase bank (EN + PT).</li>
            <li>2. Complete the 4-question quiz (pass at 50%+ to mark complete).</li>
            <li>3. Progress saves on this device — finish A1, then move to A2.</li>
            <li>4. When ready for clinical English, jump to OET Lessons / Exam.</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
