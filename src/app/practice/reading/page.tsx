import Link from "next/link";
import { READING_PASSAGES } from "@/data/reading";
import { PageHero, Panel } from "@/components/ui";

export const metadata = { title: "Reading" };

export default function ReadingIndexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reading"
        title="Expeditious scanning to long clinical articles"
        description="Part A multi-document packs, Part B short workplace texts, Part C extended reading with inference questions."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6">
        {READING_PASSAGES.map((item) => (
          <Panel key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
                Part {item.part} · {item.specialty}
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-1 text-sm text-ink/60">
                {item.questions.length} questions · {Math.round(item.timeLimitSec / 60)} min
              </p>
            </div>
            <Link
              href={`/practice/reading/${item.id}`}
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
