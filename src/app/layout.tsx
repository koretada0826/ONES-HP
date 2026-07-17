import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONE'S M.G — BREAK THE STANDARD.",
  description:
    "ONE'S M.Gは、Web制作・マーケティング・ブランディングを軸に、成果につながるデジタル体験をデザインするプロフェッショナル集団です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${display.variable} ${jp.variable}`}>
      <body>
        {children}
        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />
      </body>
    </html>
  );
}
