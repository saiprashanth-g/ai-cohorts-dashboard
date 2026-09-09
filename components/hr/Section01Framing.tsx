import AnimationStagger from "@/components/shared/AnimationStagger";

export default function Section01Framing() {
  return (
    <section className="slide">
      <AnimationStagger>
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          <span className="stagger-item micro-label block">01 / HR &amp; Organizational Psychology</span>
          <h1 className="stagger-item text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            HR already runs on judgment calls.{" "}
            <span style={{ color: "var(--deep-blue)" }}>AI changes what those calls are based on.</span>
          </h1>
          <p className="stagger-item text-sm md:text-base text-[var(--body)] max-w-2xl mx-auto leading-relaxed">
            Every HR decision — who gets shortlisted, who gets flagged as a flight risk, who
            gets the stretch assignment — was always a judgment call made on incomplete data.
            AI doesn&apos;t remove the judgment. It changes the resolution of the data the
            judgment is made on. This track is about using that shift deliberately instead of
            accidentally.
          </p>
          <div className="stagger-item rule w-14 mx-auto mt-2" style={{ background: "var(--deep-blue)" }} />
        </div>
      </AnimationStagger>
    </section>
  );
}
