"use client";

import Image from "next/image";
import { TOPICS, COMPANY } from "@/lib/data";

export default function D1News() {
  return (
    <section id="news" className="border-t border-neutral-200 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-neutral-500">NEWS &amp; TOPICS</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
              お知らせ
            </h2>
          </div>
          <a
            href={COMPANY.noteUrl}
            target="_blank"
            rel="noopener"
            className="hidden text-[12px] tracking-[0.14em] text-neutral-700 underline underline-offset-4 hover:text-neutral-950 md:inline-block"
          >
            noteで一覧を見る →
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TOPICS.map((t) => (
            <a
              key={t.id}
              href={t.url}
              target="_blank"
              rel="noopener"
              className="group block border border-neutral-200 bg-white transition hover:border-neutral-400"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.14em] text-neutral-500">
                  <span className="border border-neutral-300 px-2 py-0.5 uppercase">
                    {t.source}
                  </span>
                  <span>{t.date}</span>
                </div>
                <h3 className="mt-4 text-[14px] font-bold leading-[1.6] text-neutral-950">
                  {t.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[12px] leading-[1.8] text-neutral-700">
                  {t.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
