"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/lib/utils";

export function useCountdown(initialSec: number, running: boolean) {
  const [remaining, setRemaining] = useState(initialSec);

  useEffect(() => {
    setRemaining(initialSec);
  }, [initialSec]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  return {
    remaining,
    label: formatTime(remaining),
    expired: remaining <= 0,
    reset: () => setRemaining(initialSec),
  };
}

export function TimerBadge({
  label,
  warnBelow = 60,
}: {
  label: string;
  warnBelow?: number;
}) {
  const seconds = label.split(":").reduce((acc, part, i, arr) => {
    const n = Number(part);
    if (arr.length === 2) return i === 0 ? n * 60 : acc + n;
    return acc;
  }, 0);
  const warn = seconds <= warnBelow;
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 font-mono text-sm tabular-nums ${
        warn ? "bg-pulse/15 text-pulse" : "bg-ink/5 text-ink"
      }`}
    >
      {label}
    </span>
  );
}
