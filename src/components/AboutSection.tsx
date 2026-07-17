"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY, IMAGES } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    en: "MULTI INDUSTRY",
    ja: "多業種対応",
    desc:
      "ビューティー、フィットネス、ホスピタリティ、ウェルフェアの4領域で支援実績を持つプロフェッショナル集団。",
  },
  {
    en: "GLOBAL VIEW",
    ja: "地域を超える視点",
    desc:
      "国内各エリアにとどまらず、アジア圏をはじめとした海外での支援実績も有しています。",
  },
  {
    en: "ON-SITE",
    ja: "現場に寄り添う",
    desc:
      "接客・店舗オペレーションから数値分析、人事制度設計まで、現場に立ち入りながら成果を創ります。",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const lines = titleRef.current.querySelectorAll<HTMLElement>("[data-line]");
        gsap.set(lines, { yPercent: 105 });
        gsap.to(lines, {
          yPercent: 0,
          duration: 1.0,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: titleRef.current, start: "top 82%", once: true },
        });
      }
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
        // Slight inner counter-scale
        const inner = imageRef.current.querySelector<HTMLElement>(".about__img-inner");
        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.15 },
            {
              scale: 1,
              duration: 1.3,
              ease: "expo.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      }
      if (rulesRef.current) {
        const items = rulesRef.current.querySelectorAll<HTMLElement>("li");
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: { trigger: rulesRef.current, start: "top 82%", once: true },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24">
          <div className="chip">ABOUT US</div>
          <h2
            ref={titleRef}
            className="max-w-4xl text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.15] tracking-tight text-white"
          >
            <span className="block overflow-hidden">
              <span data-line className="inline-block">
                サービス業の未来を、
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-line className="inline-block">
                現場から創る。
              </span>
            </span>
          </h2>
        </div>

        {/* Main split */}
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          {/* Left: photo */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[4/5]"
            style={{ clipPath: "inset(0 0 100% 0)" }}
          >
            <div className="about__img-inner absolute inset-0 will-change-transform">
              <Image
                src={IMAGES.talent}
                alt="ONES Management チーム"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 45vw"
                className="object-cover"
                style={{ filter: "grayscale(0.05) contrast(1.03) sepia(0.1)" }}
              />
            </div>
            {/* Corner label */}
            <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />
              <span className="font-display text-[10px] uppercase tracking-[0.4em] text-ink-950/80">
                ONES MANAGEMENT
              </span>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-center">
            <p className="max-w-xl text-[14px] leading-[2.1] text-ink-950/80">
              {COMPANY.name}は、多種多様なサービス事業者様の成長を、
              現場に寄り添いながら全力で支援します。
              接客・店舗オペレーションから数値分析、人事制度設計まで、
              日本で培ったノウハウをもとに、地域を超えたグローバル展開で
              サービス業の未来を創ります。
            </p>

            {/* Values */}
            <ul
              ref={rulesRef}
              className="mt-12 flex flex-col divide-y divide-black/12 border-t border-b border-black/12"
            >
              {VALUES.map((v) => (
                <li
                  key={v.en}
                  className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[180px_1fr] md:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.4em] text-[#c4897a]">
                      {v.en}
                    </span>
                    <span className="text-[13px] font-bold tracking-[0.06em] text-white">
                      {v.ja}
                    </span>
                  </div>
                  <p className="text-[13px] leading-[2] text-ink-950/70">{v.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="/company"
                className="group relative inline-flex h-11 items-center gap-3 border border-copper-500/50 px-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c4897a] transition-colors duration-300 hover:border-copper-600 hover:bg-copper-500 hover:text-white"
              >
                会社詳細
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
