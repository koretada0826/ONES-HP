"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  {
    no: "01",
    title: "デジタル化が後手に回っている",
    desc: "予約・集計・在庫管理などの業務が手作業のままで、本来集中したい接客・治療に時間を割けていない。",
  },
  {
    no: "02",
    title: "HP・LPが古く問い合わせに繋がらない",
    desc: "情報が整理されておらず、モバイル対応も不十分。訪問した見込み客の離脱率が高い。",
  },
  {
    no: "03",
    title: "AI導入の判断ができない",
    desc: "情報が多すぎて何から手を付けるべきかわからず、外注先の選定基準も曖昧。",
  },
];

export default function AiProblem() {
  return (
    <section id="problem" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="chip">CHALLENGES</div>
        <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.2] tracking-tight text-ink-950">
          こんな課題、
          <br className="md:hidden" />
          <span className="text-[#c4897a]">お持ちではありませんか？</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-black/12 bg-white p-8 md:p-9"
            >
              <div
                className="pointer-events-none absolute -right-3 -top-4 font-display font-black leading-none"
                style={{
                  fontSize: "clamp(4rem, 7vw, 7rem)",
                  WebkitTextStroke: "1px rgba(196,137,122,0.25)",
                  color: "transparent",
                  letterSpacing: "-0.05em",
                }}
                aria-hidden
              >
                {p.no}
              </div>
              <div className="relative z-10">
                <div className="font-display text-[10px] font-bold uppercase tracking-[0.42em] text-[#c4897a]">
                  ISSUE {p.no}
                </div>
                <h3 className="mt-5 text-lg font-bold leading-[1.5] text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-5 border-t border-black/12 pt-4 text-[13px] leading-[2] text-ink-950/70">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 border-t border-black/12 pt-10 text-center">
          <p className="text-[13px] leading-[2] text-ink-950/70 md:text-[15px]">
            そのお悩み、<span className="font-bold text-ink-950">AI・デジタルの伴走設計</span>で解決できます。
          </p>
        </div>
      </div>
    </section>
  );
}
