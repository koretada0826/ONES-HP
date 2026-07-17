"use client";

import { motion } from "framer-motion";
import SubPageChrome from "@/components/SubPageChrome";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import CtaBlock from "@/components/CtaBlock";
import RotateHeadline from "@/components/RotateHeadline";
import { AI_SERVICE } from "@/lib/data";
import { SUBPAGE_IMAGES } from "@/lib/pages-data";

const FLOW = [
  {
    step: "01",
    title: "ヒアリング / 課題整理",
    desc:
      "現場の業務フロー・既存ツール・課題を丁寧にヒアリング。何を自動化・可視化すべきか、どこにAIが効くかを整理します。",
  },
  {
    step: "02",
    title: "設計 / プロトタイプ",
    desc:
      "業務要件と技術要件を整理し、実装スコープと成果指標を確定。生成AIを活用した高速プロトタイプで完成イメージをすり合わせます。",
  },
  {
    step: "03",
    title: "実装 / 導入",
    desc:
      "コーポレートサイト、LP、業務ツール、チャットボット等をオーダーメイドで構築。既存のオペレーションに無理なく組み込みます。",
  },
  {
    step: "04",
    title: "運用 / 改善",
    desc:
      "公開・導入後の利用状況をモニタリング。データを見ながらPDCAを回し、成果につながる改善を継続的に提供します。",
  },
];

const FAQ = [
  {
    q: "どの規模の店舗・企業から対応可能ですか？",
    a: "1店舗規模から多店舗展開まで柔軟に対応可能です。まずは無料相談で状況をお聞かせください。",
  },
  {
    q: "サイトやツールを作った後の運用も相談できますか？",
    a: "公開後のPDCA・分析・改善・追加開発まで一気通貫で伴走します。単発の制作だけでのご依頼も可能です。",
  },
  {
    q: "既存のシステムやツールと連携できますか？",
    a: "予約システム、会計、CRM、Slack、LINE、スプレッドシート等、既存の主要サービスとのAPI連携・データ連携に対応可能です。",
  },
  {
    q: "見積もりや納期の目安を教えてください。",
    a: "LP: 2〜4週間、コーポレートサイト: 4〜8週間、業務ツール・チャットボット: 要件により4週間〜3ヶ月程度が目安です。詳細は無料相談にて。",
  },
];

export default function AiPage() {
  return (
    <SubPageChrome>
      <PageHero
        labelEn="AI × DIGITAL"
        ja="AI・デジタルソリューション"
        lead={AI_SERVICE.desc}
        image={SUBPAGE_IMAGES.serviceHero}
      />

      <Marquee
        items={["AI", "AUTOMATION", "CHATBOT", "LP", "WEB", "DX"]}
        size="xl"
        outline
      />

      {/* Intro */}
      <section className="relative pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="chip">CONCEPT</div>
          <RotateHeadline
            as="h2"
            text={AI_SERVICE.headline}
            className="mt-5 text-3xl font-black leading-[1.2] text-ink-950 md:text-5xl"
          />
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />
          <p className="mt-8 max-w-2xl text-[14px] leading-[2.1] text-ink-950/70">
            {AI_SERVICE.desc}
          </p>
        </div>
      </section>

      {/* Service items — full grid */}
      <section id="services" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="chip">OUR SERVICES</div>
          <h2 className="mt-5 text-3xl font-black leading-[1.2] text-ink-950 md:text-5xl">
            提供するAIサービス
          </h2>
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {AI_SERVICE.items.map((item, i) => (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden border border-black/12 bg-white p-7 transition-[border-color] duration-500 hover:border-ink-950/40 md:p-8"
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

      <Marquee
        items={["FLOW", "PROCESS", "TOGETHER", "GROWTH"]}
        size="lg"
        reverse
        duration={100}
      />

      {/* Flow */}
      <section id="flow" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="chip">FLOW</div>
          <h2 className="mt-5 text-3xl font-black leading-[1.2] text-ink-950 md:text-5xl">
            ご依頼の流れ
          </h2>
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <ol className="mt-14 flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
            {FLOW.map((f, i) => (
              <motion.li
                key={f.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[140px_1fr] md:gap-10 md:py-10"
              >
                <div className="font-display text-3xl font-black tracking-tight text-[#c4897a] md:text-5xl">
                  {f.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-[1.5] text-ink-950 md:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[2] text-ink-950/70">
                    {f.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <div className="chip">FAQ</div>
          <h2 className="mt-5 text-3xl font-black leading-[1.2] text-ink-950 md:text-5xl">
            よくあるご質問
          </h2>
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <div className="mt-14 flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
            {FAQ.map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group py-6"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-[15px] font-bold leading-[1.5] text-ink-950 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex flex-1 items-start gap-4">
                    <span className="font-display text-[13px] font-black text-[#c4897a]">Q.</span>
                    <span>{item.q}</span>
                  </span>
                  <span className="mt-1 shrink-0 font-display text-lg font-black text-ink-950/50 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-4 flex items-start gap-4 pl-0 md:pl-4">
                  <span className="font-display text-[13px] font-black text-ink-950/30">A.</span>
                  <p className="text-[13px] leading-[2] text-ink-950/70">{item.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title={"AI・デジタルの力で、\nサービス業のパフォーマンスを最大化。"}
        subtitle={"HP制作からチャットボット、業務効率化まで、\n貴社の課題に合わせたソリューションをご提案します。"}
      />
    </SubPageChrome>
  );
}
