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
}

export const BADGE_DEFS: BadgeDef[] = [
  {
    id: "first-diagnostic",
    title: "Placement done",
    description: "Complete the mini-OET diagnostic.",
    icon: "1",
  },
  {
    id: "streak-3",
    title: "3-day streak",
    description: "Practise on 3 consecutive days.",
    icon: "3",
  },
  {
    id: "streak-7",
    title: "Week warrior",
    description: "Keep a 7-day study streak.",
    icon: "7",
  },
  {
    id: "xp-100",
    title: "First 100 XP",
    description: "Earn 100 XP from SRS reviews.",
    icon: "XP",
  },
  {
    id: "xp-500",
    title: "500 XP club",
    description: "Earn 500 XP total.",
    icon: "★",
  },
  {
    id: "exam-1",
    title: "Exam starter",
    description: "Finish one full timed exam.",
    icon: "E",
  },
  {
    id: "writing-b",
    title: "Writing Band B+",
    description: "Score 80%+ on a writing task.",
    icon: "W",
  },
  {
    id: "speaking-b",
    title: "Speaking Band B+",
    description: "Score 80%+ on a speaking task.",
    icon: "S",
  },
];

export interface PlannerDay {
  date: string;
  focus: string;
  tasks: { label: string; href: string; minutes: number }[];
  dailyGoal: number;
}
