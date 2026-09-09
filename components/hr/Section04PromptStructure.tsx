import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const STEPS = [
  { n: "1", title: "Task Context", desc: "Who the AI is acting as, and its core objective." },
  { n: "2", title: "Tone Context", desc: "The voice: formal, coaching, neutral, empathetic." },
  { n: "3", title: "Background Data", desc: "The policy, template, or reference material it should read first." },
  { n: "4", title: "Rules & Limits", desc: "What it must not do — no legal advice, no final decisions." },
  { n: "5", title: "Examples", desc: "One sample of a correct output, shown, not described." },
  { n: "6", title: "History", desc: "Relevant prior context it needs to stay consistent." },
  { n: "7", title: "The Request", desc: "The specific task to do right now." },
  { n: "8", title: "Thinking Step", desc: "Ask it to reason before answering, not just react." },
  { n: "9", title: "Output Format", desc: "Bullets, a table, a specific template structure." },
  { n: "10", title: "Response Prefill", desc: "Start its answer for it to prevent rambling." },
];

export default function Section04PromptStructure() {
  return (
    <section id="prompt-structure" className="slide">
      <AnimationStagger selector=".stagger-card" stagger={0.06}>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Prompt Structure — Taught Once, Used Everywhere"
            title="The anatomy of a professional prompt"
            dek="Every other cohort in this series links back to this section. Learn it here; it doesn't change by discipline — only the content inside each layer does."
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {STEPS.map((s) => (
              <div key={s.n} className="stagger-card panel p-3 space-y-1.5 flex flex-col justify-between">
                <div>
                  <span className="font-mono-label text-[10px] text-gray-400">STEP {s.n}</span>
                  <div className="text-xs font-bold mt-1" style={{ color: "var(--ink)" }}>
                    {s.title}
                  </div>
                </div>
                <p className="text-[10px] text-[var(--body)] leading-tight border-t border-[var(--hairline)] pt-1.5 mt-1.5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="stagger-card panel p-5 space-y-2 bg-[var(--canvas)]">
            <div className="eyebrow font-mono-label">Anatomy in action — an HR example</div>
            <div className="text-[11px] font-mono-label text-[var(--body)] leading-relaxed space-y-1">
              <p><strong>[1–2]</strong> Act as an HR generalist writing in a warm, plain-language tone.</p>
              <p><strong>[3–4]</strong> Here is our leave policy. Do not state legal conclusions — flag for HR review instead.</p>
              <p><strong>[5]</strong> Example: a clear, three-sentence policy summary for a new hire.</p>
              <p><strong>[7]</strong> Draft a summary of our parental leave policy for the onboarding packet.</p>
              <p><strong>[8]</strong> Think through what a new hire would actually be confused about before writing.</p>
              <p><strong>[9–10]</strong> Return it as three short paragraphs. Start with: &quot;Here&apos;s how parental leave works here:&quot;</p>
            </div>
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
