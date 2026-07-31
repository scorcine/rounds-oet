import Link from "next/link";
import { SKILL_META } from "@/domain/skills";
import { SkillCard } from "@/components/ui";
import { StudyPath } from "@/components/home/StudyPath";

const skills = Object.entries(SKILL_META);

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden hero-mesh">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,214,192,0.12),transparent_65%)]" />
        <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ward/20 to-transparent" />
        <div className="pointer-events-none absolute bottom-24 left-[12%] h-px w-40 animate-pulse-line bg-gradient-to-r from-transparent via-ward to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="animate-rise font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-ward">
            OET Medicine · Adaptive engine
          </p>
          <h1 className="animate-rise mt-5 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-paper sm:text-7xl md:text-8xl">
            Rounds
          </h1>
          <p
            className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-paper/70 sm:text-xl"
            style={{ animationDelay: "90ms" }}
          >
            The clinical English system that finds your weak spots — then trains them until exam day.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "160ms" }}
          >
            <Link
              href="/diagnose"
              className="rounded-md bg-pulse px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Take free diagnostic
            </Link>
            <Link
              href="/exam"
              className="rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur transition hover:border-ward/50 hover:bg-white/10"
            >
              Run exam mode
            </Link>
          </div>
        </div>
      </section>

      <StudyPath />

      <section className="relative overflow-hidden border-y border-ink/10 bg-ink px-4 py-16 text-paper sm:px-6">
        <div className="pointer-events-none absolute inset-0 tech-grid-dense opacity-40" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-ward">
              General English · CEFR
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              English Path A1–A2
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/55 sm:text-base">
              20 short A1 lessons with Portuguese glosses — foundations first, then OET Medicine.
            </p>
          </div>
          <Link
            href="/english"
            className="inline-flex w-fit rounded-md bg-pulse px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            Open English Path →
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ward" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-steel">
                Product loop
              </p>
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
              Diagnose. Drill. Dominate the exam.
            </h2>
            <p className="mt-4 text-ink/60">
              Placement maps your competencies. Spaced repetition hits weak areas daily. Timed exam
              mode proves you are ready.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/diagnose",
                title: "Diagnostic",
                blurb: "16-question mini-OET that seeds your personal track.",
              },
              {
                href: "/study",
                title: "SRS engine",
                blurb: "Anki-style reviews with adaptive daily goals.",
              },
              {
                href: "/exam",
                title: "Exam mode",
                blurb: "Real section timers and pacing analytics.",
              },
            ].map((item, i) => (
              <SkillCard
                key={item.href}
                href={item.href}
                title={item.title}
                blurb={item.blurb}
                meta={`0${i + 1}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-scrub/50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-steel">
              Four skills
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
              Train like the real test
            </h2>
            <p className="mt-4 text-ink/60">
              Listening, Reading, Writing and Speaking — with AI rubric feedback when you connect
              OpenAI.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {skills.map(([key, meta], i) => (
              <SkillCard
                key={key}
                href={meta.href}
                title={meta.label}
                blurb={meta.blurb}
                meta={`${meta.examMinutes} min`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-20 text-paper sm:px-6">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-ward">
              Why Rounds
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Built to convert study time into band scores
            </h2>
            <p className="mt-4 max-w-lg text-paper/60">
              Not another generic English app — a medicine-first system with analytics, AI feedback
              and a path to mobile.
            </p>
            <Link
              href="/account"
              className="mt-8 inline-flex rounded-md bg-ward px-6 py-3 text-sm font-bold text-ink transition hover:brightness-110"
            >
              Create your study account
            </Link>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              ["Adaptive track", "Diagnostic + SRS priorities"],
              ["Exam intelligence", "Pacing & topic error reports"],
              ["AI examiner", "Writing bands & speaking criteria"],
              ["Clinical content", "GP · Ortho · ED · Surgery · Anaesthesia"],
            ].map(([t, d]) => (
              <li
                key={t}
                className="flex items-start justify-between gap-4 border-b border-white/10 py-3"
              >
                <span className="font-semibold text-paper">{t}</span>
                <span className="text-right text-paper/45">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
