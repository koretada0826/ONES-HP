"use client";

import { useState } from "react";
import D1Header from "@/components/design1/D1Header";
import D1Footer from "@/components/design1/D1Footer";
import D1LineFab from "@/components/design1/D1LineFab";

type Category = "beauty" | "office" | "care" | "fitness";

type CaseItem = {
  id: string;
  category: Category;
  badge: string;
  type: string;
  title: string;
  service: string;
  img: string;
};

const CASES: CaseItem[] = [
  {
    id: "b1",
    category: "beauty",
    badge: "パーソナルジム",
    type: "パーソナルジム（2店舗目開業準備）",
    title: "代表の属人的運営から脱却する\nマニュアル整備",
    service: "オペレーション・接客・FCマニュアル",
    img: "https://ones-mg.com/case-gym.jpg",
  },
  {
    id: "b2",
    category: "beauty",
    badge: "エステティックサロン",
    type: "エステティックサロン",
    title: "アナログ管理を自動化する\nKPI集計・記録ツールの導入",
    service: "自動集計・記録ツール開発",
    img: "https://ones-mg.com/client-esthe.png",
  },
  {
    id: "b3",
    category: "beauty",
    badge: "化粧品・小売",
    type: "国内化粧品メーカー（海外出店）",
    title: "海外出店を支える\n日本語・現地語 店舗オペレーションマニュアル",
    service: "多言語オペレーションマニュアル",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "o1",
    category: "office",
    badge: "温泉旅館",
    type: "温泉旅館",
    title: "クレームを削減し品質を統一する\n清掃マニュアルの策定・導入",
    service: "清掃マニュアル",
    img: "https://ones-mg.com/client-hospitality.jpg",
  },
  {
    id: "b4",
    category: "beauty",
    badge: "ビューティーサロン",
    type: "トータルビューティーサロン（ネイル・アイブロウ・アイラッシュ）",
    title: "属人化した業務を標準化する\nマニュアル整備と統合ダッシュボード構築",
    service: "マニュアル制作・ツール開発・KPI管理設計",
    img: "https://ones-mg.com/case-beauty.jpg",
  },
  {
    id: "f1",
    category: "fitness",
    badge: "キッズスポーツ",
    type: "キッズスポーツスクール（新規立ち上げ）",
    title: "ゼロから事業基盤を構築する\n安全管理・規約整備とインストラクター制度設計",
    service: "開業支援・規約整備・制度設計",
    img: "https://ones-mg.com/client-kids.png",
  },
  {
    id: "c1",
    category: "care",
    badge: "介護施設",
    type: "介護施設（M&A後の体制整備）",
    title: "M&A後の組織を再構築する\n組織要件整理と職務要件の制定",
    service: "組織設計・職務要件制定",
    img: "https://ones-mg.com/client-welfare.jpg?v=2",
  },
];

const FILTERS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "すべて" },
  { id: "beauty", label: "BEAUTY & WELLNESS" },
  { id: "office", label: "HOSPITALITY & RETAIL" },
  { id: "care", label: "WELFARE & CARE" },
  { id: "fitness", label: "FITNESS & SPORTS" },
];

const BADGE_STYLES: Record<
  Category,
  { bg: string; color: string; border: string }
> = {
  beauty: { bg: "#fdf0f4", color: "#c4607e", border: "#f0b8c8" },
  office: { bg: "#eef5fb", color: "#3a78a0", border: "#b0d0e8" },
  care: { bg: "#eef8f2", color: "#2a8a52", border: "#a0d8b8" },
  fitness: { bg: "#eef5f6", color: "#1e6a72", border: "#a0cdd2" },
};

