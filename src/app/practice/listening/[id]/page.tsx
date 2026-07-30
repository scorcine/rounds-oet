import { notFound } from "next/navigation";
import { LISTENING_EXTRACTS } from "@/data/listening";
import { ListeningPractice } from "@/components/skills/ListeningPractice";

export function generateStaticParams() {
  return LISTENING_EXTRACTS.map((x) => ({ id: x.id }));
}

export default async function ListeningDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const extract = LISTENING_EXTRACTS.find((x) => x.id === id);
  if (!extract) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ListeningPractice extract={extract} />
    </div>
  );
}
