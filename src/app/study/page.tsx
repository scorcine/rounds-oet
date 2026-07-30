import { PageHero } from "@/components/ui";
import { StudySession } from "@/components/study/StudySession";

export const metadata = { title: "Study" };

export default function StudyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Phase 1 · Spaced repetition"
        title="Daily reviews"
        description="Anki-style SM-2 scheduling. Rate each card Again / Hard / Good / Easy. Weak competencies from your diagnostic come first."
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <StudySession />
      </div>
    </div>
  );
}
