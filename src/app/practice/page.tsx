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
        title="Skills after your study loop"
        description="Use Diagnose + daily SRS first, then drill Listening, Reading, Writing and Speaking under exam timing."
        action={
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href="/diagnose"
              className="inline-flex rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white"
            >
              Diagnostic
            </Link>
            <Link
              href="/study"
              className="inline-flex rounded-md border border-ink/20 px-4 py-2 text-sm font-semibold text-ink"
            >
              Daily study
            </Link>
            <Link
              href="/mock"
              className="inline-flex rounded-md border border-ink/20 px-4 py-2 text-sm font-semibold text-ink"
            >
              Mock exam
            </Link>
          </div>
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
