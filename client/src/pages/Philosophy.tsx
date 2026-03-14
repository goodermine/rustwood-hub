/*
 * RUSTWOOD HUB — Philosophy & Consciousness Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Pillar: INTELLIGENCE
 */

import { useEffect } from "react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/philosophy-hero-SaZnLr7Uem5UiqECZqycfU.png";

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

export default function Philosophy() {
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
            🌌 &nbsp; Intelligence — Domain X
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(212,168,67,0.2)" }}>
            Philosophy<br />&amp; Consciousness
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Awareness · Meaning · The Examined Life
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>The Domain</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>The Deepest Current</h2>
            <GoldDivider />
          </div>
          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            <p>Beneath all of Aaron Ellis's domains — the martial arts, the music, the technology, the coaching, the creativity — runs a deeper current. A long-standing interest in the nature of awareness, meaning, identity, and what it means to live a life with intention and depth.</p>
            <p>Philosophy and consciousness are not separate from Aaron's practical work. They are the foundation of it. His training in Systema introduced him to the relationship between breath, awareness, and presence. His hypnotherapy work deepened his understanding of the mind's structure. His coaching revealed how belief shapes behaviour. His creativity raised questions about expression, identity, and truth.</p>
            <p><span style={{ color: "#f0ead8", fontWeight: 600 }}>This domain is where all of that thinking lives — the questions that do not have easy answers, but are worth asking anyway.</span></p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Rustwood Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>The Examined Life</h2>
            <GoldDivider />
            <blockquote className="mt-8 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}>
              "The unexamined life is not worth living — but the over-examined life can also become its own trap. The aim is to think clearly, act deliberately, and remain open."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Areas of Exploration</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Questions Worth Asking</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👁️", title: "Consciousness & Awareness", desc: "The nature of perception, presence, and what it means to be fully awake in one's own life." },
              { icon: "🧭", title: "Identity & Meaning", desc: "Who we are beneath our roles, habits, and stories. What gives a life weight and direction." },
              { icon: "🌊", title: "Breath, Body & Mind", desc: "The relationship between physical awareness and mental clarity. Systema's influence on understanding the self." },
              { icon: "⚖️", title: "Ethics & Integrity", desc: "How to act with honesty and consistency. The relationship between values and behaviour." },
              { icon: "🔮", title: "Belief & Reality", desc: "How belief shapes experience. The intersection of psychology, philosophy, and lived reality." },
              { icon: "🌌", title: "The Nature of Change", desc: "Why change is difficult, how it happens, and what it means to grow deliberately." },
            ].map((item, i) => (
              <div key={i} className="fade-up p-6" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 70}ms` }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Influences</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Threads That Shaped the Thinking</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⚔️", label: "Systema & Martial Arts" },
              { icon: "🧠", label: "Hypnotherapy & Mind Work" },
              { icon: "📚", label: "Stoic Philosophy" },
              { icon: "🌿", label: "Eastern Traditions" },
              { icon: "🔬", label: "Modern Psychology" },
              { icon: "🤖", label: "AI & Consciousness" },
              { icon: "🎵", label: "Music & Creativity" },
              { icon: "💪", label: "Physical Discipline" },
            ].map((item, i) => (
              <div key={i} className="fade-up flex flex-col items-center gap-2 p-4 text-center" style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.1)", transitionDelay: `${i * 50}ms` }}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-semibold" style={{ color: "#8a9ab5" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center fade-up" style={{ background: "#080b12", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Contact</p>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Conversations Welcome</h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm" style={{ color: "#8a9ab5" }}>For philosophical conversations, collaborations, or enquiries about consciousness and personal development work.</p>
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
