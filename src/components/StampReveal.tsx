"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  index?: number;
  className?: string;
  origin?: "left" | "center" | "right";
}

/**
 * Pop-in reveal — scaleX(0)→1 with slight rotate, stamp-like feel.
 * Randomized order via seeded delay per index, avoiding the AI-uniform look.
 */
export default function StampReveal({
  children,
  index = 0,
  className = "",
  origin = "left",
}: Props) {
  // deterministic pseudo-random delay per index — breaks linear stagger
  const seed = ((index * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const delay = seed * 0.35;

  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0, opacity: 0, rotate: -2 }}
      whileInView={{ scaleX: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        transformOrigin:
          origin === "center" ? "50% 50%" : origin === "right" ? "100% 50%" : "0% 50%",
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  );
}
