"use client";

import { useEffect } from "react";

/**
 * Updates CSS variables --bg-gray and --bg-bright on scroll,
 * matching 本家 ones-mg.com behavior:
 *   scrollTop 0        → grayscale(0)   brightness(0.88)  (color, slightly dim)
 *   scrollTop >= threshold → grayscale(1)   brightness(0.32)  (grayscale, dark)
 */
export default function D1BgScroll() {
  useEffect(() => {
    const threshold = () =>
      Math.max(400, window.innerHeight * 0.75); // 1 viewport height ~ full transition

    let ticking = false;

    const update = () => {
      const t = threshold();
      const y = window.scrollY;
      const p = Math.max(0, Math.min(1, y / t));
      const gray = p; // 0 → 1
      const bright = 0.88 - p * (0.88 - 0.32); // 0.88 → 0.32
      const root = document.documentElement;
      root.style.setProperty("--bg-gray", String(gray));
      root.style.setProperty("--bg-bright", String(bright));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
