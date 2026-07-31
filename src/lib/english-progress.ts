import type { CefrLevel } from "@/domain/english";

const STORAGE_KEY = "rounds-english-progress-v1";

export type EnglishLessonResult = {
  lessonId: string;
  scorePercent: number;
  completedAt: string;
};

export type EnglishProgress = {
  completed: Record<string, EnglishLessonResult>;
  lastLessonId: string | null;
};

export const DEFAULT_ENGLISH_PROGRESS: EnglishProgress = {
  completed: {},
  lastLessonId: null,
};

export function loadEnglishProgress(): EnglishProgress {
  if (typeof window === "undefined") return DEFAULT_ENGLISH_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ENGLISH_PROGRESS;
    return { ...DEFAULT_ENGLISH_PROGRESS, ...JSON.parse(raw) } as EnglishProgress;
  } catch {
    return DEFAULT_ENGLISH_PROGRESS;
  }
}

export function saveEnglishProgress(progress: EnglishProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function recordEnglishLesson(
  lessonId: string,
  scorePercent: number,
): EnglishProgress {
  const prev = loadEnglishProgress();
  const next: EnglishProgress = {
    ...prev,
    lastLessonId: lessonId,
    completed: {
      ...prev.completed,
      [lessonId]: {
        lessonId,
        scorePercent,
        completedAt: new Date().toISOString(),
      },
    },
  };
  saveEnglishProgress(next);
  return next;
}

export function levelCompletion(
  lessonIds: string[],
  progress: EnglishProgress,
): { done: number; total: number; percent: number } {
  const total = lessonIds.length;
  const done = lessonIds.filter((id) => progress.completed[id]).length;
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
  };
}

export function isLessonComplete(lessonId: string, progress: EnglishProgress): boolean {
  return Boolean(progress.completed[lessonId]);
}

export function suggestedLevel(progress: EnglishProgress): CefrLevel {
  const a1Done = Object.keys(progress.completed).filter((id) => id.startsWith("en-a1-")).length;
  return a1Done >= 20 ? "A2" : "A1";
}
