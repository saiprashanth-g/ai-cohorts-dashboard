import Link from "next/link";

const COHORTS = [
  {
    slug: "hr",
    num: "01",
    label: "HR / Org Psychology",
    accent: "var(--deep-blue)",
    status: "Full track",
    dek: "From drafting job descriptions to algorithmic workforce planning and attrition modeling.",
  },
  {
    slug: "neuropsych",
    num: "02",
    label: "Neuropsychology",
    accent: "var(--violet)",
    status: "Skeleton",
    dek: "Cognitive assessment scoring, imaging-adjacent pattern work, and the limits of pattern-matching on brains.",
  },
  {
    slug: "clinical",
    num: "03",
    label: "Clinical Psychology",
    accent: "var(--muted-red)",
    status: "Skeleton",
    dek: "Intervention drafting, session-note synthesis, and where AI must never sit unsupervised.",
  },
  {
    slug: "educational",
    num: "04",
    label: "Educational Psychology",
    accent: "var(--amber)",
    status: "Skeleton",
    dek: "Personalized learning paths, IEP drafting support, and classroom-level behavioral pattern flags.",
  },
  {
    slug: "health",
    num: "05",
    label: "Health Psychology",
    accent: "var(--forest-green)",
    status: "Skeleton",
    dek: "Adherence modeling, patient-facing chat triage, and biometric-behavioral data fusion.",
  },
];

export default function Hub() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="eyebrow block font-mono-label" style={{ color: "var(--ink)" }}>
            MSc Applied Psychology — AI Literacy Series
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            AI Across the Cohorts
          </h1>
          <p className="text-base text-[var(--body)] leading-relaxed">
            Five tracks, one shared spine: what practitioners already do with AI, what a
            beginner can safely add tomorrow, how to structure a real prompt, where the
            domain-specific leverage actually is, and where the guardrails have to hold.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COHORTS.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="panel group flex flex-col justify-between p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-label text-xs text-gray-400">{c.num}</span>
                <span
                  className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    color: c.status === "Full track" ? "#fff" : "var(--body)",
                    background: c.status === "Full track" ? (c.accent as string) : "var(--canvas)",
                    border: c.status === "Full track" ? "none" : "1px solid var(--hairline)",
                  }}
                >
                  {c.status}
                </span>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
                  {c.label}
                </h3>
                <p className="text-xs text-[var(--body)] leading-relaxed">{c.dek}</p>
              </div>
              <div
                className="mt-5 h-0.5 w-8 group-hover:w-16 transition-all"
                style={{ background: c.accent as string }}
              />
            </Link>
          ))}
        </div>

        <div className="panel p-5 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[var(--body)] leading-relaxed">
            Every track follows the same seven-part spine: framing → current baseline use →
            foundational tier → prompt structure → domain deep-dive → risk &amp; guardrails →
            close. The 10-step prompt anatomy is taught once, in the HR track, and linked from
            everywhere else.
          </p>
        </div>
      </div>
    </main>
  );
}
