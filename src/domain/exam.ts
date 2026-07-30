import type { Skill } from "./types";

export type ExamSectionId = "listening" | "reading" | "writing" | "speaking";

export interface QuestionTiming {
  questionId: string;
  contentId: string;
  skill: Skill;
  part?: string;
  topic: string;
  secondsSpent: number;
  correct: boolean | null; // null = unscored (writing/speaking self)
  prompt?: string;
}

export interface SectionResult {
  skill: ExamSectionId;
  allocatedSec: number;
  usedSec: number;
  scorePercent: number | null;
  correct: number;
  total: number;
  questionTimings: QuestionTiming[];
}

export interface ExamAttempt {
  id: string;
  startedAt: string;
  completedAt: string;
  overallPercent: number;
  sections: SectionResult[];
  pacing: PacingReport;
}

export interface PacingReport {
  /** positive = finished early (saved seconds), negative = overtime */
  sectionDeltas: { skill: ExamSectionId; deltaSec: number; status: "fast" | "on_pace" | "slow" }[];
  avgSecPerQuestion: number;
  slowestQuestions: QuestionTiming[];
  fastestWrong: QuestionTiming[];
}

export interface TopicErrorStat {
  topic: string;
  skill: Skill | "mixed";
  wrong: number;
  total: number;
  errorRate: number;
}

export interface SubtestStat {
  key: string;
  skill: Skill;
  part: string;
  attempts: number;
  avgPercent: number;
  bestPercent: number;
}

export interface ExamAnalytics {
  attempts: ExamAttempt[];
  subtests: SubtestStat[];
  topics: TopicErrorStat[];
  avgPacingSecPerQuestion: number | null;
  lastAttempt: ExamAttempt | null;
}

export const EXAM_SECTION_MINUTES: Record<ExamSectionId, number> = {
  listening: 45,
  reading: 60,
  writing: 45,
  speaking: 20,
};
