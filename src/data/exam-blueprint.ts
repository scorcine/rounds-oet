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

/** Official-shaped full paper IDs (Listening 42 / Reading 42). */
export const FULL_LISTENING_IDS = [
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
] as const;

export const FULL_READING_IDS = [
  "read-fa-1",
  "read-fb-1",
  "read-fb-2",
  "read-fb-3",
  "read-fb-4",
  "read-fb-5",
  "read-fb-6",
  "read-fc-1",
  "read-fc-2",
] as const;

const WRITING_ID = "writ-1";
const SPEAKING_IDS = ["spk-1", "spk-2"] as const;

export const OFFICIAL_TARGETS = {
  listeningQuestions: 42,
  readingQuestions: 42,
  writingLetters: 1,
  speakingRolePlays: 2,
} as const;

function pickById<T extends { id: string }>(all: T[], ids: readonly string[]): T[] {
  const map = new Map(all.map((x) => [x.id, x]));
  return ids.map((id) => map.get(id)).filter((x): x is T => Boolean(x));
}

export interface MockExamBlueprint {
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
  realismNotes: string[];
}

export function getMockExamBlueprint(): MockExamBlueprint {
  const listening = pickById(LISTENING_EXTRACTS, FULL_LISTENING_IDS);
  const reading = pickById(READING_PASSAGES, FULL_READING_IDS);
  const writing =
    WRITING_CASES.find((c) => c.id === WRITING_ID) ?? WRITING_CASES[0];
  const speaking = pickById(SPEAKING_ROLEPLAYS, SPEAKING_IDS);

  const listenQ = listening.reduce((n, e) => n + e.questions.length, 0);
  const readQ = reading.reduce((n, e) => n + e.questions.length, 0);
  const coveragePercent = Math.round(
    ((Math.min(listenQ, OFFICIAL_TARGETS.listeningQuestions) +
      Math.min(readQ, OFFICIAL_TARGETS.readingQuestions)) /
      (OFFICIAL_TARGETS.listeningQuestions + OFFICIAL_TARGETS.readingQuestions)) *
      100,
  );

  return {
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
    realismNotes: [
      `Listening full paper: ${listenQ}/${OFFICIAL_TARGETS.listeningQuestions} questions (Part A 24 gaps · B 6 · C 12).`,
      `Reading full paper: ${readQ}/${OFFICIAL_TARGETS.readingQuestions} questions (Part A 20 · B 6 · C 16).`,
      "Writing: 1 letter on OET-style criteria.",
      "Speaking: 2 role-plays from your transcript.",
      "Estimated bands are for study only — not official OET grades.",
    ],
  };
}
