"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COMPETENCIES, type StudyState } from "@/domain/study";
import { competencyMastery, DEFAULT_STUDY, loadStudy, getDueQueue } from "@/lib/study-store";
import { SRS_DECK } from "@/data/srs-deck";
import { Panel } from "@/components/ui";

export function CompetencyMap() {
  const [state, setState] = useState<StudyState>(DEFAULT_STUDY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadStudy());
    setReady(true);
  }, []);

  if (!ready) return null;

  const scores = competencyMastery(state);
  const due = getDueQueue(state).length;

  return (
    <div className="space-y-6">
      {!state.diagnostic ? (
        <Panel>
          <h2 className="font-display text-2xl text-ink">No placement yet</h2>
          <p className="mt-2 text-sm text-ink/65">
            Complete the mini-OET diagnostic to unlock your personalised competency map and SRS
            priorities.
          </p>
          <Link
            href="/diagnose"
            className="mt-5 inline-flex rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
          >
            Take diagnostic
          </Link>
        </Panel>
      ) : (
        <Panel className="flex flex-wrap items-end justify-between gap-4 bg-scrub/50">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">Adaptive track</p>
            <p className="mt-1 font-display text-3xl text-ink">
              Placement {state.diagnostic.overallPercent}%
            </p>
            <p className="mt-1 text-sm text-ink/60">
              Daily goal {state.dailyGoal} · {due} cards due · {state.xp} XP
            </p>
          </div>
          <Link
            href="/study"
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            Study now
          </Link>
        </Panel>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {COMPETENCIES.map((meta) => {
          const score = scores.find((s) => s.competency === meta.id)!;
          const count = SRS_DECK.filter((c) => c.competency === meta.id).length;
          const weak = state.diagnostic?.weakCompetencies.includes(meta.id);
          return (
            <Panel key={meta.id}>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl text-ink">{meta.label}</h3>
                {weak && (
                  <span className="rounded-md bg-pulse/15 px-2 py-0.5 text-xs font-semibold text-pulse">
                    Priority
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{meta.description}</p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-ink/45">Mastery estimate</p>
                  <p className="font-mono text-3xl text-ink">{score.mastery}%</p>
                </div>
                <p className="text-sm text-ink/50">{count} cards in deck</p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10">
                <div
                  className={`h-full rounded-full ${weak ? "bg-pulse" : "bg-ward"}`}
                  style={{ width: `${score.mastery}%` }}
                />
              </div>
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
