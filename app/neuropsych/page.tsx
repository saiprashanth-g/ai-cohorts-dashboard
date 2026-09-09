import CohortNav from "@/components/shared/CohortNav";
import CohortSkeleton from "@/components/shared/CohortSkeleton";

export default function NeuropsychPage() {
  return (
    <>
      <CohortNav />
      <CohortSkeleton
        slug="neuropsych"
        num="02"
        label="Neuropsychology"
        accent="var(--violet)"
        framingEyebrow="Cohort Framing"
        framingTitle={
          <>
            Pattern recognition is the job.{" "}
            <span style={{ color: "var(--violet)" }}>So is knowing its limits.</span>
          </>
        }
        framingDek="Neuropsychology already runs on standardized scoring, normative comparison, and structured report writing — which is exactly the kind of work language models are good at accelerating, and exactly the kind of work where a wrong pattern-match has clinical consequences."
        informalUse={[
          {
            title: "Report drafting",
            note: "Turning raw test battery scores and behavioral observations into a first-draft narrative report structure.",
          },
          {
            title: "Literature lookups",
            note: "Quick queries on normative data ranges, test validity questions, or recent case study framing while writing.",
          },
          {
            title: "Score interpretation sanity checks",
            note: "Cross-checking an interpretation against general knowledge before finalizing — treated as a second opinion, not a source of truth.",
          },
        ]}
      />
    </>
  );
}
