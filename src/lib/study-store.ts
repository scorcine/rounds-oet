import type {
  CompetencyId,
  CompetencyScore,
  DiagnosticResult,
  StudyState,
  SrsRating,
  DailyStudyStats,
} from "@/domain/study";
import { COMPETENCIES } from "@/domain/study";
import { createNewCardState, reviewCard, isDue, todayISO } from "@/domain/srs";
import { DIAGNOSTIC_QUESTIONS } from "@/data/diagnostic";
import { SRS_DECK } from "@/data/srs-deck";
import { loadProgress, saveProgress } from "@/lib/progress";

const STUDY_KEY = "rounds-oet-study-v1";

const DEFAULT_DAILY: DailyStudyStats = {
  date: todayISO(),
  reviewsDone: 0,
  newIntroduced: 0,
  goal: 20,
};

export const DEFAULT_STUDY: StudyState = {
  diagnostic: null,
  cards: {},
  daily: DEFAULT_DAILY,
  dailyGoal: 20,
  xp: 0,
};

function ensureDaily(state: StudyState): StudyState {
  const today = todayISO();
  if (state.daily.date === today) return state;
  return {
    ...state,
    daily: {
      date: today,
      reviewsDone: 0,
      newIntroduced: 0,
      goal: state.dailyGoal,
    },
  };
}

export function loadStudy(): StudyState {
  if (typeof window === "undefined") return DEFAULT_STUDY;
  try {
    const raw = localStorage.getItem(STUDY_KEY);
    if (!raw) return DEFAULT_STUDY;
    const parsed = { ...DEFAULT_STUDY, ...JSON.parse(raw) } as StudyState;
    return ensureDaily(parsed);
  } catch {
    return DEFAULT_STUDY;
  }
}

export function saveStudy(state: StudyState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STUDY_KEY, JSON.stringify(state));
}

export function scoreDiagnostic(
  answers: Record<string, number>,
): DiagnosticResult {
  const byComp: Record<CompetencyId, { correct: number; total: number }> = {
    medical_vocabulary: { correct: 0, total: 0 },
    functional_grammar: { correct: 0, total: 0 },
    communicative_functions: { correct: 0, total: 0 },
    exam_strategies: { correct: 0, total: 0 },
  };

  let correctAll = 0;
  for (const q of DIAGNOSTIC_QUESTIONS) {
    byComp[q.competency].total += 1;
    if (answers[q.id] === q.correctIndex) {
      byComp[q.competency].correct += 1;
      correctAll += 1;
    }
  }

  const byCompetency: CompetencyScore[] = COMPETENCIES.map((c) => {
    const { correct, total } = byComp[c.id];
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return {
      competency: c.id,
      correct,
      total,
      percent,
      mastery: percent,
    };
  });

  const overallPercent = Math.round((correctAll / DIAGNOSTIC_QUESTIONS.length) * 100);
  const weakCompetencies = byCompetency
    .filter((c) => c.percent < 70)
    .sort((a, b) => a.percent - b.percent)
    .map((c) => c.competency);

  // Weaker placement → slightly higher daily goal to catch up
  const recommendedDailyGoal =
    overallPercent >= 85 ? 15 : overallPercent >= 70 ? 20 : overallPercent >= 50 ? 25 : 30;

  return {
    completedAt: new Date().toISOString(),
    overallPercent,
    byCompetency,
    weakCompetencies,
    recommendedDailyGoal,
  };
}

