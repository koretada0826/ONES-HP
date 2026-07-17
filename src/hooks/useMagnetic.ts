"use client";

import { useEffect, useRef } from "react";

interface Options {
  strength?: number;
  radius?: number;
}

export function useMagnetic<T extends HTMLElement>({
  strength = 0.35,
  radius = 120,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);
      if (dist < radius + rect.width / 2) {
        tx = dx * strength;
        ty = dy * strength;
      } else {
        tx = 0;
        ty = 0;
      }
    };
    const leave = () => {
      tx = 0;
      ty = 0;
    };

    window.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      el.style.transform = "";
    };
  }, [strength, radius]);

  return ref;
}
