import { notFound } from "next/navigation";
import { EnglishLevelView } from "@/components/english/EnglishLevelView";
import { isCefrLevel } from "@/data/english";

export function generateStaticParams() {
  return [{ level: "A1" }, { level: "A2" }];
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
  return <EnglishLevelView level={level} />;
}
