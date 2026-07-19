"use client";

import { motion } from "framer-motion";

const FAQ = [
  {
    q: "どの規模の店舗・企業から対応可能ですか？",
    a: "1店舗規模から多店舗展開まで柔軟に対応可能です。まずは無料相談で状況をお聞かせください。",
  },
  {
    q: "サイトやツールを作った後の運用も相談できますか？",
    a: "公開後のPDCA・分析・改善・追加開発まで一気通貫で伴走します。単発の制作のみのご依頼も可能です。",
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

export default function AiFaq() {
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <div className="chip">FAQ</div>
        <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.2] tracking-tight text-ink-950">
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
  );
}
