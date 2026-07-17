"use client";

import { useEffect, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Track scroll progress (0..1) for a given trigger element.
 */
export function useScrollProgress(
  triggerRef: RefObject<HTMLElement | null>,
  start = "top top",
  end = "bottom top"
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!triggerRef.current) return;
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start,
      end,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => st.kill();
  }, [triggerRef, start, end]);

  return progress;
}
