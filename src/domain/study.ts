/** Phase 1 — adaptive study domain (portable to mobile). */

export type CompetencyId =
  | "medical_vocabulary"
  | "functional_grammar"
  | "communicative_functions"
  | "exam_strategies";

export interface CompetencyMeta {
  id: CompetencyId;
  label: string;
  short: string;
  description: string;
  color: string;
}

export const COMPETENCIES: CompetencyMeta[] = [
  {
    id: "medical_vocabulary",
    label: "Medical vocabulary",
    short: "Vocab",
    description: "Clinical terms, collocations, abbreviations and patient-friendly alternatives.",
    color: "ward",
  },
  {
    id: "functional_grammar",
    label: "Functional grammar",
    short: "Grammar",
    description: "Tenses, modality, articles and structures that carry clinical meaning.",
    color: "pulse",
  },
  {
    id: "communicative_functions",
    label: "Communicative functions",
    short: "Functions",
    description: "Explain, reassure, advise, elicit history and structure professional letters.",
    color: "amber",
  },
  {
    id: "exam_strategies",
    label: "Exam strategies",
    short: "Strategies",
    description: "Timing, note-taking, skimming/scanning and task fulfilment under pressure.",
    color: "ink",
  },
];

export type SrsRating = 1 | 2 | 3 | 4; // Again | Hard | Good | Easy

export interface SrsCardTemplate {
  id: string;
  competency: CompetencyId;
  front: string;
  back: string;
  hint?: string;
  tags?: string[];
}

/** Runtime card state (Anki-style SM-2 fields). */
export interface SrsCardState {
  cardId: string;
  ease: number;
  interval: number;
  repetitions: number;
  due: string; // ISO date YYYY-MM-DD
  lapses: number;
  lastRating?: SrsRating;
  lastReviewedAt?: string;
}

export interface DiagnosticQuestion {
  id: string;
  competency: CompetencyId;
  skillHint?: "listening" | "reading" | "writing" | "speaking";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CompetencyScore {
  competency: CompetencyId;
  correct: number;
  total: number;
  percent: number;
  /** 0–100 mastery estimate used for adaptive recommendations */
  mastery: number;
}

export interface DiagnosticResult {
  completedAt: string;
  overallPercent: number;
  byCompetency: CompetencyScore[];
  weakCompetencies: CompetencyId[];
  recommendedDailyGoal: number;
}

export interface DailyStudyStats {
  date: string;
  reviewsDone: number;
  newIntroduced: number;
  goal: number;
}

export interface StudyState {
  diagnostic: DiagnosticResult | null;
  cards: Record<string, SrsCardState>;
  daily: DailyStudyStats;
  dailyGoal: number;
  xp: number;
}
