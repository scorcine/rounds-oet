import type { CefrLevel, EnglishLesson, EnglishLevelMeta } from "@/domain/english";
import { ENGLISH_A1_LESSONS } from "./english-a1";
import { A1_PREMIUM_BY_ID } from "./english-a1-premium";
import { A1_DRILLS_BY_ID } from "./english-a1-drills";
import { ENGLISH_A1_REVIEWS } from "./english-a1-reviews";
import { ENGLISH_A2_LESSONS } from "./english-a2";

function withPremium(lesson: EnglishLesson): EnglishLesson {
  if (lesson.level !== "A1") return lesson;
  if (lesson.kind === "review") {
    const drills = A1_DRILLS_BY_ID[lesson.id];
    return drills?.length ? { ...lesson, drills, minutes: Math.max(lesson.minutes, 15) } : lesson;
  }
  const extras = A1_PREMIUM_BY_ID[lesson.id];
  const drills = A1_DRILLS_BY_ID[lesson.id];
  return {
    ...lesson,
    kind: "lesson",
    minutes: Math.max(lesson.minutes, drills?.length ? 18 : 12),
    listening: extras?.listening ?? lesson.listening,
    speaking: extras?.speaking ?? lesson.speaking,
    writing: extras?.writing ?? lesson.writing,
    drills: drills ?? lesson.drills,
  };
}

export const ENGLISH_LEVELS: EnglishLevelMeta[] = [
  {
    id: "A1",
    label: "A1 · Beginner Premium",
    title: "First steps in English",
    blurb:
      "20 lessons + 4 checkpoints: listen, speak with pronunciation score, write, extra drills, 70% quiz and A1 vocab in Study.",
    colorHint: "ward",
  },
  {
    id: "A2",
    label: "A2 · Elementary",
    title: "Build real conversations",
    blurb: "Past, future plans, comparisons, health talk and short messages. Expand after A1.",
    colorHint: "pulse",
  },
];

export const ENGLISH_LESSONS: EnglishLesson[] = [
  ...ENGLISH_A1_LESSONS.map(withPremium),
  ...ENGLISH_A1_REVIEWS,
  ...ENGLISH_A2_LESSONS.map((l) => ({ ...l, kind: "lesson" as const })),
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
