"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SubPageChrome from "@/components/SubPageChrome";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import CtaBlock from "@/components/CtaBlock";
import RotateHeadline from "@/components/RotateHeadline";
import { CASE_PAGE, SUBPAGE_IMAGES } from "@/lib/pages-data";
import { COMPANY } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

export default function CasePage() {
  const [filter, setFilter] = useState<string>("すべて");
  const [openId, setOpenId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "すべて"
      ? CASE_PAGE.cases
      : CASE_PAGE.cases.filter((c) => c.category === filter);

  return (
    <SubPageChrome>
      <PageHero
        labelEn={CASE_PAGE.labelEn}
        ja={CASE_PAGE.ja}
        lead={CASE_PAGE.lead}
        image={CASE_PAGE.heroImage}
      />

      {/* Marquee band */}
      <Marquee
        items={["BEAUTY", "FITNESS", "HOSPITALITY", "WELFARE", "RETAIL"]}
        size="xl"
        outline
      />

      {/* Intro */}
      <section className="relative pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="chip">TRACK RECORD</div>
          <h2 className="mt-5 text-3xl font-black leading-[1.2] text-white md:text-5xl">
            ONESのご支援実績
          </h2>
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />
          <p className="mt-8 max-w-2xl text-[13px] leading-[2] text-ink-950/80">
            {CASE_PAGE.intro}
          </p>
          <p className="mt-4 text-[11px] tracking-[0.14em] text-ink-950/50">
            {CASE_PAGE.disclaimer}
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {CASE_PAGE.categories.map((c) => {
              const active = c === filter;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  onMouseEnter={() => setCursor("open")}
                  onMouseLeave={() => setCursor("default")}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
                    active
                      ? "border-copper-600 bg-copper-500 text-white"
                      : "border-black/25 bg-transparent text-ink-950/80 hover:border-copper-500 hover:text-[#c4897a]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case grid */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div
            ref={gridRef}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filtered.map((c, i) => (
                <motion.button
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.7,
                    delay: (i % 3) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setOpenId(c.id)}
                  onMouseEnter={() => setCursor("project")}
                  onMouseLeave={() => setCursor("default")}
                  className="group relative flex flex-col overflow-hidden border border-black/12 bg-white/85 text-left backdrop-blur transition-[border-color,background-color] duration-500 hover:border-copper-400/60 hover:bg-white"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-800">
                    <Image
                      src={SUBPAGE_IMAGES.case[c.id]}
                      alt={c.title}
                      fill
                      unoptimized
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(0.15) contrast(1.05) sepia(0.12)" }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="pointer-events-none absolute left-3 top-3 border border-copper-200/80 bg-copper-500/85 px-2 py-0.5 font-display text-[9px] uppercase tracking-[0.28em] text-white backdrop-blur">
                      {c.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex w-full items-center justify-between font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/50">
                      <span>{c.industry}</span>
                      <span className="text-[#c4897a]">0{i + 1}</span>
                    </div>
                    <div className="mt-4 text-[13px] tracking-[0.05em] text-ink-950/70">
                      {c.subtitle}
                    </div>
                    <h3 className="mt-2 text-[16px] font-bold leading-[1.5] tracking-[0.02em] text-white">
                      {c.title}
                    </h3>
                    <div className="mt-6 border-t border-black/12 pt-4 text-[10px] uppercase tracking-[0.32em] text-ink-950/55">
                      支援内容
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {c.tasks.map((t) => (
                        <li
                          key={t}
                          className="border border-black/12 px-2 py-1 text-[10px] tracking-[0.05em] text-ink-950/80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-950/65 transition-colors group-hover:text-white">
                      詳細を見る
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-copper-500 transition-all duration-700 group-hover:w-full" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Marquee reverse band */}
      <Marquee
        items={["TRACK RECORD", "REAL SUPPORT", "STANDARDIZATION", "GROWTH"]}
        size="lg"
        reverse
        duration={100}
      />

      <CtaBlock
        title={"まずはお気軽に、\nご相談ください。"}
        subtitle={"貴社の課題に合わせたご提案をいたします。\nお問い合わせはLINEでも受け付けております。"}
      />

      {/* Detail Modal */}
      <AnimatePresence>
        {openId && (
          <motion.div
            key="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenId(null)}
            className="fixed inset-0 z-[9500] bg-black/40 backdrop-blur-sm"
          />
        )}
        {openId && (() => {
          const c = CASE_PAGE.cases.find((x) => x.id === openId);
          if (!c) return null;
          return (
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 top-8 z-[9600] mx-auto flex max-w-[900px] flex-col overflow-y-auto bg-white shadow-2xl md:top-16"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative flex items-center justify-between border-b border-black/12 px-6 py-4 md:px-10">
                <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/60">
                  <span>{c.category}</span>
                  <span>/</span>
                  <span>{c.industry}</span>
                </div>
                <button
                  onClick={() => setOpenId(null)}
                  onMouseEnter={() => setCursor("open")}
                  onMouseLeave={() => setCursor("default")}
                  className="relative flex h-8 w-8 items-center justify-center"
                  aria-label="Close"
                >
                  <span className="absolute h-[1.5px] w-6 rotate-45 bg-white" />
                  <span className="absolute h-[1.5px] w-6 -rotate-45 bg-white" />
                </button>
              </div>

              {/* Hero image inside modal */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={SUBPAGE_IMAGES.case[c.id]}
                  alt={c.title}
                  fill
                  unoptimized
                  sizes="900px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <div className="font-display text-[10px] uppercase tracking-[0.42em] text-ink-950/80">
                    {c.industry}
                  </div>
                  <div className="mt-2 text-[13px] leading-[1.8] text-ink-950/80 md:text-[15px]">
                    {c.subtitle}
                  </div>
                  <h2 className="mt-1 text-2xl font-black leading-[1.2] text-white md:text-4xl">
                    {c.title}
                  </h2>
                </div>
              </div>

              <div className="px-6 py-10 md:px-14 md:py-14">

                <div className="mt-10 border-t border-black/12 pt-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-ink-950/60">
                    クライアント
                  </div>
                  <div className="mt-3 text-[14px] text-white">{c.client}</div>
                </div>

                <div className="mt-8 border-t border-black/12 pt-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-ink-950/60">
                    対応業務
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.tasks.map((t) => (
                      <li
                        key={t}
                        className="border border-black/25 px-3 py-1.5 text-[11px] tracking-[0.05em] text-ink-950/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-black/12 pt-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-ink-950/60">
                    課題と背景
                  </div>
                  <p className="mt-4 text-[14px] leading-[2.05] text-ink-950/80">
                    {c.challenge}
                  </p>
                </div>

                <div className="mt-10 border-t border-black/12 pt-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-ink-950/60">
                    対応策
                  </div>
                  <p className="mt-4 text-[14px] leading-[2.05] text-ink-950/80">
                    {c.solution}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3 border-t border-black/12 pt-8">
                  <a
                    href={COMPANY.contactFormUrl}
                    target="_blank"
                    rel="noopener"
                    className="group relative inline-flex h-11 items-center gap-3 overflow-hidden border border-white bg-ink-950 px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-white"
                  >
                    <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-copper-500 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
                    <span className="relative z-10">同じ課題を相談する</span>
                    <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <button
                    onClick={() => setOpenId(null)}
                    className="inline-flex h-11 items-center gap-3 border border-black/25 px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-950/80 transition hover:border-white hover:bg-white"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </SubPageChrome>
  );
}
