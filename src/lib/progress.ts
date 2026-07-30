import type { UserProgress, AttemptRecord, Skill, VocabEntry } from "@/domain/types";

const STORAGE_KEY = "rounds-oet-progress-v1";

export const DEFAULT_PROGRESS: UserProgress = {
  attempts: [],
  vocabMastered: [],
  streakDays: 0,
  lastActiveDate: null,
  targetGrade: "B",
  goals: {
    listening: "B",
    reading: "B",
    writing: "B",
    speaking: "B",
  },
};

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function computeStreak(prev: UserProgress): { streakDays: number; lastActiveDate: string } {
  const today = todayISO();
  if (!prev.lastActiveDate) {
    return { streakDays: 1, lastActiveDate: today };
  }
  if (prev.lastActiveDate === today) {
    return { streakDays: prev.streakDays || 1, lastActiveDate: today };
  }
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const y = yesterday.toISOString().slice(0, 10);
  if (prev.lastActiveDate === y) {
    return { streakDays: (prev.streakDays || 0) + 1, lastActiveDate: today };
  }
  return { streakDays: 1, lastActiveDate: today };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } as UserProgress;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function recordAttempt(
  partial: Omit<AttemptRecord, "id" | "completedAt">,
): UserProgress {
  const prev = loadProgress();
  const streak = computeStreak(prev);
  const attempt: AttemptRecord = {
    ...partial,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    completedAt: new Date().toISOString(),
  };
  const next: UserProgress = {
    ...prev,
    ...streak,
    attempts: [attempt, ...prev.attempts].slice(0, 200),
  };
  saveProgress(next);
  return next;
}

export function toggleVocabMastered(termId: string): UserProgress {
  const prev = loadProgress();
  const set = new Set(prev.vocabMastered);
  if (set.has(termId)) set.delete(termId);
  else set.add(termId);
  const next = { ...prev, vocabMastered: [...set] };
  saveProgress(next);
  return next;
}

export function skillStats(progress: UserProgress, skill: Skill) {
  const items = progress.attempts.filter((a) => a.skill === skill);
  if (!items.length) {
    return { attempts: 0, avg: null as number | null, best: null as number | null, last: null as AttemptRecord | null };
  }
  const avg = Math.round(items.reduce((s, a) => s + a.scorePercent, 0) / items.length);
  const best = Math.max(...items.map((a) => a.scorePercent));
  return { attempts: items.length, avg, best, last: items[0] };
}

export function overallReadiness(progress: UserProgress): number {
  const skills: Skill[] = ["listening", "reading", "writing", "speaking"];
  const scores = skills.map((s) => skillStats(progress, s).avg ?? 0);
  return Math.round(scores.reduce((a, b) => a + b, 0) / skills.length);
}

export function filterVocab(
  entries: VocabEntry[],
  query: string,
  specialty: string | "all",
): VocabEntry[] {
  const q = query.trim().toLowerCase();
  return entries.filter((e) => {
    const specialtyOk = specialty === "all" || e.specialty === specialty;
    if (!specialtyOk) return false;
    if (!q) return true;
    return (
      e.term.toLowerCase().includes(q) ||
      e.definition.toLowerCase().includes(q) ||
      e.specialty.toLowerCase().includes(q)
    );
  });
}
