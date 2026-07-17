"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LoadingScene = dynamic(() => import("./LoadingScene"), { ssr: false });

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const dashLineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [particleShown, setParticleShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduced) {
      setVisible(false);
      onDone();
      return;
    }
    setParticleShown(true);

    // Counter 0→100 aligned with particle gather phase
    const total = 3200;
    const start = performance.now();
    let raf = 0;
    const step = () => {
      const t = performance.now() - start;
      const p = Math.min(t / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onDone]);

  const handleParticlesDone = () => {
    // Dash line sweep, then fade out root and hand off to the site
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onDone();
      },
    });
    if (dashLineRef.current) {
      tl.fromTo(
        dashLineRef.current,
        { scaleX: 0, transformOrigin: "left center", opacity: 0.9 },
        { scaleX: 1, duration: 0.35, ease: "expo.out" }
      ).to(dashLineRef.current, {
        transformOrigin: "right center",
        scaleX: 0,
        duration: 0.35,
        ease: "expo.in",
      });
    }
    tl.to(
      rootRef.current,
      { autoAlpha: 0, duration: 0.7, ease: "power3.out" },
      "-=0.15"
    );
  };

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 45%, #0a0a0f 0%, #050507 60%, #000 100%)",
      }}
      aria-hidden={progress >= 100}
    >
      <div className="grain" style={{ opacity: 0.04 }} />

      {/* Particle scene fills viewport */}
      {particleShown && (
        <div className="absolute inset-0">
          <LoadingScene onDone={handleParticlesDone} />
        </div>
      )}

      {/* Bottom UI — progress counter + micro tag */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 flex flex-col items-center gap-8">
        <div className="flex items-baseline gap-3">
          <span
            className="font-display text-6xl font-light leading-none tabular-nums text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            {String(progress).padStart(3, "0")}
          </span>
          <span className="font-display text-xs uppercase tracking-[0.42em] text-white/55">
            LOADING
          </span>
        </div>
        <div className="font-display text-[10px] uppercase tracking-[0.42em] text-white/45">
          ONES MANAGEMENT — CREATING THE FUTURE
        </div>
      </div>

      {/* Dark streak on exit */}
      <div
        ref={dashLineRef}
        className="absolute left-0 top-1/2 h-px w-full origin-left bg-white"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
