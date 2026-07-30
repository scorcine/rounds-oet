"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/english", label: "English" },
  { href: "/diagnose", label: "Diagnose" },
  { href: "/study", label: "Study" },
  { href: "/lessons", label: "Lessons" },
  { href: "/exam", label: "Exam" },
  { href: "/planner", label: "Planner" },
  { href: "/account", label: "Account" },
  { href: "/progress", label: "Progress" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-xl",
        isLanding
          ? "border-white/10 bg-[#07111a]/80 text-paper"
          : "border-ink/10 bg-ink/95 text-paper",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ward/40 to-transparent" />
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-extrabold tracking-tight text-paper">
            Rounds
          </span>
          <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ward sm:inline">
            OET Medicine
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-ward/15 text-ward"
                    : "text-paper/60 hover:bg-white/5 hover:text-paper",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/diagnose"
          className="rounded-md bg-pulse px-3.5 py-1.5 text-sm font-bold text-white transition hover:brightness-110"
        >
          Start free
        </Link>
      </div>
      <div className="relative flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 lg:hidden">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-paper/80"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-paper/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-2xl font-bold text-paper">Rounds</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ward">
            OET Medicine
          </p>
        </div>
        <p className="max-w-md text-sm text-paper/50">
          Original practice materials for exam preparation only — not affiliated with official OET.
        </p>
      </div>
    </footer>
  );
}
