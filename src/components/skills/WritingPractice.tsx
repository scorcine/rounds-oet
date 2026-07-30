"use client";

import { useState } from "react";
import type { WritingCase } from "@/domain/types";
import type { WritingFeedback } from "@/domain/feedback";
import { recordAttempt } from "@/lib/progress";
import { countWords } from "@/lib/utils";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";
import { WritingFeedbackPanel } from "@/components/feedback/FeedbackPanels";

export function WritingPractice({ writingCase }: { writingCase: WritingCase }) {
  const [started, setStarted] = useState(false);
  const [letter, setLetter] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [humanQueued, setHumanQueued] = useState(false);
  const timer = useCountdown(writingCase.timeLimitSec, started && !submitted);
  const words = countWords(letter);

  const onSubmit = async () => {
    setSubmitted(true);
    setLoading(true);
    try {
      const res = await fetch("/api/feedback/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseId: writingCase.id, letter }),
      });
      const data = (await res.json()) as WritingFeedback;
      setFeedback(data);
      recordAttempt({
        skill: "writing",
        contentId: writingCase.id,
        scorePercent: data.overallPercent,
        durationSec: writingCase.timeLimitSec - timer.remaining,
        details: {
          words: data.wordCount,
          grade: data.estimatedGrade,
          source: data.source,
        },
      });
    } catch {
      setFeedback(null);
    } finally {
      setLoading(false);
    }
  };

  if (!started) {
    return (
      <Panel>
        <h2 className="font-display text-2xl text-ink">{writingCase.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {writingCase.specialty} · {writingCase.taskType} · target {writingCase.wordTarget.min}–
          {writingCase.wordTarget.max} words · 40 min
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">{writingCase.task}</p>
        <p className="mt-3 text-xs text-ink/45">
          Phase 3: submit for rubric + estimated band (AI if OPENAI_API_KEY is set, otherwise local
          engine).
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Start writing
        </button>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <TimerBadge label={timer.label} />
        <span
          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
            words >= writingCase.wordTarget.min && words <= writingCase.wordTarget.max
              ? "bg-ward/10 text-ward"
              : "bg-ink/5 text-ink/60"
          }`}
        >
          {words} words
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel className="max-h-[75vh] overflow-y-auto">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">Case notes</h3>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {writingCase.caseNotes}
          </pre>
          <p className="mt-4 rounded-xl bg-scrub/70 p-3 text-sm text-ink/70">{writingCase.task}</p>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
              Your letter
            </label>
            <textarea
              value={letter}
              disabled={submitted}
              onChange={(e) => setLetter(e.target.value)}
              rows={18}
              className="mt-3 w-full resize-y rounded-xl border border-ink/15 bg-white p-3 text-sm leading-relaxed outline-none ring-ward focus:ring-2"
              placeholder="Write a full professional letter (not note form)…"
            />
          </Panel>

          {!submitted ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={letter.trim().length < 20}
              className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
            >
              Get AI / rubric feedback
            </button>
          ) : loading ? (
            <p className="text-sm text-ink/55">Scoring your letter…</p>
          ) : (
            feedback && (
              <>
                <WritingFeedbackPanel
                  feedback={feedback}
                  onRequestHuman={() => {
                    setHumanQueued(true);
                    try {
                      const key = "rounds-oet-human-reviews";
                      const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
                      prev.unshift({
                        type: "writing",
                        caseId: writingCase.id,
                        at: new Date().toISOString(),
                      });
                      localStorage.setItem(key, JSON.stringify(prev.slice(0, 20)));
                    } catch {
                      /* ignore */
                    }
                  }}
                />
                {humanQueued && (
                  <p className="text-sm text-ward">Human review queued (demo credits).</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowSample((v) => !v)}
                  className="text-sm font-semibold text-ward underline-offset-2 hover:underline"
                >
                  {showSample ? "Hide sample letter" : "Show sample letter"}
                </button>
                {showSample && (
                  <Panel className="bg-scrub/50">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
                      {writingCase.sampleLetter}
                    </pre>
                  </Panel>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
