import type { OetGrade, Skill, UserProgress } from "@/domain/types";
import type { ExamAttempt, SectionResult } from "@/domain/exam";
import {
  SKILL_META,
  gradeDescriptor,
  gradeLabel,
  meetsTarget,
  minGrade,
  percentToGrade,
  percentToScore,
} from "@/domain/skills";
import { skillStats } from "@/lib/progress";

export type BandConfidence = "low" | "medium" | "high";

export interface SkillBandEstimate {
  skill: Skill;
  label: string;
  percent: number | null;
  grade: OetGrade | null;
  score: number | null;
  gradeLabel: string | null;
  descriptor: string | null;
  attempts: number;
  confidence: BandConfidence;
  meetsTarget: boolean | null;
}

export interface BandReport {
  source: "practice" | "exam";
  overallGrade: OetGrade | null;
  overallScore: number | null;
  overallPercent: number | null;
  overallLabel: string | null;
  limitingSkill: Skill | null;
  targetGrade: OetGrade;
  onTrackForTarget: boolean | null;
  skills: SkillBandEstimate[];
  sampleNote: string;
}

const SKILLS: Skill[] = ["listening", "reading", "writing", "speaking"];

function confidenceFromAttempts(n: number): BandConfidence {
  if (n >= 5) return "high";
  if (n >= 2) return "medium";
  return "low";
}

/** Weight recent attempts more heavily for a stable practice estimate. */
export function recentSkillPercent(progress: UserProgress, skill: Skill): number | null {
  const items = progress.attempts.filter((a) => a.skill === skill).slice(0, 8);
  if (!items.length) return null;
  if (items.length === 1) return items[0].scorePercent;
  const weights = items.map((_, i) => Math.max(1, items.length - i));
  const sumW = weights.reduce((a, b) => a + b, 0);
  const weighted = items.reduce((acc, a, i) => acc + a.scorePercent * weights[i], 0);
  return Math.round(weighted / sumW);
}

export function buildPracticeBandReport(
  progress: UserProgress,
  targetGrade: OetGrade = progress.targetGrade,
): BandReport {
  const skills: SkillBandEstimate[] = SKILLS.map((skill) => {
    const stats = skillStats(progress, skill);
    const percent = recentSkillPercent(progress, skill);
    const grade = percent == null ? null : percentToGrade(percent);
    const score = percent == null ? null : percentToScore(percent);
    return {
      skill,
      label: SKILL_META[skill].label,
      percent,
      grade,
      score,
      gradeLabel: grade ? gradeLabel(grade) : null,
      descriptor: grade ? gradeDescriptor(grade) : null,
      attempts: stats.attempts,
      confidence: confidenceFromAttempts(stats.attempts),
      meetsTarget: grade ? meetsTarget(grade, targetGrade) : null,
    };
  });

  const graded = skills.filter((s) => s.grade != null) as (SkillBandEstimate & {
    grade: OetGrade;
    score: number;
    percent: number;
  })[];

  const overallGrade = minGrade(graded.map((s) => s.grade));
  const limiting =
    overallGrade == null
      ? null
      : graded.find((s) => s.grade === overallGrade)?.skill ?? null;

  const overallPercent = graded.length
    ? Math.round(graded.reduce((a, s) => a + s.percent, 0) / graded.length)
    : null;
  const overallScore =
    limiting != null
      ? skills.find((s) => s.skill === limiting)?.score ?? null
      : graded.length
        ? Math.round(graded.reduce((a, s) => a + s.score, 0) / graded.length)
        : null;

  return {
    source: "practice",
    overallGrade,
    overallScore,
    overallPercent,
    overallLabel: overallGrade ? gradeLabel(overallGrade) : null,
    limitingSkill: limiting,
    targetGrade,
    onTrackForTarget: overallGrade ? meetsTarget(overallGrade, targetGrade) : null,
    skills,
    sampleNote:
      graded.length < 4
        ? "Complete attempts in all four skills for a fuller estimate."
        : "Overall estimate uses your weakest skill (registration-style).",
  };
}

export function buildExamBandReport(
  attempt: ExamAttempt,
  targetGrade: OetGrade = "B",
): BandReport {
  const bySkill = new Map<Skill, SectionResult>();
  for (const s of attempt.sections) {
    bySkill.set(s.skill, s);
  }

  const skills: SkillBandEstimate[] = SKILLS.map((skill) => {
    const section = bySkill.get(skill);
    const percent = section?.scorePercent ?? null;
    const grade = percent == null ? null : percentToGrade(percent);
    const score = percent == null ? null : percentToScore(percent);
    return {
      skill,
      label: SKILL_META[skill].label,
      percent,
      grade,
      score,
      gradeLabel: grade ? gradeLabel(grade) : null,
      descriptor: grade ? gradeDescriptor(grade) : null,
      attempts: 1,
      confidence: "medium" as BandConfidence,
      meetsTarget: grade ? meetsTarget(grade, targetGrade) : null,
    };
  });

  const graded = skills.filter((s) => s.grade != null) as (SkillBandEstimate & {
    grade: OetGrade;
  })[];
  const overallGrade = minGrade(graded.map((s) => s.grade));
  const limiting =
    overallGrade == null
      ? null
      : graded.find((s) => s.grade === overallGrade)?.skill ?? null;

  return {
    source: "exam",
    overallGrade,
    overallScore:
      limiting != null
        ? skills.find((s) => s.skill === limiting)?.score ?? null
        : percentToScore(attempt.overallPercent),
    overallPercent: attempt.overallPercent,
    overallLabel: overallGrade ? gradeLabel(overallGrade) : null,
    limitingSkill: limiting,
    targetGrade,
    onTrackForTarget: overallGrade ? meetsTarget(overallGrade, targetGrade) : null,
    skills,
    sampleNote: "Based on this mock only — official OET uses equated scoring.",
  };
}
