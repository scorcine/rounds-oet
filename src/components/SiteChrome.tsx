"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/diagnose", label: "Diagnose" },
  { href: "/study", label: "Study" },
  { href: "/lessons", label: "Lessons" },
  { href: "/exam", label: "Exam" },
  { href: "/analytics", label: "Analytics" },
  { href: "/practice", label: "Practice" },
  { href: "/progress", label: "Progress" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-ink/10 backdrop-blur-md",
        isLanding ? "bg-scrub/80" : "bg-paper/90",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink">Rounds</span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-ward sm:inline">
            OET Medicine
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  active ? "bg-ink text-paper" : "text-ink/70 hover:bg-ink/5 hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/diagnose"
          className="rounded-md bg-pulse px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pulse/90"
        >
          Diagnose
        </Link>
      </div>
      <div className="flex gap-1 overflow-x-auto border-t border-ink/5 px-4 py-2 md:hidden">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/80"
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
    <footer className="mt-auto border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-display text-xl text-paper">Rounds</p>
        <p className="max-w-md text-sm text-paper/60">
          Practice materials are original and for exam preparation only — not affiliated with
          Cambridge Boxhill Language Assessment or official OET.
        </p>
      </div>
    </footer>
  );
}
