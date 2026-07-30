import { PageHero } from "@/components/ui";
import { ExamMode } from "@/components/exam/ExamMode";

export const metadata = { title: "Exam mode" };

export default function ExamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Phase 2 · Exam mode"
        title="Timed full exam"
        description="Section clocks match real OET lengths. Per-question timing feeds your pacing report and analytics."
      />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <ExamMode />
      </div>
    </div>
  );
}
