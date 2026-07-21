import D1Header from "@/components/design1/D1Header";
import D1Hero from "@/components/design1/D1Hero";
import D1News from "@/components/design1/D1News";
import D1Service from "@/components/design1/D1Service";
import D1TrackRecord from "@/components/design1/D1TrackRecord";
import D1Talent from "@/components/design1/D1Talent";
import D1Contact from "@/components/design1/D1Contact";
import D1About from "@/components/design1/D1About";
import D1Footer from "@/components/design1/D1Footer";
import D1LineFab from "@/components/design1/D1LineFab";
import D1BgScroll from "@/components/design1/D1BgScroll";
import { IMAGES } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="d1-home">
      <style>{`
        /* CSS variables driven by D1BgScroll (mirrors 本家 :root vars) */
        :root {
          --bg-gray: 0;      /* 0 (color) → 1 (grayscale) on scroll */
          --bg-bright: 0.88; /* 0.88 (bright) → 0.32 (dim) on scroll */
        }
        /* Make html/body transparent so the fixed hero bg is visible (本家 body.home) */
        html, body { background: transparent !important; }

        .d1-home { cursor: auto; background: transparent; }
        .d1-home a, .d1-home button { cursor: pointer; }

        /* Fixed hero image background — 本家 body.home::before exact reproduction */
        .d1-home::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: -1;
          background-image: url(${IMAGES.hero});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          filter: grayscale(var(--bg-gray)) brightness(var(--bg-bright)) contrast(1.03);
          transition: filter 0.18s linear;
          pointer-events: none;
        }

        /* Floating dark glass panel — applied to every non-hero section */
        .d1-home main > section:not(#home) {
          position: relative;
          z-index: 2;
          width: calc(100% - 3rem);
          max-width: 1180px;
          margin: clamp(3rem, 8vh, 7rem) auto;
          padding: clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem);
          border-radius: 28px;
          background: rgba(13, 16, 26, 0.55);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
          backdrop-filter: blur(18px) saturate(125%);
          border: 1px solid rgba(255, 255, 255, 0.10);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.50),
                      inset 0 1px 0 rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .d1-home main > section:not(#home) {
            width: calc(100% - 1.5rem);
            margin: clamp(1.6rem, 4vh, 3rem) auto;
            border-radius: 20px;
            padding: 3.2rem 1.4rem;
          }
        }

        /* Home footer floats too */
        .d1-home footer {
          position: relative;
          z-index: 2;
          background: rgba(7, 9, 15, 0.55);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
        }
      `}</style>

      <D1BgScroll />
      <D1Header />

      <main>
        <D1Hero />
        <D1News />
        <D1Service />
        <D1TrackRecord />
        <D1Talent />
        <D1Contact />
        <D1About />
      </main>

      <D1Footer />
      <D1LineFab />
    </div>
  );
}
