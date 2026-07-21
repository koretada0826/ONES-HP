"use client";

export default function D1Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Hero has NO own image — shows the fixed body bg (色 → grayscale) through */}
      {/* 本家 overlay: 135° diagonal, rgba(6,9,20, 0.62→0.18) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,9,20,0.62) 0%, rgba(6,9,20,0.34) 55%, rgba(6,9,20,0.18) 100%)",
        }}
      />

      {/* Container — 本家: max-width: 720px, absolute-centered */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-[88%] max-w-[720px] flex-col items-center justify-center pt-24 pb-16 text-center md:pt-28">
        {/* tag: font-size 0.62rem, letter-spacing 0.4em, color rgba(255,255,255,0.55), margin-bottom 1.2rem */}
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
          }}
        >
          多種多様なサービス事業者様へ
        </p>

        {/* headline: clamp(2.4rem, 6vw, 4.5rem), lh 1.06, ls 0.06em POSITIVE, mb 0.6rem */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.06,
            letterSpacing: "0.06em",
            marginBottom: "0.6rem",
            textTransform: "uppercase",
            textShadow: "0 1px 8px rgba(0,0,0,0.22)",
          }}
        >
          CREATING
          <br />
          THE FUTURE
        </h1>

        {/* sub: 0.66rem, ls 0.28em, color/42, mb 1.8rem */}
        <p
          style={{
            fontSize: "0.66rem",
            color: "rgba(255,255,255,0.42)",
            letterSpacing: "0.28em",
            marginBottom: "1.8rem",
            textTransform: "uppercase",
          }}
        >
          of the SERVICE INDUSTRY
        </p>

        {/* copy: 0.88rem, color/72, lh 1.9 (本家は 2.1 だがユーザー要望で詰め), mb 1.6rem (本家 2.5rem を詰めた) */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.9,
            marginBottom: "1.6rem",
          }}
        >
          サービス業の未来を創る。
          <br />
          人が生み出す価値の最大化。
        </p>

        {/* cta: bg white/10, border white/30, padding 0.9rem 2.4rem, fs 0.76rem, ls 0.14em, rounded 980px */}
        <a
          href="#about"
          className="group inline-flex items-center gap-2 transition"
          style={{
            background: "rgba(255,255,255,0.10)",
            color: "#fff",
            padding: "0.9rem 2.4rem",
            fontSize: "0.76rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            borderRadius: "980px",
            border: "1px solid rgba(255,255,255,0.30)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.20)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
          }}
        >
          会社詳細はこちら
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
