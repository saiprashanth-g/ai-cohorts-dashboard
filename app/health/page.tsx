import CohortNav from "@/components/shared/CohortNav";
import CohortSkeleton from "@/components/shared/CohortSkeleton";

export default function HealthPage() {
  return (
    <>
      <CohortNav />
      <CohortSkeleton
        slug="health"
        num="05"
        label="Health Psychology"
        accent="var(--forest-green)"
        framingEyebrow="Cohort Framing"
        framingTitle={
          <>
            Behavior change is the intervention.{" "}
            <span style={{ color: "var(--forest-green)" }}>Adherence data is the signal.</span>
          </>
        }
        framingDek="Health psychology sits at the fusion point of biometric data, self-report, and behavior change theory. AI's leverage here is pattern-spotting across adherence and lifestyle data — its risk is treating a wellness nudge like a clinical instruction."
        informalUse={[
          {
            title: "Patient-facing FAQ drafting",
            note: "First-pass plain-language explainers for chronic condition management, reviewed before distribution.",
          },
          {
            title: "Adherence log summarization",
            note: "Turning raw medication or exercise log data into a readable weekly trend summary for a session.",
          },
          {
            title: "Motivational-interviewing script drafting",
            note: "Draft conversation scaffolds for behavior-change coaching sessions, adapted by the practitioner.",
          },
        ]}
      />
    </>
  );
}
