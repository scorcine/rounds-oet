"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Skill, UserProgress } from "@/domain/types";
import type { StudyState } from "@/domain/study";
import { SKILL_META, percentToGradeForSkill, gradeLabel } from "@/domain/skills";
import { DEFAULT_PROGRESS, loadProgress, overallReadiness, skillStats } from "@/lib/progress";
import { DEFAULT_STUDY, loadStudy, getDueQueue, dailyRemaining } from "@/lib/study-store";
import { buildPracticeBandReport } from "@/lib/band-report";
import { EstimatedBandReport } from "@/components/band/EstimatedBandReport";
import { PageHero, Panel } from "@/components/ui";

const SKILLS: Skill[] = ["listening", "reading", "writing", "speaking"];

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [study, setStudy] = useState<StudyState>(DEFAULT_STUDY);

  useEffect(() => {
    setProgress(loadProgress());
    setStudy(loadStudy());
  }, []);

  const readiness = overallReadiness(progress);
  const due = getDueQueue(study).length;
  const remaining = dailyRemaining(study);
  const bandReport = useMemo(() => buildPracticeBandReport(progress), [progress]);

  return (
    <div>
      <PageHero
        eyebrow="Progress"
        title="Your practice pulse"
        description="Strict study estimates from your attempts — useful for planning, never an official OET result."
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
        <EstimatedBandReport report={bandReport} title="Estimated OET band" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Panel className="bg-ink text-paper">
            <p className="text-xs uppercase tracking-[0.18em] text-scrub/80">Skills readiness</p>
            <p className="mt-2 font-display text-5xl">{readiness}%</p>
            <p className="mt-2 text-sm text-paper/60">Average of skill attempts</p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">Streak</p>
            <p className="mt-2 font-display text-5xl text-ink">{progress.streakDays}</p>
            <p className="mt-2 text-sm text-ink/60">days practicing</p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">SRS today</p>
            <p className="mt-2 font-display text-5xl text-ink">
              {study.daily.reviewsDone}/{study.daily.goal}
            </p>
            <p className="mt-2 text-sm text-ink/60">
              {remaining} left · {due} due · {study.xp} XP
            </p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">Placement</p>
            <p className="mt-2 font-display text-4xl text-ink">
              {study.diagnostic ? `${study.diagnostic.overallPercent}%` : "—"}
            </p>
            <p className="mt-2 text-sm text-ink/60">
              {study.diagnostic ? (
                <Link href="/competencies" className="font-semibold text-ward">
                  Competency map →
                </Link>
              ) : (
                <Link href="/diagnose" className="font-semibold text-pulse">
                  Take diagnostic →
                </Link>
              )}
            </p>
          </Panel>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((skill) => {
            const stats = skillStats(progress, skill);
            const meta = SKILL_META[skill];
            const band = bandReport.skills.find((s) => s.skill === skill);
            return (
              <Panel key={skill}>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl text-ink">{meta.label}</h2>
                  <Link href={meta.href} className="text-sm font-semibold text-ward">
                    Practice →
                  </Link>
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <dt className="text-ink/50">Attempts</dt>
                    <dd className="text-lg font-semibold text-ink">{stats.attempts}</dd>
                  </div>
                  <div>
                    <dt className="text-ink/50">Average</dt>
                    <dd className="text-lg font-semibold text-ink">
                      {stats.avg == null ? "—" : `${stats.avg}%`}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink/50">Est. band</dt>
                    <dd className="text-lg font-semibold text-ink">
                      {band?.grade ??
                        (stats.best == null ? "—" : percentToGradeForSkill(stats.best, skill))}
                    </dd>
                  </div>
                </dl>
                {band?.score != null && (
                  <p className="mt-3 text-xs text-ink/50">
                    ≈ {band.score}/500 · Estimated · not official
                  </p>
                )}
              </Panel>
            );
          })}
        </div>

        <Panel>
          <h2 className="font-display text-2xl text-ink">Target</h2>
          <p className="mt-2 text-sm text-ink/65">{gradeLabel(progress.targetGrade)}</p>
          <h2 className="mt-8 font-display text-2xl text-ink">Recent skill attempts</h2>
          {progress.attempts.length === 0 ? (
            <p className="mt-3 text-sm text-ink/60">No attempts yet — start from Practice.</p>
          ) : (
            <ul className="mt-4 divide-y divide-ink/10">
              {progress.attempts.slice(0, 12).map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <div>
                    <p className="font-semibold capitalize text-ink">{a.skill}</p>
                    <p className="text-ink/50">
                      {a.contentId} · {new Date(a.completedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-ink">{a.scorePercent}%</p>
                    <p className="text-xs text-ink/45">
                      ≈ {percentToGradeForSkill(a.scorePercent, a.skill)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}
