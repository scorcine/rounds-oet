import { PageHero } from "@/components/ui";
import { DiagnosticFlow } from "@/components/study/DiagnosticFlow";

export const metadata = { title: "Diagnostic" };

export default function DiagnosePage() {
  return (
    <div>
      <PageHero
        eyebrow="Phase 1 · Placement"
        title="Mini-OET diagnostic"
        description="Sixteen questions across vocabulary, grammar, communicative functions and exam strategies. Your result seeds a personalised spaced-repetition deck and daily goal."
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <DiagnosticFlow />
      </div>
    </div>
  );
}
