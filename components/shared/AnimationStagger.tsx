'use client';

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimationStaggerProps {
  children: React.ReactNode;
  selector?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export default function AnimationStagger({
  children,
  selector = ".stagger-item",
  delay = 0,
  stagger = 0.12,
  y = 20,
  duration = 0.55,
  className = "",
}: AnimationStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const targets = containerRef.current?.querySelectorAll(selector);
      if (!targets || targets.length === 0) return;

      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay,
      });

      gsap.set(targets, { opacity: 0, y });

      timelineRef.current.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  useLayoutEffect(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {children}
    </div>
  );
}
