"use client";

import { useMemo, useRef, useState } from "react";
import type { ListeningExtract, ChoiceQuestion, GapQuestion } from "@/domain/types";
import { answersMatch } from "@/domain/skills";
import { recordAttempt } from "@/lib/progress";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";
import { speakDialogueDual } from "@/lib/listening-tts";

function isChoice(q: ChoiceQuestion | GapQuestion): q is ChoiceQuestion {
  return "options" in q;
}

export function ListeningPractice({ extract }: { extract: ListeningExtract }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const timer = useCountdown(extract.durationSec + 60, playing || submitted === false);
  const hasFile = Boolean(extract.audioUrl);

  const stop = () => {
    window.speechSynthesis?.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  const speakTts = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    speakDialogueDual(extract.transcript, extract.ttsScript, {
      onStart: () => setPlaying(true),
      onEnd: () => setPlaying(false),
    });
  };

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    if (hasFile && extract.audioUrl) {
      const el = audioRef.current;
      if (!el) {
        speakTts();
        return;
      }
      el.onended = () => setPlaying(false);
      el.onerror = () => {
        setPlaying(false);
        speakTts();
      };
      void el.play().then(() => setPlaying(true)).catch(() => speakTts());
      return;
    }
    speakTts();
  };

  const result = useMemo(() => {
    if (!submitted) return null;
    let correct = 0;
    const detail: Record<string, boolean> = {};
    for (const q of extract.questions) {
      const user = answers[q.id] ?? "";
      const ok = isChoice(q)
        ? Number(user) === q.correctIndex
        : answersMatch(user, q.answer, q.acceptedAnswers);
      detail[q.id] = ok;
      if (ok) correct += 1;
    }
    const scorePercent = Math.round((correct / extract.questions.length) * 100);
    return { correct, scorePercent, detail };
  }, [submitted, answers, extract]);

  const onSubmit = () => {
    setSubmitted(true);
    stop();
    let correct = 0;
    for (const q of extract.questions) {
      const user = answers[q.id] ?? "";
      const ok = isChoice(q)
        ? Number(user) === q.correctIndex
        : answersMatch(user, q.answer, q.acceptedAnswers);
      if (ok) correct += 1;
    }
    const scorePercent = Math.round((correct / extract.questions.length) * 100);
    recordAttempt({
      skill: "listening",
      contentId: extract.id,
      scorePercent,
      durationSec: extract.durationSec + 60 - timer.remaining,
    });
  };

  return (
    <div className="space-y-6">
      {extract.audioUrl ? (
        <audio ref={audioRef} src={extract.audioUrl} preload="metadata" className="hidden" />
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <TimerBadge label={timer.label} />
        <span className="rounded-md bg-ward/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ward">
          Part {extract.part}
        </span>
        <span className="text-sm text-ink/55">{extract.specialty}</span>
        {hasFile ? (
          <span className="rounded-md bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/60">
            Studio audio
          </span>
        ) : null}
      </div>

      <Panel>
        <h2 className="font-display text-2xl text-ink">{extract.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {hasFile
            ? "Play the recorded consultation. Answer while listening — exam style. Transcript is optional for review."
            : "Play the consultation (browser voice). Answer while listening — exam style. Transcript is optional for review."}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={play}
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            {playing ? "Stop audio" : hasFile ? "Play audio" : "Play audio (TTS)"}
          </button>
          <button
            type="button"
            onClick={() => setShowTranscript((v) => !v)}
            className="rounded-md border border-ink/15 px-4 py-2 text-sm font-medium text-ink"
          >
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>
        </div>
        {showTranscript && (
          <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-scrub/80 p-4 font-sans text-sm leading-relaxed text-ink/80">
            {extract.transcript}
          </pre>
        )}
      </Panel>

      <div className="space-y-4">
        {extract.questions.map((q, idx) => (
          <Panel key={q.id}>
            <p className="text-sm font-semibold text-ink">
              {idx + 1}. {q.prompt}
            </p>
            {isChoice(q) ? (
              <div className="mt-3 space-y-2">
                {q.options.map((opt, i) => (
                  <label
                    key={opt}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-ink/10 px-3 py-2 hover:bg-scrub/50"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      disabled={submitted}
                      checked={answers[q.id] === String(i)}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: String(i) }))}
                      className="mt-1"
                    />
                    <span className="text-sm text-ink/80">{opt}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input
                type="text"
                disabled={submitted}
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                className="mt-3 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none ring-ward focus:ring-2"
                placeholder="Type your answer"
              />
            )}
            {submitted && result && (
              <p
                className={`mt-3 text-sm ${result.detail[q.id] ? "text-ward" : "text-pulse"}`}
              >
                {result.detail[q.id] ? "Correct. " : "Not quite. "}
                {q.explanation}
                {!isChoice(q) && !result.detail[q.id] && (
                  <span className="block text-ink/60">Expected: {q.answer}</span>
                )}
              </p>
            )}
          </Panel>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-md bg-pulse px-5 py-2.5 text-sm font-semibold text-white"
        >
          Submit answers
        </button>
      ) : (
        result && (
          <Panel className="bg-scrub/60">
            <p className="font-display text-3xl text-ink">{result.scorePercent}%</p>
            <p className="mt-1 text-sm text-ink/65">
              {result.correct} of {extract.questions.length} correct · saved to Progress
            </p>
          </Panel>
        )
      )}
    </div>
  );
}
