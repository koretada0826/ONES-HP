"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/data";

export default function D1About() {
  return (
    <section id="about" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "740px", margin: "0 auto" }}>
        <Image
          src={IMAGES.logo}
          alt="ONES MANAGEMENT"
          width={200}
          height={54}
          unoptimized
          className="mx-auto"
          style={{
            height: "46px",
            width: "auto",
            marginBottom: "2rem",
            filter: "brightness(0) invert(1)",
            opacity: 0.8,
          }}
        />

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.92)",
            fontWeight: 600,
            lineHeight: 1.85,
            marginBottom: "1.2rem",
            letterSpacing: "0.02em",
          }}
        >
          サービス業の未来を創る。
          <br />
          人が生み出す価値の最大化。
        </p>
        <p
          style={{
            fontSize: "0.84rem",
            color: "rgba(255,255,255,0.62)",
            lineHeight: 2.1,
            marginBottom: "2.8rem",
          }}
        >
          多種多様なサービス事業者様の成長を、現場に寄り添いながら全力で支援します。
          <br />
          ご相談・お問い合わせはお気軽にどうぞ。
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#service"
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.78)",
              padding: "0.75rem 2rem",
              fontSize: "0.76rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              borderRadius: "980px",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.10)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.48)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.color = "rgba(255,255,255,0.78)";
            }}
          >
            サービス詳細
          </a>
        </div>
      </div>
    </section>
  );
}
