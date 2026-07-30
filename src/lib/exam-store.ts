import type {
  ExamAttempt,
  ExamAnalytics,
  ExamSectionId,
  PacingReport,
  QuestionTiming,
  SectionResult,
  SubtestStat,
  TopicErrorStat,
} from "@/domain/exam";
import type { Skill } from "@/domain/types";
import { answersMatch } from "@/domain/skills";
import { LISTENING_EXTRACTS } from "@/data/listening";
import { READING_PASSAGES } from "@/data/reading";

const EXAM_KEY = "rounds-oet-exam-v1";

export function loadExamAttempts(): ExamAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(EXAM_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ExamAttempt[];
  } catch {
    return [];
  }
}

export function saveExamAttempt(attempt: ExamAttempt): ExamAttempt[] {
  const prev = loadExamAttempts();
  const next = [attempt, ...prev].slice(0, 30);
  localStorage.setItem(EXAM_KEY, JSON.stringify(next));
  void import("@/lib/cloud-sync").then((m) => m.scheduleCloudSync());
  return next;
}

export function buildPacing(sections: SectionResult[]): PacingReport {
  const allQ = sections.flatMap((s) => s.questionTimings);
  const scored = allQ.filter((q) => q.correct !== null);
  const avgSecPerQuestion = scored.length
    ? Math.round(scored.reduce((a, b) => a + b.secondsSpent, 0) / scored.length)
    : 0;

  const sectionDeltas = sections.map((s) => {
    const deltaSec = s.allocatedSec - s.usedSec;
    const ratio = s.usedSec / Math.max(1, s.allocatedSec);
    const status: "fast" | "on_pace" | "slow" =
      ratio < 0.75 ? "fast" : ratio > 1.05 ? "slow" : "on_pace";
    return { skill: s.skill, deltaSec, status };
  });

  const slowestQuestions = [...scored]
    .sort((a, b) => b.secondsSpent - a.secondsSpent)
    .slice(0, 5);

  const fastestWrong = scored
    .filter((q) => q.correct === false)
    .sort((a, b) => a.secondsSpent - b.secondsSpent)
    .slice(0, 5);

  return { sectionDeltas, avgSecPerQuestion, slowestQuestions, fastestWrong };
}

export function scoreListeningAnswers(
  answers: Record<string, string>,
  timings: Record<string, number>,
  extracts: typeof LISTENING_EXTRACTS = LISTENING_EXTRACTS,
): { section: SectionResult; byPart: Record<string, { correct: number; total: number }> } {
  const questionTimings: QuestionTiming[] = [];
  const byPart: Record<string, { correct: number; total: number }> = {};
  let correct = 0;
  let total = 0;

  for (const extract of extracts) {
    byPart[extract.part] ??= { correct: 0, total: 0 };
    for (const q of extract.questions) {
      total += 1;
      byPart[extract.part].total += 1;
      const user = answers[q.id] ?? "";
      let ok = false;
      if ("options" in q) {
        ok = Number(user) === q.correctIndex;
      } else {
        ok = answersMatch(user, q.answer, q.acceptedAnswers);
      }
      if (ok) {
        correct += 1;
        byPart[extract.part].correct += 1;
      }
      questionTimings.push({
        questionId: q.id,
        contentId: extract.id,
        skill: "listening",
        part: extract.part,
        topic: extract.specialty,
        secondsSpent: timings[q.id] ?? 0,
        correct: ok,
        prompt: q.prompt,
      });
    }
  }

  return {
    byPart,
    section: {
      skill: "listening",
      allocatedSec: 45 * 60,
      usedSec: 0,
      scorePercent: total ? Math.round((correct / total) * 100) : 0,
      correct,
      total,
      questionTimings,
    },
  };
}

export function scoreReadingAnswers(
  answers: Record<string, number>,
  timings: Record<string, number>,
  passages: typeof READING_PASSAGES = READING_PASSAGES,
): SectionResult {
  const questionTimings: QuestionTiming[] = [];
  let correct = 0;
  let total = 0;

  for (const passage of passages) {
    for (const q of passage.questions) {
      total += 1;
      const ok = answers[q.id] === q.correctIndex;
      if (ok) correct += 1;
      questionTimings.push({
        questionId: q.id,
        contentId: passage.id,
        skill: "reading",
        part: passage.part,
        topic: passage.specialty,
        secondsSpent: timings[q.id] ?? 0,
        correct: ok,
        prompt: q.prompt,
      });
    }
  }

  return {
    skill: "reading",
    allocatedSec: 60 * 60,
    usedSec: 0,
    scorePercent: total ? Math.round((correct / total) * 100) : 0,
    correct,
    total,
    questionTimings,
  };
}

