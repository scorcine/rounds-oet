import type { StudyState } from "@/domain/study";
import type { UserProgress } from "@/domain/types";
import type { ExamAttempt } from "@/domain/exam";

export interface SyncPayload {
  version: 1;
  updatedAt: string;
  study: StudyState;
  progress: UserProgress;
  exams: ExamAttempt[];
  badgesUnlocked: string[];
  displayName: string;
}

export interface BadgeDef {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: "signal" | "core" | "elite";
}

export const BADGE_DEFS: BadgeDef[] = [
  {
    id: "first-diagnostic",
    title: "Placement lock",
    description: "Complete the mini-OET diagnostic.",
    icon: "01",
    tier: "signal",
  },
  {
    id: "streak-3",
    title: "3-day uplink",
    description: "Practise on 3 consecutive days.",
    icon: "03",
    tier: "signal",
  },
  {
    id: "streak-7",
    title: "Week protocol",
    description: "Keep a 7-day study streak.",
    icon: "07",
    tier: "core",
  },
  {
    id: "xp-100",
    title: "XP boot",
    description: "Earn 100 XP from SRS reviews.",
    icon: "XP",
    tier: "signal",
  },
  {
    id: "xp-500",
    title: "XP cluster",
    description: "Earn 500 XP total.",
    icon: "★",
    tier: "core",
  },
  {
    id: "exam-1",
    title: "Mock online",
    description: "Finish one full timed exam.",
    icon: "EX",
    tier: "core",
  },
  {
    id: "writing-b",
    title: "Writing B track",
    description: "Hit 80%+ on a writing task (study estimate ≈ Grade B).",
    icon: "W",
    tier: "elite",
  },
  {
    id: "speaking-b",
    title: "Speaking B track",
    description: "Hit 80%+ on a speaking task (study estimate ≈ Grade B).",
    icon: "S",
    tier: "elite",
  },
];

export interface PlannerDay {
  date: string;
  focus: string;
  tasks: { label: string; href: string; minutes: number }[];
  dailyGoal: number;
}
