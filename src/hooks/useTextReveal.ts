"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Options {
  selector?: string; // targets to animate — defaults to `[data-split]`
  y?: string;
  stagger?: number;
  duration?: number;
  start?: string;
  delay?: number;
  scale?: [number, number]; // [from, to] for scaleY overshoot
}

/**
 * Reveal masked child spans (created by useSplitText or manual `.reveal-mask > span`).
 * Triggers on scroll into view with ScrollTrigger.
 */
export function useTextReveal(
  ref: RefObject<HTMLElement | null>,
  {
    selector = "[data-split]",
    y = "120%",
    stagger = 0.03,
    duration = 1.0,
    start = "top 85%",
    delay = 0,
    scale,
  }: Options = {}
) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    if (reduced) {
      gsap.set(els, { yPercent: 0, opacity: 1, scaleY: 1 });
      return;
    }

    const fromVars: gsap.TweenVars = { yPercent: 100 };
    const toVars: gsap.TweenVars = { yPercent: 0, ease: "power4.out", duration, stagger, delay };
    if (scale) {
      fromVars.scaleY = scale[0];
      toVars.scaleY = scale[1];
      toVars.transformOrigin = "50% 100%";
    }
    gsap.set(els, fromVars);

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start,
      once: true,
      onEnter: () => {
        gsap.to(els, toVars);
      },
    });

    return () => {
      st.kill();
    };
  }, [ref, selector, y, stagger, duration, start, delay, reduced, scale]);
}
