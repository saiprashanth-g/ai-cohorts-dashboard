import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const TIER = [
  {
    n: "01",
    title: "Job description & posting drafts",
    body: "Turn a rough list of responsibilities into a structured, bias-checked posting draft — then edit it, don't ship it raw.",
  },
  {
    n: "02",
    title: "Routine email & communication drafts",
    body: "Offer letters, rejection notes, policy reminders — first-draft language that a human still reads before it goes out.",
  },
  {
    n: "03",
    title: "Performance review scaffolding",
    body: "Convert scattered manager notes into a structured review template with consistent language across a team.",
  },
];

export default function Section03Foundational() {
  return (
    <section className="slide">
      <AnimationStagger>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Foundational Leverage Tier"
            title="The chatbot level — safe, simple, no engineering required"
            dek="This is the entry point, not the ceiling. Every one of these is a draft-and-review pattern: AI produces a first pass, a person finalizes it."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIER.map((t) => (
              <div key={t.n} className="stagger-item panel p-5 space-y-2">
                <span className="font-mono-label text-xs text-gray-400">{t.n}</span>
                <h4 className="text-base font-bold" style={{ color: "var(--ink)" }}>
                  {t.title}
                </h4>
                <p className="text-xs text-[var(--body)] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="stagger-item panel p-4 bg-[var(--canvas)] max-w-2xl">
            <p className="text-[11px] text-[var(--body)] leading-relaxed">
              <strong>The bridge:</strong> repeating this manually in a chat window doesn&apos;t
              scale and drifts over time. To make it reliable, the instruction itself needs
              structure — that&apos;s the next section.
            </p>
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
