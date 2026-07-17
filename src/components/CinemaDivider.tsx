"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  label?: string;
}

/**
 * A slim horizontal band that acts as a cinematic section divider —
 * black bar sweeps across on enter with a white ticker label.
 */
export default function CinemaDivider({ label = "SECTION" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !barRef.current || !labelRef.current) return;
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(labelRef.current, { yPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top 85%",
        once: true,
      },
    });
    tl.to(barRef.current, {
      scaleX: 1,
      duration: 0.9,
      ease: "expo.out",
    })
      .to(
        labelRef.current,
        { yPercent: 0, duration: 0.7, ease: "power4.out" },
        "-=0.4"
      );
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative py-10 md:py-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="relative h-8 overflow-hidden">
          <div
            ref={barRef}
            className="absolute inset-0 origin-left bg-ink-950"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex w-full items-center justify-between px-4">
            <div className="overflow-hidden">
              <div
                ref={labelRef}
                className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-white"
              >
                — {label}
              </div>
            </div>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-white/70">
              ONES · {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
