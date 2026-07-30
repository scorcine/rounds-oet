"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PlannerDay } from "@/domain/account";
import { loadStudy, DEFAULT_STUDY } from "@/lib/study-store";
import { buildWeekPlan, downloadIcs, toIcs } from "@/lib/planner";
import { PageHero, Panel } from "@/components/ui";

export function PlannerPanel() {
  const [plan, setPlan] = useState<PlannerDay[]>([]);

  useEffect(() => {
    const study = loadStudy();
    setPlan(buildWeekPlan(study.diagnostic ? study : DEFAULT_STUDY));
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Phase 5 · Planner"
        title="This week’s study plan"
        description="Goals adapt to your diagnostic weak areas and daily SRS target. Export an .ics calendar file for Google/Apple Calendar."
        action={
          <button
            type="button"
            onClick={() => downloadIcs(toIcs(plan))}
            className="mt-2 inline-flex rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
          >
            Download calendar (.ics)
          </button>
        }
      />

      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 sm:px-6">
        {plan.map((day) => (
          <Panel key={day.date}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl text-ink">{day.date}</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ward">
                {day.focus} · goal {day.dailyGoal} cards
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {day.tasks.map((t) => (
                <li key={`${day.date}-${t.label}`}>
                  <Link
                    href={t.href}
                    className="flex items-center justify-between rounded-lg border border-ink/10 px-3 py-2 text-sm hover:bg-scrub/40"
                  >
                    <span className="text-ink">{t.label}</span>
                    <span className="font-mono text-xs text-ink/45">{t.minutes}m</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
        <p className="text-sm text-ink/55">
          Tip: after placing your diagnostic, reload this page to prioritise weak competencies in the
          daily focus label.
        </p>
      </div>
    </div>
  );
}
