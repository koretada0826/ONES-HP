"use client";

import { MAIN_SERVICE, IMAGES } from "@/lib/data";
import SectionHead from "./D1SectionHead";

export default function D1Service() {
  return (
    <section id="service">
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <SectionHead label="WHAT WE DO" title="MAIN SERVICE" />

        {/* 本家: .main-service .split { text-align: center; } — center inside horizontal split */}
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
              {MAIN_SERVICE.title}
            </p>
            <p
              style={{
                fontSize: "0.76rem",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "2rem",
                letterSpacing: "0.02em",
              }}
            >
              {MAIN_SERVICE.titleSub}
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
              {MAIN_SERVICE.concerns.map((c) => (
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
              }}
            >
              {MAIN_SERVICE.summary}
            </p>

            <div style={{ textAlign: "center" }}>
              <a
                href="/ai-lp"
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
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
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
                サービス詳細はこちら →
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
              src={IMAGES.serviceWorry}
              alt="店舗経営に悩む経営者"
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
          #service .d1-split {
            flex-direction: column !important;
            gap: 1.8rem !important;
            margin-top: 2rem !important;
          }
          #service .d1-split > div { flex: 0 0 auto !important; width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
