"use client";

import { COMPANY } from "@/lib/data";

export default function D1Contact() {
  return (
    <section id="contact" className="border-t border-neutral-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[900px] px-5 text-center md:px-8">
        <p className="text-[11px] tracking-[0.32em] text-neutral-500">CONTACT</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
          お問い合わせ
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[13px] leading-[2] text-neutral-800">
          サービス業のパフォーマンス向上・人材確保・業務効率化など、事業の課題についてお気軽にご相談ください。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
        <p className="mt-6 text-[11px] text-neutral-500">別タブでフォームが開きます</p>
      </div>
    </section>
  );
}
