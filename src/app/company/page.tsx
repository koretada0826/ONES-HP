"use client";

import { useRef } from "react";
import SubPageChrome from "@/components/SubPageChrome";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import PinnedSteps from "@/components/PinnedSteps";
import CtaBlock from "@/components/CtaBlock";
import RotateHeadline from "@/components/RotateHeadline";
import { COMPANY_PAGE } from "@/lib/pages-data";
import { useGsapContext } from "@/hooks/useGsapContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function CompanyPage() {
  const profileRef = useRef<HTMLElement>(null);

  useGsapContext(profileRef, () => {
    const rows = profileRef.current!.querySelectorAll(".profile-row");
    gsap.fromTo(
      rows,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: profileRef.current, start: "top 75%", once: true },
      }
    );
  });

  return (
    <SubPageChrome>
      <PageHero
        labelEn={COMPANY_PAGE.labelEn}
        ja={COMPANY_PAGE.ja}
        lead={COMPANY_PAGE.lead}
        image={COMPANY_PAGE.heroImage}
      />

      {/* Marquee band */}
      <Marquee
        items={["OUR VISION", "MISSION", "GROWTH", "FUTURE"]}
        size="xl"
        outline
      />

      {/* MISSION intro — 2-column so right side isn't empty */}
      <section id="mission" className="relative pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16 md:px-10">
          {/* Left: label + huge title */}
          <div>
            <div className="chip">{COMPANY_PAGE.mission.labelEn}</div>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,10vw,7rem)] font-black uppercase leading-none tracking-tight text-white">
              {COMPANY_PAGE.mission.title}
            </h2>
            <div className="mt-6 h-px w-16 bg-[#c4897a]" />
            <p className="mt-6 max-w-md text-[13px] leading-[2] text-ink-950/60">
              私たちは、サービス業のパフォーマンスを最大化し、
              人が生み出す価値を最大化する存在でありたい。
              その想いを胸に、日々サービス事業者様と向き合っています。
            </p>
          </div>

          {/* Right: mission copy — the actual mission */}
          <div className="relative">
            {/* Faint outline background number */}
            <div
              className="pointer-events-none absolute -top-14 right-0 select-none font-display font-black leading-none"
              aria-hidden
              style={{
                fontSize: "clamp(6rem, 12vw, 12rem)",
                WebkitTextStroke: "1px rgba(10,10,14,0.08)",
                color: "transparent",
                letterSpacing: "-0.05em",
              }}
            >
              01
            </div>
            <div className="chip mb-6">CORE PURPOSE</div>
            <div className="whitespace-pre-line text-2xl font-semibold leading-[1.85] tracking-[0.06em] text-white md:text-4xl">
              {COMPANY_PAGE.mission.copy}
            </div>
            <p className="mt-8 border-t border-black/12 pt-6 text-[13px] leading-[2] text-ink-950/65">
              この2つを両輪として、私たちONESは、
              サービス業の現場に寄り添いながら、
              地域を超えた成長を実現していきます。
            </p>
          </div>
        </div>
      </section>

      {/* PIN SCROLL — Mission points */}
      <PinnedSteps
        sectionLabel="OUR POINTS"
        steps={[
          {
            no: "POINT.01",
            title: "パフォーマンス最大化",
            desc: COMPANY_PAGE.mission.points[0].text,
            image: COMPANY_PAGE.mission.points[0].image,
            keywords: [
              "店舗管理業務の効率化",
              "ルール構築",
              "ライフライン整備",
              "オペレーション標準化",
              "現場負荷の軽減",
            ],
          },
          {
            no: "POINT.02",
            title: "経営基盤の構築",
            desc: COMPANY_PAGE.mission.points[1].text,
            image: COMPANY_PAGE.mission.points[1].image,
            keywords: [
              "現場ファースト",
              "社内制度設計",
              "人材定着",
              "組織要件整理",
              "職務要件制定",
            ],
          },
          {
            no: "POINT.03",
            title: "グローバル展開",
            desc: COMPANY_PAGE.mission.points[2].text,
            image: COMPANY_PAGE.mission.points[2].image,
            keywords: [
              "地域を超える",
              "海外進出支援",
              "業界横断ノウハウ",
              "多言語マニュアル",
              "現地オペレーション",
            ],
          },
        ]}
      />

      {/* Marquee reverse band */}
      <Marquee
        items={["SINCE 2023", "STORE MANAGEMENT", "ONES INC.", "SHIZUOKA — TOKYO"]}
        size="lg"
        reverse
        duration={100}
      />

      {/* PROFILE */}
      <section
        ref={profileRef}
        id="profile"
        className="relative py-24 md:py-36"
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="chip">CORPORATE DATA</div>
          <RotateHeadline
            as="h2"
            text="会社情報"
            className="mt-5 text-4xl font-black text-white md:text-5xl"
          />
          <div className="mt-8 h-px w-16 bg-[#c4897a]" />

          <dl className="mt-14 flex flex-col divide-y divide-black/12 border-t border-b border-black/12">
            {COMPANY_PAGE.profile.map((row) => (
              <div
                key={row.label}
                className="profile-row group grid grid-cols-1 gap-2 py-6 transition-colors hover:bg-white/85 md:grid-cols-[220px_1fr] md:gap-8 md:py-7"
              >
                <dt className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-ink-950/60">
                  {row.label}
                </dt>
                <dd className="whitespace-pre-line text-[14px] leading-[1.95] text-white">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBlock
        title={"サービス業の未来を創る。\n人が生み出す価値の最大化。"}
        subtitle={"業種・規模を問わず、サービス事業者様の現場に寄り添い、\n持続可能な成長をともに実現します。"}
      />
    </SubPageChrome>
  );
}
