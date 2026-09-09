import AnimationStagger from "@/components/shared/AnimationStagger";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Section02Baseline() {
  return (
    <section className="slide">
      <AnimationStagger selector=".stagger-card" stagger={0.1}>
        <div className="w-full max-w-6xl mx-auto space-y-10">
          <SectionHeader
            eyebrow="Baseline — Current Informal Use"
            title="What HR practitioners actually do with AI today"
            dek="Diagnostic, not aspirational. These are reported figures, not projections — and where two sources disagree, both are shown rather than the more flattering one."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="stagger-card panel p-5 space-y-2">
              <span className="stat-num text-3xl block">26% / 20% / 9%</span>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--ink)" }}>
                Weekly / Daily / Several-times-daily use
              </p>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                Reported usage frequency among HR professionals at organizations that have
                implemented AI tools.
              </p>
              <span className="text-[9px] font-mono-label text-gray-400 block pt-1">
                Source: SHRM, State of AI in HR, 2026
              </span>
            </div>

            <div className="stagger-card panel p-5 space-y-2">
              <span className="stat-num text-3xl block">27% / 21% / 17%</span>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--ink)" }}>
                Where AI sits in the function
              </p>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                Talent acquisition, HR technology operations, and learning &amp; development —
                the three heaviest concentrations of current AI use inside HR.
              </p>
              <span className="text-[9px] font-mono-label text-gray-400 block pt-1">
                Source: SHRM, State of AI in HR, 2026
              </span>
            </div>

            <div className="stagger-card panel p-5 space-y-2">
              <span className="stat-num text-3xl block">69% vs 18%</span>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--ink)" }}>
                Deep in one place, thin everywhere else
              </p>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                69% of talent acquisition teams use AI somewhere in sourcing or screening —
                but only 18% use it broadly across the whole HR operation.
              </p>
              <span className="text-[9px] font-mono-label text-gray-400 block pt-1">
                Source: Aptitude Research / iCIMS — not the SHRM figures above
              </span>
            </div>
          </div>

          {/* Named tension — not resolved, presented honestly */}
          <div className="stagger-card panel p-5 border-l-4" style={{ borderLeftColor: "var(--deep-blue)" }}>
            <p className="micro-label mb-2">Unresolved tension in the sourcing</p>
            <p className="text-xs text-[var(--body)] leading-relaxed">
              A second read of the same SHRM survey wave reports that <strong>54% of
              organizations have adopted no AI in HR and have no plans to.</strong> That
              doesn&apos;t necessarily contradict the adoption figures above — different survey
              waves used different sample sizes, and likely different question framing — but
              nothing in the public write-ups reconciles the two numbers. The honest read: AI
              use in HR is real, concentrated, and adopted unevenly — not universal. Don&apos;t
              let a slide flatten that into a single clean percentage.
            </p>
          </div>

          <div className="stagger-card panel p-4 bg-[var(--canvas)]">
            <p className="text-[11px] text-[var(--body)] leading-relaxed">
              <strong>Flagged as unverified:</strong> a commonly repeated claim that semantic
              resume matching cuts time-to-hire by 50% traces to vendor marketing material, not
              an independent study. Useful as a directional claim in conversation — not
              citable as a fact.
            </p>
          </div>
        </div>
      </AnimationStagger>
    </section>
  );
}
