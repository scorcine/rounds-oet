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

/** Rough mapping used for progress UI (not official OET conversion). */
export function percentToGrade(percent: number): OetGrade {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C+";
  if (percent >= 60) return "C";
  if (percent >= 45) return "D";
  return "E";
}

export function gradeLabel(grade: OetGrade): string {
  const map: Record<OetGrade, string> = {
    A: "A · 450+",
    B: "B · 350–440",
    "C+": "C+ · 300–340",
    C: "C · 200–290",
    D: "D · 100–190",
    E: "E · 0–90",
  };
  return map[grade];
}

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
