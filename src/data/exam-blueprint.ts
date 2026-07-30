import { LISTENING_EXTRACTS } from "@/data/listening";
import { READING_PASSAGES } from "@/data/reading";
import { WRITING_CASES } from "@/data/writing";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import type {
  ListeningExtract,
  ReadingPassage,
  WritingCase,
  SpeakingRolePlay,
} from "@/domain/types";

export type ExamPaperId = 1 | 2 | 3 | 4 | 5;

const PAPER_SETS: Record<
  ExamPaperId,
  { listening: readonly string[]; reading: readonly string[]; label: string; theme: string }
> = {
  1: {
    label: "Paper 1",
    theme: "ACS · COPD · core wards",
    listening: [
      "lis-fa-1",
      "lis-fa-2",
      "lis-fb-1",
      "lis-fb-2",
      "lis-fb-3",
      "lis-fb-4",
      "lis-fb-5",
      "lis-fb-6",
      "lis-fc-1",
      "lis-fc-2",
    ],
    reading: [
      "read-fa-1",
      "read-fb-1",
      "read-fb-2",
      "read-fb-3",
      "read-fb-4",
      "read-fb-5",
      "read-fb-6",
      "read-fc-1",
      "read-fc-2",
    ],
  },
  2: {
    label: "Paper 2",
    theme: "Stroke · asthma · PE / acute care",
    listening: [
      "lis-fa2-1",
      "lis-fa2-2",
      "lis-fb2-1",
      "lis-fb2-2",
      "lis-fb2-3",
      "lis-fb2-4",
      "lis-fb2-5",
      "lis-fb2-6",
      "lis-fc2-1",
      "lis-fc2-2",
    ],
    reading: [
      "read-fa2-1",
      "read-fb2-1",
      "read-fb2-2",
      "read-fb2-3",
      "read-fb2-4",
      "read-fb2-5",
      "read-fb2-6",
      "read-fc2-1",
      "read-fc2-2",
    ],
  },
  3: {
    label: "Paper 3",
    theme: "PE · CKD · sepsis / AKI",
    listening: [
      "lis-fa3-1",
      "lis-fa3-2",
      "lis-fb3-1",
      "lis-fb3-2",
      "lis-fb3-3",
      "lis-fb3-4",
      "lis-fb3-5",
      "lis-fb3-6",
      "lis-fc3-1",
      "lis-fc3-2",
    ],
    reading: [
      "read-fa3-1",
      "read-fb3-1",
      "read-fb3-2",
      "read-fb3-3",
      "read-fb3-4",
      "read-fb3-5",
      "read-fb3-6",
      "read-fc3-1",
      "read-fc3-2",
    ],
  },
  4: {
    label: "Paper 4",
    theme: "GI bleed · cholangitis / hepatobiliary",
    listening: [
      "lis-fa4-1",
      "lis-fa4-2",
      "lis-fb4-1",
      "lis-fb4-2",
      "lis-fb4-3",
      "lis-fb4-4",
      "lis-fb4-5",
      "lis-fb4-6",
      "lis-fc4-1",
      "lis-fc4-2",
    ],
    reading: [
      "read-fa4-1",
      "read-fb4-1",
      "read-fb4-2",
      "read-fb4-3",
      "read-fb4-4",
      "read-fb4-5",
      "read-fb4-6",
      "read-fc4-1",
      "read-fc4-2",
    ],
  },
  5: {
    label: "Paper 5",
    theme: "DKA · hypoglycaemia · diabetic foot",
    listening: [
      "lis-fa5-1",
      "lis-fa5-2",
      "lis-fb5-1",
      "lis-fb5-2",
      "lis-fb5-3",
      "lis-fb5-4",
      "lis-fb5-5",
      "lis-fb5-6",
      "lis-fc5-1",
      "lis-fc5-2",
    ],
    reading: [
      "read-fa5-1",
      "read-fb5-1",
      "read-fb5-2",
      "read-fb5-3",
      "read-fb5-4",
      "read-fb5-5",
      "read-fb5-6",
      "read-fc5-1",
      "read-fc5-2",
    ],
  },
};

