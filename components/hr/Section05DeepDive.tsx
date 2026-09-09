import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const PILLARS = [
  {
    n: "01",
    title: "Talent Matching, Beyond Keywords",
    body: "Semantic embedding models score resumes on skills and project patterns instead of exact keyword hits, widening the pool of qualified candidates a keyword filter would have dropped.",
    caveat:
      "Caveat: models trained on historical hiring data can silently penalize candidates with employment gaps — parental leave, caregiving, illness. Audit for this specifically; it won't show up as an obvious error.",
  },
  {
    n: "02",
    title: "Performance Enablement & Adaptive Learning",
    body: "Instead of a once-a-year review, continuous signal from everyday tools surfaces skills gaps as they emerge, and links them to specific micro-learning content.",
    caveat:
      "Caveat: this only works if employees know it's happening and why. Silent monitoring framed as 'enablement' erodes trust the moment it's discovered.",
  },
  {
    n: "03",
    title: "Sentiment & Burnout Prediction",
    body: "Aggregate communication-pattern signals — volume spikes, after-hours activity, tone shifts — can flag team-level burnout risk before it shows up in exit interviews.",
    caveat:
      "The ethics boundary: this must stay aggregate, not individual. A team-level burnout flag is a staffing conversation. An individual flag is surveillance, and it needs a transparency policy before it ever ships.",
  },
];

export default function Section05DeepDive() {
  return (
    <section className="slide">
      <AnimationStagger selector=".stagger-card" stagger={0.12}>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Domain Deep-Dive"
            title="Where the real leverage is in HR"
            dek="Three pillars of I-O-psychology-grade AI use — each with the caveat that makes it safe to actually deploy, not a stripped-down highlight reel."
          />
          <div className="space-y-5">
            {PILLARS.map((p) => (
              <div key={p.n} className="stagger-card panel p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-1">
                  <span className="font-mono-label text-xs text-gray-400">{p.n}</span>
                </div>
                <div className="md:col-span-11 space-y-2">
                  <h4 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h4>
                  <p className="text-sm text-[var(--body)] leading-relaxed">{p.body}</p>
                  <p
                    className="text-xs leading-relaxed border-l-2 pl-3"
                    style={{ borderLeftColor: "var(--deep-blue)", color: "var(--body)" }}
                  >
                    {p.caveat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
