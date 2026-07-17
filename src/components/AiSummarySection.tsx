"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AI_SERVICE } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

export default function AiSummarySection() {
  return (
    <section id="ai" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          {/* Left: label + title */}
          <div>
            <div className="chip">{AI_SERVICE.labelEn}</div>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.15] tracking-tight text-ink-950">
              {AI_SERVICE.title}
            </h2>
            <p className="mt-3 text-sm tracking-[0.14em] text-ink-950/60">
              {AI_SERVICE.ja}
            </p>
            <div className="mt-8 h-px w-16 bg-[#c4897a]" />
            <p className="mt-8 max-w-md text-[13px] leading-[2] text-ink-950/70">
              {AI_SERVICE.desc}
            </p>
            <Link
              href="/ai"
              onMouseEnter={() => setCursor("view", "VIEW")}
              onMouseLeave={() => setCursor("default")}
              className="group mt-10 inline-flex h-11 items-center gap-3 border border-ink-950/30 px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-950 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
            >
              AIサービス詳細を見る
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right: 5-item summary list */}
          <ul className="flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
            {AI_SERVICE.items.map((item, i) => (
              <motion.li
                key={item.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[110px_1fr] md:gap-8"
              >
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a]">
                  {item.no}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-ink-950/50">
                    {item.subtag}
                  </div>
                  <div className="mt-1 text-[15px] font-bold leading-[1.55] tracking-[0.02em] text-ink-950">
                    {item.title}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
