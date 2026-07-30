"use client";

import { useMemo, useState } from "react";
import { VOCAB_ENTRIES, VOCAB_SPECIALTIES } from "@/data/vocabulary";
import { filterVocab, loadProgress, toggleVocabMastered } from "@/lib/progress";
import { PageHero, Panel } from "@/components/ui";

export default function VocabularyPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState<string>("all");
  const [mastered, setMastered] = useState<string[]>(() =>
    typeof window === "undefined" ? [] : loadProgress().vocabMastered,
  );

  const items = useMemo(
    () => filterVocab(VOCAB_ENTRIES, query, specialty),
    [query, specialty],
  );

  return (
    <div>
      <PageHero
        eyebrow="Vocabulary"
        title="Clinical English you can reuse in letters and role-plays"
        description="Mark terms as mastered. This deck is expandable — same schema will sync to mobile later."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms…"
            className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none ring-ward focus:ring-2 sm:max-w-sm"
          />
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm"
          >
            {VOCAB_SPECIALTIES.map((s) => (
              <option key={s} value={s}>
                {s === "all" ? "All specialties" : s}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((entry) => {
            const done = mastered.includes(entry.id);
            return (
              <Panel key={entry.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ward">
                      {entry.specialty}
                    </p>
                    <h2 className="mt-1 font-display text-2xl text-ink">{entry.term}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const next = toggleVocabMastered(entry.id);
                      setMastered(next.vocabMastered);
                    }}
                    className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold ${
                      done ? "bg-ward text-paper" : "bg-ink/5 text-ink"
                    }`}
                  >
                    {done ? "Mastered" : "Mark"}
                  </button>
                </div>
                <p className="mt-3 text-sm text-ink/70">{entry.definition}</p>
                <p className="mt-3 rounded-xl bg-scrub/70 p-3 text-sm italic text-ink/75">
                  {entry.example}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.collocations.map((c: string) => (
                    <span
                      key={c}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Panel>
            );
          })}
        </div>
      </div>
    </div>
  );
}
