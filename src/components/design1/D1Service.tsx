"use client";

import { MAIN_SERVICE, AI_SERVICE, IMAGES } from "@/lib/data";
import SectionHead from "./D1SectionHead";

type Block = {
  id: string;
  label: string;
  name: string;
  nameSub: string;
  concerns: string[];
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const BLOCKS: Block[] = [
  {
    id: "service",
    label: "MAIN SERVICE 01",
    name: MAIN_SERVICE.title,
    nameSub: MAIN_SERVICE.titleSub,
    concerns: MAIN_SERVICE.concerns,
    summary: MAIN_SERVICE.summary,
    ctaLabel: "サービス詳細はこちら →",
    ctaHref: "/service",
    image: IMAGES.serviceWorry,
    imageAlt: "店舗経営に悩む経営者",
  },
  {
    id: "service-ai",
    label: "MAIN SERVICE 02",
    name: AI_SERVICE.title,
    nameSub: AI_SERVICE.titleSub!,
    concerns: AI_SERVICE.concerns!,
    summary: AI_SERVICE.summary!,
    ctaLabel: "AIサービス詳細はこちら →",
    ctaHref: "/ai-lp",
    image: AI_SERVICE.image,
    imageAlt: "AI × デジタルソリューション",
  },
];

export default function D1Service() {
  return (
    <>
      {BLOCKS.map((b) => (
        <section key={b.id} id={b.id}>
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            <SectionHead label={b.label} title="MAIN SERVICE" />

            {/* 本家: .main-service .split { text-align: center; } */}
            <div
              className="d1-split"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(2rem, 4vw, 4.5rem)",
                marginTop: "2.6rem",
                textAlign: "center",
              }}
            >
              {/* Text column */}
              <div style={{ flex: "1 1 0", minWidth: 0, textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "clamp(1.05rem, 2.4vw, 1.55rem)",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {b.name}
                </p>
                <p
                  style={{
                    fontSize: "0.76rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "2rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {b.nameSub}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    maxWidth: "660px",
                    margin: "1.4rem auto 1.8rem",
                    padding: 0,
                    textAlign: "center",
                  }}
                >
                  {b.concerns.map((c) => (
                    <li
                      key={c}
                      style={{
                        fontSize: "0.88rem",
                        color: "rgba(255,255,255,0.62)",
                        lineHeight: 1.7,
                        letterSpacing: "0.04em",
                        padding: "0.12rem 0",
                      }}
                    >
                      「{c}」
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontSize: "0.93rem",
                    color: "rgba(255,255,255,0.72)",
                    textAlign: "center",
                    lineHeight: 2.1,
                    marginBottom: "2.4rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {b.summary}
                </p>

                <div style={{ textAlign: "center" }}>
                  <a
                    href={b.ctaHref}
                    className="d1-glass-btn"
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.30)",
                      color: "#fff",
                      padding: "0.95rem 2.8rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      borderRadius: "980px",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      textDecoration: "none",
                      transition:
                        "background 0.2s, border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c4897a";
                      e.currentTarget.style.borderColor = "#c4897a";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {b.ctaLabel}
                  </a>
                </div>
              </div>

              {/* Media column */}
              <div
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 22px 60px rgba(0,0,0,0.45)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.image}
                  alt={b.imageAlt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: "brightness(0.96) saturate(0.96)",
                  }}
                />
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              #${b.id} .d1-split {
                flex-direction: column !important;
                gap: 1.8rem !important;
                margin-top: 2rem !important;
              }
              #${b.id} .d1-split > div { flex: 0 0 auto !important; width: 100% !important; }
            }
          `}</style>
        </section>
      ))}
    </>
  );
}
