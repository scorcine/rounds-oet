/** Shared domain models — portable to React Native later. */

export type Skill = "listening" | "reading" | "writing" | "speaking";

export type OetGrade = "A" | "B" | "C+" | "C" | "D" | "E";

export type Difficulty = "foundation" | "intermediate" | "exam";

export interface ChoiceQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GapQuestion {
  id: string;
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
}

export interface ListeningExtract {
  id: string;
  part: "A" | "B" | "C";
  title: string;
  specialty: string;
  durationSec: number;
  transcript: string;
  /** Spoken script segments for browser TTS when no audio file exists */
  ttsScript: string;
  /** Optional original MP3/WAV under /public (never copyrighted film audio) */
  audioUrl?: string;
  questions: (ChoiceQuestion | GapQuestion)[];
}

export interface ReadingPassage {
  id: string;
  part: "A" | "B" | "C";
  title: string;
  specialty: string;
  timeLimitSec: number;
  text: string;
  questions: (ChoiceQuestion | GapQuestion)[];
}

export interface WritingCase {
  id: string;
  title: string;
  specialty: string;
  taskType: "referral" | "discharge" | "transfer" | "advice";
  timeLimitSec: number;
  wordTarget: { min: number; max: number };
  caseNotes: string;
  task: string;
  sampleLetter: string;
  rubric: WritingRubricItem[];
}

export interface WritingRubricItem {
  id: string;
  criterion: string;
  description: string;
}

export interface SpeakingRolePlay {
  id: string;
  title: string;
  setting: string;
  specialty: string;
  timeLimitSec: number;
  candidateCard: string;
  interlocutorCard: string;
  criteria: string[];
  samplePhrases: string[];
}

export interface VocabEntry {
  id: string;
  term: string;
  definition: string;
  specialty: string;
  example: string;
  collocations: string[];
}

export interface AttemptRecord {
  id: string;
  skill: Skill;
  contentId: string;
  scorePercent: number;
  completedAt: string;
  durationSec: number;
  details?: Record<string, unknown>;
}

export interface UserProgress {
  attempts: AttemptRecord[];
  vocabMastered: string[];
  streakDays: number;
  lastActiveDate: string | null;
  targetGrade: OetGrade;
  goals: Partial<Record<Skill, OetGrade>>;
}
