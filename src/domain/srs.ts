import type { SrsCardState, SrsRating } from "./study";

const MIN_EASE = 1.3;

function addDays(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function createNewCardState(cardId: string, due = todayISO()): SrsCardState {
  return {
    cardId,
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    due,
    lapses: 0,
  };
}

/**
 * Simplified SM-2 (Anki-like):
 * 1 Again → reset, due today
 * 2 Hard → short interval, ease ↓
 * 3 Good → standard growth
 * 4 Easy → longer interval, ease ↑
 */
export function reviewCard(state: SrsCardState, rating: SrsRating, now = todayISO()): SrsCardState {
  let { ease, interval, repetitions, lapses } = state;

  if (rating === 1) {
    repetitions = 0;
    interval = 0;
    lapses += 1;
    ease = Math.max(MIN_EASE, ease - 0.2);
    return {
      ...state,
      ease,
      interval,
      repetitions,
      lapses,
      due: now,
      lastRating: rating,
      lastReviewedAt: new Date().toISOString(),
    };
  }

  if (repetitions === 0) {
    interval = rating === 2 ? 1 : rating === 3 ? 1 : 4;
  } else if (repetitions === 1) {
    interval = rating === 2 ? 3 : rating === 3 ? 6 : 10;
  } else {
    const factor = rating === 2 ? 1.2 : rating === 3 ? ease : ease * 1.3;
    interval = Math.max(1, Math.round(interval * factor));
  }

  if (rating === 2) ease = Math.max(MIN_EASE, ease - 0.15);
  if (rating === 4) ease = ease + 0.15;

  repetitions += 1;

  return {
    ...state,
    ease: Math.round(ease * 100) / 100,
    interval,
    repetitions,
    lapses,
    due: addDays(now, interval),
    lastRating: rating,
    lastReviewedAt: new Date().toISOString(),
  };
}

export function isDue(card: SrsCardState, now = todayISO()): boolean {
  return card.due <= now;
}

export function sortStudyQueue<T extends { cardId: string }>(
  items: T[],
  states: Record<string, SrsCardState>,
  now = todayISO(),
): T[] {
  return [...items].sort((a, b) => {
    const sa = states[a.cardId];
    const sb = states[b.cardId];
    const dueA = sa ? sa.due : now;
    const dueB = sb ? sb.due : now;
    if (dueA !== dueB) return dueA < dueB ? -1 : 1;
    const repA = sa?.repetitions ?? 0;
    const repB = sb?.repetitions ?? 0;
    return repA - repB;
  });
}
