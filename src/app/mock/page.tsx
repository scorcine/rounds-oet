import Link from "next/link";
import { MOCK_EXAM } from "@/data/mock";
import { SKILL_META } from "@/domain/skills";
import { PageHero, Panel } from "@/components/ui";

export const metadata = { title: "Mock exam" };

export default function MockPage() {
  return (
    <div>
      <PageHero
        eyebrow="Mock"
        title={MOCK_EXAM.title}
        description={MOCK_EXAM.description}
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-6">
        {MOCK_EXAM.sections.map((section, i) => {
          const meta = SKILL_META[section.skill];
          return (
            <Panel key={section.skill} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-ward">
                  {String(i + 1).padStart(2, "0")} · {section.minutes} min
                </p>
                <h2 className="mt-1 font-display text-2xl text-ink">{meta.label}</h2>
                <p className="mt-1 text-sm text-ink/60">
                  {section.contentIds.length} task
                  {section.contentIds.length > 1 ? "s" : ""} in this set
                </p>
              </div>
              <Link
                href={meta.href}
                className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
              >
                Begin
              </Link>
            </Panel>
          );
        })}
        <p className="text-sm text-ink/55">
          Tip: complete sections in order on exam day. Use Progress to review weak skills after the
          set.
        </p>
      </div>
    </div>
  );
}
