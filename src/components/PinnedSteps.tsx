"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import StampReveal from "./StampReveal";

export interface Step {
  no: string;
  title: string;
  desc: string;
  image: string;
  keywords?: string[];
}

interface Props {
  steps: Step[];
  sectionLabel?: string;
}

/**
 * Pin-scroll pattern: left side sticks with the active image + giant outline number,
 * right side scrolls through step blocks.
 * Image aspect kept at 4/5 (portrait, less tall than square) to reduce whitespace on right.
 */
export default function PinnedSteps({ steps, sectionLabel }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll<HTMLElement>("[data-step]");
    const observers: IntersectionObserver[] = [];
    items.forEach((item, i) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveIndex(i);
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(item);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [steps.length]);

  const active = steps[activeIndex];
  const digitLabel = String(activeIndex + 1).padStart(2, "0");

  return (
    <section ref={containerRef} className="relative py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:grid-cols-[1fr_1.05fr] md:items-start md:gap-16 md:px-10">
        {/* Sticky visual */}
        <div className="md:sticky md:top-24 md:h-fit">
          {sectionLabel && <div className="chip mb-6">{sectionLabel}</div>}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-800 md:aspect-[5/6]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)", scale: 1.08 }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)", scale: 1 }}
                exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 1.02 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="object-cover"
                  style={{ filter: "grayscale(0.25) contrast(1.05) brightness(0.85) sepia(0.15)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Massive outline number */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={digitLabel}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="font-display font-black leading-none"
                  style={{
                    fontSize: "clamp(8rem, 18vw, 16rem)",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
                    color: "transparent",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {digitLabel}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />
              <span className="font-display text-[10px] uppercase tracking-[0.42em] text-white/85">
                {active.no}
              </span>
            </div>
          </div>

          {/* Step progress bar */}
          <div className="mt-6 hidden gap-2 md:flex">
            {steps.map((s, i) => (
              <button
                key={s.no}
                onClick={() => {
                  const el = containerRef.current?.querySelectorAll<HTMLElement>(
                    "[data-step]"
                  )[i];
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="group flex flex-1 flex-col gap-2"
                aria-label={`Go to ${s.no}`}
              >
                <div
                  className={`h-px w-full transition-colors duration-500 ${
                    i === activeIndex
                      ? "bg-copper-500"
                      : i < activeIndex
                      ? "bg-copper-400/70"
                      : "bg-white/15 group-hover:bg-copper-400/60"
                  }`}
                />
                <div
                  className={`font-display text-[10px] uppercase tracking-[0.32em] transition-colors duration-500 ${
                    i === activeIndex ? "text-copper-300" : "text-white/45"
                  }`}
                >
                  {s.no}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scrolling steps — first step aligns with sticky image top; rest use larger min-h for scroll */}
        <div className="flex flex-col gap-24 md:gap-24">
          {steps.map((step, i) => (
            <div
              key={step.no}
              data-step
              className={`flex flex-col ${
                i === 0
                  ? "justify-start"
                  : "min-h-[45svh] justify-center md:min-h-[55svh]"
              }`}
            >
              <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a]">
                {step.no}
              </div>
              <h3 className="mt-4 text-[clamp(1.5rem,4vw,3rem)] font-black leading-[1.15] tracking-tight text-white md:whitespace-nowrap">
                {step.title}
              </h3>

              <p className="mt-8 border-t border-white/12 pt-6 text-[14px] leading-[2.1] text-white/80">
                {step.desc}
              </p>

              {/* Keyword chips — stamp reveal, randomized order */}
              {step.keywords && step.keywords.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {step.keywords.map((k, ki) => (
                    <StampReveal key={k} index={i * 10 + ki}>
                      <span className="inline-block border border-copper-300/60 bg-copper-50/60 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.24em] text-copper-300 backdrop-blur transition-colors duration-300 hover:border-copper-600 hover:bg-copper-600 hover:text-white">
                        {k}
                      </span>
                    </StampReveal>
                  ))}
                </div>
              )}

              {/* Index at bottom right for scale reference */}
              <div className="mt-10 flex items-baseline justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.32em] text-white/45">
                <span>
                  {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
                <span>SCROLL TO NEXT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
