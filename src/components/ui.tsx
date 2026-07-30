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
        "group relative block overflow-hidden rounded-xl border border-ink/10 bg-white p-6 transition duration-300",
        "hover:-translate-y-1 hover:border-ward/50 hover:shadow-[0_24px_60px_-28px_rgba(7,17,26,0.45)]",
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ward/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-steel">
          {meta}
        </span>
        <span className="text-mist transition group-hover:translate-x-1 group-hover:text-pulse">
          →
        </span>
      </div>
      <h3 className="font-display text-3xl font-bold text-ink">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">{blurb}</p>
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
    <div className="relative overflow-hidden border-b border-ink/10 bg-steel text-paper">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,214,192,0.18),transparent_50%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ward">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">{description}</p>
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
    <div
      className={cn(
        "rounded-xl border border-ink/10 bg-white p-5 shadow-[0_1px_0_rgba(7,17,26,0.04)] sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
