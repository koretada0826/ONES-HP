"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SubPageChrome from "@/components/SubPageChrome";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import PinnedSteps from "@/components/PinnedSteps";
import ToolDetailModal from "@/components/ToolDetailModal";
import CtaBlock from "@/components/CtaBlock";
import RotateHeadline from "@/components/RotateHeadline";
import { PRODUCT_PAGE } from "@/lib/pages-data";
import { AI_SERVICE } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

type Feature = (typeof PRODUCT_PAGE.tool.features)[number];

export default function ProductPage() {
  const [openTool, setOpenTool] = useState<Feature | null>(null);
  const toolRef = useRef<HTMLElement>(null);

  return (
    <SubPageChrome>
      <PageHero
        labelEn={PRODUCT_PAGE.labelEn}
        ja={PRODUCT_PAGE.ja}
        lead={PRODUCT_PAGE.lead}
        image={PRODUCT_PAGE.heroImage}
      />

      {/* Marquee band above main service */}
      <Marquee
        items={["STRATEGY", "MANUAL", "TOOL", "OPERATION", "DATA", "GROWTH"]}
        size="xl"
        outline
      />

      {/* Main service intro */}
      <section className="relative pb-20 pt-8 md:pb-28 md:pt-10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="chip">{PRODUCT_PAGE.main.labelEn}</div>
          <RotateHeadline
            as="h2"
            text={PRODUCT_PAGE.main.title}
            className="mt-5 text-4xl font-black leading-[1.1] text-white md:text-6xl"
          />
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <p className="text-xl font-bold leading-[1.7] text-white md:text-2xl">
              {PRODUCT_PAGE.main.tag}
            </p>
            <p className="text-[14px] leading-[2.1] text-white/70">
              {PRODUCT_PAGE.main.desc}
            </p>
          </div>
        </div>
      </section>

      {/* PIN SCROLL — EX blocks with sticky visual */}
      <PinnedSteps
        sectionLabel="EXPERTISE"
        steps={[
          {
            no: PRODUCT_PAGE.ex[0].no,
            title: PRODUCT_PAGE.ex[0].title,
            desc: PRODUCT_PAGE.ex[0].desc,
            image: PRODUCT_PAGE.ex[0].image,
            keywords: [
              "課題整理",
              "優先順位付け",
              "ロードマップ策定",
              "PDCA サイクル",
              "経営者の右腕",
            ],
          },
          {
            no: PRODUCT_PAGE.ex[1].no,
            title: PRODUCT_PAGE.ex[1].title,
            desc: PRODUCT_PAGE.ex[1].desc,
            image: PRODUCT_PAGE.ex[1].image,
            keywords: [
              "接客マニュアル",
              "店舗オペレーション",
              "採用・研修",
              "業務の型化",
              "サービス標準化",
            ],
          },
          {
            no: PRODUCT_PAGE.ex[2].no,
            title: PRODUCT_PAGE.ex[2].title,
            desc: PRODUCT_PAGE.ex[2].desc,
            image: PRODUCT_PAGE.ex[2].image,
            keywords: [
              "KPI 可視化",
              "データ集計",
              "在庫・売上管理",
              "業務自動化",
              "オーダーメイド設計",
            ],
          },
        ]}
      />

      {/* Marquee reverse band */}
      <Marquee
        items={["CREATE", "DESIGN", "CUSTOMIZE", "OPTIMIZE"]}
        size="lg"
        reverse
        duration={36}
      />

      {/* TOOL DETAIL — clickable cards */}
      <section ref={toolRef} className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="chip">{PRODUCT_PAGE.tool.labelEn}</div>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] text-white md:text-6xl">
            {PRODUCT_PAGE.tool.title}
          </h2>
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <p className="mt-10 max-w-2xl text-[14px] leading-[2.1] text-white/70">
            {PRODUCT_PAGE.tool.desc}
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
            {PRODUCT_PAGE.tool.features.map((f, i) => (
              <motion.button
                key={f.no}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setOpenTool(f)}
                onMouseEnter={() => setCursor("open", "OPEN")}
                onMouseLeave={() => setCursor("default")}
                className="group relative flex flex-col overflow-hidden border border-white/12 bg-white/[0.04] text-left backdrop-blur transition-[border-color,background-color] duration-500 hover:border-copper-400/60 hover:bg-white/[0.07]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-800">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Huge index number overlay */}
                  <div
                    className="pointer-events-none absolute -right-4 -top-6 font-display font-black leading-none"
                    style={{
                      fontSize: "clamp(6rem, 10vw, 10rem)",
                      WebkitTextStroke: "1px rgba(238,215,206,0.9)",
                      color: "transparent",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {f.no.replace("#", "")}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a]">
                    {f.no}
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">
                    {f.subtag}
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-[1.55] text-white">
                    {f.title}
                  </h3>
                  <div className="mt-8 flex items-center justify-between border-t border-white/12 pt-5 text-[10px] uppercase tracking-[0.32em] text-white/75 transition-colors group-hover:text-copper-300">
                    <span>詳細を見る</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-copper-500/60 text-copper-300 transition-transform duration-500 group-hover:rotate-45 group-hover:border-copper-600">
                      +
                    </span>
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-copper-500 transition-all duration-700 group-hover:w-full" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee band before AI section */}
      <Marquee
        items={["AI", "AUTOMATION", "CHATBOT", "LP", "WEB", "DX"]}
        size="xl"
        outline
        duration={34}
      />

      {/* AI × DIGITAL SOLUTIONS */}
      <section id="ai" className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="chip">{AI_SERVICE.labelEn}</div>
          <RotateHeadline
            as="h2"
            text={AI_SERVICE.title}
            className="mt-5 text-4xl font-black leading-[1.1] text-white md:text-6xl"
          />
          <div className="mt-8 h-px w-16 bg-copper-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <p className="text-xl font-bold leading-[1.7] text-white md:text-2xl">
              {AI_SERVICE.headline}
            </p>
            <p className="text-[14px] leading-[2.1] text-white/70">
              {AI_SERVICE.desc}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {AI_SERVICE.items.map((item, i) => (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.9,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col overflow-hidden border border-white/12 bg-white/[0.04] p-7 backdrop-blur transition-[border-color,background-color] duration-500 hover:border-copper-400/60 hover:bg-white/[0.07] md:p-8"
              >
                {/* Huge outline index */}
                <div
                  className="pointer-events-none absolute -right-4 -top-6 font-display font-black leading-none"
                  style={{
                    fontSize: "clamp(5rem, 9vw, 9rem)",
                    WebkitTextStroke: "1px rgba(196,137,122,0.35)",
                    color: "transparent",
                    letterSpacing: "-0.05em",
                  }}
                  aria-hidden
                >
                  {item.no.replace("AI.", "")}
                </div>

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-copper-300">
                    {item.no}
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">
                    {item.subtag}
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-[1.5] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 border-t border-white/12 pt-4 text-[13px] leading-[2] text-white/75">
                    {item.desc}
                  </p>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-copper-500 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title={"接客に集中できる環境を、\nともに創る。"}
        subtitle={"戦略立案からマニュアル制作、オーダーメイドツール構築、AI・デジタル活用まで。\nサービス業のパフォーマンス向上を全力でサポートします。"}
      />

      <ToolDetailModal feature={openTool} onClose={() => setOpenTool(null)} />
    </SubPageChrome>
  );
}
