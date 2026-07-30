import { BADGE_DEFS } from "@/domain/account";
import type { SyncPayload } from "@/domain/account";

const BADGES_KEY = "rounds-oet-badges-v1";

export function loadBadges(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(BADGES_KEY) || "[]") as string[];
  } catch {
    return [];
  }
}

export function saveBadges(ids: string[]): void {
  localStorage.setItem(BADGES_KEY, JSON.stringify([...new Set(ids)]));
}

export function evaluateBadges(payload: SyncPayload): string[] {
  const unlocked = new Set(payload.badgesUnlocked);
  if (payload.study.diagnostic) unlocked.add("first-diagnostic");
  if (payload.progress.streakDays >= 3) unlocked.add("streak-3");
  if (payload.progress.streakDays >= 7) unlocked.add("streak-7");
  if (payload.study.xp >= 100) unlocked.add("xp-100");
  if (payload.study.xp >= 500) unlocked.add("xp-500");
  if (payload.exams.length >= 1) unlocked.add("exam-1");

  const writingHigh = payload.progress.attempts.some(
    (a) => a.skill === "writing" && a.scorePercent >= 80,
  );
  const speakingHigh = payload.progress.attempts.some(
    (a) => a.skill === "speaking" && a.scorePercent >= 80,
  );
  if (writingHigh) unlocked.add("writing-b");
  if (speakingHigh) unlocked.add("speaking-b");

  return [...unlocked];
}

export function badgeMeta(id: string) {
  return BADGE_DEFS.find((b) => b.id === id);
}
