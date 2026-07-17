"use client";

import { useRef } from "react";
import Image from "next/image";
import HeroTypography from "./HeroTypography";
import HeroScene from "./HeroScene";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { IMAGES } from "@/lib/data";

export default function HeroSection({ visible }: { visible: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, "top top", "bottom top");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#050507]"
    >
      {/* 3D cosmic scene — asteroids + metallic ring + diagonal light beam */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroScene scrollProgress={progress} visible={visible} />
      </div>

      {/* Photo whisper (very subtle, adds texture on top of 3D) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
        style={{
          transform: `translateY(${progress * 40}px)`,
          opacity: 0.18,
        }}
      >
        <Image
          src={IMAGES.serviceWorry}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
          style={{
            filter: "grayscale(1) contrast(1.35) brightness(0.55)",
          }}
        />
      </div>

      {/* Vignette to focus center */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(75% 60% at 50% 50%, transparent 40%, rgba(5,5,7,0.85) 100%)",
        }}
      />

      {/* Diagonal light beam SVG */}
      <svg
        className="pointer-events-none absolute inset-0 z-[3]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="beam" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="45%" stopColor="rgba(255,240,230,0.95)" />
            <stop offset="55%" stopColor="rgba(255,240,230,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          stroke="url(#beam)"
          strokeWidth="0.22"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition:
              "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1) 0.6s",
            filter: "drop-shadow(0 0 3px rgba(255,240,230,0.6))",
          }}
        />
      </svg>

      {/* Giant ONES watermark */}
      <div
        className="pointer-events-none absolute z-[2] select-none"
        aria-hidden
        style={{
          top: "auto",
          bottom: "-4vw",
          right: "-3vw",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(14rem, 32vw, 32rem)",
          lineHeight: 0.85,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          letterSpacing: "-0.03em",
          transform: `translateY(${progress * -80}px)`,
        }}
      >
        ONES
      </div>

      {/* Content */}
      <div className="relative z-[4] mx-auto flex min-h-[100svh] max-w-[1600px] items-center px-5 pt-[16vh] md:px-10 md:pt-[13vh]">
        <HeroTypography visible={visible} scrollProgress={progress} />
      </div>

      {/* SCROLL indicator */}
      <div
        className="absolute bottom-6 left-4 z-[5] hidden flex-col items-center gap-4 md:left-6 md:bottom-8 md:flex"
        style={{
          opacity: visible ? Math.max(0, 1 - progress * 2) : 0,
          transition: "opacity 1s ease 1.3s",
        }}
      >
        <span
          className="font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <span
          className="block h-[60px] w-px animate-scrollLine bg-gradient-to-b from-white/60 to-transparent"
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* Index label right side */}
      <div className="absolute bottom-8 right-6 z-[5] hidden font-display text-[10px] uppercase tracking-[0.42em] text-white/50 md:block">
        01
      </div>
    </section>
  );
}
