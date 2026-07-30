"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PlannerDay } from "@/domain/account";
import { loadStudy, DEFAULT_STUDY } from "@/lib/study-store";
import { buildWeekPlan, downloadIcs, toIcs } from "@/lib/planner";
import { PageHero } from "@/components/ui";
import { cn } from "@/lib/utils";

function formatDay(iso: string): { weekday: string; day: string; month: string } {
  const d = new Date(`${iso}T12:00:00`);
  return {
    weekday: d.toLocaleDateString("en-GB", { weekday: "short" }),
    day: d.toLocaleDateString("en-GB", { day: "numeric" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }),
  };
}

function taskAccent(href: string): string {
  if (href.includes("writing")) return "from-pulse/20 to-transparent";
  if (href.includes("speaking")) return "from-amber/20 to-transparent";
  if (href.includes("exam")) return "from-pulse/25 to-transparent";
  if (href.includes("study")) return "from-ward/25 to-transparent";
  return "from-ward/15 to-transparent";
}

export function PlannerPanel() {
  const [plan, setPlan] = useState<PlannerDay[]>([]);
  const todayIso = useMemo(() => new Date().toISOString().slice(0, 10), []);

  useEffect(() => {
    const study = loadStudy();
    setPlan(buildWeekPlan(study.diagnostic ? study : DEFAULT_STUDY));
  }, []);

  const weekMinutes = plan.reduce(
    (n, d) => n + d.tasks.reduce((a, t) => a + t.minutes, 0),
    0,
  );

  return (
    <div>
      <PageHero
        eyebrow="Study ops · Planner"
        title="This week’s protocol"
        description="A 7-day mission board tuned to your diagnostic weak spots and SRS goal. Tap any task to train — export .ics for Google or Apple Calendar."
        action={
          <button
            type="button"
            onClick={() => downloadIcs(toIcs(plan))}
            className="mt-2 inline-flex rounded-md border border-ward/40 bg-ward/15 px-4 py-2 text-sm font-semibold text-ward transition hover:bg-ward/25"
          >
            Download calendar (.ics)
          </button>
        }
      />

      <div className="mx-auto max-w-4xl space-y-5 px-4 py-10 sm:px-6">
        <div className="panel-tech relative overflow-hidden rounded-2xl p-5 sm:p-6">
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ward">
                Week load
              </p>
              <p className="mt-1 font-display text-4xl font-bold text-paper">
                {weekMinutes}
                <span className="text-lg text-paper/40"> min</span>
              </p>
              <p className="mt-1 text-sm text-paper/50">
                {plan.length} days · adaptive focus from diagnostic
              </p>
            </div>
            <Link
              href="/study"
              className="rounded-md bg-pulse px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Start today’s SRS →
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {plan.map((day, i) => {
            const isToday = day.date === todayIso;
            const fmt = formatDay(day.date);
            const dayMin = day.tasks.reduce((a, t) => a + t.minutes, 0);
            const focusClean = day.focus.replace(/^Today ·\s*/i, "");

            return (
              <motion.article
                key={day.date}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border",
                  isToday
                    ? "border-ward/40 bg-ink text-paper shadow-[0_0_40px_-16px_rgba(0,214,192,0.45)]"
                    : "border-ink/10 bg-white/90 text-ink backdrop-blur-sm",
                )}
              >
                {isToday && (
                  <>
                    <div className="pointer-events-none absolute inset-0 tech-grid-dense opacity-30" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ward to-transparent" />
                  </>
                )}

                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-16 w-16 flex-col items-center justify-center rounded-xl border font-display",
                          isToday
                            ? "border-ward/40 bg-ward/15 text-ward"
                            : "border-ink/10 bg-scrub/80 text-ink",
                        )}
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">
                          {fmt.weekday}
                        </span>
                        <span className="text-2xl font-bold leading-none">{fmt.day}</span>
                        <span className="text-[10px] font-mono uppercase">{fmt.month}</span>
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          {isToday && (
                            <span className="rounded bg-ward px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                              Live today
                            </span>
                          )}
                          <span
                            className={cn(
                              "font-mono text-[10px] uppercase tracking-[0.18em]",
                              isToday ? "text-ward" : "text-steel",
                            )}
                          >
                            Focus · {focusClean}
                          </span>
                        </div>
                        <p
                          className={cn(
                            "mt-1 font-display text-2xl font-bold",
                            isToday ? "text-paper" : "text-ink",
                          )}
                        >
                          {isToday ? "Today’s block" : `${fmt.weekday} block`}
                        </p>
                        <p className={cn("text-sm", isToday ? "text-paper/50" : "text-ink/50")}>
                          SRS goal {day.dailyGoal} cards · {dayMin} min planned
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {day.tasks.map((t, ti) => (
                      <li key={`${day.date}-${t.label}`}>
                        <Link
                          href={t.href}
                          className={cn(
                            "group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition",
                            isToday
                              ? "border-white/10 bg-white/5 hover:border-ward/40 hover:bg-ward/10"
                              : "border-ink/10 bg-scrub/30 hover:border-ward/40 hover:bg-scrub/70",
                          )}
                        >
                          <div
                            className={cn(
                              "pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
                              taskAccent(t.href),
                            )}
                          />
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold",
                              isToday ? "bg-ward/20 text-ward" : "bg-ink/5 text-steel",
                            )}
                          >
                            {String(ti + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p
                              className={cn(
                                "truncate text-sm font-semibold",
                                isToday ? "text-paper" : "text-ink",
                              )}
                            >
                              {t.label}
                            </p>
                            <p
                              className={cn(
                                "font-mono text-[10px] uppercase tracking-wider",
                                isToday ? "text-paper/40" : "text-ink/40",
                              )}
                            >
                              {t.minutes} min block
                            </p>
                          </div>
                          <span
                            className={cn(
                              "shrink-0 rounded-md px-3 py-1.5 text-xs font-bold transition",
                              isToday
                                ? "bg-pulse text-white group-hover:brightness-110"
                                : "bg-ink text-paper group-hover:bg-pulse",
                            )}
                          >
                            Start →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="text-center text-sm text-ink/50">
          Tip: finish the{" "}
          <Link href="/diagnose" className="font-semibold text-ward">
            diagnostic
          </Link>{" "}
          so daily focus tracks your weakest competency.
        </p>
      </div>
    </div>
  );
}
