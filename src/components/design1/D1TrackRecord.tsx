"use client";

import Image from "next/image";
import { TRACK_RECORD } from "@/lib/data";

export default function D1TrackRecord() {
  return (
    <section id="track" className="border-t border-neutral-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <p className="text-[11px] tracking-[0.32em] text-neutral-500">TRACK RECORD</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
          サポート実績
        </h2>
        <p className="mt-6 max-w-2xl text-[13px] leading-[2] text-neutral-700">
          国内各エリアにとどまらず、アジア圏をはじめとした海外での支援実績も有しています。
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRACK_RECORD.map((c) => (
            <article key={c.id} className="border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-[0.28em] text-neutral-500">{c.label}</p>
                <ul className="mt-3 space-y-1 text-[12px] text-neutral-800">
                  {c.items.map((item) => (
                    <li key={item}>・{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
