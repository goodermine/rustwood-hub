/*
 * RUSTWOOD HUB — Entrepreneurship Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Pillar: INTELLIGENCE
 */

import { useEffect } from "react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/entrepreneur-hero-S8GqbKSqFB7GGLjdgnLap8.webp";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function GoldDivider() {
  return (<div className="gold-divider my-2"><div className="gold-divider-diamond" /></div>);
}

export default function Entrepreneurship() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(8,11,18,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(79,195,247,0.12)" }}>
        <Link href="/"><div className="flex items-center gap-3 cursor-pointer">
          <img src={LOGO_URL} alt="Rustwood" className="w-9 h-9 object-contain" style={{ filter: "drop-shadow(0 0 6px rgba(79,195,247,0.3))" }} />
          <div>
            <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>Rustwood</div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: "#8a9ab5" }}>Aaron Ellis</div>
          </div>
        </div></Link>
        <Link href="/"><div className="flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer"
          style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8a9ab5")}>
          <span style={{ fontSize: "16px" }}>←</span> All Domains
        </div></Link>
      </nav>

      <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-20 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_URL})`, opacity: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-[#080b12]/60" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold"
            style={{ color: "#d4a843", border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.07)" }}>
            🏗️ &nbsp; Intelligence — Domain VIII
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(212,168,67,0.2)" }}>
            Entrepreneurship
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Vision · Ventures · Grit &amp; Groove Karaoke
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>The Domain</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Where Vision Becomes Structure</h2>
            <GoldDivider />
          </div>
          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            <p>Aaron Ellis is not only a coach, performer, and technologist — he is also a builder of ventures. Entrepreneurship for him is about creating systems, experiences, and offers that bring real value into the world while allowing creativity and independence to grow.</p>
            <p>His projects often sit at the meeting point of passion and practicality. Music becomes an event business. Prompt engineering becomes a product. Performance becomes a community experience. Technology becomes a tool for service and creation.</p>
            <p><span style={{ color: "#f0ead8", fontWeight: 600 }}>Rather than separating these paths, Aaron looks for ways to organise them into ventures that are meaningful, sustainable, and scalable.</span></p>
          </div>
        </div>
      </section>

      {/* GRIT & GROOVE SPOTLIGHT */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Flagship Venture</p>
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>Grit &amp; Groove Karaoke</h2>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8a9ab5" }}>Where the Mic Tells the Story</p>
            <GoldDivider />
          </div>
          <div className="fade-up p-8 mb-8" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.25)" }}>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#8a9ab5" }}>
              Grit &amp; Groove Karaoke is Aaron's entertainment and community brand built around music, performance, and unforgettable shared moments. It is more than karaoke hosting — it is atmosphere, personality, entertainment, and community.
            </p>
            <p className="text-sm italic mb-6" style={{ color: "#d4a843", fontFamily: "'Cinzel', serif" }}>
              "It is designed to make ordinary nights feel memorable and to create a space where people can sing, laugh, connect, and enjoy the moment."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Karaoke Hosting", "Community Events", "Private Entertainment", "Live Atmosphere"].map((item) => (
                <div key={item} className="text-center p-3" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                  <span className="text-xs font-bold" style={{ color: "#f0ead8", fontFamily: "'Cinzel', serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Rustwood Venture Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Built on Value, Not Hype</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "💪", label: "Build around real strengths" },
              { icon: "🎯", label: "Create offers that genuinely help people" },
              { icon: "🎭", label: "Let personality become part of the brand" },
              { icon: "⚙️", label: "Combine creativity with practical systems" },
              { icon: "🌱", label: "Think long term" },
              { icon: "🏆", label: "Forge ventures with identity and room to grow" },
            ].map((item, i) => (
              <div key={i} className="fade-up flex items-start gap-3 p-4" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 60}ms` }}>
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER VENTURES */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Other Ventures &amp; Projects</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>The Expanding Ecosystem</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🤖", label: "AI Consulting & Prompt Engineering" },
              { icon: "📦", label: "Digital Prompt Products" },
              { icon: "🎨", label: "Creative Services" },
              { icon: "🎤", label: "Vocal & Performance Offers" },
              { icon: "🎭", label: "Future Entertainment Concepts" },
              { icon: "🏗️", label: "Brand & System Development" },
            ].map((item, i) => (
              <div key={i} className="fade-up flex flex-col items-center gap-3 p-5 text-center" style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.1)", transitionDelay: `${i * 60}ms` }}>
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-bold" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE VISION */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-3xl mx-auto fade-up text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>The Vision</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Creating Places People Remember</h2>
          <GoldDivider />
          <p className="mt-8 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            Aaron's long-term vision includes building larger experiences and platforms that bring together music, identity, atmosphere, and community — including the possibility of a future karaoke bar or venue shaped by the Rustwood spirit. This is not just about business growth. It is about creating places, systems, and experiences that people remember.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 text-center fade-up" style={{ background: "#0a0e18", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Contact</p>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Business · Collaboration · Bookings</h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm" style={{ color: "#8a9ab5" }}>For business, collaboration, bookings, or venture enquiries.</p>
          <a href="mailto:aiwizard@aaronellis.au"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{ color: "#080b12", background: "#d4a843" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#d4a843"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4a843"; (e.currentTarget as HTMLAnchorElement).style.color = "#080b12"; }}>
            ✉ &nbsp; aiwizard@aaronellis.au
          </a>
        </div>
      </section>

      <footer className="py-10 px-4 text-center" style={{ background: "#080b12", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <Link href="/"><div className="inline-flex flex-col items-center gap-2 cursor-pointer group">
          <img src={LOGO_URL} alt="Rustwood" className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#8a9ab5" }}>← Back to Rustwood Hub</span>
        </div></Link>
        <p className="mt-6 text-xs" style={{ color: "#8a9ab5" }}>© {new Date().getFullYear()} Aaron Ellis · Rustwood</p>
      </footer>
    </div>
  );
}
