"use client";

import { useEffect, useRef, useState } from "react";
import type { SpeakingRolePlay } from "@/domain/types";
import { recordAttempt } from "@/lib/progress";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";

export function SpeakingPractice({ rolePlay }: { rolePlay: SpeakingRolePlay }) {
  const [started, setStarted] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timer = useCountdown(rolePlay.timeLimitSec, started && !submitted);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
        stream.getTracks().forEach((t) => t.stop());
      };
      mediaRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch {
      alert("Microphone permission is required to record your role-play.");
    }
  };

  const stopRecording = () => {
    mediaRef.current?.stop();
    setRecording(false);
  };

  const onSubmit = () => {
    setSubmitted(true);
    const checked = rolePlay.criteria.filter((_, i) => checks[`c${i}`]).length;
    const scorePercent = Math.round((checked / rolePlay.criteria.length) * 100);
    recordAttempt({
      skill: "speaking",
      contentId: rolePlay.id,
      scorePercent,
      durationSec: rolePlay.timeLimitSec - timer.remaining,
      details: { recorded: Boolean(audioUrl) },
    });
  };

  if (!started) {
    return (
      <Panel>
        <h2 className="font-display text-2xl text-ink">{rolePlay.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {rolePlay.setting} · {rolePlay.specialty} · ~{Math.round(rolePlay.timeLimitSec / 60)} min
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Prepare & start
        </button>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <TimerBadge label={timer.label} />
        <span className="text-sm text-ink/55">{rolePlay.setting}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
            Candidate card
          </h3>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {rolePlay.candidateCard}
          </pre>
        </Panel>
        <Panel className="bg-scrub/40">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-pulse">
            Interlocutor card (practice partner)
          </h3>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {rolePlay.interlocutorCard}
          </pre>
        </Panel>
      </div>

      <Panel>
        <h3 className="font-display text-xl text-ink">Record your turn</h3>
        <p className="mt-1 text-sm text-ink/60">
          Speak as the doctor. Use a partner for the patient role, or practice both sides.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {!recording ? (
            <button
              type="button"
              onClick={startRecording}
              className="rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
            >
              Start recording
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              Stop recording
            </button>
          )}
        </div>
        {audioUrl && (
          <audio controls src={audioUrl} className="mt-4 w-full" />
        )}
      </Panel>

      <Panel>
        <h3 className="font-display text-xl text-ink">Useful phrases</h3>
        <ul className="mt-3 space-y-2">
          {rolePlay.samplePhrases.map((p) => (
            <li key={p} className="rounded-lg bg-scrub/60 px-3 py-2 text-sm text-ink/80">
              “{p}”
            </li>
          ))}
        </ul>
      </Panel>

      <Panel>
        <h3 className="font-display text-xl text-ink">Self-assessment</h3>
        <ul className="mt-4 space-y-3">
          {rolePlay.criteria.map((c, i) => (
            <label key={c} className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={!!checks[`c${i}`]}
                onChange={(e) => setChecks((x) => ({ ...x, [`c${i}`]: e.target.checked }))}
                className="mt-1"
              />
              <span className="text-ink/80">{c}</span>
            </label>
          ))}
        </ul>
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitted}
          className="mt-5 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper disabled:opacity-50"
        >
          {submitted ? "Saved to Progress" : "Save score"}
        </button>
      </Panel>
    </div>
  );
}