export function finalizeExamAttempt(input: {
  startedAt: string;
  sections: SectionResult[];
}): ExamAttempt {
  const scored = input.sections.filter((s) => s.scorePercent != null);
  const overallPercent = scored.length
    ? Math.round(
        scored.reduce((a, s) => a + (s.scorePercent ?? 0), 0) / scored.length,
      )
    : 0;

  const pacing = buildPacing(input.sections);

  return {
    id: `exam-${Date.now()}`,
    startedAt: input.startedAt,
    completedAt: new Date().toISOString(),
    overallPercent,
    sections: input.sections,
    pacing,
  };
}

export function computeAnalytics(attempts: ExamAttempt[]): ExamAnalytics {
  if (!attempts.length) {
    return {
      attempts: [],
      subtests: [],
      topics: [],
      avgPacingSecPerQuestion: null,
      lastAttempt: null,
    };
  }

  const subtestMap = new Map<string, { skill: Skill; part: string; percents: number[] }>();
  const topicMap = new Map<string, { skill: Skill; wrong: number; total: number }>();

  for (const attempt of attempts) {
    for (const section of attempt.sections) {
      const byPart = new Map<string, { correct: number; total: number }>();
      for (const q of section.questionTimings) {
        if (q.correct === null) continue;
        const part = q.part ?? "general";
        const bucket = byPart.get(part) ?? { correct: 0, total: 0 };
        bucket.total += 1;
        if (q.correct) bucket.correct += 1;
        byPart.set(part, bucket);

        const topicKey = `${q.skill}|${q.topic}`;
        const t = topicMap.get(topicKey) ?? { skill: q.skill, wrong: 0, total: 0 };
        t.total += 1;
        if (!q.correct) t.wrong += 1;
        topicMap.set(topicKey, t);
      }

      for (const [part, stats] of byPart) {
        const key = `${section.skill}-${part}`;
        const existing = subtestMap.get(key) ?? {
          skill: section.skill as Skill,
          part,
          percents: [] as number[],
        };
        existing.percents.push(
          stats.total ? Math.round((stats.correct / stats.total) * 100) : 0,
        );
        subtestMap.set(key, existing);
      }
    }
  }

  const subtests: SubtestStat[] = [...subtestMap.entries()].map(([key, v]) => ({
    key,
    skill: v.skill,
    part: v.part,
    attempts: v.percents.length,
    avgPercent: Math.round(v.percents.reduce((a, b) => a + b, 0) / v.percents.length),
    bestPercent: Math.max(...v.percents),
  }));

  const topics: TopicErrorStat[] = [...topicMap.entries()]
    .map(([key, v]) => {
      const topic = key.split("|")[1] ?? key;
      return {
        topic,
        skill: v.skill,
        wrong: v.wrong,
        total: v.total,
        errorRate: v.total ? Math.round((v.wrong / v.total) * 100) : 0,
      };
    })
    .sort((a, b) => b.errorRate - a.errorRate || b.wrong - a.wrong);

  const pacingVals = attempts
    .map((a) => a.pacing.avgSecPerQuestion)
    .filter((n) => n > 0);
  const avgPacingSecPerQuestion = pacingVals.length
    ? Math.round(pacingVals.reduce((a, b) => a + b, 0) / pacingVals.length)
    : null;

  return {
    attempts,
    subtests: subtests.sort((a, b) => a.skill.localeCompare(b.skill) || a.part.localeCompare(b.part)),
    topics,
    avgPacingSecPerQuestion,
    lastAttempt: attempts[0],
  };
}

export function formatDelta(sec: number): string {
  const abs = Math.abs(sec);
  const m = Math.floor(abs / 60);
  const s = abs % 60;
  const body = m > 0 ? `${m}m ${s}s` : `${s}s`;
  if (sec > 30) return `${body} early`;
  if (sec < -30) return `${body} over`;
  return "on pace";
}

export function sectionLabel(skill: ExamSectionId): string {
  return skill.charAt(0).toUpperCase() + skill.slice(1);
}
