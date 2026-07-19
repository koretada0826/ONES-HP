"use client";

import { motion } from "framer-motion";
import { AI_SERVICE } from "@/lib/data";

export default function AiServices() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-36">
      <div
        className="pointer-events-none absolute -top-8 right-[-4vw] z-0 select-none font-display font-black leading-none md:top-4"
        aria-hidden
        style={{
          fontSize: "clamp(10rem, 28vw, 28rem)",
          WebkitTextStroke: "1.5px rgba(196,137,122,0.22)",
          color: "transparent",
          letterSpacing: "-0.05em",
        }}
      >
        AI
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="chip">OUR AI SERVICES</div>
            <h2 className="mt-6 font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink-950" style={{ fontSize: "clamp(2.4rem, 6vw, 5.4rem)" }}>
              AI × DIGITAL
              <br />
              <span className="text-[#c4897a]">SOLUTIONS.</span>
            </h2>
          </div>
          <p className="max-w-md text-[13px] leading-[2] text-ink-950/70">
            {AI_SERVICE.desc}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {AI_SERVICE.items.map((item, i) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
      </div>
    </section>
  );
}
