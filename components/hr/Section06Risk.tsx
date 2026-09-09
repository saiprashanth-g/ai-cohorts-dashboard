import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

const ICONS: Record<string, React.ReactNode> = {
  scale: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-7-9h14M5 6l-2 6a3 3 0 006 0l-2-6H5zm14 0l-2 6a3 3 0 006 0l-2-6h-4z" />
    </svg>
  ),
  eye: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  archive: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  bulb: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

const GUARDRAILS = [
  {
    icon: "scale",
    title: "Disparate Impact Audits",
    body: "Any AI touching shortlisting or ranking must be audited for adverse impact on protected groups before deployment, not after a complaint.",
  },
  {
    icon: "eye",
    title: "No Individual Surveillance Flags",
    body: "Sentiment and burnout signals stay aggregate at the team level. Individual-level flags require explicit consent and a named human reviewer.",
  },
  {
    icon: "archive",
    title: "Bounded Data Retention",
    body: "HR records processed by AI tools need defined retention and deletion windows — the same discipline as any other personnel file.",
  },
  {
    icon: "bulb",
    title: "Explainable Adverse Actions",
    body: "If AI contributes to a rejection or a negative outcome, the candidate or employee is owed a plain-language reason, not a black box.",
  },
];

export default function Section06Risk() {
  return (
    <section className="slide">
      <AnimationStagger selector=".stagger-card" stagger={0.1}>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Risk & Guardrails — HR-Specific"
            title="The failure modes here aren't clinical. They're legal and organizational."
            dek="Hiring discrimination law, not clinical confidentiality, is the operative risk category in HR. These four guardrails are what keep AI-assisted HR decisions defensible."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {GUARDRAILS.map((g) => (
              <div key={g.title} className="stagger-card panel p-5 space-y-3 text-center flex flex-col items-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(30,58,95,0.08)", color: "var(--deep-blue)" }}
                >
                  {ICONS[g.icon]}
                </div>
                <h4 className="text-sm font-bold" style={{ color: "var(--ink)" }}>
                  {g.title}
                </h4>
                <p className="text-xs text-[var(--body)] leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
          <div className="stagger-card p-6 rounded-xl text-center max-w-2xl mx-auto space-y-1" style={{ background: "var(--ink)" }}>
            <div className="text-[10px] font-mono-label uppercase tracking-widest text-gray-400">The Golden Rule</div>
            <div className="text-base font-black" style={{ color: "#8FB3D9" }}>
              Augment the judgment call. Never automate the adverse action.
            </div>
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
