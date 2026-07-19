"use client";

import Image from "next/image";
import { MAIN_SERVICE, SUB_SERVICE, AI_SERVICE, IMAGES } from "@/lib/data";

export default function D1Service() {
  return (
    <section id="service" className="border-t border-neutral-200 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <p className="text-[11px] tracking-[0.32em] text-neutral-500">SERVICE</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
          事業内容
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
            <Image
              src={IMAGES.serviceWorry}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.32em] text-neutral-500">MAIN SERVICE 01</p>
            <h3 className="mt-3 text-xl font-bold text-neutral-950 md:text-2xl">
              {MAIN_SERVICE.headline}
            </h3>
            <div className="mt-8 border-l-2 border-neutral-300 pl-5">
              <p className="text-[13px] font-semibold text-neutral-700">こんなお悩みはありませんか？</p>
              <ul className="mt-4 space-y-3 text-[13px] leading-[1.9] text-neutral-800">
                {MAIN_SERVICE.concerns.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-neutral-400">0{i + 1}</span>
                    <span>「{c}」</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-[13px] leading-[2] text-neutral-800">
              {MAIN_SERVICE.summary}
            </p>
            <div className="mt-10 border-t border-neutral-200 pt-6">
              <p className="text-lg font-bold text-neutral-950 md:text-xl">
                {MAIN_SERVICE.title}
              </p>
              <p className="mt-2 text-xs text-neutral-600">{MAIN_SERVICE.titleSub}</p>
            </div>
          </div>
        </div>

        {/* AI service (MAIN 02) — link out to design2 */}
        <div className="mt-24 border-t border-neutral-200 pt-14 md:mt-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <p className="text-[11px] tracking-[0.32em] text-neutral-500">MAIN SERVICE 02</p>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-neutral-950 md:text-2xl">
                {AI_SERVICE.title}
              </h3>
              <p className="mt-2 text-sm tracking-[0.14em] text-neutral-600">{AI_SERVICE.ja}</p>
              <p className="mt-8 text-[13px] leading-[2] text-neutral-800">
                {AI_SERVICE.desc}
              </p>
              <a
                href="/ai"
                className="mt-8 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-[13px] tracking-[0.14em] text-neutral-900 transition hover:gap-3"
              >
                AIサービス詳細を見る
                <span aria-hidden>→</span>
              </a>
            </div>
            <div>
              <ul className="grid gap-4 border-t border-neutral-200">
                {AI_SERVICE.items.map((item) => (
                  <li
                    key={item.no}
                    className="grid grid-cols-[80px_1fr] gap-4 border-b border-neutral-200 py-4 md:grid-cols-[100px_1fr] md:gap-6 md:py-5"
                  >
                    <span className="pt-1 text-[10px] tracking-[0.28em] text-neutral-500">
                      {item.no}
                    </span>
                    <div>
                      <p className="text-[10px] tracking-[0.24em] text-neutral-500">
                        {item.subtag}
                      </p>
                      <p className="mt-1 text-[14px] font-bold leading-[1.55] text-neutral-950">
                        {item.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sub service 01 — Talent Management */}
        <div className="mt-24 grid gap-12 border-t border-neutral-200 pt-14 md:mt-32 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-neutral-500">SUB SERVICE 01</p>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-neutral-950 md:text-2xl">
              {SUB_SERVICE.title}
            </h3>
            <p className="mt-2 text-sm tracking-[0.14em] text-neutral-600">{SUB_SERVICE.ja}</p>
            <p className="mt-8 text-[13px] leading-[2] text-neutral-800">{SUB_SERVICE.desc}</p>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 md:aspect-[4/3]">
            <Image
              src={SUB_SERVICE.image}
              alt={SUB_SERVICE.title}
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
