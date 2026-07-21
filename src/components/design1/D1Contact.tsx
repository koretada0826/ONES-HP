"use client";

import { COMPANY } from "@/lib/data";
import SectionHead from "./D1SectionHead";

export default function D1Contact() {
  return (
    <section id="contact">
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <SectionHead label="GET IN TOUCH" title="CONTACT" />

        <p
          style={{
            textAlign: "center",
            fontSize: "0.86rem",
            color: "rgba(255,255,255,0.62)",
            lineHeight: 2.1,
            marginBottom: "3rem",
          }}
        >
          お問い合わせ・ご相談はこちらからお気軽にどうぞ。
          <br />
          通常2営業日以内にご返信いたします。
        </p>

        <div style={{ textAlign: "center", padding: "2rem 0 1rem" }}>
          <a
            href={COMPANY.contactFormUrl}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.30)",
              color: "#fff",
              padding: "1.1rem 4rem",
              fontSize: "0.84rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              borderRadius: "980px",
              textDecoration: "none",
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
            お問い合わせフォームへ →
          </a>
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.45)",
              marginTop: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            別タブでフォームが開きます
          </p>
        </div>
      </div>
    </section>
  );
}