/** Seed SRS states: weak competencies due today; stronger delayed. */
export function seedDeckFromDiagnostic(result: DiagnosticResult): StudyState {
  const weak = new Set(result.weakCompetencies);
  const strongest = [...result.byCompetency].sort((a, b) => b.percent - a.percent)[0]
    ?.competency;
  const today = todayISO();
  const cards: StudyState["cards"] = {};

  for (const template of SRS_DECK) {
    let delayDays = 1;
    if (weak.has(template.competency)) delayDays = 0;
    else if (template.competency === strongest) delayDays = 2;
    const dueDate = new Date(`${today}T12:00:00`);
    dueDate.setDate(dueDate.getDate() + delayDays);
    cards[template.id] = createNewCardState(
      template.id,
      dueDate.toISOString().slice(0, 10),
    );
  }

  const state: StudyState = {
    diagnostic: result,
    cards,
    dailyGoal: result.recommendedDailyGoal,
    daily: {
      date: today,
      reviewsDone: 0,
      newIntroduced: 0,
      goal: result.recommendedDailyGoal,
    },
    xp: 50,
  };
  saveStudy(state);

  // Mirror target into main progress streak bump
  const progress = loadProgress();
  saveProgress({
    ...progress,
    lastActiveDate: today,
    streakDays: progress.streakDays || 1,
  });

  return state;
}

export function getDueQueue(state: StudyState, limit?: number) {
  const today = todayISO();
  const dueTemplates = SRS_DECK.filter((t) => {
    const s = state.cards[t.id];
    if (!s) return true;
    return isDue(s, today);
  });

  // Prioritize weak competencies from diagnostic
  const weak = new Set(state.diagnostic?.weakCompetencies ?? []);
  dueTemplates.sort((a, b) => {
    const aw = weak.has(a.competency) ? 0 : 1;
    const bw = weak.has(b.competency) ? 0 : 1;
    if (aw !== bw) return aw - bw;
    const sa = state.cards[a.id];
    const sb = state.cards[b.id];
    return (sa?.due ?? today).localeCompare(sb?.due ?? today);
  });

  return typeof limit === "number" ? dueTemplates.slice(0, limit) : dueTemplates;
}

export function applyReview(
  cardId: string,
  rating: SrsRating,
  wasNew: boolean,
): StudyState {
  let state = ensureDaily(loadStudy());
  const prev = state.cards[cardId] ?? createNewCardState(cardId);
  const nextCard = reviewCard(prev, rating);
  const xpGain = rating === 1 ? 2 : rating === 2 ? 5 : rating === 3 ? 8 : 12;

  state = {
    ...state,
    cards: { ...state.cards, [cardId]: nextCard },
    daily: {
      ...state.daily,
      reviewsDone: state.daily.reviewsDone + 1,
      newIntroduced: state.daily.newIntroduced + (wasNew ? 1 : 0),
    },
    xp: state.xp + xpGain,
  };
  saveStudy(state);

  const progress = loadProgress();
  const today = todayISO();
  let streakDays = progress.streakDays;
  if (progress.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    streakDays =
      progress.lastActiveDate === yesterday.toISOString().slice(0, 10)
        ? (progress.streakDays || 0) + 1
        : 1;
  }
  saveProgress({ ...progress, lastActiveDate: today, streakDays });

  return state;
}

export function competencyMastery(state: StudyState): CompetencyScore[] {
  const diag = state.diagnostic?.byCompetency;
  return COMPETENCIES.map((c) => {
    const fromDiag = diag?.find((d) => d.competency === c.id);
    const related = SRS_DECK.filter((t) => t.competency === c.id);
    let mature = 0;
    for (const t of related) {
      const s = state.cards[t.id];
      if (s && s.repetitions >= 2 && s.interval >= 6) mature += 1;
    }
    const srsBoost = related.length ? Math.round((mature / related.length) * 30) : 0;
    const base = fromDiag?.percent ?? 0;
    const mastery = Math.min(100, Math.round(base * 0.7 + srsBoost + (fromDiag ? 0 : 0)));
    return {
      competency: c.id,
      correct: fromDiag?.correct ?? 0,
      total: fromDiag?.total ?? related.length,
      percent: fromDiag?.percent ?? 0,
      mastery: fromDiag ? Math.min(100, Math.round(base * 0.7 + srsBoost)) : srsBoost,
    };
  });
}

export function dailyRemaining(state: StudyState): number {
  return Math.max(0, state.daily.goal - state.daily.reviewsDone);
}
