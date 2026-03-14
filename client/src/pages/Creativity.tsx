/*
 * RUSTWOOD HUB — Creativity & Storytelling Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Pillar: VOICE
 */

import { useEffect } from "react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/creativity-hero-2ELSzf3mu8bQy9rTXqRSGJ.webp";

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

export default function Creativity() {
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
            style={{ color: "#4fc3f7", border: "1px solid rgba(79,195,247,0.4)", background: "rgba(79,195,247,0.07)" }}>
            ✍️ &nbsp; Voice — Domain IX
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(79,195,247,0.2)" }}>
            Creativity<br />&amp; Storytelling
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4fc3f7]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Songwriting · Lyrics · Brand Voice · Storytelling
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4fc3f7]" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>The Domain</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>The Forge of Ideas, Story &amp; Identity</h2>
            <GoldDivider />
          </div>
          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            <p>Creativity is one of the central forces behind the Rustwood identity. Whether through songwriting, rap lyrics, concept building, website copy, visual ideas, social posts, or AI-assisted creation, Aaron Ellis is driven by the desire to make things that carry energy, meaning, and voice.</p>
            <p>Storytelling matters because people do not connect to information alone. They connect to feeling, image, memory, and truth. Aaron's creative work is shaped by that understanding — content that resonates, branding that feels alive, and words that actually say something.</p>
            <p>This domain also reflects Aaron's interest in using modern tools to enhance creativity without replacing the human core of the work. <span style={{ color: "#f0ead8", fontWeight: 600 }}>Technology may support the process, but the spark still comes from emotion, perception, rhythm, and imagination.</span></p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Rustwood Creative Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Creativity Is Revelation</h2>
            <GoldDivider />
            <blockquote className="mt-8 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}>
              "Creativity is not decoration. It is revelation."
            </blockquote>
          </div>
          <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "💎", label: "Honest" },
              { icon: "🔥", label: "Expressive" },
              { icon: "🧠", label: "Memorable" },
              { icon: "❤️", label: "Human" },
              { icon: "⚡", label: "Alive with Identity" },
              { icon: "🎯", label: "Create with Presence" },
            ].map((item, i) => (
              <div key={i} className="fade-up flex items-center gap-3 p-4" style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.1)", transitionDelay: `${i * 60}ms` }}>
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs font-bold" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Creative Areas</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>What Lives Here</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🎵", title: "Songwriting", desc: "Original songs, concept tracks, and musical ideas with emotional depth." },
              { icon: "🎤", title: "Rap Lyrics", desc: "Story-driven rap and concept tracks with rhythm, identity, and message." },
              { icon: "📝", title: "Brand Voice", desc: "Copy, messaging, and content that feels alive and carries real personality." },
              { icon: "🤖", title: "AI-Assisted Creation", desc: "Modern tools used to enhance and accelerate creative work without replacing the human spark." },
              { icon: "📱", title: "Social Content", desc: "Story-first social posts and content designed to connect rather than just inform." },
              { icon: "🎭", title: "Identity Design", desc: "Concept building and brand identity work that captures who you really are." },
              { icon: "✍️", title: "Creative Copywriting", desc: "Words that do more than inform — they move, persuade, and resonate." },
              { icon: "📖", title: "Storytelling Projects", desc: "Emotional narratives and story-driven projects across any medium." },
            ].map((item, i) => (
              <div key={i} className="fade-up p-5" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 50}ms` }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-xs font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center fade-up" style={{ background: "#0a0e18", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Contact</p>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Collaborate · Create · Connect</h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm" style={{ color: "#8a9ab5" }}>For creative collaborations, lyric work, storytelling, or brand voice enquiries.</p>
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
