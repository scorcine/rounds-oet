import { notFound } from "next/navigation";
import Link from "next/link";
import { EnglishLevelView } from "@/components/english/EnglishLevelView";
import { CEFR_LEVEL_ORDER } from "@/domain/english";
import { getLevelMeta, isCefrLevel, isLevelReady } from "@/data/english";
import { PageHero, Panel } from "@/components/ui";

export function generateStaticParams() {
  return CEFR_LEVEL_ORDER.map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  return { title: `English ${level}` };
}

export default async function EnglishLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  if (!isCefrLevel(level)) notFound();

  if (!isLevelReady(level)) {
    const meta = getLevelMeta(level);
    return (
      <div>
        <PageHero
          eyebrow={`CEFR · ${level}`}
          title={meta?.title ?? level}
          description={meta?.blurb ?? "This module is under construction."}
          action={
            <Link
              href="/english"
              className="mt-2 inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-paper"
            >
              ← All modules
            </Link>
          }
        />
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Panel className="border-dashed text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ward">
              Em construção
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">
              {level} is coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
              We&apos;re building this module in the same Premium format as A1 (listen, speak,
              write, drills and checkpoints). Meanwhile, continue with A1 Premium.
            </p>
            <Link
              href="/english/A1"
              className="mt-6 inline-flex rounded-md bg-pulse px-5 py-2.5 text-sm font-bold text-white"
            >
              Open A1 Premium →
            </Link>
          </Panel>
        </div>
      </div>
    );
  }

  return <EnglishLevelView level={level} />;
}
