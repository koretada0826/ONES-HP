"use client";

import { TRACK_RECORD } from "@/lib/data";
import SectionHead from "./D1SectionHead";

export default function D1TrackRecord() {
  return (
    <section id="jisseki" style={{ textAlign: "center" }}>
      <SectionHead label="TRACK RECORD" title="サポート実績" />

      <p
        style={{
          textAlign: "center",
          maxWidth: "760px",
          margin: "0 auto 2.8rem",
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.60)",
          letterSpacing: "0.05em",
          lineHeight: 1.9,
        }}
      >
        <span className="hidden md:inline">
          国内各エリアにとどまらず、アジア圏をはじめとした海外での支援実績も有しています。
          <br />
          グローバルな視点で、サービス業の成長を全力でサポートします。
        </span>
        <span className="md:hidden">
          国内にとどまらず、
          <br />
          アジア圏などの海外支援実績も有しています。
          <br />
          グローバルな視点で、
          <br />
          サービス業の成長を全力でサポートします。
        </span>
      </p>

      <div
        className="d1-client-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "18px",
          maxWidth: "860px",
          margin: "44px auto 0",
        }}
      >
        {TRACK_RECORD.map((cat) => (
          <div
            key={cat.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              minHeight: "340px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.70) saturate(0.85)",
              }}
            />
            <div
              style={{
                content: "''",
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.02) 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "26px 26px 24px",
                width: "100%",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "0.60rem",
                  letterSpacing: "0.30em",
                  color: "#d4a08a",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "22px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, #c4897a, rgba(196,137,122,0.12))",
                    flexShrink: 0,
                  }}
                />
                {cat.label}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "0.84rem",
                  color: "rgba(255,255,255,0.80)",
                  lineHeight: 2.1,
                }}
              >
                {cat.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #jisseki .d1-client-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          #jisseki .d1-client-grid > div { min-height: 280px !important; }
        }
        @media (max-width: 480px) {
          #jisseki .d1-client-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