const WRITING_BY_PAPER: Record<ExamPaperId, string> = {
  1: "writ-1",
  2: "writ-3",
  3: "writ-6",
  4: "writ-2",
  5: "writ-4",
};

const SPEAKING_BY_PAPER: Record<ExamPaperId, readonly string[]> = {
  1: ["spk-1", "spk-2"],
  2: ["spk-4", "spk-8"],
  3: ["spk-10", "spk-11"],
  4: ["spk-3", "spk-5"],
  5: ["spk-6", "spk-7"],
};

export const OFFICIAL_TARGETS = {
  listeningQuestions: 42,
  readingQuestions: 42,
  writingLetters: 1,
  speakingRolePlays: 2,
} as const;

export const EXAM_PAPERS = (Object.keys(PAPER_SETS) as unknown as ExamPaperId[]).map((id) => ({
  id: Number(id) as ExamPaperId,
  ...PAPER_SETS[Number(id) as ExamPaperId],
}));

function pickById<T extends { id: string }>(all: T[], ids: readonly string[]): T[] {
  const map = new Map(all.map((x) => [x.id, x]));
  return ids.map((id) => map.get(id)).filter((x): x is T => Boolean(x));
}

export interface MockExamBlueprint {
  paperId: ExamPaperId;
  paperLabel: string;
  paperTheme: string;
  listening: ListeningExtract[];
  reading: ReadingPassage[];
  writing: WritingCase;
  speaking: SpeakingRolePlay[];
  listeningPlaysPerExtract: number;
  readingPartASec: number;
  readingPartBCSec: number;
  listeningQuestionCount: number;
  readingQuestionCount: number;
  coveragePercent: number;
  audioReadyCount: number;
  realismNotes: string[];
}

export function getMockExamBlueprint(paperId: ExamPaperId = 1): MockExamBlueprint {
  const set = PAPER_SETS[paperId] ?? PAPER_SETS[1];
  const listening = pickById(LISTENING_EXTRACTS, set.listening);
  const reading = pickById(READING_PASSAGES, set.reading);
  const writing =
    WRITING_CASES.find((c) => c.id === WRITING_BY_PAPER[paperId]) ?? WRITING_CASES[0];
  const speaking = pickById(SPEAKING_ROLEPLAYS, SPEAKING_BY_PAPER[paperId]);

  const listenQ = listening.reduce((n, e) => n + e.questions.length, 0);
  const readQ = reading.reduce((n, e) => n + e.questions.length, 0);
  const audioReadyCount = listening.filter((e) => e.audioUrl).length;
  const coveragePercent = Math.round(
    ((Math.min(listenQ, OFFICIAL_TARGETS.listeningQuestions) +
      Math.min(readQ, OFFICIAL_TARGETS.readingQuestions)) /
      (OFFICIAL_TARGETS.listeningQuestions + OFFICIAL_TARGETS.readingQuestions)) *
      100,
  );

  return {
    paperId,
    paperLabel: set.label,
    paperTheme: set.theme,
    listening,
    reading,
    writing,
    speaking: speaking.length >= 2 ? speaking : SPEAKING_ROLEPLAYS.slice(0, 2),
    listeningPlaysPerExtract: 2,
    readingPartASec: 15 * 60,
    readingPartBCSec: 45 * 60,
    listeningQuestionCount: listenQ,
    readingQuestionCount: readQ,
    coveragePercent,
    audioReadyCount,
    realismNotes: [
      `${set.label}: ${set.theme}`,
      `Listening: ${listenQ}/${OFFICIAL_TARGETS.listeningQuestions} Q · studio audio on ${audioReadyCount}/${listening.length} extracts.`,
      `Reading: ${readQ}/${OFFICIAL_TARGETS.readingQuestions} Q · Part A includes cross-document matching.`,
      "Writing: 1 letter · Speaking: 2 role-plays.",
      "Estimated bands are for study only — not official OET grades.",
    ],
  };
}
