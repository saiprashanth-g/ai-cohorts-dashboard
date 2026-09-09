import Link from "next/link";
import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const SPINE = [
  { n: "02", title: "Baseline: current informal use", note: "What students/practitioners already do with AI today, sourced, not assumed." },
  { n: "03", title: "Foundational leverage tier", note: "Safe, non-technical entry moves. No engineering required." },
  { n: "04", title: "Prompt structure", note: "The 10-step anatomy — taught in full on the HR track, linked from here." },
  { n: "05", title: "Domain deep-dive", note: "Concrete use cases mapped to real workflows in this field." },
  { n: "06", title: "Risk & guardrails", note: "Domain-specific. The failure modes here are not the HR failure modes." },
  { n: "07", title: "Close / transition", note: "Bridge to the next cohort or a call to action." },
];

export default function CohortSkeleton({
  slug,
  num,
  label,
  accent,
  framingEyebrow,
  framingTitle,
  framingDek,
  informalUse,
}: {
  slug: string;
  num: string;
  label: string;
  accent: string;
  framingEyebrow: string;
  framingTitle: React.ReactNode;
  framingDek: string;
  informalUse: { title: string; note: string }[];
}) {
  return (
    <main data-cohort={slug} className="relative w-full">
      {/* Section 1 — cohort framing (real content, not filler) */}
      <section className="slide">
        <AnimationStagger>
          <div className="w-full max-w-4xl mx-auto text-center space-y-6">
            <span className="stagger-item micro-label block">
              {num} / {label}
            </span>
            <h1 className="stagger-item text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {framingTitle}
            </h1>
            <p className="stagger-item text-sm md:text-base text-[var(--body)] max-w-2xl mx-auto leading-relaxed">
              {framingDek}
            </p>
            <div className="stagger-item rule w-14 mx-auto mt-2" style={{ background: accent }} />
          </div>
        </AnimationStagger>
      </section>

      {/* Section — what practitioners already do (diagnostic, not prescriptive) */}
      <section className="slide">
        <AnimationStagger>
          <div className="w-full max-w-5xl mx-auto space-y-10">
            <SectionHeader
              eyebrow={framingEyebrow}
              title="What people in this field already do with AI"
              dek="Informal, everyday use — before any structure or strategy is applied. This is the starting line, not the target."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {informalUse.map((item) => (
                <div key={item.title} className="stagger-item panel p-5 space-y-2">
                  <h4 className="text-sm font-bold" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--body)] leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimationStagger>
      </section>

      {/* Roadmap of the rest of the spine — honest "in development" state */}
      <section className="slide">
        <AnimationStagger>
          <div className="w-full max-w-4xl mx-auto space-y-10">
            <SectionHeader
              eyebrow="Track Roadmap"
              title="The rest of this track"
              dek="This track follows the same seven-part spine as HR. The sections below are scaffolded and awaiting domain-specific content."
            />
            <div className="space-y-0 panel divide-y divide-[var(--hairline)]">
              {SPINE.map((s) => (
                <div key={s.n} className="stagger-item flex items-start gap-4 p-4">
                  <span className="font-mono-label text-xs text-gray-400 pt-0.5">{s.n}</span>
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold" style={{ color: "var(--ink)" }}>
                      {s.title}
                    </div>
                    <p className="text-xs text-[var(--body)] leading-relaxed">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="stagger-item text-center">
              <Link
                href="/hr#prompt-structure"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full text-white"
                style={{ background: accent }}
              >
                See the full prompt anatomy on the HR track →
              </Link>
            </div>
          </div>
        </AnimationStagger>
      </section>
    </main>
  );
}
