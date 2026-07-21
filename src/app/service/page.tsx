import D1Header from "@/components/design1/D1Header";
import D1PageHero from "@/components/design1/D1PageHero";
import D1Footer from "@/components/design1/D1Footer";
import D1LineFab from "@/components/design1/D1LineFab";
import Image from "next/image";
import { IMAGES } from "@/lib/data";

const SERVICE_BLOCKS = [
  {
    id: "ex01",
    num: "EX.01",
    title: "戦略立案伴走",
    text:
      "事業の課題整理から優先順位付けまで、短期〜長期を見据えた戦略立案の伴走を行います。\n\n現状分析をもとに実行可能なロードマップを共同で策定し、PDCAサイクルを回しながら継続的な成長をサポートします。経営者・店長の右腕として、現場に寄り添った支援を提供します。",
    img: "https://ones-mg.com/service-ex01.jpg",
    alt: true, // gray background
    flip: false,
  },
  {
    id: "ex02",
    num: "EX.02",
    title: "マニュアル制作",
    text:
      "マニュアルは持続可能な経営に向けて、これまでのノウハウを言語化・構造化し、複数スタッフで業務を標準化するために制作します。\n\n０から制作することも、既存物をアップデートすることも可能です。（制作範囲はご相談ください）\n\n接客マニュアル、店舗オペレーションマニュアル、採用・研修マニュアルなど幅広く対応いたします。",
    img: "https://ones-mg.com/service-ex02.jpg",
    alt: false, // white background
    flip: true, // image on left
  },
  {
    id: "ex03",
    num: "EX.03",
    title: "オーダーメイドツール制作",
    text:
      "店舗スタッフが、事務作業ではなく接客に集中し、戦略的に店舗運営を継続するための土台として、業務効率化やデータ分析のためのツールをオーダーメイドで制作いたします。",
    img: "https://ones-mg.com/service-ex03.jpg",
    alt: true,
    flip: false,
  },
];

const TOOL_FEATURES = [
  {
    num: "#01",
    title: "カスタマイズ可能なデータ集計・可視化",
    img: "https://ones-mg.com/tool-01.jpg",
    badge: "自由に\nカスタマイズ",
    list: [
      "既定システムでは把握が難しいような細かい数字も可視化が可能",
      "スプレッドシートやExcelを活用したシンプルで誰でも使いやすい設計",
    ],
  },
  {
    num: "#02",
    title: "店舗独自のKPIの進捗管理機能",
    img: "https://ones-mg.com/tool-02.jpg",
    badge: "独自目標\nに対応",
    list: [
      "店舗ごとの経営目標に応じたKPI管理がデイリー単位で確認可能",
      "達成率や進捗状況をリアルタイムで可視化",
    ],
  },
  {
    num: "#03",
    title: "在庫/売上管理機能など事務作業効率化",
    img: "https://ones-mg.com/tool-03.jpg",
    badge: "事務作業\nを自動化",
    list: [
      "売上データと連携した管理表を作成し商品ごとの売上・在庫状況を一目で確認可能",
      "無駄な在庫を減らし販売戦略の最適化を実現",
    ],
  },
];

const SECTION_NAV = [
  { label: "MAIN SERVICE", href: "#service-intro" },
  { label: "戦略立案", href: "#ex01" },
  { label: "マニュアル", href: "#ex02" },
  { label: "ツール制作", href: "#ex03" },
];

