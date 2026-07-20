import D1Header from "@/components/design1/D1Header";
import D1Hero from "@/components/design1/D1Hero";
import D1About from "@/components/design1/D1About";
import D1Service from "@/components/design1/D1Service";
import D1TrackRecord from "@/components/design1/D1TrackRecord";
import D1News from "@/components/design1/D1News";
import D1Contact from "@/components/design1/D1Contact";
import D1Footer from "@/components/design1/D1Footer";

export default function HomePage() {
  return (
    <div className="design1-root bg-white text-ink-950">
      <style>{`
        .design1-root { cursor: auto; }
        .design1-root a, .design1-root button { cursor: pointer; }
      `}</style>
      <D1Header />
      <main>
        <D1Hero />
        <D1About />
        <D1Service />
        <D1TrackRecord />
        <D1News />
        <D1Contact />
      </main>
      <D1Footer />
    </div>
  );
}
