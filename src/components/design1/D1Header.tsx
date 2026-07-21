"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/data";

const DEFAULT_NAV = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "SERVICE", href: "/service" },
  { label: "CASE", href: "/case" },
];

const DEFAULT_SECTION_NAV = [
  { label: "TOPICS", href: "/#topics" },
  { label: "MAIN SERVICE", href: "/#service" },
  { label: "TRACK RECORD", href: "/#jisseki" },
  { label: "TALENT", href: "/#sub-service" },
  { label: "ABOUT US", href: "/#about" },
];

type NavItem = { label: string; href: string };
type Props = {
  currentPage?: "HOME" | "COMPANY" | "SERVICE" | "CASE";
  contactHref?: string;
  sectionNav?: NavItem[];
  showAiLink?: boolean;
};

export default function D1Header({
  currentPage = "HOME",
  contactHref = "/#contact",
  sectionNav = DEFAULT_SECTION_NAV,
  showAiLink = true,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[1000]"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.08)" }}
    >
      {/* Top nav (68px, translucent white + backdrop blur) */}
      <nav
        className="relative flex items-center justify-between px-5 md:px-12"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          height: "68px",
        }}
      >
        <a href="/" className="flex items-center">
          <Image
            src={IMAGES.logo}
            alt="ONES MANAGEMENT"
            width={180}
            height={54}
            unoptimized
            className="h-[42px] w-auto md:h-[54px]"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center md:flex">
          {DEFAULT_NAV.map((n) => {
            const isCurrent = n.label === currentPage;
            return (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="group relative block transition-colors"
                  style={{
                    padding: "0.5rem 1.1rem",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: isCurrent ? "#c4897a" : "#1d1d1f",
                  }}
                >
                  {n.label}
                  <span
                    className="absolute bottom-0 h-[1.5px] origin-left scale-x-0 transition-transform group-hover:scale-x-100"
                    style={{
                      left: "1rem",
                      right: "1rem",
                      background: "#1a1a2e",
                    }}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={contactHref}
              className="ml-3 inline-flex items-center transition"
              style={{
                background: "#1a1a2e",
                color: "#fff",
                borderRadius: "980px",
                padding: "0.5rem 1.4rem",
                fontSize: "0.76rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c4897a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a2e")}
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-[1.5px] w-[22px] rounded transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
            style={{ background: "#1d1d1f" }}
          />
          <span
            className={`block h-[1.5px] w-[22px] rounded transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
            style={{ background: "#1d1d1f" }}
          />
          <span
            className={`block h-[1.5px] w-[22px] rounded transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
            style={{ background: "#1d1d1f" }}
          />
        </button>
      </nav>

      {/* Section nav (thin dark strip) — page-specific anchors */}
      {sectionNav.length > 0 && (
        <div
          className="hidden md:flex"
          style={{
            background: "rgba(10,15,35,0.76)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            justifyContent: "center",
            gap: "28px",
            padding: "7px 16px",
          }}
        >
          {sectionNav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="whitespace-nowrap uppercase transition-colors hover:text-white"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.50)",
              }}
            >
              {n.label}
            </a>
          ))}
          {showAiLink && (
            <a
              href="/ai-lp"
              className="whitespace-nowrap uppercase transition-colors hover:text-white"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.50)",
              }}
            >
              AI SERVICE
            </a>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <nav
          className="flex flex-col md:hidden"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            padding: "0.5rem 0",
          }}
        >
          {[...DEFAULT_NAV, { label: "CONTACT", href: contactHref }, ...sectionNav, ...(showAiLink ? [{ label: "AI SERVICE", href: "/ai-lp" }] : [])].map(
            (n, i, arr) => (
              <a
                key={`${n.label}-${i}`}
                href={n.href}
                onClick={() => setOpen(false)}
                className="transition"
                style={{
                  padding: "0.9rem 2rem",
                  fontSize: "0.86rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: n.label === currentPage ? "#c4897a" : "#1d1d1f",
                  borderBottom: i === arr.length - 1 ? "none" : "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {n.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
