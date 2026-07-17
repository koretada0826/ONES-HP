"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { setCursor } from "@/hooks/useCursorState";

interface Props {
  index: number;
  title: string;
  ja: string;
  desc: string;
  icon: string;
}

function IconGlyph({ name }: { name: string }) {
  switch (name) {
    case "monitor":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <rect x="6" y="9" width="28" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M14 32h12M20 27v5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M11 15h6M11 18h10M11 21h4" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <path d="M8 30V16M16 30V10M24 30V20M32 30V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 32h28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <path d="M20 6l14 12-14 16L6 18 20 6z" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M6 18h28M20 6v28M13 18l7-12 7 12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <path d="M20 6l14 7-14 7L6 13l14-7zM6 20l14 7 14-7M6 27l14 7 14-7" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      );
  }
  return null;
}

export default function ServiceCard({ index, title, ja, desc, icon }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  // Tilt + spotlight follow
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const spot = spotRef.current;
    if (!el || !spot) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    const rx = (0.5 - ny) * 4;
    const ry = (nx - 0.5) * 4;
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    spot.style.background = `radial-gradient(240px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(255,255,255,0.10), transparent 60%)`;
  };

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
    if (spotRef.current) spotRef.current.style.background = "transparent";
    setCursor("default");
  };

  return (
    <motion.div
      className="reveal-card group relative"
      initial={{ opacity: 0, y: 80, rotateX: 8, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={() => setCursor("open")}
        className="relative h-full min-h-[320px] cursor-none border border-white/10 bg-ink-900/80 p-8 backdrop-blur transition-[border-color,background-color] duration-500 hover:border-white/40"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <div
          ref={spotRef}
          aria-hidden
          className="pointer-events-none absolute inset-0"
        />
        {/* Number */}
        <div className="font-display text-[10px] tracking-[0.42em] text-white/40">
          0{index + 1}
        </div>

        {/* Icon */}
        <div className="mt-8 text-white/90 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
          <IconGlyph name={icon} />
        </div>

        {/* Title */}
        <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-[0.14em] text-white transition-transform duration-500 group-hover:-translate-y-1">
          {title}
        </h3>
        <p className="mt-1 text-xs tracking-[0.14em] text-white/45">{ja}</p>

        {/* Desc */}
        <p className="mt-6 text-[13px] leading-[1.9] text-white/60 transition-colors duration-500 group-hover:text-white/85">
          {desc}
        </p>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/60 transition-colors duration-500 group-hover:text-white">
          <span>VIEW MORE</span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
        </div>

        {/* Corner accent line */}
        <div className="pointer-events-none absolute right-0 top-0 h-[1px] w-0 origin-right bg-white transition-all duration-700 group-hover:w-1/2" />
      </div>
    </motion.div>
  );
}
