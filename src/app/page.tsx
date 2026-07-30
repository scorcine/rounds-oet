import Link from "next/link";
import { SKILL_META } from "@/domain/skills";
import { SkillCard } from "@/components/ui";

const skills = Object.entries(SKILL_META);

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden ward-grid">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(26,95,106,0.22),transparent_50%),radial-gradient(ellipse_at_90%_10%,rgba(232,93,76,0.16),transparent_40%),linear-gradient(180deg,#dceeea_0%,#f4f8f7_55%,#f4f8f7_100%)]" />
        <div className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-ward/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-paper to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-ward">
            OET Medicine
          </p>
          <h1 className="animate-rise mt-4 max-w-3xl font-display text-6xl leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
            Rounds
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            Adaptive OET Medicine study — diagnostic placement, spaced repetition, then full skills
            practice. Built web-first for later mobile.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "140ms" }}
          >
            <Link
              href="/diagnose"
              className="rounded-md bg-pulse px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(232,93,76,0.8)] transition hover:bg-pulse/90"
            >
              Take diagnostic
            </Link>
            <Link
              href="/study"
              className="rounded-md border border-ink/20 bg-paper/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:border-ink/40"
            >
              Daily study
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ward">Study loop</p>
          <h2 className="mt-3 font-display text-4xl text-ink">Diagnose → Review → Practise</h2>
          <p className="mt-3 text-ink/65">
            Placement maps four competencies. Spaced repetition schedules your weak areas first.
            Skills modules train the exam itself.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { href: "/diagnose", title: "Diagnostic", blurb: "16-question mini-OET placement." },
            { href: "/lessons", title: "Lessons", blurb: "Microlearning by clinical track." },
            { href: "/exam", title: "Exam mode", blurb: "Timed full set + pacing report." },
          ].map((item, i) => (
            <SkillCard
              key={item.href}
              href={item.href}
              title={item.title}
              blurb={item.blurb}
              meta={`Step ${i + 1}`}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ward">Four skills</p>
          <h2 className="mt-3 font-display text-4xl text-ink">Train the whole exam</h2>
          <p className="mt-3 text-ink/65">
            Each module mirrors exam timing and task types, with progress saved on this device.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map(([key, meta], i) => (
            <SkillCard
              key={key}
              href={meta.href}
              title={meta.label}
              blurb={meta.blurb}
              meta={`${meta.examMinutes} min exam`}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-4xl">Built web-first</h2>
            <p className="mt-4 max-w-lg text-paper/70">
              Domain models and content live outside the UI layer, so the same Listening cases,
              Writing rubrics and Speaking cards can power a future React Native app without
              rewriting the curriculum.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-paper/75">
            <li className="border-l-2 border-pulse pl-4">Mini-OET diagnostic + competency map</li>
            <li className="border-l-2 border-ward pl-4">Spaced repetition with daily goals</li>
            <li className="border-l-2 border-amber pl-4">Exam mode with pacing analytics</li>
            <li className="border-l-2 border-scrub pl-4">Writing & Speaking AI feedback</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
