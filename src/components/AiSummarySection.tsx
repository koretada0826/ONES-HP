"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AI_SERVICE } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

export default function AiSummarySection() {
  return (
    <section id="ai" className="relative overflow-hidden py-24 md:py-36">
      {/* Giant outline "AI" watermark */}
      <div
        className="pointer-events-none absolute -top-8 right-[-3vw] z-0 select-none font-display font-black leading-none md:right-[-4vw] md:top-4"
        aria-hidden
        style={{
          fontSize: "clamp(12rem, 34vw, 34rem)",
          WebkitTextStroke: "1.5px rgba(196,137,122,0.22)",
          color: "transparent",
          letterSpacing: "-0.05em",
        }}
      >
        AI
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header row */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="chip">{AI_SERVICE.labelEn}</div>
            <h2
              className="mt-6 font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink-950"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}
            >
              AI × DIGITAL
              <br />
              <span className="text-[#c4897a]">SOLUTIONS.</span>
            </h2>
            <p className="mt-6 text-sm tracking-[0.14em] text-ink-950/60">
              {AI_SERVICE.ja}
            </p>
          </div>
          <div className="max-w-md">
            <div className="h-px w-16 bg-[#c4897a]" />
            <p className="mt-6 text-[13px] leading-[2] text-ink-950/70">
              {AI_SERVICE.headline}
            </p>
            <p className="mt-4 text-[13px] leading-[2] text-ink-950/60">
              {AI_SERVICE.desc}
            </p>
          </div>
        </div>

        {/* 5-item cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {AI_SERVICE.items.map((item, i) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden border border-black/12 bg-white p-7 transition-[border-color,box-shadow] duration-500 hover:border-ink-950/40 hover:shadow-[0_20px_60px_-20px_rgba(196,137,122,0.35)] md:p-8"
            >
              <div
                className="pointer-events-none absolute -right-4 -top-6 font-display font-black leading-none"
                style={{
                  fontSize: "clamp(5rem, 9vw, 9rem)",
                  WebkitTextStroke: "1px rgba(196,137,122,0.28)",
                  color: "transparent",
                  letterSpacing: "-0.05em",
                }}
                aria-hidden
              >
                {item.no.replace("AI.", "")}
              </div>

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a]">
                  {item.no}
                </div>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-950/60">
                  {item.subtag}
                </div>
                <h3 className="mt-5 text-lg font-bold leading-[1.5] text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-5 border-t border-black/12 pt-4 text-[13px] leading-[2] text-ink-950/70">
                  {item.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-[#c4897a] transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 flex flex-col items-center gap-6 md:mt-20">
          <Link
            href="/ai"
            onMouseEnter={() => setCursor("view", "VIEW")}
            onMouseLeave={() => setCursor("default")}
            className="group relative inline-flex h-14 items-center gap-4 overflow-hidden border border-ink-950 bg-ink-950 px-8 text-[12px] font-semibold uppercase tracking-[0.32em] text-white"
          >
            <span
              className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[#c4897a] transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />
            <span className="relative z-10">AIサービス詳細ページへ</span>
            <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 6h10M7 2l4 4-4 4" />
              </svg>
            </span>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.32em] text-ink-950/50">
            FLOW / FAQ / DETAILS →
          </p>
        </div>
      </div>
    </section>
  );
}
