"use client";

import Image from "next/image";
import { COMPANY, IMAGES } from "@/lib/data";

export default function D1Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <Image
              src={IMAGES.logo}
              alt="ONES MANAGEMENT"
              width={160}
              height={50}
              unoptimized
              className="h-10 w-auto invert"
            />
            <p className="mt-6 text-[13px] leading-[1.9] text-neutral-300">
              {COMPANY.name}
              <br />
              {COMPANY.brand}
            </p>
            <p className="mt-4 text-[12px] leading-[1.9] text-neutral-400">
              {COMPANY.description}
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.32em] text-neutral-500">MENU</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[13px] text-neutral-300">
              <li><a href="#about" className="hover:text-white">会社紹介</a></li>
              <li><a href="#service" className="hover:text-white">サービス</a></li>
              <li><a href="#track" className="hover:text-white">実績</a></li>
              <li><a href="#news" className="hover:text-white">お知らせ</a></li>
              <li><a href="#contact" className="hover:text-white">お問い合わせ</a></li>
              <li>
                <a href={COMPANY.noteUrl} target="_blank" rel="noopener" className="hover:text-white">
                  note
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-neutral-800 pt-6 text-[11px] text-neutral-500">
          Copyright © {COMPANY.nameEn} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
