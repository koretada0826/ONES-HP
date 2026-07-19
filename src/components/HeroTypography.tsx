"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  visible: boolean;
  scrollProgress: number;
}

export default function HeroTypography({ visible, scrollProgress }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const jaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
    const dot = dotRef.current;

    gsap.set(lines, { yPercent: 130, scaleY: 1.35, transformOrigin: "50% 100%" });
    if (dot) gsap.set(dot, { opacity: 0, textShadow: "0 0 0px rgba(0,0,0,0)" });
    if (jaRef.current) gsap.set(jaRef.current.children, { yPercent: 100, opacity: 0 });
    if (descRef.current) gsap.set(descRef.current, { opacity: 0, filter: "blur(10px)" });

    if (reduced) {
      gsap.set(lines, { yPercent: 0, scaleY: 1 });
      if (dot) gsap.set(dot, { opacity: 1 });
      if (jaRef.current) gsap.set(jaRef.current.children, { yPercent: 0, opacity: 1 });
      if (descRef.current) gsap.set(descRef.current, { opacity: 1, filter: "blur(0)" });
      return;
    }

    const tl = gsap.timeline({ delay: 0.35 });
    tl.to(lines, {
      yPercent: 0,
      scaleY: 1,
      duration: 1.15,
      ease: "expo.out",
      stagger: 0.14,
    });
    tl.to(
      lines,
      { scaleY: 0.98, duration: 0.12, ease: "power2.out", stagger: 0.04 },
      "-=0.5"
    ).to(lines, { scaleY: 1, duration: 0.24, ease: "power2.out", stagger: 0.04 });

    if (dot) {
      tl.to(dot, { opacity: 1, duration: 0.2, ease: "power3.out" }, "+=0.05");
      tl.to(dot, { textShadow: "0 0 24px rgba(196,137,122,0.9)", duration: 0.15 });
      tl.to(dot, { textShadow: "0 0 0px rgba(196,137,122,0)", duration: 0.6, ease: "power3.out" });
    }

    if (jaRef.current) {
      tl.to(
        jaRef.current.children,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.08,
        },
        "-=0.4"
      );
    }
    if (descRef.current) {
      tl.to(descRef.current, { opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }, "-=0.5");
    }

    return () => {
      tl.kill();
    };
  }, [visible, reduced]);

  useEffect(() => {
    const p = scrollProgress;
    if (line1Ref.current) {
      line1Ref.current.style.transform = `translate3d(${-p * 40}px, ${-p * 60}px, 0)`;
    }
    if (line2Ref.current) {
      line2Ref.current.style.transform = `translate3d(${p * 30}px, ${-p * 80}px, 0)`;
    }
    if (line3Ref.current) {
      line3Ref.current.style.transform = `translate3d(${-p * 20}px, ${-p * 100}px, 0)`;
    }
    if (rootRef.current) {
      rootRef.current.style.opacity = String(Math.max(0, 1 - p * 1.4));
    }
  }, [scrollProgress]);

  return (
    <div ref={rootRef} className="relative z-10 max-w-[820px]">
      <div className="chip mb-6 md:mb-8">AI × DIGITAL SOLUTIONS</div>

      <h1 className="font-display font-black uppercase leading-[0.92] tracking-[-0.01em] text-ink-950">
        <span className="block overflow-hidden pb-2">
          <span
            ref={line1Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            EVOLVE
          </span>
        </span>
        <span className="block overflow-hidden pb-2">
          <span
            ref={line2Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            YOUR
          </span>
        </span>
        <span className="block overflow-hidden pb-2">
          <span
            ref={line3Ref}
            className="inline-block will-change-transform text-[clamp(2.6rem,9vw,9rem)]"
          >
            BUSINESS
            <span ref={dotRef} className="text-[#c4897a]">
              .
            </span>
          </span>
        </span>
      </h1>

      <p className="mt-5 font-display text-xs uppercase tracking-[0.28em] text-ink-950/55">
        AI × DIGITAL — <span className="text-[#c4897a]">FOR THE SERVICE INDUSTRY</span>
      </p>

      <div ref={jaRef} className="mt-6 overflow-visible md:mt-8">
        <div className="overflow-hidden">
          <div className="text-base font-semibold tracking-[0.12em] text-ink-950 md:text-2xl">
            AIの力で、現場の生産性を最大化する。
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-base font-semibold tracking-[0.12em] text-ink-950 md:text-2xl">
            サービス業のためのデジタル伴走型パートナー。
          </div>
        </div>
      </div>

      <div
        ref={descRef}
        className="mt-6 max-w-[560px] border-t border-black/15 pt-5 text-[12px] leading-[1.95] text-ink-950/65 md:mt-8 md:pt-6 md:text-[13px] md:leading-[2]"
      >
        <p>
          <span className="font-semibold text-ink-950">HP / LP 制作・業務効率化ツール・AIチャットボット・DX支援</span>
          を、
          <br className="hidden md:inline" />
          事業と現場を理解した上でオーダーメイドで設計。導入後の改善まで一気通貫で伴走します。
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
        <a
          href="#contact"
          className="group relative inline-flex h-12 items-center gap-3 overflow-hidden border border-ink-950 bg-ink-950 px-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-white"
        >
          <span
            className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-[#c4897a] transition-transform duration-500 ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <span className="relative z-10">無料相談はこちら</span>
          <span className="relative z-10">→</span>
        </a>
        <a
          href="#services"
          className="inline-flex h-12 items-center gap-3 border border-ink-950/40 px-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-950 transition hover:border-ink-950"
        >
          サービス詳細を見る
          <span>↓</span>
        </a>
      </div>
    </div>
  );
}
