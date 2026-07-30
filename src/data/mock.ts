import type { Skill } from "@/domain/types";
import { LISTENING_EXTRACTS } from "./listening";
import { READING_PASSAGES } from "./reading";
import { WRITING_CASES } from "./writing";
import { SPEAKING_ROLEPLAYS } from "./speaking";

export const MOCK_EXAM = {
  id: "mock-1",
  title: "Full practice set — Medicine",
  description:
    "A timed sequence across all four skills using sample clinical materials. Scores are indicative for practice only.",
  sections: [
    { skill: "listening" as Skill, contentIds: LISTENING_EXTRACTS.map((x) => x.id), minutes: 45 },
    { skill: "reading" as Skill, contentIds: READING_PASSAGES.map((x) => x.id), minutes: 60 },
    { skill: "writing" as Skill, contentIds: [WRITING_CASES[0].id], minutes: 45 },
    { skill: "speaking" as Skill, contentIds: [SPEAKING_ROLEPLAYS[0].id, SPEAKING_ROLEPLAYS[1].id], minutes: 20 },
  ],
};