export default function CasePage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const visible = CASES.filter((c) => filter === "all" || c.category === filter);

  return (
    <>
      <style>{`
        html, body { background: #fff !important; color: #1d1d1f; }
        @media (min-width: 600px) {
          .cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <D1Header
        currentPage="CASE"
        contactHref="/#contact"
        sectionNav={[]}
        showAiLink={false}
      />

      <main style={{ paddingTop: "68px" }}>
        {/* HERO */}
        <div
          style={{
            background: "#1a1a2e",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              content: "''",
              position: "absolute",
              inset: 0,
              backgroundImage: "url(https://ones-mg.com/client-beauty.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
            }}
          />
          <div
            style={{
              position: "relative",
              padding: "4rem 2rem 3.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#c4897a",
                textTransform: "uppercase",
                marginBottom: "0.8rem",
              }}
            >
              Track Record
            </p>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "0.08em",
              }}
            >
              事例紹介
            </h1>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.04em",
              }}
            >
              これまでご支援してきたさまざまな事例の一部をご紹介いたします。
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div
          style={{
            background: "#f7f7f7",
            padding: "0.75rem 2rem",
            fontSize: "0.78rem",
            color: "#888",
            letterSpacing: "0.03em",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <a href="/" style={{ color: "#c4897a" }}>
            ホーム
          </a>
          {" › 事例紹介"}
        </div>

        {/* INTRO */}
        <div
          style={{
            padding: "3.5rem 2rem 0",
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontWeight: 800,
              color: "#1a1a2e",
              letterSpacing: "0.04em",
              lineHeight: 1.5,
            }}
          >
            ONESのご支援実績
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#c4897a",
              margin: "1rem auto",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "0.88rem",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            美容・フィットネス・ホスピタリティ・介護など、幅広い業種の
            <br />
            サービス事業者様のマニュアル制作・組織設計をサポートしてきました。
          </p>
          <span
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontSize: "0.78rem",
              color: "#888",
              background: "#f7f7f7",
              padding: "0.4rem 1rem",
              borderRadius: "4px",
            }}
          >
            ※秘匿性の観点から詳細情報は一部伏せております。
          </span>
        </div>

        {/* FILTER TABS */}
        <div style={{ padding: "2.5rem 1.5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  style={{
                    padding: "0.6rem 1.5rem",
                    border: `2px solid ${active ? "#1a1a2e" : "#e8e8e8"}`,
                    background: active ? "#1a1a2e" : "#fff",
                    borderRadius: "50px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: active ? "#fff" : "#555",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CASE GRID */}
        <section style={{ padding: "1rem 1.5rem 5rem", maxWidth: "1080px", margin: "0 auto" }}>
          <div
            className="cases-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
          >
            {visible.map((c) => {
              const bs = BADGE_STYLES[c.category];
              return (
                <article
                  key={c.id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={c.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 50%, rgba(26,26,46,0.5) 100%)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.2rem 1.4rem 1.5rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "50px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        marginBottom: "0.75rem",
                        background: bs.bg,
                        color: bs.color,
                        border: `1px solid ${bs.border}`,
                      }}
                    >
                      {c.badge}
                    </span>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#888",
                        letterSpacing: "0.04em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {c.type}
                    </p>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        color: "#1a1a2e",
                        lineHeight: 1.5,
                        letterSpacing: "0.02em",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {c.title}
                    </h3>
                    <div
                      style={{
                        marginTop: "1rem",
                        paddingTop: "0.8rem",
                        borderTop: "1px solid #e8e8e8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{ fontSize: "0.76rem", color: "#888" }}
                      >
                        支援内容：
                        <strong style={{ color: "#c4897a", fontWeight: 700 }}>
                          {c.service}
                        </strong>
                      </span>
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "#1a1a2e",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          style={{
                            width: "12px",
                            height: "12px",
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 2.5,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }}
                        >
                          <polyline points="4,8 12,8" />
                          <polyline points="8,4 12,8 8,12" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#1a1a2e",
            padding: "4rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c4897a",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "0.06em",
              marginBottom: "0.8rem",
              lineHeight: 1.4,
            }}
          >
            まずはお気軽に
            <br />
            ご相談ください
          </h2>
          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2rem",
              letterSpacing: "0.03em",
            }}
          >
            貴社の課題に合わせたご提案をいたします。
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: "#c4897a",
              color: "#fff",
              padding: "1rem 2.8rem",
              fontSize: "0.9rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            無料相談はこちら
          </a>
          <p
            style={{
              marginTop: "1.2rem",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            お問い合わせはLINEでも受け付けております。
          </p>
        </section>
      </main>

      <D1Footer />
      <D1LineFab />
    </>
  );
}
