import D1Header from "@/components/design1/D1Header";
import D1PageHero from "@/components/design1/D1PageHero";
import D1Footer from "@/components/design1/D1Footer";
import D1LineFab from "@/components/design1/D1LineFab";
import D1SectionHead from "@/components/design1/D1SectionHead";
import Image from "next/image";
import { IMAGES } from "@/lib/data";

const MISSION_POINTS = [
  {
    img: "https://ones-mg.com/mission-point1.jpg",
    text:
      "店舗管理業務の効率化、ルール・ライフライン構築による、サービス業のパフォーマンス最大化。",
  },
  {
    img: "https://ones-mg.com/mission-point2.jpg",
    text:
      "現場ファーストの社内制度構築による、人材定着など安定した経営基盤の構築。",
  },
  {
    img: "https://ones-mg.com/mission-point3.jpg",
    text: "多種多様なサービス事業者様へ、地域を超えたグローバル展開を目指す。",
  },
];

const PROFILE = [
  { th: "商号", td: "株式会社ONES", sub: "ONES Inc." },
  { th: "本店", td: "静岡県藤枝市藤岡1-14-7", sub: "※活動拠点：東京都江東区" },
  { th: "創業", td: "2023年12月19日" },
  { th: "資本金", td: "1,000,000円" },
  {
    th: "主な事業内容",
    td:
      "店舗型サービス業の経営／運営支援事業\n新規事業／開業支援事業\n経営チーム参画型パートナーサービス\n健康関連アイテム販売代理店事業\nサウンドディレクション事業（スポーツイベント）",
  },
  { th: "取引銀行", td: "三菱UFJ銀行　静岡銀行" },
];

const SECTION_NAV = [
  { label: "MISSION", href: "#mission" },
  { label: "会社情報", href: "#profile" },
];

export default function CompanyPage() {
  return (
    <>
      <style>{`
        html, body { background: #fff !important; color: #1d1d1f; }
      `}</style>

      <D1Header
        currentPage="COMPANY"
        contactHref="/#contact"
        sectionNav={SECTION_NAV}
        showAiLink={false}
      />

      <main>
        <D1PageHero
          label="株式会社ONES"
          en="COMPANY"
          ja="会社紹介"
          tag="サービス業の未来を創る。人が生み出す価値の最大化。"
          bgImage="https://ones-mg.com/company-hero.jpg"
        />

        {/* MISSION */}
        <section id="mission" style={{ background: "#1a1a2e", padding: "9rem 2rem" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <D1SectionHead label="OUR VISION" title="MISSION" />

            <p
              style={{
                fontSize: "clamp(1.05rem, 2.6vw, 1.55rem)",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                lineHeight: 1.7,
                marginBottom: "4rem",
                letterSpacing: "0.02em",
              }}
            >
              サービス業の未来を創る。
              <br />
              人が生み出す価値の最大化。
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.2rem",
                maxWidth: "860px",
                margin: "0 auto",
              }}
            >
              {MISSION_POINTS.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    borderRadius: "18px",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: "brightness(0.88) saturate(0.78)",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255,255,255,0.68)",
                      lineHeight: 2,
                      padding: "1.6rem",
                      textAlign: "center",
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILE */}
        <section
          id="profile"
          style={{ background: "#fff", padding: "8rem 2rem", textAlign: "center" }}
        >
          <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.42em",
                color: "#86868b",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              CORPORATE DATA
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
              会社情報
            </h2>
            <div
              style={{
                width: "24px",
                height: "1px",
                background: "#c4897a",
                margin: "0.75rem auto 4rem",
              }}
            />

            <table
              style={{
                maxWidth: "520px",
                margin: "0 auto",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <tbody>
                {PROFILE.map((row, i) => (
                  <tr
                    key={row.th}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "2.4rem 0",
                      borderBottom:
                        i === PROFILE.length - 1
                          ? "none"
                          : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <th
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "0 0 0.55rem 0",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        color: "#c4897a",
                        letterSpacing: "0.18em",
                        textAlign: "center",
                      }}
                    >
                      {row.th}
                    </th>
                    <td
                      style={{
                        display: "block",
                        width: "100%",
                        padding: 0,
                        fontSize: "0.88rem",
                        color: "#1d1d1f",
                        lineHeight: 2,
                        textAlign: "center",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {row.td}
                      {row.sub && (
                        <>
                          <br />
                          <span style={{ fontSize: "0.82rem", color: "#aaa" }}>
                            {row.sub}
                          </span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              業種・規模を問わず、サービス事業者様の現場に寄り添い、
              <br />
              持続可能な成長をともに実現します。
              <br />
              ご不明な点やご相談はお気軽にお問い合わせください。
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.9rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "お問い合わせ", href: "/#contact" },
                { label: "サービスを見る", href: "/service" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
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
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <D1Footer />
      <D1LineFab />
    </>
  );
}
