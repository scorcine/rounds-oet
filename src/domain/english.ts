export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type EnglishLevelStatus = "ready" | "construction";

export type EnglishQuizMcq = {
  id: string;
  type: "mcq";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type EnglishQuizGap = {
  id: string;
  type: "gap";
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
};

export type EnglishQuizItem = EnglishQuizMcq | EnglishQuizGap;

export type EnglishTeachBlock = {
  heading: string;
  body: string;
};

export type EnglishPhrase = {
  en: string;
  pt: string;
};

export type EnglishListening = {
  title: string;
  /** Doctor:/Patient: or Speaker: lines for dual-voice TTS */
  script: string;
  prompt: string;
  questions: EnglishQuizItem[];
};

export type EnglishSpeaking = {
  tip: string;
  /** Model lines the learner should practise saying */
  lines: string[];
};

export type EnglishWriting = {
  prompt: string;
  minWords: number;
  /** Soft check — any of these words should appear */
  keywords?: string[];
  sample: string;
};

export type EnglishLesson = {
  id: string;
  level: CefrLevel;
  order: number;
  title: string;
  topic: string;
  minutes: number;
  goals: string[];
  teach: EnglishTeachBlock[];
  phrases: EnglishPhrase[];
  quiz: EnglishQuizItem[];
  practiceTip?: string;
  kind?: "lesson" | "review";
  listening?: EnglishListening;
  speaking?: EnglishSpeaking;
  writing?: EnglishWriting;
  /** Extra drilling beyond the main quiz */
  drills?: EnglishQuizItem[];
};

export type EnglishLevelMeta = {
  id: CefrLevel;
  label: string;
  title: string;
  blurb: string;
  colorHint: string;
  status: EnglishLevelStatus;
};

/** Pass mark for marking a lesson complete */
export const ENGLISH_PASS_PERCENT = 70;

export const CEFR_LEVEL_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
