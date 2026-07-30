"use client";

import { useEffect, useRef, useState } from "react";
import type { SpeakingRolePlay } from "@/domain/types";
import type { SpeakingFeedback } from "@/domain/feedback";
import { recordAttempt } from "@/lib/progress";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";
import { SpeakingFeedbackPanel } from "@/components/feedback/FeedbackPanels";

type SpeechRec = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: { results: ArrayLike<{ 0: { transcript: string }; isFinal: boolean }> }) => void) | null;
  onerror: (() => void) | null;
};

function getSpeechRecognition(): (new () => SpeechRec) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

export function SpeakingPractice({ rolePlay }: { rolePlay: SpeakingRolePlay }) {
  const [started, setStarted] = useState(false);
  const [recording, setRecording] = useState(false);
  const [listening, setListening] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<SpeakingFeedback | null>(null);
  const [humanQueued, setHumanQueued] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRec | null>(null);
  const timer = useCountdown(rolePlay.timeLimitSec, started && !submitted);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      recognitionRef.current?.stop();
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

  const startSpeechToText = () => {
    const Ctor = getSpeechRecognition();
    if (!Ctor) {
      alert("Speech recognition is not supported in this browser. Paste your transcript instead.");
      return;
    }
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-GB";
    rec.onresult = (event) => {
      let finalText = "";
      for (let i = 0; i < event.results.length; i++) {
        const piece = event.results[i];
        if (piece.isFinal) finalText += piece[0].transcript + " ";
      }
      if (finalText) {
        setTranscript((t) => `${t} ${finalText}`.replace(/\s+/g, " ").trim());
      }
    };
    rec.onerror = () => setListening(false);
    recognitionRef.current = rec;
    rec.start();
    setListening(true);
  };

  const stopSpeechToText = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const onSubmit = async () => {
    setSubmitted(true);
    setLoading(true);
    stopSpeechToText();
    stopRecording();
    try {
      const res = await fetch("/api/feedback/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rolePlayId: rolePlay.id, transcript }),
      });
      const data = (await res.json()) as SpeakingFeedback;
      setFeedback(data);
      recordAttempt({
        skill: "speaking",
        contentId: rolePlay.id,
        scorePercent: data.overallPercent,
        durationSec: rolePlay.timeLimitSec - timer.remaining,
        details: {
          recorded: Boolean(audioUrl),
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
        <h2 className="font-display text-2xl text-ink">{rolePlay.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {rolePlay.setting} · {rolePlay.specialty} · ~{Math.round(rolePlay.timeLimitSec / 60)} min
        </p>
        <p className="mt-3 text-xs text-ink/45">
          Phase 3: record + live transcript → scored on Intelligibility, Fluency, Appropriateness,
          Resources.
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
            Interlocutor card
          </h3>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/80">
            {rolePlay.interlocutorCard}
          </pre>
        </Panel>
      </div>

      {!submitted && (
        <>
          <Panel>
            <h3 className="font-display text-xl text-ink">Record & transcribe</h3>
            <p className="mt-1 text-sm text-ink/60">
              Record audio for review, and capture speech-to-text for AI scoring.
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
              {!listening ? (
                <button
                  type="button"
                  onClick={startSpeechToText}
                  className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
                >
                  Start live transcript
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopSpeechToText}
                  className="rounded-md border border-ward/40 bg-ward/10 px-4 py-2 text-sm font-semibold text-ward"
                >
                  Stop transcript
                </button>
              )}
            </div>
            {audioUrl && <audio controls src={audioUrl} className="mt-4 w-full" />}
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              rows={6}
              className="mt-4 w-full rounded-xl border border-ink/15 p-3 text-sm"
              placeholder="Live transcript appears here — you can also paste what you said…"
            />
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

          <button
            type="button"
            onClick={onSubmit}
            disabled={transcript.trim().length < 10}
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper disabled:opacity-40"
          >
            Score speaking (AI / local)
          </button>
        </>
      )}

      {submitted && loading && <p className="text-sm text-ink/55">Scoring your role-play…</p>}
      {submitted && !loading && feedback && (
        <>
          <SpeakingFeedbackPanel
            feedback={feedback}
            onRequestHuman={() => {
              setHumanQueued(true);
              try {
                const key = "rounds-oet-human-reviews";
                const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
                prev.unshift({
                  type: "speaking",
                  rolePlayId: rolePlay.id,
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
        </>
      )}
    </div>
  );
}
