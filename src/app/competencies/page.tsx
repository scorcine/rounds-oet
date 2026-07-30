import { PageHero } from "@/components/ui";
import { CompetencyMap } from "@/components/study/CompetencyMap";

export const metadata = { title: "Competencies" };

export default function CompetenciesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Phase 1 · Map"
        title="Competency map"
        description="Four pillars of OET Medicine study. Mastery blends your placement score with how mature your SRS cards are becoming."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <CompetencyMap />
      </div>
    </div>
  );
}
