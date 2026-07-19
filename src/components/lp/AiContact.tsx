"use client";

import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/data";

export default function AiContact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 md:py-36">
      {/* Ambient copper glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(196,137,122,0.18) 0%, rgba(196,137,122,0) 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 md:px-10">
        <div className="text-center">
          <div className="chip mx-auto justify-center">CONTACT</div>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.25] text-white">
            まずは無料相談から。
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[13px] leading-[2] text-white/65">
            AI・デジタル導入の要件整理から、既存業務との統合、費用感まで。
            <br className="hidden md:inline" />
            現場のご状況をお聞かせいただければ、最適な進め方をご提案いたします。
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <ContactForm />
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/12 pt-10 text-center text-[11px] leading-[1.9] text-white/50 md:grid-cols-2 md:gap-10">
          <div>
            <div className="font-display text-[9px] uppercase tracking-[0.42em] text-white/40">
              PHONE / LINE
            </div>
            <a
              href={COMPANY.lineUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block text-[13px] text-white/85 underline underline-offset-4 hover:text-white"
            >
              LINEで直接相談する →
            </a>
          </div>
          <div>
            <div className="font-display text-[9px] uppercase tracking-[0.42em] text-white/40">
              COMPANY
            </div>
            <div className="mt-2 text-[12px] text-white/75">
              {COMPANY.name} / {COMPANY.brand}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
