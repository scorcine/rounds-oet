"use client";

import { motion } from "framer-motion";
import { BADGE_DEFS, type BadgeDef } from "@/domain/account";
import { cn } from "@/lib/utils";

const TIER_LABEL: Record<BadgeDef["tier"], string> = {
  signal: "SIGNAL",
  core: "CORE",
  elite: "ELITE",
};

const TIER_COLOR: Record<BadgeDef["tier"], string> = {
  signal: "text-ward",
  core: "text-amber",
  elite: "text-pulse",
};

export function BadgesBoard({
  unlockedIds,
  onRefresh,
}: {
  unlockedIds: string[];
  onRefresh: () => void;
}) {
  const unlocked = new Set(unlockedIds);
  const count = BADGE_DEFS.filter((b) => unlocked.has(b.id)).length;
  const pct = Math.round((count / BADGE_DEFS.length) * 100);

  return (
    <section className="panel-tech relative rounded-2xl p-5 sm:p-7">
      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ward opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ward" />
              </span>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-ward">
                Achievement matrix
              </p>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold text-paper sm:text-4xl">
              Badges
            </h2>
            <p className="mt-2 max-w-md text-sm text-paper/55">
              Unlock study milestones as you train. Visual rewards only — not official OET grades.
            </p>
          </div>
          <button
            type="button"
            onClick={onRefresh}
            className="rounded-md border border-ward/30 bg-ward/10 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ward transition hover:bg-ward/20"
          >
            Sync scan
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40">
                Systems online
              </p>
              <p className="mt-1 font-display text-4xl font-bold text-paper">
                {count}
                <span className="text-lg text-paper/40">/{BADGE_DEFS.length}</span>
              </p>
            </div>
            <p className="font-mono text-sm text-ward">{pct}%</p>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-ward via-ward to-amber"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {BADGE_DEFS.map((b, i) => {
            const on = unlocked.has(b.id);
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border p-4 transition duration-300",
                  on
                    ? "animate-badge-glow border-ward/40 bg-ward/10"
                    : "border-white/10 bg-white/[0.03] opacity-70",
                )}
              >
                {on && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px shimmer-edge opacity-80" />
                )}
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border font-mono text-lg font-bold",
                      on
                        ? "border-ward/50 bg-ink text-ward shadow-[0_0_24px_-6px_rgba(0,214,192,0.7)]"
                        : "border-white/10 bg-black/30 text-paper/35",
                    )}
                  >
                    {b.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p
                        className={cn(
                          "font-mono text-[10px] font-semibold uppercase tracking-[0.2em]",
                          TIER_COLOR[b.tier],
                        )}
                      >
                        {TIER_LABEL[b.tier]}
                      </p>
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider",
                          on ? "bg-ward/20 text-ward" : "bg-white/5 text-paper/35",
                        )}
                      >
                        {on ? "Unlocked" : "Locked"}
                      </span>
                    </div>
                    <p className="mt-1 font-display text-xl font-bold text-paper">{b.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-paper/50">{b.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
