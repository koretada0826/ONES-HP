"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MAIN_SERVICE, SUB_SERVICE, AI_SERVICE, IMAGES } from "@/lib/data";
import { useGsapContext } from "@/hooks/useGsapContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const rootRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleMaskRef = useRef<HTMLDivElement>(null);

  useGsapContext(rootRef, () => {
    if (titleMaskRef.current) {
      gsap.fromTo(
        titleMaskRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: titleMaskRef.current, start: "top 82%" },
          onComplete: () => {
            if (titleRef.current) titleRef.current.style.opacity = "1";
            gsap.to(titleMaskRef.current, {
              scaleX: 0,
              transformOrigin: "right center",
              duration: 0.7,
              ease: "expo.inOut",
            });
          },
        }
      );
    }
  });

  return (
    <section
      ref={rootRef}
      id="service"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Two-column layout — header lives in left column so it aligns with tall image */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
          {/* Left: chip → title → desc → service copy → concerns → CTA */}
          <div className="flex flex-col">
            <div className="chip">{MAIN_SERVICE.labelEn}</div>

            <div className="relative mt-5 inline-block self-start">
              <h2
                ref={titleRef}
                className="text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.1] tracking-tight text-ink-950"
                style={{ opacity: 0 }}
              >
                {MAIN_SERVICE.headline}
              </h2>
              <div
                ref={titleMaskRef}
                className="pointer-events-none absolute inset-0 bg-white"
                style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                aria-hidden
              />
            </div>

            <p className="mt-6 max-w-xl text-[13px] leading-[2] text-ink-950/65">
              戦略設計から制作、運用・改善までを一気通貫で支援。
              <br className="hidden md:inline" />
              デザインとマーケティングの力で、サービス業のパフォーマンスを最大化します。
            </p>

            {/* Service name block — thin divider */}
            <div className="mt-12 border-t border-black/12 pt-8">
              <p className="text-lg font-bold tracking-[0.05em] text-ink-950 md:text-xl">
                {MAIN_SERVICE.title}
              </p>
              <p className="mt-2 text-xs tracking-[0.14em] text-ink-950/60">
                {MAIN_SERVICE.titleSub}
              </p>
            </div>

            {/* Concerns list */}
            <ul className="mt-8 flex flex-col gap-3">
              {MAIN_SERVICE.concerns.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative border-t border-black/12 pt-4 pl-14 text-[13px] leading-[1.9] text-ink-950/80"
                >
                  <span className="absolute left-0 top-4 font-display text-[10px] tracking-[0.4em] text-[#c4897a]">
                    0{i + 1}
                  </span>
                  「{c}」
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-[13px] leading-[2] text-ink-950/80">
              {MAIN_SERVICE.summary}
            </p>

            <a
              href="/product"
              className="group mt-8 inline-flex h-11 w-fit items-center gap-3 border border-copper-500/50 bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c4897a] transition hover:border-copper-600 hover:bg-copper-500 hover:text-white"
            >
              サービス詳細
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right: image — sticky-lite feel, top aligned to header */}
          <motion.div
            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden md:sticky md:top-24 md:aspect-[4/5]"
          >
            <Image
              src={IMAGES.serviceWorry}
              alt="店舗経営に悩む経営者"
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              style={{ filter: "grayscale(0.2) contrast(1.05) sepia(0.12)" }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, transparent 40%, rgba(0,0,0,0.35) 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Sub service: TALENT MANAGEMENT */}
        <div className="mt-28 border-t border-black/12 pt-16 md:mt-32 md:pt-20">
          <div className="chip mb-6">{SUB_SERVICE.labelEn}</div>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <h3 className="text-[clamp(1.75rem,3vw,2.6rem)] font-black leading-[1.05] tracking-tight text-ink-950">
                {SUB_SERVICE.title}
              </h3>
              <p className="mt-3 text-sm tracking-[0.14em] text-ink-950/65">
                {SUB_SERVICE.ja}
              </p>
              <p className="mt-6 max-w-lg text-[13px] leading-[2] text-ink-950/80">
                {SUB_SERVICE.desc}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/10] w-full overflow-hidden"
            >
              <Image
                src={SUB_SERVICE.image}
                alt="ONES Talent Management"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: "grayscale(0.1) contrast(1.05) sepia(0.1)" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Sub service 02: AI × DIGITAL SOLUTIONS */}
        <div className="mt-28 border-t border-black/12 pt-16 md:mt-32 md:pt-20">
          <div className="chip mb-6">{AI_SERVICE.labelEn}</div>
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
            <div>
              <h3 className="text-[clamp(1.75rem,3vw,2.6rem)] font-black leading-[1.05] tracking-tight text-ink-950">
                {AI_SERVICE.title}
              </h3>
              <p className="mt-3 text-sm tracking-[0.14em] text-ink-950/65">
                {AI_SERVICE.ja}
              </p>
              <div className="mt-6 h-px w-16 bg-copper-500" />
              <p className="mt-6 max-w-xl text-[13px] leading-[2] text-ink-950/80">
                {AI_SERVICE.desc}
              </p>
              <a
                href="/product#ai"
                className="group mt-8 inline-flex h-11 w-fit items-center gap-3 border border-copper-500/50 bg-transparent px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c4897a] transition hover:border-copper-600 hover:bg-copper-500 hover:text-white"
              >
                AIサービス詳細
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* 5-item grid */}
            <ul className="grid grid-cols-1 gap-3">
              {AI_SERVICE.items.map((item, i) => (
                <motion.li
                  key={item.no}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-start gap-4 border-t border-black/12 pt-4"
                >
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a] min-w-[3.4rem] pt-1">
                    {item.no}
                  </span>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-ink-950/55">
                      {item.subtag}
                    </div>
                    <div className="mt-1 text-[15px] font-bold leading-[1.5] text-ink-950">
                      {item.title}
                    </div>
                    <p className="mt-2 text-[12px] leading-[1.9] text-ink-950/70">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
