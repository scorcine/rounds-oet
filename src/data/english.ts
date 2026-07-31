import type { CefrLevel, EnglishLesson, EnglishLevelMeta } from "@/domain/english";
import { CEFR_LEVEL_ORDER } from "@/domain/english";
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
    status: "ready",
  },
  {
    id: "A2",
    label: "A2 · Elementary",
    title: "Build real conversations",
    blurb: "Past, future plans, comparisons, health talk and short messages — Premium track coming next.",
    colorHint: "pulse",
    status: "construction",
  },
  {
    id: "B1",
    label: "B1 · Intermediate",
    title: "Express yourself clearly",
    blurb: "Narratives, opinions, work and travel English with more complex grammar.",
    colorHint: "ward",
    status: "construction",
  },
  {
    id: "B2",
    label: "B2 · Upper-intermediate",
    title: "Argue, explain and persuade",
    blurb: "Detailed discussion, formal writing and nuanced listening for real-life and exam prep.",
    colorHint: "pulse",
    status: "construction",
  },
  {
    id: "C1",
    label: "C1 · Advanced",
    title: "Fluent professional English",
    blurb: "Complex texts, precise vocabulary and confident speaking in academic and clinical contexts.",
    colorHint: "ward",
    status: "construction",
  },
  {
    id: "C2",
    label: "C2 · Proficiency",
    title: "Near-native mastery",
    blurb: "Subtle meaning, idioms and high-precision communication — bridge to expert OET performance.",
    colorHint: "pulse",
    status: "construction",
  },
];

/** Published lesson content (A1 premium live; A2 draft kept offline until unlocked). */
export const ENGLISH_LESSONS: EnglishLesson[] = [
  ...ENGLISH_A1_LESSONS.map(withPremium),
  ...ENGLISH_A1_REVIEWS,
].sort((a, b) => a.level.localeCompare(b.level) || a.order - b.order);

/** Draft banks not yet exposed in the UI */
export const ENGLISH_DRAFT_LESSONS: EnglishLesson[] = [
  ...ENGLISH_A2_LESSONS.map((l) => ({ ...l, kind: "lesson" as const })),
];

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
  return (CEFR_LEVEL_ORDER as string[]).includes(value);
}

export function isLevelReady(level: CefrLevel): boolean {
  return getLevelMeta(level)?.status === "ready";
}
