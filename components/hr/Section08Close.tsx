import Link from "next/link";
import AnimationStagger from "@/components/shared/AnimationStagger";

export default function Section08Close() {
  return (
    <section className="slide">
      <AnimationStagger>
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <span className="stagger-item micro-label block">Close</span>
          <h2 className="stagger-item text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Same spine. Different stakes.
            <br />
            <span style={{ color: "var(--deep-blue)" }}>Next: Neuropsychology.</span>
          </h2>
          <p className="stagger-item text-sm text-[var(--body)] max-w-xl mx-auto leading-relaxed">
            The prompt anatomy you just learned doesn&apos;t change. What changes from here is
            the data, the caveats, and exactly where the guardrail has to sit.
          </p>
          <Link
            href="/neuropsych"
            className="stagger-item inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full text-white"
            style={{ background: "var(--violet)" }}
          >
            Continue to Neuropsychology →
          </Link>
        </div>
      </AnimationStagger>
    </section>
  );
}
