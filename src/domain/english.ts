export type CefrLevel = "A1" | "A2";

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
  /** Optional tip shown under the phrase bank */
  practiceTip?: string;
};

export type EnglishLevelMeta = {
  id: CefrLevel;
  label: string;
  title: string;
  blurb: string;
  colorHint: string;
};
