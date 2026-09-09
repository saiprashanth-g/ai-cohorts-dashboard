'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const COHORTS = [
  { slug: "hr", num: "01", label: "HR", accentVar: "--deep-blue" },
  { slug: "neuropsych", num: "02", label: "Neuropsych", accentVar: "--violet" },
  { slug: "clinical", num: "03", label: "Clinical", accentVar: "--muted-red" },
  { slug: "educational", num: "04", label: "Educational", accentVar: "--amber" },
  { slug: "health", num: "05", label: "Health", accentVar: "--forest-green" },
];

export default function CohortNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: fixed vertical tab index, left edge, sticky-note style */}
      <nav className="hidden md:flex flex-col fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          href="/"
          className="micro-label bg-white border border-[var(--hairline)] border-b-0 px-3 py-2 writing-vertical hover:bg-[var(--canvas)] transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          Index
        </Link>
        {COHORTS.map((c) => {
          const active = pathname === `/${c.slug}`;
          return (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex items-center gap-2 border border-[var(--hairline)] border-t-0 px-3 py-3 transition-colors"
              style={{
                background: active ? `var(${c.accentVar})` : "#FFFFFF",
              }}
            >
              <span
                className="font-mono-label text-[10px]"
                style={{ color: active ? "#FFFFFF" : "#9CA3AF" }}
              >
                {c.num}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{
                  writingMode: "vertical-rl",
                  color: active ? "#FFFFFF" : "var(--body)",
                }}
              >
                {c.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile: horizontal top strip */}
      <nav className="flex md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-[var(--hairline)] overflow-x-auto">
        <Link href="/" className="micro-label px-3 py-2 shrink-0">
          Index
        </Link>
        {COHORTS.map((c) => {
          const active = pathname === `/${c.slug}`;
          return (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 shrink-0 border-l border-[var(--hairline)]"
              style={{
                background: active ? `var(${c.accentVar})` : "#FFFFFF",
                color: active ? "#FFFFFF" : "var(--body)",
              }}
            >
              {c.num} {c.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
