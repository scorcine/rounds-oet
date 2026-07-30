import type { ContentBankStats, ClinicalTrack } from "@/domain/content";
import { MICRO_LESSONS } from "@/data/lessons";
import { LISTENING_EXTRACTS } from "@/data/listening";
import { READING_PASSAGES } from "@/data/reading";
import { WRITING_CASES } from "@/data/writing";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import { SRS_DECK } from "@/data/srs-deck";

export const CLINICAL_TRACKS: ClinicalTrack[] = [
  "GP",
  "Ortho",
  "ED",
  "Surgery",
  "Anesthesia",
];

export function getContentBankStats(): ContentBankStats {
  return {
    lessons: MICRO_LESSONS.length,
    listening: LISTENING_EXTRACTS.length,
    reading: READING_PASSAGES.length,
    writing: WRITING_CASES.length,
    speaking: SPEAKING_ROLEPLAYS.length,
    srsCards: SRS_DECK.length,
    tracks: CLINICAL_TRACKS,
  };
}

export function lessonsByTrack(track: string) {
  if (track === "all") return MICRO_LESSONS;
  return MICRO_LESSONS.filter((l) => l.track === track);
}
