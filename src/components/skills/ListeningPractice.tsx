"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ListeningExtract, ChoiceQuestion, GapQuestion } from "@/domain/types";
import { answersMatch } from "@/domain/skills";
import { recordAttempt } from "@/lib/progress";
import { useCountdown, TimerBadge } from "@/components/Timer";
import { Panel } from "@/components/ui";
import { speakDialogueDual } from "@/lib/listening-tts";
import { formatTime } from "@/lib/utils";

function isChoice(q: ChoiceQuestion | GapQuestion): q is ChoiceQuestion {
  return "options" in q;
}

export function ListeningPractice({ extract }: { extract: ListeningExtract }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ttsTickRef = useRef<number | null>(null);
  const usingTtsRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [currentSec, setCurrentSec] = useState(0);
  const [durationSec, setDurationSec] = useState(extract.durationSec);
  const [fileReady, setFileReady] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const timer = useCountdown(extract.durationSec + 60, playing || submitted === false);
  const hasFile = Boolean(extract.audioUrl);

  const clearTtsTick = () => {
    if (ttsTickRef.current != null) {
      window.clearInterval(ttsTickRef.current);
      ttsTickRef.current = null;
    }
  };

  const stopTtsClock = () => {
    clearTtsTick();
  };

  const startTtsClock = (fromSec: number, total: number) => {
    clearTtsTick();
    const startedAt = performance.now() - fromSec * 1000;
    ttsTickRef.current = window.setInterval(() => {
      const elapsed = (performance.now() - startedAt) / 1000;
      if (elapsed >= total) {
        setCurrentSec(total);
        clearTtsTick();
        return;
      }
      setCurrentSec(elapsed);
    }, 200);
  };

  const cancelAllAudio = (resetPosition: boolean) => {
    window.speechSynthesis?.cancel();
    stopTtsClock();
    usingTtsRef.current = false;
    const el = audioRef.current;
    if (el) {
      el.pause();
      if (resetPosition) el.currentTime = 0;
    }
    if (resetPosition) setCurrentSec(0);
    setPlaying(false);
  };

  useEffect(() => {
    cancelAllAudio(true);
    setDurationSec(extract.durationSec);
    setFileReady(false);
    setAnswers({});
    setSubmitted(false);
    setShowTranscript(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset when extract changes
  }, [extract.id]);

  useEffect(() => () => cancelAllAudio(true), []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !hasFile) return;

    const onLoaded = () => {
      if (Number.isFinite(el.duration) && el.duration > 0) {
        setDurationSec(el.duration);
        setFileReady(true);
      }
    };
    const onTime = () => {
      if (!usingTtsRef.current) setCurrentSec(el.currentTime);
    };
    const onEnded = () => {
      setPlaying(false);
      setCurrentSec(el.duration || 0);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => {
      if (!usingTtsRef.current) setPlaying(false);
    };

    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("durationchange", onLoaded);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnded);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    if (el.readyState >= 1) onLoaded();

    return () => {
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("durationchange", onLoaded);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, [hasFile, extract.audioUrl, extract.id]);

  const speakTts = (fromSec = currentSec) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const total = Math.max(durationSec || extract.durationSec, 1);
    const ratio = Math.min(0.98, Math.max(0, fromSec / total));
    usingTtsRef.current = true;
    if (audioRef.current) audioRef.current.pause();
    speakDialogueDual(
      extract.transcript,
      extract.ttsScript,
      {
        onStart: () => {
          setPlaying(true);
          startTtsClock(fromSec, total);
        },
        onEnd: () => {
          stopTtsClock();
          usingTtsRef.current = false;
          setPlaying(false);
          setCurrentSec(total);
        },
      },
      { startRatio: ratio },
    );
  };

  const playFile = () => {
    const el = audioRef.current;
    if (!el) {
      speakTts(currentSec);
      return;
    }
    usingTtsRef.current = false;
    window.speechSynthesis?.cancel();
    stopTtsClock();
    el.onerror = () => {
      setFileReady(false);
      speakTts(currentSec);
    };
    void el.play().then(() => setPlaying(true)).catch(() => speakTts(currentSec));
  };

  const togglePlay = () => {
    if (playing) {
      if (usingTtsRef.current) {
        window.speechSynthesis?.cancel();
        stopTtsClock();
        usingTtsRef.current = false;
        setPlaying(false);
        return;
      }
      audioRef.current?.pause();
      setPlaying(false);
      return;
    }
    if (hasFile && fileReady && audioRef.current) {
      playFile();
      return;
    }
    if (hasFile && audioRef.current) {
      playFile();
      return;
    }
    speakTts(currentSec);
  };

  const seekTo = (sec: number) => {
    const total = Math.max(durationSec || extract.durationSec, 1);
    const next = Math.min(total, Math.max(0, sec));
    setCurrentSec(next);

    if (hasFile && audioRef.current && !usingTtsRef.current && fileReady) {
      audioRef.current.currentTime = next;
      return;
    }

    // TTS (or file fallback): restart from scrub position if currently playing
    if (playing || usingTtsRef.current) {
      speakTts(next);
    }
  };

  const onScrub = (value: number) => {
    seekTo(value);
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
    cancelAllAudio(false);
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

  const total = Math.max(durationSec || extract.durationSec, 1);
  const progressPct = Math.min(100, (currentSec / total) * 100);

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
        ) : (
          <span className="rounded-md bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/60">
            Browser voice
          </span>
        )}
      </div>

      <Panel>
        <h2 className="font-display text-2xl text-ink">{extract.title}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {hasFile
            ? "Play the recorded consultation. Drag the bar to jump. Transcript is optional for review."
            : "Play the consultation (browser voice). Drag the bar to jump ahead. Transcript is optional for review."}
        </p>

        <div className="mt-5 rounded-xl border border-ink/10 bg-scrub/40 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={() => cancelAllAudio(true)}
              className="rounded-md border border-ink/15 px-4 py-2 text-sm font-medium text-ink"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={() => setShowTranscript((v) => !v)}
              className="rounded-md border border-ink/15 px-4 py-2 text-sm font-medium text-ink"
            >
              {showTranscript ? "Hide transcript" : "Show transcript"}
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="w-10 shrink-0 font-mono text-xs tabular-nums text-ink/55">
              {formatTime(Math.floor(currentSec))}
            </span>
            <div className="relative min-w-0 flex-1">
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-ink/10" />
              <div
                className="pointer-events-none absolute top-1/2 left-0 h-1.5 -translate-y-1/2 rounded-full bg-ward"
                style={{ width: `${progressPct}%` }}
              />
              <input
                type="range"
                min={0}
                max={total}
                step={0.1}
                value={Math.min(currentSec, total)}
                onChange={(e) => onScrub(Number(e.target.value))}
                aria-label="Seek audio position"
                className="relative z-10 h-8 w-full cursor-pointer appearance-none bg-transparent accent-ward"
              />
            </div>
            <span className="w-10 shrink-0 text-right font-mono text-xs tabular-nums text-ink/55">
              {formatTime(Math.floor(total))}
            </span>
          </div>
          <p className="mt-1 text-xs text-ink/45">
            Drag to reposition
            {hasFile
              ? " · studio files scrub precisely"
              : " · browser voice restarts from the new point"}
          </p>
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
