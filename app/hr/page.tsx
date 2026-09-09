import CohortNav from "@/components/shared/CohortNav";
import Section01Framing from "@/components/hr/Section01Framing";
import Section02Baseline from "@/components/hr/Section02Baseline";
import Section03Foundational from "@/components/hr/Section03Foundational";
import Section04PromptStructure from "@/components/hr/Section04PromptStructure";
import Section05DeepDive from "@/components/hr/Section05DeepDive";
import Section06Risk from "@/components/hr/Section06Risk";
import Section07Toolkit from "@/components/hr/Section07Toolkit";
import Section08Close from "@/components/hr/Section08Close";

export default function HRPage() {
  return (
    <main data-cohort="hr" className="relative w-full">
      <CohortNav />
      <Section01Framing />
      <Section02Baseline />
      <Section03Foundational />
      <Section04PromptStructure />
      <Section05DeepDive />
      <Section06Risk />
      <Section07Toolkit />
      <Section08Close />
    </main>
  );
}
