"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MICRO_LESSONS } from "@/data/lessons";
import { CLINICAL_TRACKS, getContentBankStats } from "@/data/catalog";
import { PageHero, Panel } from "@/components/ui";

const KINDS = ["all", "vocab", "grammar", "function", "strategy", "case"] as const;

export function LessonsBrowser() {
  const [track, setTrack] = useState<string>("all");
  const [kind, setKind] = useState<(typeof KINDS)[number]>("all");
  const stats = getContentBankStats();

  const items = useMemo(() => {
    return MICRO_LESSONS.filter((l) => {
      const trackOk = track === "all" || l.track === track;
      const kindOk = kind === "all" || l.kind === kind;
      return trackOk && kindOk;
    });
  }, [track, kind]);

  return (
    <div>
      <PageHero
        eyebrow="Phase 4 · Content bank"
        title="Microlearning library"
        description="Short clinical English modules across GP, Ortho, ED, Surgery and Anaesthesia — linked to practice tasks. Schema ready to grow toward 100+ lessons."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Lessons", stats.lessons],
            ["Listening", stats.listening],
            ["Reading", stats.reading],
            ["Writing", stats.writing],
            ["Speaking", stats.speaking],
            ["SRS cards", stats.srsCards],
          ].map(([label, n]) => (
            <Panel key={label as string} className="text-center">
              <p className="font-display text-3xl text-ink">{n as number}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-ink/45">{label as string}</p>
            </Panel>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            className="rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm"
          >
            <option value="all">All tracks</option>
            <option value="General">General</option>
            {CLINICAL_TRACKS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as (typeof KINDS)[number])}
            className="rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm"
          >
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {k === "all" ? "All lesson types" : k}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((lesson) => (
            <Panel key={lesson.id}>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ward">
                <span>{lesson.track}</span>
                <span className="text-ink/30">·</span>
                <span>{lesson.kind}</span>
                <span className="text-ink/30">·</span>
                <span>{lesson.minutes} min</span>
              </div>
              <h2 className="mt-2 font-display text-2xl text-ink">{lesson.title}</h2>
              <p className="mt-2 text-sm text-ink/65">{lesson.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{lesson.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {lesson.keyPhrases.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
              {lesson.practiceHref && (
                <Link
                  href={lesson.practiceHref}
                  className="mt-4 inline-flex text-sm font-semibold text-pulse"
                >
                  Practise related task →
                </Link>
              )}
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
}
