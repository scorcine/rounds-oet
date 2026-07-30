import type { CefrLevel, EnglishLesson, EnglishLevelMeta } from "@/domain/english";
import { ENGLISH_A1_LESSONS } from "./english-a1";
import { ENGLISH_A2_LESSONS } from "./english-a2";

export const ENGLISH_LEVELS: EnglishLevelMeta[] = [
  {
    id: "A1",
    label: "A1 · Beginner",
    title: "First steps in English",
    blurb: "Greetings, to be, numbers, daily life and simple clinic phrases.",
    colorHint: "ward",
  },
  {
    id: "A2",
    label: "A2 · Elementary",
    title: "Build real conversations",
    blurb: "Past, future plans, comparisons, health talk and short messages.",
    colorHint: "pulse",
  },
];

export const ENGLISH_LESSONS: EnglishLesson[] = [
  ...ENGLISH_A1_LESSONS,
  ...ENGLISH_A2_LESSONS,
].sort((a, b) => a.level.localeCompare(b.level) || a.order - b.order);

export function getLessonsByLevel(level: CefrLevel): EnglishLesson[] {
  return ENGLISH_LESSONS.filter((l) => l.level === level).sort((a, b) => a.order - b.order);
}

export function getEnglishLesson(id: string): EnglishLesson | undefined {
  return ENGLISH_LESSONS.find((l) => l.id === id);
}

export function getLevelMeta(level: CefrLevel): EnglishLevelMeta | undefined {
  return ENGLISH_LEVELS.find((l) => l.id === level);
}

export function isCefrLevel(value: string): value is CefrLevel {
  return value === "A1" || value === "A2";
}
