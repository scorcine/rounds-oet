"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { StudyState } from "@/domain/study";
import type { UserProgress, Skill } from "@/domain/types";
import { SKILL_META } from "@/domain/skills";
import { DEFAULT_STUDY, loadStudy, dailyRemaining, getDueQueue } from "@/lib/study-store";
import { DEFAULT_PROGRESS, loadProgress, skillStats } from "@/lib/progress";
import { cn } from "@/lib/utils";

type Mission = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  cta: string;
  minutes: number;
  priority: "now" | "next" | "later";
};

const SKILL_ROTATION: Skill[] = ["listening", "reading", "writing", "speaking"];

function buildMissions(study: StudyState, progress: UserProgress): Mission[] {
  const missions: Mission[] = [];
  const due = getDueQueue(study).length;
  const remaining = dailyRemaining(study);
  const day = new Date().getDay();
  const skill = SKILL_ROTATION[day % SKILL_ROTATION.length];
  const skillStat = skillStats(progress, skill);

  if (!study.diagnostic) {
    missions.push({
      id: "diagnostic",
      eyebrow: "Step 1 · Placement",
      title: "Take the diagnostic",
      blurb: "16 questions seed your competency map and weekly planner focus.",
      href: "/diagnose",
      cta: "Start diagnostic",
      minutes: 12,
      priority: "now",
    });
  } else if (remaining > 0 || due > 0) {
    missions.push({
      id: "srs",
      eyebrow: "Step 1 · Daily engine",
      title: "Finish today’s SRS",
      blurb: `${remaining} reviews left · ${due} due · goal ${study.daily.goal} cards.`,
      href: "/study",
      cta: "Open study deck",
      minutes: Math.max(10, Math.min(25, remaining * 1.5)),
      priority: "now",
    });
  } else {
    missions.push({
      id: "srs-done",
      eyebrow: "Step 1 · Done",
      title: "SRS goal complete",
      blurb: "Daily reviews cleared. Keep the streak with a short skill block.",
      href: "/study",
      cta: "Review extras",
      minutes: 5,
      priority: "later",
    });
  }

  missions.push({
    id: "skill",
    eyebrow: `Step 2 · ${SKILL_META[skill].label}`,
    title: `Train ${SKILL_META[skill].label.toLowerCase()} today`,
    blurb:
      skillStat.attempts === 0
        ? "No attempts yet — start a timed practice set."
        : `Avg ${skillStat.avg}% · best ${skillStat.best}% across ${skillStat.attempts} attempts.`,
    href: SKILL_META[skill].href,
    cta: `Practice ${SKILL_META[skill].short}`,
    minutes: skill === "writing" ? 45 : skill === "speaking" ? 20 : 25,
    priority: missions.some((m) => m.priority === "now") ? "next" : "now",
  });

  const weekDay = new Date().getDate();
  missions.push({
    id: "mock",
    eyebrow: "Step 3 · Exam fitness",
    title: weekDay % 7 === 0 ? "Full-paper mock this week" : "Keep mock papers warm",
    blurb: "Papers 1–5 · 42 Listening + 42 Reading · pick a fresh paper when ready.",
    href: "/exam",
    cta: "Open exam mode",
    minutes: 90,
    priority: "later",
  });

  // Ensure exactly one "now"
  if (!missions.some((m) => m.priority === "now")) {
    missions[0].priority = "now";
  }

  return missions;
}

export function StudyPath() {
  const [study, setStudy] = useState<StudyState>(DEFAULT_STUDY);
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);

  useEffect(() => {
    setStudy(loadStudy());
    setProgress(loadProgress());
  }, []);

  const missions = useMemo(() => buildMissions(study, progress), [study, progress]);
  const primary = missions.find((m) => m.priority === "now") ?? missions[0];

  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-ink px-4 py-16 text-paper sm:px-6">
      <div className="pointer-events-none absolute inset-0 tech-grid-dense opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,214,192,0.18),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ward opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ward" />
              </span>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-ward">
                Study path · today
              </p>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              What to do today
            </h2>
            <p className="mt-3 max-w-xl text-sm text-paper/55 sm:text-base">
              One primary mission, then a skill block. Built from your diagnostic, SRS queue and
              weekly rotation.
            </p>
          </div>
          <Link
            href={primary.href}
            className="rounded-md bg-pulse px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            {primary.cta} →
          </Link>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {missions.map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-5 transition",
                m.priority === "now"
                  ? "border-ward/50 bg-ward/10 shadow-[0_0_40px_-16px_rgba(0,214,192,0.55)]"
                  : "border-white/10 bg-white/[0.04] hover:border-ward/30",
              )}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ward">
                {m.eyebrow}
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-paper">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">{m.blurb}</p>
              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-paper/40">~{Math.round(m.minutes)} min</span>
                <span
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-bold transition",
                    m.priority === "now"
                      ? "bg-pulse text-white"
                      : "bg-white/10 text-paper group-hover:bg-ward/20 group-hover:text-ward",
                  )}
                >
                  {m.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
