import Link from "next/link";
import { SKILL_META } from "@/domain/skills";
import { PageHero, SkillCard } from "@/components/ui";

export const metadata = { title: "Practice" };

export default function PracticePage() {
  const skills = Object.entries(SKILL_META);
  return (
    <div>
      <PageHero
        eyebrow="Practice hub"
        title="Choose a skill and start a timed set"
        description="Work skill-by-skill or jump into a full mock. Your scores stay on this browser until we add accounts."
        action={
          <Link
            href="/mock"
            className="mt-2 inline-flex w-fit rounded-md border border-ink/20 px-4 py-2 text-sm font-semibold text-ink"
          >
            Open mock exam
          </Link>
        }
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6">
        {skills.map(([key, meta], i) => (
          <SkillCard
            key={key}
            href={meta.href}
            title={meta.label}
            blurb={meta.blurb}
            meta={meta.parts[0]}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
