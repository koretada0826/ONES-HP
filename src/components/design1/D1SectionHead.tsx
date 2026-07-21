type Props = {
  label: string;
  title: string;
  ja?: string;
};

export default function SectionHead({ label, title, ja }: Props) {
  return (
    <div className="text-center">
      <p
        style={{
          fontSize: "0.66rem",
          letterSpacing: "0.42em",
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          marginBottom: "0.6rem",
        }}
      >
        {label}
      </p>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "0.02em",
          marginBottom: ja ? "0.4rem" : "0.75rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {ja && (
        <p
          style={{
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.12em",
            marginBottom: "0.6rem",
          }}
        >
          {ja}
        </p>
      )}
      <div
        style={{
          width: "24px",
          height: "1px",
          background: "#c4897a",
          margin: "0.75rem auto 4rem",
        }}
      />
    </div>
  );
}
