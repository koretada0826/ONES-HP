"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";
import { setCursor } from "@/hooks/useCursorState";

interface Props {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBlock({
  title = "サービス業の未来を創る。",
  subtitle = "業種・規模を問わず、サービス事業者様の現場に寄り添い、\n持続可能な成長をともに実現します。",
  primaryLabel = "無料相談はこちら",
  primaryHref = COMPANY.contactFormUrl,
  secondaryLabel = "LINEで相談",
  secondaryHref = COMPANY.lineUrl,
}: Props) {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-10">
        <div className="chip mx-auto mb-6 justify-center">GET IN TOUCH</div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-pre-line text-3xl font-black leading-[1.35] text-white md:text-5xl"
        >
          {title}
        </motion.h3>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="mx-auto mt-6 max-w-xl whitespace-pre-line text-[13px] leading-[2] text-ink-950/65"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {/* PRIMARY — black → copper sweep */}
          <motion.a
            href={primaryHref}
            target="_blank"
            rel="noopener"
            onMouseEnter={() => setCursor("open")}
            onMouseLeave={() => setCursor("default")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group relative inline-flex h-12 items-center gap-4 overflow-hidden border border-ink-950 bg-ink-950 px-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-white"
          >
            <span
              className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[#c4897a] transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />
            <span className="relative z-10">{primaryLabel}</span>
            <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 6h10M7 2l4 4-4 4" />
              </svg>
            </span>
          </motion.a>

          {/* SECONDARY LINE — outlined, monochrome */}
          <motion.a
            href={secondaryHref}
            target="_blank"
            rel="noopener"
            onMouseEnter={() => setCursor("open")}
            onMouseLeave={() => setCursor("default")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative inline-flex h-12 items-center gap-3 overflow-hidden border border-white/40 bg-transparent px-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-white transition-colors duration-500 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
          >
            <span
              className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100"
              aria-hidden
            />
            <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4 fill-current" aria-hidden>
              <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314M9.665 12.816H7.554a.418.418 0 0 1-.417-.42V8.211a.418.418 0 0 1 .834 0v3.769h1.694a.418.418 0 0 1 0 .837M11.322 12.396a.418.418 0 0 1-.418.42.418.418 0 0 1-.418-.42V8.211a.418.418 0 0 1 .418-.42.418.418 0 0 1 .418.42v4.185m5.259 0a.418.418 0 0 1-.286.397.4.4 0 0 1-.132.023.416.416 0 0 1-.339-.169l-2.156-2.93v2.679a.418.418 0 0 1-.417.42.418.418 0 0 1-.418-.42V8.211a.418.418 0 0 1 .285-.397.4.4 0 0 1 .129-.021c.128 0 .248.065.331.163l2.158 2.933V8.211a.418.418 0 0 1 .418-.42.418.418 0 0 1 .418.42v4.185m3.687-2.093a.418.418 0 0 1 0 .836h-1.694v1.257h1.694a.418.418 0 0 1 0 .837h-2.111a.418.418 0 0 1-.418-.42V8.211a.418.418 0 0 1 .418-.42h2.111a.418.418 0 0 1 0 .836h-1.694v1.257h1.694v.001z" />
            </svg>
            <span className="relative z-10">{secondaryLabel}</span>
            <span className="relative z-10 inline-flex h-4 w-4 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
              <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 6h10M7 2l4 4-4 4" />
              </svg>
            </span>
          </motion.a>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-ink-950/45">
          別タブでフォームが開きます
        </p>
      </div>
    </section>
  );
}
