import CohortNav from "@/components/shared/CohortNav";
import CohortSkeleton from "@/components/shared/CohortSkeleton";

export default function EducationalPage() {
  return (
    <>
      <CohortNav />
      <CohortSkeleton
        slug="educational"
        num="04"
        label="Educational Psychology"
        accent="var(--amber)"
        framingEyebrow="Cohort Framing"
        framingTitle={
          <>
            One classroom, thirty learning curves.{" "}
            <span style={{ color: "var(--amber)" }}>AI can actually track that.</span>
          </>
        }
        framingDek="Educational psychology's leverage point is differentiation at scale — noticing which student needs which intervention without a caseload of one. The risk is exactly the same scale: a biased flag reaches thirty kids at once, not one."
        informalUse={[
          {
            title: "Differentiated material generation",
            note: "Drafting reading-level variants of the same lesson content for mixed-ability classrooms.",
          },
          {
            title: "IEP language drafting support",
            note: "First-pass structuring of goals and accommodations language, reviewed and finalized by the practitioner.",
          },
          {
            title: "Behavioral pattern note-taking",
            note: "Summarizing anecdotal classroom observation logs into a more structured behavioral timeline.",
          },
        ]}
      />
    </>
  );
}
