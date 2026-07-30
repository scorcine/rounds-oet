import type { SyncPayload } from "@/domain/account";
import type { StudyState } from "@/domain/study";
import type { UserProgress } from "@/domain/types";
import type { ExamAttempt } from "@/domain/exam";
import { DEFAULT_STUDY } from "@/lib/study-store";
import { DEFAULT_PROGRESS } from "@/lib/progress";

export function collectLocalPayload(displayName = "Learner"): SyncPayload {
  const studyRaw = localStorage.getItem("rounds-oet-study-v1");
  const progressRaw = localStorage.getItem("rounds-oet-progress-v1");
  const examsRaw = localStorage.getItem("rounds-oet-exam-v1");
  const badgesRaw = localStorage.getItem("rounds-oet-badges-v1");

  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    study: studyRaw ? ({ ...DEFAULT_STUDY, ...JSON.parse(studyRaw) } as StudyState) : DEFAULT_STUDY,
    progress: progressRaw
      ? ({ ...DEFAULT_PROGRESS, ...JSON.parse(progressRaw) } as UserProgress)
      : DEFAULT_PROGRESS,
    exams: examsRaw ? (JSON.parse(examsRaw) as ExamAttempt[]) : [],
    badgesUnlocked: badgesRaw ? (JSON.parse(badgesRaw) as string[]) : [],
    displayName,
  };
}

export function applyLocalPayload(payload: SyncPayload): void {
  localStorage.setItem("rounds-oet-study-v1", JSON.stringify(payload.study));
  localStorage.setItem("rounds-oet-progress-v1", JSON.stringify(payload.progress));
  localStorage.setItem("rounds-oet-exam-v1", JSON.stringify(payload.exams));
  localStorage.setItem("rounds-oet-badges-v1", JSON.stringify(payload.badgesUnlocked));
  localStorage.setItem(
    "rounds-oet-profile-v1",
    JSON.stringify({ displayName: payload.displayName, updatedAt: payload.updatedAt }),
  );
}

/** Merge two payloads preferring newer timestamps and higher XP / more attempts. */
export function mergePayloads(local: SyncPayload, remote: SyncPayload): SyncPayload {
  const localNewer = local.updatedAt >= remote.updatedAt;
  const studyXp = Math.max(local.study.xp, remote.study.xp);
  const study: StudyState = {
    ...(localNewer ? local.study : remote.study),
    xp: studyXp,
    dailyGoal: Math.max(local.study.dailyGoal, remote.study.dailyGoal),
    diagnostic: local.study.diagnostic ?? remote.study.diagnostic,
    cards: { ...remote.study.cards, ...local.study.cards },
  };

  // Prefer card state with higher repetitions / later due knowledge
  for (const id of new Set([...Object.keys(local.study.cards), ...Object.keys(remote.study.cards)])) {
    const a = local.study.cards[id];
    const b = remote.study.cards[id];
    if (a && b) {
      study.cards[id] = (a.repetitions ?? 0) >= (b.repetitions ?? 0) ? a : b;
    } else {
      study.cards[id] = a ?? b!;
    }
  }

  const attempts = [...local.progress.attempts, ...remote.progress.attempts]
    .sort((x, y) => y.completedAt.localeCompare(x.completedAt))
    .filter((a, i, arr) => arr.findIndex((b) => b.id === a.id) === i)
    .slice(0, 200);

  const exams = [...local.exams, ...remote.exams]
    .sort((x, y) => y.completedAt.localeCompare(x.completedAt))
    .filter((a, i, arr) => arr.findIndex((b) => b.id === a.id) === i)
    .slice(0, 30);

  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    study,
    progress: {
      ...remote.progress,
      ...local.progress,
      attempts,
      streakDays: Math.max(local.progress.streakDays, remote.progress.streakDays),
      vocabMastered: [
        ...new Set([...local.progress.vocabMastered, ...remote.progress.vocabMastered]),
      ],
    },
    exams,
    badgesUnlocked: [...new Set([...local.badgesUnlocked, ...remote.badgesUnlocked])],
    displayName: local.displayName || remote.displayName || "Learner",
  };
}

export function downloadBackup(payload: SyncPayload): void {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rounds-backup-${payload.updatedAt.slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
