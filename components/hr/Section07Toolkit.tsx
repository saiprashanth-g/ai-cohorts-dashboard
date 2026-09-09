import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const TOOLS = [
  {
    name: "NotebookLM",
    use: "Grounded multi-document research",
    body: "Free tier accepts up to 50 sources, each up to roughly 500k words, and grounds every answer with clickable citations back to the source text — the best free option for a literature review across many PDFs at once.",
    tag: "Verified",
    tagColor: "var(--forest-green)",
  },
  {
    name: "Claude",
    use: "Deep reasoning & structured writing",
    body: "Free-tier usage is rate-limited on a rolling multi-hour window, not a flat per-hour cap — expect somewhere in the range of a few dozen messages before a reset, not a hard 3–5-per-hour wall. Best used for the reasoning-heavy step, not bulk document dumping.",
    tag: "Corrected",
    tagColor: "var(--amber)",
  },
  {
    name: "Perplexity",
    use: "Cited, live-searched answers",
    body: "Searches the web live and returns answers with inline, checkable citations — useful specifically for building a real bibliography rather than trusting a model's memory.",
    tag: "Verified",
    tagColor: "var(--forest-green)",
  },
  {
    name: "Kimi",
    use: "Very long-context reading",
    body: "Advertises a very large context window and a permissive free tier for long continuous reading sessions across dense documents. Exact free-tier naming and limits change often — check the current terms before quoting a specific tier name in public.",
    tag: "Verify before citing",
    tagColor: "var(--muted-red)",
  },
  {
    name: "Manus",
    use: "Autonomous agent tasks",
    body: "A genuine agent — it can browse, click, and write working code end-to-end, not just chat. Free-tier credit amounts are small and change with promotions; treat any specific dollar figure as unverified until checked at the time of use.",
    tag: "Verify before citing",
    tagColor: "var(--muted-red)",
  },
  {
    name: "Gamma / Canva Magic Design",
    use: "Turning outlines into slides",
    body: "Paste a Markdown outline or raw lecture notes and get a structured, visually separated deck back — a fast way to turn research into a presentable format without manual layout work.",
    tag: "Verified",
    tagColor: "var(--forest-green)",
  },
];

export default function Section07Toolkit() {
  return (
    <section className="slide">
      <AnimationStagger selector=".stagger-card" stagger={0.08}>
        <div className="w-full max-w-6xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Student Stack — For Every Cohort"
            title="The free-tier toolkit that actually holds up"
            dek="Every claim below has been checked rather than copy-pasted. Where a figure couldn't be verified, it's labeled that way instead of presented as fact — the same discipline this whole series asks of you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TOOLS.map((t) => (
              <div key={t.name} className="stagger-card panel p-5 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-base font-bold" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </h4>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white shrink-0"
                    style={{ background: t.tagColor }}
                  >
                    {t.tag}
                  </span>
                </div>
                <p className="micro-label">{t.use}</p>
                <p className="text-xs text-[var(--body)] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="stagger-card panel p-4 bg-[var(--canvas)] max-w-3xl">
            <p className="text-[11px] text-[var(--body)] leading-relaxed">
              <strong>Working pattern, not brand loyalty:</strong> use NotebookLM or Kimi for
              bulk reading, Claude or Perplexity for the reasoning and citation-checking pass,
              and a slide tool only once the content is settled. Match the tool to the step,
              not the other way around.
            </p>
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
