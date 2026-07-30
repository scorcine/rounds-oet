"use client";

import Link from "next/link";
import type { BandReport } from "@/lib/band-report";
import { ESTIMATED_BAND_DISCLAIMER, SKILL_META, gradeDescriptor } from "@/domain/skills";
import { Panel } from "@/components/ui";

const confidenceLabel = {
  low: "Low confidence",
  medium: "Medium confidence",
  high: "Higher confidence",
} as const;

export function EstimatedBandDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p
      className={`rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-xs leading-relaxed text-ink/75 ${className}`}
    >
      {ESTIMATED_BAND_DISCLAIMER}
    </p>
  );
}

export function EstimatedBandReport({
  report,
  title = "Estimated OET band",
  compact = false,
}: {
  report: BandReport;
  title?: string;
  compact?: boolean;
}) {
  return (
    <div className="space-y-4">
      <Panel className="bg-ink text-paper">
        <p className="text-xs uppercase tracking-[0.18em] text-scrub/80">
          {title} · {report.source === "exam" ? "Mock exam" : "Practice"}
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-5xl">
              {report.overallLabel ?? "—"}
            </p>
            <p className="mt-2 text-sm text-paper/65">
              {report.overallScore != null
                ? `≈ ${report.overallScore}/500`
                : "Not enough data yet"}
              {report.overallPercent != null ? ` · avg ${report.overallPercent}%` : ""}
            </p>
            {report.overallGrade && (
              <p className="mt-1 text-sm text-paper/55">
                {gradeDescriptor(report.overallGrade)}
              </p>
            )}
          </div>
          <div className="text-right text-sm">
            <p className="text-paper/50">Target</p>
            <p className="font-semibold text-paper">{report.targetGrade}</p>
            {report.onTrackForTarget == null ? null : report.onTrackForTarget ? (
              <p className="mt-1 text-ward">On track (estimated)</p>
            ) : (
              <p className="mt-1 text-pulse">Below target (estimated)</p>
            )}
          </div>
        </div>
        {report.limitingSkill && (
          <p className="mt-4 text-sm text-paper/60">
            Limiting skill:{" "}
            <span className="font-semibold text-paper">
              {SKILL_META[report.limitingSkill].label}
            </span>
            {" · "}
            <Link href={SKILL_META[report.limitingSkill].href} className="underline decoration-ward/60">
              Practice →
            </Link>
          </p>
        )}
      </Panel>

      <EstimatedBandDisclaimer />

      {!compact && (
        <div className="grid gap-3 sm:grid-cols-2">
          {report.skills.map((s) => (
            <Panel key={s.skill}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-ward">{s.label}</p>
                  <p className="mt-1 font-display text-3xl text-ink">
                    {s.gradeLabel ?? "—"}
                  </p>
                </div>
                <p className="font-mono text-sm text-ink/55">
                  {s.percent == null ? "—" : `${s.percent}%`}
                </p>
              </div>
              <p className="mt-2 text-sm text-ink/60">
                {s.score != null ? `≈ ${s.score}/500` : "No attempts yet"}
                {s.meetsTarget == null
                  ? ""
                  : s.meetsTarget
                    ? " · meets target"
                    : " · below target"}
              </p>
              {s.descriptor && (
                <p className="mt-1 text-xs text-ink/50">{s.descriptor}</p>
              )}
              <p className="mt-3 text-xs text-ink/45">
                {s.attempts} attempt{s.attempts === 1 ? "" : "s"} · {confidenceLabel[s.confidence]}
              </p>
            </Panel>
          ))}
        </div>
      )}

      <p className="text-xs text-ink/50">{report.sampleNote}</p>
    </div>
  );
}
