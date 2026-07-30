import Link from "next/link";
import { LISTENING_EXTRACTS } from "@/data/listening";
import { PageHero, Panel } from "@/components/ui";

export const metadata = { title: "Listening" };

export default function ListeningIndexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Listening"
        title="Consultation extracts, handovers & talks"
        description="Part A note-taking, Part B workplace texts, Part C presentations. Audio uses browser speech for now — replace with studio files later."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-6">
        {LISTENING_EXTRACTS.map((item) => (
          <Panel key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
                Part {item.part} · {item.specialty}
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-1 text-sm text-ink/60">
                {item.questions.length} questions · ~{Math.round(item.durationSec / 60)} min audio
              </p>
            </div>
            <Link
              href={`/practice/listening/${item.id}`}
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