export default function ServicePage() {
  return (
    <>
      <style>{`
        html, body { background: #fff !important; color: #1d1d1f; }
        .service-list-check li::before { content: "✓"; position: absolute; left: 0; color: #c4897a; font-size: 0.7rem; }
        .service-list-check li { padding-left: 1.2em; position: relative; margin-bottom: 0.3rem; }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .service-grid .service-img { order: -1 !important; }
        }
      `}</style>

      <D1Header
        currentPage="SERVICE"
        contactHref="/#contact"
        sectionNav={SECTION_NAV}
        showAiLink={false}
      />

      <main>
        <D1PageHero
          label="店舗経営・運営サポート"
          en="SERVICE"
          ja="サービス紹介"
          tag="事業の課題整理から戦略立案まで、現場に寄り添った支援を提供します。"
          bgImage="https://ones-mg.com/service-hero.jpg"
        />

        {/* INTRO */}
        <section
          id="service-intro"
          style={{ textAlign: "center", padding: "5rem 2rem 3rem" }}
        >
          <p
            style={{
              fontSize: "0.66rem",
              letterSpacing: "0.42em",
              color: "#86868b",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            MAIN SERVICE
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            店舗経営/運営サポート
          </h2>
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "#c4897a",
              margin: "0.75rem auto 2.5rem",
            }}
          />
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: 1.9,
            }}
          >
            接客に集中できる環境をつくるために。
            <br />
            バックオフィスの効率化から戦略立案まで、サービス業のパフォーマンス向上を支援いたします。
          </p>
        </section>

        {/* SERVICE BLOCKS */}
        {SERVICE_BLOCKS.map((b) => (
          <section
            key={b.id}
            id={b.id}
            style={{
              background: b.alt ? "#f5f5f7" : "#fff",
              padding: "7rem 2rem",
              borderBottom: b.alt ? "1px solid rgba(0,0,0,0.06)" : "none",
            }}
          >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <div
                style={{
                  fontSize: "0.64rem",
                  fontWeight: 600,
                  letterSpacing: "0.34em",
                  color: "#c4897a",
                  marginBottom: "0.6rem",
                }}
              >
                {b.num}
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.25rem, 2.8vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#1d1d1f",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  letterSpacing: "0.01em",
                }}
              >
                {b.title}
              </h2>
              <div
                className="service-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "5rem",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#6e6e73",
                    lineHeight: 2.05,
                    whiteSpace: "pre-line",
                    order: b.flip ? 2 : 1,
                  }}
                >
                  {b.text}
                </p>
                <div
                  className="service-img"
                  style={{
                    overflow: "hidden",
                    borderRadius: "18px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                    order: b.flip ? 1 : 2,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.img}
                    alt={b.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.96) saturate(0.82)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* TOOL DETAIL */}
        <section id="ex03-detail" style={{ padding: "5rem 2rem", background: "#fff" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.42em",
                color: "#86868b",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
                textAlign: "center",
              }}
            >
              TOOL DETAIL
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#1d1d1f",
                textAlign: "center",
                letterSpacing: "0.02em",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              オーダーメイドツール
            </h2>
            <div
              style={{
                width: "24px",
                height: "1px",
                background: "#c4897a",
                margin: "0.75rem auto 4rem",
              }}
            />
            <p
              style={{
                textAlign: "center",
                maxWidth: "680px",
                margin: "0 auto 3rem",
                fontSize: "0.9rem",
                color: "#666",
                lineHeight: 1.9,
              }}
            >
              現在ご利用されている予約システムなどとは別に、店舗独自の集計や分析ができるツールを制作します。
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.4rem",
                marginTop: "2.5rem",
              }}
            >
              {TOOL_FEATURES.map((f) => (
                <div
                  key={f.num}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "18px",
                    padding: "2rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  <div
                    style={{
                      margin: "-2rem -2rem 1.5rem",
                      overflow: "hidden",
                      borderRadius: "18px 18px 0 0",
                      position: "relative",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.img}
                      alt={f.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        display: "block",
                        filter: "brightness(0.96) saturate(0.82)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        width: "76px",
                        height: "76px",
                        borderRadius: "50%",
                        background: "#1a1a2e",
                        color: "#fff",
                        fontSize: "0.66rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        lineHeight: 1.2,
                        whiteSpace: "pre-line",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.60rem",
                      color: "#c4897a",
                      fontWeight: 600,
                      letterSpacing: "0.24em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {f.num}
                  </p>
                  <h3
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {f.title}
                  </h3>
                  <ul
                    className="service-list-check"
                    style={{
                      listStyle: "none",
                      fontSize: "0.78rem",
                      color: "#6e6e73",
                      lineHeight: 1.9,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {f.list.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          style={{
            background: "#1a1a2e",
            padding: "9rem 2rem",
            textAlign: "center",
          }}
        >
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
                href="/#contact"
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
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </section>
      </main>

      <D1Footer />
      <D1LineFab />
    </>
  );
}
