import CohortNav from "@/components/shared/CohortNav";
import CohortSkeleton from "@/components/shared/CohortSkeleton";

export default function ClinicalPage() {
  return (
    <>
      <CohortNav />
      <CohortSkeleton
        slug="clinical"
        num="03"
        label="Clinical Psychology"
        accent="var(--muted-red)"
        framingEyebrow="Cohort Framing"
        framingTitle={
          <>
            Recognition and response.{" "}
            <span style={{ color: "var(--muted-red)" }}>Never diagnosis by proxy.</span>
          </>
        }
        framingDek="Clinical work has the highest stakes of any track here. AI can draft worksheets, summarize session notes, and simulate practice scenarios for trainees — but the line between assistant and unsupervised clinician has to be explicit, every time."
        informalUse={[
          {
            title: "Worksheet & handout drafting",
            note: "First-pass CBT worksheets, psychoeducation handouts, and grounding exercises, edited before use.",
          },
          {
            title: "Session note cleanup",
            note: "Turning shorthand session notes into structured documentation language for records.",
          },
          {
            title: "Training-scenario simulation",
            note: "Trainees rehearsing intake interviews against a simulated presenting problem before seeing real clients.",
          },
        ]}
      />
    </>
  );
}
