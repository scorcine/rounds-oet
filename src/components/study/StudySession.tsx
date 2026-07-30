"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { SrsCardTemplate, SrsRating, StudyState } from "@/domain/study";
import { COMPETENCIES } from "@/domain/study";
import {
  applyReview,
  dailyRemaining,
  getDueQueue,
  loadStudy,
  DEFAULT_STUDY,
} from "@/lib/study-store";
import { Panel } from "@/components/ui";

const RATINGS: { value: SrsRating; label: string; hint: string }[] = [
  { value: 1, label: "Again", hint: "Forgot" },
  { value: 2, label: "Hard", hint: "Tough" },
  { value: 3, label: "Good", hint: "OK" },
  { value: 4, label: "Easy", hint: "Fast" },
];

export function StudySession() {
  const [state, setState] = useState<StudyState>(DEFAULT_STUDY);
  const [queue, setQueue] = useState<SrsCardTemplate[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    const s = loadStudy();
    setState(s);
    const remaining = dailyRemaining(s);
    const due = getDueQueue(s, Math.max(remaining, 0) || undefined);
    // If goal met, still allow extra reviews of due cards
    setQueue(remaining > 0 ? getDueQueue(s, remaining) : due.slice(0, 0));
    setFlipped(false);
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const current = queue[0];
  const wasNew = current ? (state.cards[current.id]?.repetitions ?? 0) === 0 : false;

  const onRate = (rating: SrsRating) => {
    if (!current) return;
    applyReview(current.id, rating, wasNew);
    refresh();
  };

  if (!ready) {
    return <p className="text-sm text-ink/50">Loading study session…</p>;
  }

  if (!state.diagnostic) {
    return (
      <Panel>
        <h2 className="font-display text-2xl text-ink">Take the placement first</h2>
        <p className="mt-2 text-sm text-ink/65">
          The mini-OET diagnosis seeds your spaced-repetition deck and daily goal.
        </p>
        <Link
          href="/diagnose"
          className="mt-5 inline-flex rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
        >
          Start diagnostic
        </Link>
      </Panel>
    );
  }

  const doneToday = state.daily.reviewsDone;
  const goal = state.daily.goal;
  const goalMet = doneToday >= goal;

  if (!current) {
    return (
      <div className="space-y-4">
        <Panel className="bg-scrub/60">
          <p className="text-xs uppercase tracking-[0.18em] text-ward">Daily goal</p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            {goalMet ? "Goal complete" : "Caught up"}
          </h2>
          <p className="mt-2 text-sm text-ink/65">
            {doneToday}/{goal} reviews · {state.xp} XP · streak continues when you practise daily
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/competencies" className="text-sm font-semibold text-ward">
              Competency map →
            </Link>
            <Link href="/practice" className="text-sm font-semibold text-ink/70">
              Skills practice →
            </Link>
          </div>
        </Panel>
        {!goalMet && (
          <p className="text-sm text-ink/55">No cards due right now. Check back tomorrow.</p>
        )}
        {goalMet && getDueQueue(state).length > 0 && (
          <button
            type="button"
            onClick={() => setQueue(getDueQueue(state))}
            className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
          >
            Extra reviews ({getDueQueue(state).length} due)
          </button>
        )}
      </div>
    );
  }

  const meta = COMPETENCIES.find((c) => c.id === current.competency)!;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-ink/60">
          <span className="font-semibold text-ink">
            {doneToday}/{goal}
          </span>{" "}
          today · {queue.length} left in session · {state.xp} XP
        </div>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-ward transition-all"
            style={{ width: `${Math.min(100, (doneToday / goal) * 100)}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="w-full text-left"
      >
        <Panel className="min-h-[220px] transition hover:border-ward/30">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
            {meta.short}
            {wasNew ? " · new" : ""}
          </p>
          {!flipped ? (
            <>
              <p className="mt-6 font-display text-3xl text-ink">{current.front}</p>
              {current.hint && (
                <p className="mt-3 text-sm text-ink/45">Hint: {current.hint}</p>
              )}
              <p className="mt-10 text-xs text-ink/40">Tap to reveal</p>
            </>
          ) : (
            <pre className="mt-6 whitespace-pre-wrap font-sans text-base leading-relaxed text-ink/85">
              {current.back}
            </pre>
          )}
        </Panel>
      </button>

      {flipped && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {RATINGS.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => onRate(r.value)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                r.value === 1
                  ? "bg-pulse/15 text-pulse hover:bg-pulse/25"
                  : r.value === 4
                    ? "bg-ward text-paper hover:bg-ward/90"
                    : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
            >
              {r.label}
              <span className="mt-0.5 block text-[11px] font-normal opacity-70">{r.hint}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
