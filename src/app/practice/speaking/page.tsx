import Link from "next/link";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import { PageHero, Panel } from "@/components/ui";

export const metadata = { title: "Speaking" };

export default function SpeakingIndexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Speaking"
        title="Role-plays you can record and review"
        description="Candidate and interlocutor cards, timing, phrase banks, microphone recording and criterion checklists."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6">
        {SPEAKING_ROLEPLAYS.map((item) => (
          <Panel key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
                {item.setting} · {item.specialty}
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-1 text-sm text-ink/60">~{Math.round(item.timeLimitSec / 60)} minutes</p>
            </div>
            <Link
              href={`/practice/speaking/${item.id}`}
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
