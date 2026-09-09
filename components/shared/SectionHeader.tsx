import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  dek,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  dek?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`stagger-item space-y-3 ${
        align === "center" ? "text-center mx-auto" : ""
      }`}
    >
      <span className="eyebrow block font-mono-label">{eyebrow}</span>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">
        {title}
      </h2>
      {dek && (
        <p className="text-sm md:text-base text-[var(--body)] max-w-2xl leading-relaxed">
          {dek}
        </p>
      )}
      <div className="rule w-14 mt-1" style={{ background: "var(--accent)" }} />
    </div>
  );
}
