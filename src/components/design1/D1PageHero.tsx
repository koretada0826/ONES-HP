"use client";

type Props = {
  label: string;
  en: string;
  ja: string;
  tag?: string;
  bgImage: string;
};

export default function D1PageHero({ label, en, ja, tag, bgImage }: Props) {
  return (
    <section
      style={{
        minHeight: "58vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(8,12,28,0.86) 0%, rgba(12,20,50,0.62) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5rem 2rem",
          textAlign: "center",
          maxWidth: "660px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "0.66rem",
            letterSpacing: "0.34em",
            color: "rgba(255,255,255,0.50)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {label}
        </p>
        <div
          className="font-display"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: "0.7rem",
          }}
        >
          {en}
        </div>
        <div
          style={{
            fontSize: "0.86rem",
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.24em",
            marginBottom: "1.8rem",
          }}
        >
          {ja}
        </div>
        {tag && (
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.95,
              maxWidth: "100%",
            }}
          >
            {tag}
          </p>
        )}
      </div>
    </section>
  );
}
