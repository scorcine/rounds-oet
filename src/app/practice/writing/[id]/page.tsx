import { notFound } from "next/navigation";
import { WRITING_CASES } from "@/data/writing";
import { WritingPractice } from "@/components/skills/WritingPractice";

export function generateStaticParams() {
  return WRITING_CASES.map((x) => ({ id: x.id }));
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const writingCase = WRITING_CASES.find((x) => x.id === id);
  if (!writingCase) notFound();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <WritingPractice writingCase={writingCase} />
    </div>
  );
}
