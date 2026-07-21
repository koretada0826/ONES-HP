"use client";

import { SUB_SERVICE, IMAGES } from "@/lib/data";
import SectionHead from "./D1SectionHead";

export default function D1Talent() {
  return (
    <section id="sub-service" style={{ textAlign: "center" }}>
      <SectionHead
        label="SUB SERVICE 01"
        title="TALENT MANAGEMENT"
        ja="タレントマネジメント"
      />

      {/* split--reverse: image left, text right on desktop */}
      <div
        className="d1-split-rev"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: "clamp(2rem, 4vw, 4.5rem)",
          marginTop: "2.6rem",
          textAlign: "left",
        }}
      >
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.60)",
              lineHeight: 2.1,
              textAlign: "left",
            }}
          >
            {SUB_SERVICE.desc}
          </p>
        </div>

        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            margin: 0,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 22px 60px rgba(0,0,0,0.45)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.talent}
            alt="ONES Talent Management"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "brightness(0.92) saturate(0.9)",
              transition: "filter 0.5s",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sub-service .d1-split-rev {
            flex-direction: column !important;
            gap: 1.8rem !important;
            margin-top: 2rem !important;
            text-align: center !important;
          }
          #sub-service .d1-split-rev > div { flex: 0 0 auto !important; width: 100% !important; }
          #sub-service .d1-split-rev p { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
