"use client";

import Image from "next/image";
import { COMPANY, IMAGES } from "@/lib/data";

export default function D1Hero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.85) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1200px] flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <p className="mb-4 text-[12px] tracking-[0.32em] text-neutral-700 md:text-[13px]">
          {COMPANY.taglineEn}
        </p>
        <h1 className="whitespace-pre-line text-3xl font-bold leading-[1.4] tracking-tight text-neutral-950 md:text-5xl">
          {"サービス業の未来を創る。\n人が生み出す価値の最大化。"}
        </h1>
        <p className="mt-8 max-w-2xl text-[14px] leading-[2] text-neutral-800 md:text-[15px]">
          {COMPANY.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={COMPANY.contactFormUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center gap-3 rounded-sm bg-neutral-900 px-6 text-[13px] font-medium text-white transition hover:bg-neutral-700"
          >
            無料相談はこちら
            <span aria-hidden>→</span>
          </a>
          <a
            href={COMPANY.lineUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center gap-3 rounded-sm border border-neutral-900 px-6 text-[13px] font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            LINEで相談
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
