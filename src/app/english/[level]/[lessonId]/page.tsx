import { notFound } from "next/navigation";
import { EnglishLessonPlayer } from "@/components/english/LessonPlayer";
import { ENGLISH_LESSONS, getEnglishLesson, isCefrLevel } from "@/data/english";

export function generateStaticParams() {
  return ENGLISH_LESSONS.map((l) => ({ level: l.level, lessonId: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ level: string; lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = getEnglishLesson(lessonId);
  return { title: lesson ? `${lesson.title} · ${lesson.level}` : "Lesson" };
}

export default async function EnglishLessonPage({
  params,
}: {
  params: Promise<{ level: string; lessonId: string }>;
}) {
  const { level, lessonId } = await params;
  if (!isCefrLevel(level)) notFound();
  const lesson = getEnglishLesson(lessonId);
  if (!lesson || lesson.level !== level) notFound();
  return <EnglishLessonPlayer lesson={lesson} />;
}
