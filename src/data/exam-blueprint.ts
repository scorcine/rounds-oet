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

/**
 * Curated mock blueprint — closer to official OET Medicine shape than “dump whole bank”.
 * Official targets: Listening 42 Q / Reading 42 Q / Writing 1 letter / Speaking 2 role-plays.
 * Until the bank grows, this is a scaled but structured mock (Parts A→B→C order).
 */
const LISTENING_IDS = [
  "lis-a-1",
  "lis-a-2",
  "lis-a-3",
  "lis-a-4",
  "lis-a-5",
  "lis-b-1",
  "lis-b-2",
  "lis-b-3",
  "lis-b-4",
  "lis-c-1",
  "lis-c-2",
  "lis-c-3",
] as const;

const READING_IDS = [
  "read-a-1",
  "read-a-2",
  "read-b-1",
  "read-b-2",
  "read-c-1",
  "read-c-2",
] as const;

const WRITING_ID = "writ-1";
const SPEAKING_IDS = ["spk-1", "spk-2"] as const;

function pickById<T extends { id: string }>(all: T[], ids: readonly string[]): T[] {
  const map = new Map(all.map((x) => [x.id, x]));
  return ids.map((id) => map.get(id)).filter((x): x is T => Boolean(x));
}

export interface MockExamBlueprint {
  listening: ListeningExtract[];
  reading: ReadingPassage[];
  writing: WritingCase;
  speaking: SpeakingRolePlay[];
  /** Max audio plays per listening extract (exam discipline). */
  listeningPlaysPerExtract: number;
  readingPartASec: number;
  readingPartBCSec: number;
  realismNotes: string[];
}

export function getMockExamBlueprint(): MockExamBlueprint {
  const listening = pickById(LISTENING_EXTRACTS, LISTENING_IDS);
  const reading = pickById(READING_PASSAGES, READING_IDS);
  const writing =
    WRITING_CASES.find((c) => c.id === WRITING_ID) ?? WRITING_CASES[0];
  const speaking = pickById(SPEAKING_ROLEPLAYS, SPEAKING_IDS);

  const listenQ = listening.reduce((n, e) => n + e.questions.length, 0);
  const readQ = reading.reduce((n, e) => n + e.questions.length, 0);

  return {
    listening,
    reading,
    writing,
    speaking: speaking.length >= 2 ? speaking : SPEAKING_ROLEPLAYS.slice(0, 2),
    listeningPlaysPerExtract: 2,
    readingPartASec: 15 * 60,
    readingPartBCSec: 45 * 60,
    realismNotes: [
      `Listening: ${listening.length} extracts · ${listenQ} questions (official ≈ 42).`,
      `Reading: ${reading.length} passages · ${readQ} questions (official ≈ 42); Part A clock 15′ then B/C 45′.`,
      "Writing: 1 letter scored on OET-style criteria (not word count alone).",
      "Speaking: 2 role-plays scored from your spoken transcript (not a self-checklist).",
      "Estimated bands are for study only — not official OET grades.",
    ],
  };
}
