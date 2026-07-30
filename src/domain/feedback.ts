import type { OetGrade } from "./types";

export type FeedbackSource = "heuristic" | "ai";

export interface RubricScore {
  id: string;
  criterion: string;
  band: 0 | 1 | 2 | 3; // 0 weak → 3 strong (OET-like scale condensed)
  scorePercent: number;
  comment: string;
}

export interface WritingFeedback {
  source: FeedbackSource;
  estimatedGrade: OetGrade;
  overallPercent: number;
  wordCount: number;
  wordTargetMet: boolean;
  rubric: RubricScore[];
  strengths: string[];
  improvements: string[];
  rewrittenSnippet?: string;
  humanReviewAvailable: boolean;
}

export type SpeakingCriterionId =
  | "intelligibility"
  | "fluency"
  | "appropriateness"
  | "resources";

export interface SpeakingCriterionScore {
  id: SpeakingCriterionId;
  label: string;
  scorePercent: number;
  comment: string;
}

/** Lightweight “heatmap”: flagged words/phrases for clarity practice */
export interface PhoneticFlag {
  word: string;
  issue: string;
  suggestion: string;
}

export interface SpeakingFeedback {
  source: FeedbackSource;
  estimatedGrade: OetGrade;
  overallPercent: number;
  transcript: string;
  criteria: SpeakingCriterionScore[];
  phoneticFlags: PhoneticFlag[];
  strengths: string[];
  improvements: string[];
  humanReviewAvailable: boolean;
}

export const SPEAKING_CRITERION_LABELS: Record<SpeakingCriterionId, string> = {
  intelligibility: "Intelligibility",
  fluency: "Fluency",
  appropriateness: "Appropriateness",
  resources: "Resources of grammar & expression",
};
