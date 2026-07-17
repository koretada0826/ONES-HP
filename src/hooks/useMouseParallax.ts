"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface Options {
  strength?: number; // 1 = normal
  lerp?: number; // 0..1 — 0.08 default
  returnToCenter?: boolean;
}

/**
 * Mouse parallax with inertial lerp. Applies translate to the target element.
 * Disabled on touch and reduced-motion.
 */
export function useMouseParallax<T extends HTMLElement>(
  { strength = 1, lerp = 0.08, returnToCenter = true }: Options = {}
) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = nx * 40 * strength;
      targetY = ny * 40 * strength;
    };
    const onLeave = () => {
      if (returnToCenter) {
        targetX = 0;
        targetY = 0;
      }
    };

    const tick = () => {
      x += (targetX - x) * lerp;
      y += (targetY - y) * lerp;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(
          2
        )}px, 0)`;
      }
      if (running) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, lerp, returnToCenter, reduced]);

  return ref;
}
