"use client";

import { TOPICS } from "@/lib/data";
import SectionHead from "./D1SectionHead";

export default function D1News() {
  return (
    <section id="topics">
      <SectionHead label="NEWS & TOPICS" title="TOPICS" />

      {/* Horizontal scroll carousel — 本家 CSS: display flex, snap-x, cards 88% wide */}
      <div
        className="d1-topics-grid"
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "0.5rem",
          WebkitOverflowScrolling: "touch",
          padding: "0.4rem 0.5rem 1.4rem",
        }}
      >
        {TOPICS.map((t) => (
          <a
            key={t.id}
            href={t.url}
            target="_blank"
            rel="noopener"
            className="group"
            style={{
              flex: "0 0 88%",
              maxWidth: "1000px",
              scrollSnapAlign: "start",
              background: "rgba(22,26,38,0.72)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "18px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr",
              textDecoration: "none",
              transition: "box-shadow 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 22px 56px rgba(0,0,0,0.45)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Image — 1fr (grows) — LEFT on desktop */}
            <div
              className="d1-topic-img"
              style={{
                background: "#111",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.96) saturate(0.82)",
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
                className="group-hover:!scale-[1.04]"
              />
            </div>

            {/* Body — 400px fixed — RIGHT on desktop */}
            <div
              style={{
                padding: "3rem 3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.9rem",
                  lineHeight: 1.55,
                  letterSpacing: "0.01em",
                }}
              >
                {t.title}
              </p>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "rgba(255,255,255,0.60)",
                  lineHeight: 1.88,
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  flex: 1,
                }}
              >
                {t.excerpt}
              </p>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#86868b",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginTop: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    background: "#f5ede9",
                    padding: "0.15rem 0.6rem",
                    color: "#c4897a",
                    fontWeight: 600,
                    fontSize: "0.64rem",
                    letterSpacing: "0.05em",
                    borderRadius: "4px",
                  }}
                >
                  {t.source}
                </span>
                <span>{t.date}</span>
              </div>
              <span
                className="d1-more"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  marginTop: "0.5rem",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  borderBottom: "1px solid rgba(255,255,255,0.45)",
                  paddingBottom: "1px",
                  alignSelf: "flex-start",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                続きを読む →
              </span>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        /* Desktop: grid image-left(1fr) / body-right(400px) */
        @media (min-width: 961px) {
          #topics .group {
            grid-template-columns: 1fr 400px !important;
          }
        }
        @media (max-width: 960px) {
          #topics .group > div:last-child {
            padding: 2.2rem !important;
          }
        }
        #topics .group:hover .d1-more {
          color: #c4897a !important;
          border-color: #c4897a !important;
        }
        #topics .d1-topics-grid::-webkit-scrollbar { height: 8px; }
        #topics .d1-topics-grid::-webkit-scrollbar-track { background: transparent; }
        #topics .d1-topics-grid::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
