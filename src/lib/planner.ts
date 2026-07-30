import type { PlannerDay } from "@/domain/account";
import type { StudyState } from "@/domain/study";
import { COMPETENCIES } from "@/domain/study";
import { todayISO } from "@/domain/srs";

function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

export function buildWeekPlan(study: StudyState): PlannerDay[] {
  const today = todayISO();
  const weak = study.diagnostic?.weakCompetencies ?? [];
  const focusComp =
    weak[0] ??
    COMPETENCIES[new Date().getDay() % COMPETENCIES.length]?.id ??
    "medical_vocabulary";
  const focusLabel = COMPETENCIES.find((c) => c.id === focusComp)?.label ?? "Skills";

  const rotation = [
    { label: "SRS daily reviews", href: "/study", minutes: 20 },
    { label: "Microlearning lesson", href: "/lessons", minutes: 10 },
    { label: "Writing letter", href: "/practice/writing", minutes: 45 },
    { label: "Speaking role-play", href: "/practice/speaking", minutes: 20 },
    { label: "Listening drills", href: "/practice/listening", minutes: 25 },
    { label: "Reading timed set", href: "/practice/reading", minutes: 30 },
    { label: "Full exam mode", href: "/exam", minutes: 90 },
  ];

  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today, i);
    const primary = rotation[i % rotation.length];
    const secondary = rotation[(i + 1) % rotation.length];
    return {
      date,
      focus: i === 0 ? `Today · ${focusLabel}` : focusLabel,
      dailyGoal: study.dailyGoal || 20,
      tasks: [
        { ...primary },
        { label: `${secondary.label} (light)`, href: secondary.href, minutes: Math.min(15, secondary.minutes) },
      ],
    };
  });
}

export function toIcs(plan: PlannerDay[], title = "Rounds OET study"): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rounds//OET Medicine//EN",
    "CALSCALE:GREGORIAN",
  ];

  for (const day of plan) {
    const stamp = day.date.replace(/-/g, "");
    const summary = `${title}: ${day.focus}`;
    const desc = day.tasks.map((t) => `${t.minutes}m — ${t.label}`).join("\\n");
    lines.push(
      "BEGIN:VEVENT",
      `UID:rounds-${day.date}@oet`,
      `DTSTAMP:${stamp}T090000Z`,
      `DTSTART;VALUE=DATE:${stamp}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${desc}`,
      "END:VEVENT",
    );
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadIcs(ics: string, filename = "rounds-study-plan.ics"): void {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
