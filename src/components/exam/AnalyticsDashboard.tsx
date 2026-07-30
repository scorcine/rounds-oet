"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ExamAttempt } from "@/domain/exam";
import {
  computeAnalytics,
  formatDelta,
  loadExamAttempts,
  sectionLabel,
} from "@/lib/exam-store";
import { formatTime } from "@/lib/utils";
import { PageHero, Panel } from "@/components/ui";

export function AnalyticsDashboard() {
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAttempts(loadExamAttempts());
    setReady(true);
  }, []);

  if (!ready) return null;

  const analytics = computeAnalytics(attempts);

  if (!analytics.lastAttempt) {
    return (
      <div>
        <PageHero
          eyebrow="Phase 2 · Analytics"
          title="Exam insights"
          description="After you run Exam mode, you’ll see score by subtest, time per question and errors by clinical topic."
        />
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
          <Panel>
            <h2 className="font-display text-2xl text-ink">No exam attempts yet</h2>
            <p className="mt-2 text-sm text-ink/65">
              Complete a timed exam to unlock pacing and topic error reports.
            </p>
            <Link
              href="/exam"
              className="mt-5 inline-flex rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
            >
              Start exam mode
            </Link>
          </Panel>
        </div>
      </div>
    );
  }

  const last = analytics.lastAttempt;

  return (
    <div>
      <PageHero
        eyebrow="Phase 2 · Analytics"
        title="Exam insights"
        description="Score by subtest, pacing behaviour and error rates by clinical topic — across your recent exam attempts."
        action={
          <Link
            href="/exam"
            className="mt-2 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            New exam run
          </Link>
        }
      />

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Panel className="bg-ink text-paper">
            <p className="text-xs uppercase tracking-[0.18em] text-scrub/80">Last overall</p>
            <p className="mt-2 font-display text-5xl">{last.overallPercent}%</p>
            <p className="mt-2 text-sm text-paper/60">
              {new Date(last.completedAt).toLocaleString()}
            </p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">Avg sec / question</p>
            <p className="mt-2 font-display text-5xl text-ink">
              {analytics.avgPacingSecPerQuestion ?? "—"}
            </p>
            <p className="mt-2 text-sm text-ink/60">across all attempts</p>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.18em] text-ward">Exam runs</p>
            <p className="mt-2 font-display text-5xl text-ink">{attempts.length}</p>
            <p className="mt-2 text-sm text-ink/60">stored on this device</p>
          </Panel>
        </div>

        <Panel>
          <h2 className="font-display text-2xl text-ink">Score by subtest</h2>
          <p className="mt-1 text-sm text-ink/55">Listening/Reading parts averaged across attempts</p>
          {analytics.subtests.length === 0 ? (
            <p className="mt-4 text-sm text-ink/50">No scored subtests yet.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="text-xs uppercase tracking-wider text-ink/45">
                  <tr>
                    <th className="py-2">Subtest</th>
                    <th>Runs</th>
                    <th>Avg</th>
                    <th>Best</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {analytics.subtests.map((s) => (
                    <tr key={s.key}>
                      <td className="py-3 font-medium capitalize text-ink">
                        {s.skill} · Part {s.part}
                      </td>
                      <td className="text-ink/60">{s.attempts}</td>
                      <td className="font-mono text-ink">{s.avgPercent}%</td>
                      <td className="font-mono text-ward">{s.bestPercent}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Panel>

        <div className="grid gap-4 lg:grid-cols-2">
          <Panel>
            <h2 className="font-display text-2xl text-ink">Errors by topic</h2>
            <p className="mt-1 text-sm text-ink/55">Highest error rate first</p>
            <ul className="mt-4 space-y-3">
              {analytics.topics.slice(0, 10).map((t) => (
                <li key={`${t.skill}-${t.topic}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink">
                      {t.topic}{" "}
                      <span className="text-ink/40">· {t.skill}</span>
                    </span>
                    <span className="font-mono text-pulse">{t.errorRate}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full bg-pulse"
                      style={{ width: `${t.errorRate}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-ink/45">
                    {t.wrong} wrong / {t.total} items
                  </p>
                </li>
              ))}
              {analytics.topics.length === 0 && (
                <li className="text-sm text-ink/50">No topic errors recorded.</li>
              )}
            </ul>
          </Panel>

          <Panel>
            <h2 className="font-display text-2xl text-ink">Last pacing</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {last.pacing.sectionDeltas.map((d) => (
                <li
                  key={d.skill}
                  className="flex items-center justify-between border-b border-ink/10 py-2"
                >
                  <span>{sectionLabel(d.skill)}</span>
                  <span
                    className={
                      d.status === "slow"
                        ? "text-pulse"
                        : d.status === "fast"
                          ? "text-ward"
                          : "text-ink/55"
                    }
                  >
                    {formatDelta(d.deltaSec)}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Slowest items (last run)
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-ink/70">
              {last.pacing.slowestQuestions.map((q) => (
                <li key={q.questionId}>
                  {formatTime(q.secondsSpent)} · {q.topic}
                  {q.correct === false ? " · ✗" : q.correct ? " · ✓" : ""}
                </li>
              ))}
            </ul>
            {last.pacing.fastestWrong.length > 0 && (
              <>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-pulse">
                  Fast & wrong
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-ink/70">
                  {last.pacing.fastestWrong.map((q) => (
                    <li key={q.questionId}>
                      {formatTime(q.secondsSpent)} · {q.topic} — rushed miss
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Panel>
        </div>

        <Panel>
          <h2 className="font-display text-2xl text-ink">Attempt history</h2>
          <ul className="mt-4 divide-y divide-ink/10">
            {attempts.slice(0, 10).map((a) => (
              <li key={a.id} className="flex justify-between gap-3 py-3 text-sm">
                <span className="text-ink/60">{new Date(a.completedAt).toLocaleString()}</span>
                <span className="font-mono font-semibold text-ink">{a.overallPercent}%</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
