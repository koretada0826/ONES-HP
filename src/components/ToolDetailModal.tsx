"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { setCursor } from "@/hooks/useCursorState";
import { useEffect } from "react";

interface Feature {
  no: string;
  subtag: string;
  title: string;
  image: string;
  points: string[];
}

interface Props {
  feature: Feature | null;
  onClose: () => void;
}

export default function ToolDetailModal({ feature, onClose }: Props) {
  useEffect(() => {
    if (feature) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [feature]);

  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          key="bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          className="fixed inset-0 z-[9500] bg-black/45 backdrop-blur-sm"
        />
      )}
      {feature && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 top-6 z-[9600] mx-auto flex max-w-[1000px] flex-col overflow-y-auto bg-white shadow-2xl md:top-14"
          role="dialog"
          aria-modal="true"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/12 bg-white px-6 py-4 backdrop-blur md:px-10">
            <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/65">
              <span className="text-[#c4897a]">{feature.no}</span>
              <span>/</span>
              <span>{feature.subtag}</span>
            </div>
            <button
              onClick={onClose}
              onMouseEnter={() => setCursor("open")}
              onMouseLeave={() => setCursor("default")}
              className="relative flex h-9 w-9 items-center justify-center"
              aria-label="Close"
            >
              <span className="absolute h-[1.5px] w-6 rotate-45 bg-white" />
              <span className="absolute h-[1.5px] w-6 -rotate-45 bg-white" />
            </button>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-800">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                unoptimized
                sizes="1000px"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-6 md:px-10 md:pb-10">
              <h2 className="max-w-3xl text-2xl font-black leading-[1.15] text-white md:text-4xl">
                {feature.title}
              </h2>
              <span
                className="hidden font-display font-black leading-none md:block"
                style={{
                  fontSize: "clamp(6rem, 12vw, 12rem)",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.5)",
                  color: "transparent",
                  letterSpacing: "-0.05em",
                }}
              >
                {feature.no.replace("#", "")}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-10 md:px-14 md:py-14">
            <div className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#c4897a]">
              主要な機能
            </div>
            <ul className="mt-6 flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
              {feature.points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  className="grid grid-cols-[60px_1fr] items-baseline gap-4 py-6"
                >
                  <span className="font-display text-[10px] font-bold tracking-[0.32em] text-ink-950/50">
                    0{i + 1}
                  </span>
                  <p className="text-[14px] leading-[1.95] text-ink-950/80">{p}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
