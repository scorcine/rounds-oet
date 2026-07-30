import { notFound } from "next/navigation";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import { SpeakingPractice } from "@/components/skills/SpeakingPractice";

export function generateStaticParams() {
  return SPEAKING_ROLEPLAYS.map((x) => ({ id: x.id }));
}

export default async function SpeakingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rolePlay = SPEAKING_ROLEPLAYS.find((x) => x.id === id);
  if (!rolePlay) notFound();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SpeakingPractice rolePlay={rolePlay} />
    </div>
  );
}
