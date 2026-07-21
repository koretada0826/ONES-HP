"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/data";

export default function D1Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      {/* Soft wash so text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1200px] flex-col items-center justify-center px-5 pt-24 pb-16 text-center md:px-8 md:pt-28">
        <p className="text-[11px] tracking-[0.42em] text-neutral-800/85 md:text-[12px]">
          多種多様なサービス事業者様へ
        </p>
        <h1
          className="mt-8 font-display font-black leading-[0.9] tracking-[-0.01em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          style={{ fontSize: "clamp(2.6rem, 8vw, 8rem)" }}
        >
          <span className="block">CREATING</span>
          <span className="block">THE FUTURE</span>
        </h1>
        <p className="mt-6 text-[10px] tracking-[0.42em] text-neutral-700/80 md:mt-8 md:text-[11px]">
          OF THE SERVICE INDUSTRY
        </p>

        <div className="mt-10 space-y-3 text-[15px] leading-[2] tracking-[0.05em] text-neutral-900 md:mt-14 md:text-[17px]">
          <p>サービス業の未来を創る。</p>
          <p>人が生み出す価値の最大化。</p>
        </div>

        <a
          href="#about"
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-neutral-900/70 bg-white/10 px-8 py-3.5 text-[13px] tracking-[0.14em] text-neutral-900 backdrop-blur-sm transition hover:bg-neutral-900 hover:text-white md:mt-16 md:px-10 md:py-4"
        >
          会社詳細はこちら
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
