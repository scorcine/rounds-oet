import { notFound } from "next/navigation";
import { READING_PASSAGES } from "@/data/reading";
import { ReadingPractice } from "@/components/skills/ReadingPractice";

export function generateStaticParams() {
  return READING_PASSAGES.map((x) => ({ id: x.id }));
}

export default async function ReadingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const passage = READING_PASSAGES.find((x) => x.id === id);
  if (!passage) notFound();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <ReadingPractice passage={passage} />
    </div>
  );
}
