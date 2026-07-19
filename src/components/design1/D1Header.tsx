"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/data";

const NAV = [
  { label: "会社紹介", href: "#about" },
  { label: "サービス", href: "#service" },
  { label: "AI", href: "/ai" },
  { label: "実績", href: "#track" },
  { label: "お知らせ", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function D1Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-20 md:px-8">
        <a href="/design1" className="flex items-center gap-2">
          <Image
            src={IMAGES.logo}
            alt="ONES MANAGEMENT"
            width={140}
            height={44}
            unoptimized
            className="h-8 w-auto md:h-10"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[12px] tracking-[0.14em] text-neutral-700 transition hover:text-neutral-950"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute block h-[1.5px] w-6 bg-neutral-900 transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-6 bg-neutral-900 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-6 bg-neutral-900 transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block text-[14px] tracking-[0.14em] text-neutral-800"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
