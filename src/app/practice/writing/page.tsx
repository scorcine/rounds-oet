import Link from "next/link";
import { WRITING_CASES } from "@/data/writing";
import { PageHero, Panel } from "@/components/ui";

export const metadata = { title: "Writing" };

export default function WritingIndexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Writing"
        title="Case notes into professional letters"
        description="Referral, discharge and transfer tasks with word targets, timers, rubrics and sample letters."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6">
        {WRITING_CASES.map((item) => (
          <Panel key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
                {item.taskType} · {item.specialty}
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-1 text-sm text-ink/60">
                {item.wordTarget.min}–{item.wordTarget.max} words · 40 min
              </p>
            </div>
            <Link
              href={`/practice/writing/${item.id}`}
              className="inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              Practice
            </Link>
          </Panel>
        ))}
      </div>
    </div>
  );
}
