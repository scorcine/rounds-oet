import type { OetGrade, Skill } from "./types";

export const SKILL_META: Record<
  Skill,
  {
    label: string;
    short: string;
    examMinutes: number;
    parts: string[];
    blurb: string;
    href: string;
  }
> = {
  listening: {
    label: "Listening",
    short: "Listen",
    examMinutes: 45,
    parts: ["Part A — Consultation extracts", "Part B — Workplace talks", "Part C — Presentations"],
    blurb: "Consultations, handover talks, and clinical presentations under exam timing.",
    href: "/practice/listening",
  },
  reading: {
    label: "Reading",
    short: "Read",
    examMinutes: 60,
    parts: ["Part A — Expeditious", "Part B — Workplace texts", "Part C — Longer articles"],
    blurb: "Scan notes fast, then read short and long clinical texts with precision.",
    href: "/practice/reading",
  },
  writing: {
    label: "Writing",
    short: "Write",
    examMinutes: 45,
    parts: ["Case notes → professional letter"],
    blurb: "Turn messy case notes into clear referral, discharge, and transfer letters.",
    href: "/practice/writing",
  },
  speaking: {
    label: "Speaking",
    short: "Speak",
    examMinutes: 20,
    parts: ["Two role-plays · ~5 minutes each"],
    blurb: "Role-play as the professional: gather history, explain, reassure, and plan.",
    href: "/practice/speaking",
  },
};

/** Official OET grade → numerical score bands (public scale). */
export const GRADE_SCORE_RANGE: Record<
  OetGrade,
  { min: number; max: number; centre: number }
> = {
  A: { min: 450, max: 500, centre: 475 },
  B: { min: 350, max: 440, centre: 395 },
  "C+": { min: 300, max: 340, centre: 320 },
  C: { min: 200, max: 290, centre: 245 },
  D: { min: 100, max: 190, centre: 145 },
  E: { min: 0, max: 90, centre: 45 },
};

/**
 * Practice % → estimated grade.
 * Calibrated conservatively toward Medicine registration targets (often Grade B / ~350).
 * Not an official OET conversion — forms are equated and cut-scores are not published as %.
 */
export function percentToGrade(percent: number): OetGrade {
  const p = Math.max(0, Math.min(100, percent));
  if (p >= 88) return "A";
  if (p >= 75) return "B";
  if (p >= 65) return "C+";
  if (p >= 55) return "C";
  if (p >= 40) return "D";
  return "E";
}

/** Map practice % into an approximate 0–500 score inside the estimated grade band. */
export function percentToScore(percent: number): number {
  const p = Math.max(0, Math.min(100, percent));
  const grade = percentToGrade(p);
  const { min, max } = GRADE_SCORE_RANGE[grade];
  const floors: Record<OetGrade, number> = {
    A: 88,
    B: 75,
    "C+": 65,
    C: 55,
    D: 40,
    E: 0,
  };
  const ceilings: Record<OetGrade, number> = {
    A: 100,
    B: 88,
    "C+": 75,
    C: 65,
    D: 55,
    E: 40,
  };
  const lo = floors[grade];
  const hi = ceilings[grade];
  const t = hi === lo ? 1 : (p - lo) / (hi - lo);
  return Math.round(min + Math.max(0, Math.min(1, t)) * (max - min));
}

export function gradeLabel(grade: OetGrade): string {
  const r = GRADE_SCORE_RANGE[grade];
  return `${grade} · ${r.min}–${r.max}`;
}

export function gradeDescriptor(grade: OetGrade): string {
  const map: Record<OetGrade, string> = {
    A: "Very high level of performance",
    B: "High level — typical registration target for many boards",
    "C+": "Good performance — just below many B cut-offs",
    C: "Competent in some areas; needs stronger consistency",
    D: "Limited performance for healthcare workplace English",
    E: "Low performance — build foundations first",
  };
  return map[grade];
}

/** Grade order for comparisons (higher index = stronger). */
export const GRADE_RANK: Record<OetGrade, number> = {
  E: 0,
  D: 1,
  C: 2,
  "C+": 3,
  B: 4,
  A: 5,
};

export function minGrade(grades: OetGrade[]): OetGrade | null {
  if (!grades.length) return null;
  return grades.reduce((worst, g) =>
    GRADE_RANK[g] < GRADE_RANK[worst] ? g : worst,
  );
}

export function meetsTarget(estimated: OetGrade, target: OetGrade): boolean {
  return GRADE_RANK[estimated] >= GRADE_RANK[target];
}

export const ESTIMATED_BAND_DISCLAIMER =
  "Estimated practice band only — not an official OET result. Only the official OET test can award grades A–E.";

export function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\w\s%/.-]/g, "")
    .replace(/\s+/g, " ");
}

export function answersMatch(user: string, correct: string, accepted?: string[]): boolean {
  const n = normalizeAnswer(user);
  const candidates = [correct, ...(accepted ?? [])].map(normalizeAnswer);
  return candidates.includes(n);
}
