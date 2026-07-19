"use client";

import { motion } from "framer-motion";

const FLOW = [
  {
    step: "01",
    title: "ヒアリング / 課題整理",
    desc: "現場の業務フロー・既存ツール・課題を丁寧にヒアリング。どこにAIが効くかを整理します。",
  },
  {
    step: "02",
    title: "設計 / プロトタイプ",
    desc: "業務要件を整理し、実装スコープと成果指標を確定。生成AIを活用した高速プロトタイプで完成イメージをすり合わせます。",
  },
  {
    step: "03",
    title: "実装 / 導入",
    desc: "HP・LP・業務ツール・チャットボット等をオーダーメイドで構築。既存のオペレーションに無理なく組み込みます。",
  },
  {
    step: "04",
    title: "運用 / 改善",
    desc: "導入後の利用状況をモニタリング。データを見ながらPDCAを回し、成果につながる改善を継続的に提供します。",
  },
];

export default function AiFlow() {
  return (
    <section id="flow" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="chip">FLOW</div>
        <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.2] tracking-tight text-ink-950">
          ご依頼の流れ
        </h2>
        <div className="mt-8 h-px w-16 bg-[#c4897a]" />

        <ol className="mt-16 flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
          {FLOW.map((f, i) => (
            <motion.li
              key={f.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[160px_1fr] md:gap-12 md:py-10"
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
  );
}
