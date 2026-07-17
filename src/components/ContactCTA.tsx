"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { setCursor } from "@/hooks/useCursorState";
import { COMPANY } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const rootRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<HTMLDivElement>(null);
  const wave2Ref = useRef<HTMLDivElement>(null);
  const btnRef = useMagneticButton<HTMLAnchorElement>(180, 0.4);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(line1Ref.current, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });
      gsap.to(line2Ref.current, {
        xPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });
      // slow horizontal wave loop
      gsap.to(wave1Ref.current, { backgroundPositionX: "+=2400", duration: 40, ease: "none", repeat: -1 });
      gsap.to(wave2Ref.current, { backgroundPositionX: "-=2000", duration: 55, ease: "none", repeat: -1 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative overflow-hidden py-24 md:py-40"
    >
      {/* wave layers */}
      <div
        ref={wave1Ref}
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1200px 200px at 50% 60%, rgba(0,0,0,0.05), transparent 70%)",
          backgroundSize: "1600px 400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        ref={wave2Ref}
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1000px 220px at 30% 50%, rgba(196,137,122,0.10), transparent 70%)",
          backgroundSize: "1400px 400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.06) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1800px] flex-col items-center px-6 text-center md:px-10">
        <div className="chip mb-8">GET IN TOUCH</div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={line1Ref}
            className="whitespace-nowrap text-[clamp(2.5rem,11vw,12rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-ink-950 will-change-transform"
          >
            CREATING THE
          </div>
          <div
            ref={line2Ref}
            className="whitespace-nowrap text-[clamp(2.5rem,11vw,12rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-ink-950 will-change-transform"
          >
            FUTURE TOGETHER.
          </div>
        </div>

        <p className="mt-14 max-w-lg text-[13px] leading-[2] text-ink-950/65">
          お問い合わせ・ご相談はこちらからお気軽にどうぞ。
          <br />
          通常2営業日以内にご返信いたします。
        </p>

        {/* Magnetic circular button */}
        <motion.a
          ref={btnRef}
          href={COMPANY.contactFormUrl}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => setCursor("open", "CONTACT")}
          onMouseLeave={() => setCursor("default")}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group relative mt-12 flex h-32 w-32 items-center justify-center rounded-full border border-ink-950/40 text-ink-950 transition-colors duration-500 hover:bg-ink-950 hover:text-white md:mt-14 md:h-40 md:w-40"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full">
            <svg viewBox="0 0 160 160" className="h-full w-full">
              <circle
                cx="80"
                cy="80"
                r="79"
                fill="none"
                stroke="rgba(10,10,14,0.55)"
                strokeWidth="1"
                strokeDasharray="30 8"
                className="origin-center animate-[spin_18s_linear_infinite]"
                style={{ transformBox: "fill-box" }}
              />
            </svg>
          </span>
          <span className="relative z-10 flex flex-col items-center gap-2">
            <span className="font-display text-[10px] uppercase tracking-[0.42em]">
              CONTACT
            </span>
            <span className="font-display text-sm tracking-[0.24em]">FORM</span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </span>
        </motion.a>

        <p className="mt-4 text-[10px] tracking-[0.28em] text-ink-950/50">
          別タブでフォームが開きます
        </p>

        <a
          href={COMPANY.lineUrl}
          target="_blank"
          rel="noopener"
          onMouseEnter={() => setCursor("open")}
          onMouseLeave={() => setCursor("default")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-xs font-bold tracking-[0.14em] text-ink-950 shadow-[0_4px_20px_rgba(6,199,85,0.35)] transition hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(6,199,85,0.5)]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden>
            <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINE で相談する
        </a>
      </div>
    </section>
  );
}
