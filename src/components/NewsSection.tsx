"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TOPICS, COMPANY } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="chip mb-4">NEWS &amp; TOPICS</div>
            <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.1] text-white">
              TOPICS
            </h2>
          </div>
          <a
            href={COMPANY.noteUrl}
            target="_blank"
            rel="noopener"
            onMouseEnter={() => setCursor("open")}
            onMouseLeave={() => setCursor("default")}
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.32em] text-ink-950/70 transition hover:text-white md:inline-flex"
          >
            VIEW ALL ON NOTE
            <span>→</span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TOPICS.map((t, i) => (
            <motion.a
              key={t.id}
              href={t.url}
              target="_blank"
              rel="noopener"
              onMouseEnter={() => setCursor("project")}
              onMouseLeave={() => setCursor("default")}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden border border-black/10 bg-white/70 backdrop-blur transition-[border-color,background-color,box-shadow] duration-500 hover:border-copper-400/60 hover:bg-white hover:shadow-[0_20px_60px_-20px_rgba(196,137,122,0.35)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink-800">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-ink-950/60">
                  <span className="border border-copper-400/50 bg-copper-500/20 px-2 py-1 font-display text-[#96594a]">
                    {t.source}
                  </span>
                  <span>{t.date}</span>
                </div>
                <h3 className="text-[15px] font-bold leading-[1.65] tracking-[0.02em] text-white">
                  {t.title}
                </h3>
                <p className="line-clamp-4 text-[12px] leading-[1.9] text-ink-950/65">
                  {t.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-950/70 transition-colors duration-500 group-hover:text-white">
                  <span>続きを読む</span>
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>

              {/* accent bottom line */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-copper-500 transition-all duration-700 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
