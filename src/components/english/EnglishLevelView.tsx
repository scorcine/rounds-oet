"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CefrLevel } from "@/domain/english";
import { getLessonsByLevel, getLevelMeta } from "@/data/english";
import {
  DEFAULT_ENGLISH_PROGRESS,
  isLessonComplete,
  levelCompletion,
  loadEnglishProgress,
  type EnglishProgress,
} from "@/lib/english-progress";
import { PageHero, Panel } from "@/components/ui";
import { cn } from "@/lib/utils";

export function EnglishLevelView({ level }: { level: CefrLevel }) {
  const meta = getLevelMeta(level);
  const lessons = getLessonsByLevel(level);
  const [progress, setProgress] = useState<EnglishProgress>(DEFAULT_ENGLISH_PROGRESS);

  useEffect(() => {
    setProgress(loadEnglishProgress());
  }, []);

  const stats = levelCompletion(
    lessons.map((l) => l.id),
    progress,
  );

  const next = lessons.find((l) => !isLessonComplete(l.id, progress)) ?? lessons[0];

  return (
    <div>
      <PageHero
        eyebrow={`CEFR · ${level}`}
        title={meta?.title ?? level}
        description={meta?.blurb ?? ""}
        action={
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href="/english"
              className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-paper"
            >
              ← All levels
            </Link>
            {next ? (
              <Link
                href={`/english/${level}/${next.id}`}
                className="rounded-md bg-pulse px-4 py-2 text-sm font-bold text-white"
              >
                {stats.done === 0 ? "Start lesson 1 →" : "Continue →"}
              </Link>
            ) : null}
          </div>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-ink/55">
            {stats.done} of {stats.total} complete
          </p>
          <p className="font-mono text-sm text-ward">{stats.percent}%</p>
        </div>
        <div className="mb-8 h-2 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full rounded-full bg-ward" style={{ width: `${stats.percent}%` }} />
        </div>

        <div className="space-y-3">
          {lessons.map((lesson) => {
            const done = isLessonComplete(lesson.id, progress);
            const score = progress.completed[lesson.id]?.scorePercent;
            return (
              <Link
                key={lesson.id}
                href={`/english/${level}/${lesson.id}`}
                className={cn(
                  "flex flex-col gap-2 rounded-xl border px-4 py-4 transition sm:flex-row sm:items-center sm:justify-between",
                  done
                    ? "border-ward/30 bg-ward/5 hover:border-ward/50"
                    : "border-ink/10 bg-white hover:border-ward/40",
                )}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ward">
                    <span>Lesson {lesson.order}</span>
                    <span className="text-ink/25">·</span>
                    <span>{lesson.minutes} min</span>
                    <span className="text-ink/25">·</span>
                    <span className="normal-case tracking-normal text-ink/45">{lesson.topic}</span>
                  </div>
                  <p className="mt-1 font-display text-xl font-bold text-ink">{lesson.title}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {done ? (
                    <span className="rounded-md bg-ward/15 px-2.5 py-1 font-semibold text-ward">
                      Done{typeof score === "number" ? ` · ${score}%` : ""}
                    </span>
                  ) : (
                    <span className="font-semibold text-ink/50">Start →</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {stats.percent === 100 && level === "A1" ? (
          <Panel className="mt-8 bg-scrub/60">
            <p className="font-display text-2xl text-ink">A1 complete</p>
            <p className="mt-1 text-sm text-ink/60">Ready for elementary English?</p>
            <Link
              href="/english/A2"
              className="mt-4 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              Go to A2 →
            </Link>
          </Panel>
        ) : null}

        {stats.percent === 100 && level === "A2" ? (
          <Panel className="mt-8 bg-scrub/60">
            <p className="font-display text-2xl text-ink">A2 complete</p>
            <p className="mt-1 text-sm text-ink/60">
              Next: clinical English with OET Lessons, or keep drilling with Study / Exam.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/lessons"
                className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
              >
                OET Lessons →
              </Link>
              <Link
                href="/exam"
                className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink"
              >
                Exam mode
              </Link>
            </div>
          </Panel>
        ) : null}
      </div>
    </div>
  );
}
