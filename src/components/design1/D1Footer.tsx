"use client";

const LINKS = [
  { label: "TOP", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "SERVICE", href: "/service" },
  { label: "CASE", href: "/case" },
  { label: "CONTACT", href: "/#contact" },
];

export default function D1Footer() {
  return (
    <footer
      className="relative z-[2] text-center"
      style={{
        background: "#1d1d1f",
        color: "rgba(255,255,255,0.42)",
        padding: "2.5rem 2rem",
        fontSize: "0.7rem",
        letterSpacing: "0.06em",
      }}
    >
      <ul
        className="flex flex-wrap justify-center"
        style={{
          gap: "2.2rem",
          marginBottom: "1.2rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="transition-colors"
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c4897a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.42)")
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p>Copyright © ONES Inc. All rights reserved.</p>
    </footer>
  );
}
