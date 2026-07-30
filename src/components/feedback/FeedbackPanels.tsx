"use client";

import type { WritingFeedback, SpeakingFeedback } from "@/domain/feedback";
import { gradeLabel, percentToScore } from "@/domain/skills";
import { Panel } from "@/components/ui";
import { EstimatedBandDisclaimer } from "@/components/band/EstimatedBandReport";

export function WritingFeedbackPanel({
  feedback,
  onRequestHuman,
}: {
  feedback: WritingFeedback;
  onRequestHuman?: () => void;
}) {
  return (
    <div className="space-y-4">
      <Panel className="bg-ink text-paper">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-scrub/80">
              Writing feedback · {feedback.source === "ai" ? "AI" : "Local engine"}
            </p>
            <p className="mt-2 font-display text-5xl">{feedback.overallPercent}%</p>
            <p className="mt-1 text-sm text-paper/65">
              Estimated {gradeLabel(feedback.estimatedGrade)} · ≈{" "}
              {percentToScore(feedback.overallPercent)}/500 · {feedback.wordCount} words
              {feedback.wordTargetMet ? "" : " (outside target)"}
            </p>
            <p className="mt-1 text-xs text-paper/45">Estimated · not official</p>
          </div>
        </div>
      </Panel>

      <EstimatedBandDisclaimer />

      <div className="grid gap-3 sm:grid-cols-2">
        {feedback.rubric.map((r) => (
          <Panel key={r.id}>
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-ink">{r.criterion}</h3>
              <span className="font-mono text-sm text-ward">{r.scorePercent}%</span>
            </div>
            <div className="mt-2 flex gap-1">
              {[0, 1, 2, 3].map((b) => (
                <span
                  key={b}
                  className={`h-1.5 flex-1 rounded-full ${b <= r.band ? "bg-ward" : "bg-ink/10"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-ink/65">{r.comment}</p>
          </Panel>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="bg-scrub/50">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">Strengths</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            {feedback.strengths.map((s) => (
              <li key={s}>· {s}</li>
            ))}
            {!feedback.strengths.length && <li className="text-ink/45">Keep practising.</li>}
          </ul>
        </Panel>
        <Panel>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-pulse">
            Improvements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            {feedback.improvements.map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </Panel>
      </div>

      {feedback.rewrittenSnippet && (
        <Panel>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
            Suggested opener
          </h3>
          <p className="mt-2 text-sm italic text-ink/80">“{feedback.rewrittenSnippet}”</p>
        </Panel>
      )}

      {feedback.humanReviewAvailable && (
        <Panel className="border-dashed">
          <h3 className="font-display text-xl text-ink">Optional human review</h3>
          <p className="mt-1 text-sm text-ink/60">
            Credit-based tutor review (Phase 4 community). For now this queues a local request flag.
          </p>
          <button
            type="button"
            onClick={onRequestHuman}
            className="mt-3 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
          >
            Request human review (1 credit)
          </button>
        </Panel>
      )}
    </div>
  );
}

export function SpeakingFeedbackPanel({
  feedback,
  onRequestHuman,
}: {
  feedback: SpeakingFeedback;
  onRequestHuman?: () => void;
}) {
  return (
    <div className="space-y-4">
      <Panel className="bg-ink text-paper">
        <p className="text-xs uppercase tracking-[0.18em] text-scrub/80">
          Speaking feedback · {feedback.source === "ai" ? "AI" : "Local engine"}
        </p>
        <p className="mt-2 font-display text-5xl">{feedback.overallPercent}%</p>
        <p className="mt-1 text-sm text-paper/65">
          Estimated {gradeLabel(feedback.estimatedGrade)} · ≈{" "}
          {percentToScore(feedback.overallPercent)}/500
        </p>
        <p className="mt-1 text-xs text-paper/45">Estimated · not official</p>
      </Panel>

      <EstimatedBandDisclaimer />

      <div className="grid gap-3 sm:grid-cols-2">
        {feedback.criteria.map((c) => (
          <Panel key={c.id}>
            <div className="flex justify-between gap-2">
              <h3 className="font-semibold text-ink">{c.label}</h3>
              <span className="font-mono text-sm text-ward">{c.scorePercent}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-ward"
                style={{ width: `${c.scorePercent}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-ink/65">{c.comment}</p>
          </Panel>
        ))}
      </div>

      {feedback.phoneticFlags.length > 0 && (
        <Panel>
          <h3 className="font-display text-xl text-ink">Clarity heatmap</h3>
          <p className="mt-1 text-sm text-ink/55">
            Words/phrases to drill — not a full spectrogram, but exam-focused flags.
          </p>
          <ul className="mt-4 space-y-3">
            {feedback.phoneticFlags.map((f) => (
              <li key={`${f.word}-${f.issue}`} className="rounded-xl bg-scrub/60 p-3 text-sm">
                <p className="font-semibold text-ink">{f.word}</p>
                <p className="text-pulse">{f.issue}</p>
                <p className="mt-1 text-ink/65">{f.suggestion}</p>
              </li>
            ))}
          </ul>
        </Panel>
      )}

      {feedback.transcript && (
        <Panel>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">Transcript</h3>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink/75">
            {feedback.transcript}
          </p>
        </Panel>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="bg-scrub/50">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">Strengths</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            {feedback.strengths.map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-pulse">
            Improvements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            {feedback.improvements.map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </Panel>
      </div>

      {feedback.humanReviewAvailable && (
        <Panel className="border-dashed">
          <h3 className="font-display text-xl text-ink">Optional human review</h3>
          <p className="mt-1 text-sm text-ink/60">Credit-based tutor escalation (coming with community).</p>
          <button
            type="button"
            onClick={onRequestHuman}
            className="mt-3 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
          >
            Request human review (1 credit)
          </button>
        </Panel>
      )}
    </div>
  );
}
