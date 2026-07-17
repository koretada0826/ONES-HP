"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      onDone();
      return;
    }
    const total = 1800;
    const start = performance.now();
    let raf = 0;
    const step = () => {
      const t = performance.now() - start;
      const p = Math.min(t / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        finish();
      }
    };
    raf = requestAnimationFrame(step);

    const finish = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
          onDone();
        },
      });
      if (wordRef.current) {
        tl.to(wordRef.current, { opacity: 0, y: -12, duration: 0.4, ease: "power3.out" });
      }
      tl.to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "-=0.1");
    };

    return () => cancelAnimationFrame(raf);
  }, [reduced, onDone]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
      aria-hidden={progress >= 100}
    >
      <div ref={wordRef} className="flex flex-col items-center gap-6">
        <span
          className="font-display text-4xl font-black tracking-[0.02em] text-ink-950 md:text-6xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          ONES
        </span>
        <span className="font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/55">
          CREATING THE FUTURE
        </span>
      </div>

      <div className="mt-14 flex w-[240px] flex-col gap-3 md:w-[320px]">
        <div className="h-px w-full bg-ink-950/10">
          <div
            ref={barRef}
            className="h-full bg-[#c4897a] transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-baseline justify-between font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/55 tabular-nums">
          <span>LOADING</span>
          <span>{String(progress).padStart(3, "0")}</span>
        </div>
      </div>
    </div>
  );
}
