"use client";

import { COMPANY } from "@/lib/data";

export default function D1About() {
  return (
    <section id="about" className="border-t border-neutral-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <p className="text-[11px] tracking-[0.32em] text-neutral-500">ABOUT</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
          会社紹介
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-[14px] leading-[2] text-neutral-800">
            {COMPANY.name}は、多種多様なサービス事業者様の成長を、現場に寄り添いながら全力で支援いたします。
          </p>
          <p className="text-[14px] leading-[2] text-neutral-800">
            接客・店舗オペレーションから数値分析、人事制度設計まで。日本で培ったノウハウをもとに、地域を超えたグローバル展開でサービス業の未来を創ります。
          </p>
        </div>
      </div>
    </section>
  );
}
