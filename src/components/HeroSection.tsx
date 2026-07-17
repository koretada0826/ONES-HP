"use client";

import { useRef } from "react";
import Image from "next/image";
import HeroTypography from "./HeroTypography";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { IMAGES } from "@/lib/data";

export default function HeroSection({ visible }: { visible: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, "top top", "bottom top");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ transform: `translateY(${progress * 40}px)` }}
      >
        <Image
          src={IMAGES.serviceWorry}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(0.15) contrast(1.02)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-[4] mx-auto flex min-h-[100svh] max-w-[1600px] items-center px-5 pt-[16vh] md:px-10 md:pt-[13vh]">
        <HeroTypography visible={visible} scrollProgress={progress} />
      </div>

      <div
        className="absolute bottom-6 left-4 z-[5] hidden flex-col items-center gap-4 md:left-6 md:bottom-8 md:flex"
        style={{
          opacity: visible ? Math.max(0, 1 - progress * 2) : 0,
          transition: "opacity 1s ease 1.3s",
        }}
      >
        <span
          className="font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-ink-950/55"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <span
          className="block h-[60px] w-px animate-scrollLine bg-gradient-to-b from-ink-950/60 to-transparent"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
}
