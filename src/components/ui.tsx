import Link from "next/link";
import { cn } from "@/lib/utils";

export function SkillCard({
  href,
  title,
  blurb,
  meta,
  index,
}: {
  href: string;
  title: string;
  blurb: string;
  meta: string;
  index: number;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-ink/10 bg-paper/70 p-6 transition",
        "hover:-translate-y-0.5 hover:border-ward/40 hover:shadow-[0_20px_50px_-30px_rgba(16,42,46,0.45)]",
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ward">{meta}</span>
        <span className="text-ink/30 transition group-hover:translate-x-1 group-hover:text-pulse">→</span>
      </div>
      <h3 className="font-display text-3xl text-ink">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">{blurb}</p>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,95,106,0.14),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(232,93,76,0.08),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ward">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">{description}</p>
        {action}
      </div>
    </div>
  );
}

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6", className)}>
      {children}
    </div>
  );
}
