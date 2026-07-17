"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  value: string; // digit string e.g. "2023"
  className?: string;
  triggerOnScroll?: boolean;
  suffix?: string;
}

/**
 * Flip-board (Solari / airport departure board) style number reveal.
 * Each digit cycles through random characters before landing on the final one.
 */
export default function FlipNumber({
  value,
  className = "",
  triggerOnScroll = true,
  suffix = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState<string[]>(
    () => value.split("").map(() => "0")
  );

  useEffect(() => {
    if (!containerRef.current) return;

    let cancel = false;
    const run = () => {
      const target = value.split("");
      const startTime = performance.now();
      const totalDuration = 1300 + Math.random() * 400;

      const tick = () => {
        if (cancel) return;
        const elapsed = performance.now() - startTime;
        const p = Math.min(elapsed / totalDuration, 1);

        const next = target.map((digit, i) => {
          // Stagger: each digit has its own "settle" time
          const delayForDigit = (i / target.length) * 0.55;
          const localP = Math.max(0, Math.min(1, (p - delayForDigit) / 0.45));
          if (localP >= 1) return digit;
          if (/[0-9]/.test(digit)) {
            return String(Math.floor(Math.random() * 10));
          }
          if (/[a-zA-Z]/.test(digit)) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return digit;
        });
        setDisplayed(next);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (triggerOnScroll) {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 82%",
        once: true,
        onEnter: run,
      });
      return () => {
        cancel = true;
        st.kill();
      };
    } else {
      run();
      return () => {
        cancel = true;
      };
    }
  }, [value, triggerOnScroll]);

  return (
    <span ref={containerRef} className={`inline-flex tabular-nums ${className}`}>
      {displayed.map((d, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ minWidth: "0.6em" }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={d + i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.12, ease: [0.33, 1, 0.68, 1] }}
              className="inline-block"
            >
              {d}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
}
