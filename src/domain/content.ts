/** Phase 4 — modular curriculum & clinical case tracks. */

export type ClinicalTrack = "GP" | "Ortho" | "ED" | "Surgery" | "Anesthesia";

export type LessonKind =
  | "vocab"
  | "grammar"
  | "function"
  | "strategy"
  | "case";

export interface MicroLesson {
  id: string;
  track: ClinicalTrack | "General";
  kind: LessonKind;
  title: string;
  minutes: number;
  competency: import("./study").CompetencyId;
  summary: string;
  body: string;
  practiceHref?: string;
  keyPhrases: string[];
}

export interface ContentBankStats {
  lessons: number;
  listening: number;
  reading: number;
  writing: number;
  speaking: number;
  srsCards: number;
  tracks: ClinicalTrack[];
}
