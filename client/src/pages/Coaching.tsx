/*
 * RUSTWOOD HUB — Coaching & Teaching Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Pillar: MIND
 */

import { useEffect } from "react";
import RustwoodNav from "@/components/RustwoodNav";
import RustwoodFooter from "@/components/RustwoodFooter";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/coaching-hero-4WrPCi5nLXaLSLRfCBhLzg.webp";

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

export default function Coaching() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>
      <RustwoodNav />

      <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-20 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_URL})`, opacity: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-[#080b12]/60" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold"
            style={{ color: "#d4a843", border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.07)" }}>
            🎓 &nbsp; Mind — Domain VI
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(212,168,67,0.2)" }}>
            Coaching<br />&amp; Teaching
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Physical · Performance · AI · Personal Development
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>The Domain</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Teaching That Builds Capacity</h2>
            <GoldDivider />
          </div>
          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            <p>Teaching is one of the deepest threads running through Aaron Ellis's life and work. Across martial arts, physical conditioning, vocal development, AI systems, mindset, and personal growth, he has consistently been drawn to helping people improve through practical guidance and lived experience.</p>
            <p>Aaron's coaching style is shaped by decades of real-world work. He does not teach from theory alone. He teaches from repetition, experimentation, observation, and the understanding that every person develops differently. <span style={{ color: "#f0ead8", fontWeight: 600 }}>Some people need structure. Some need encouragement. Some need a clearer system. Good coaching recognises the difference.</span></p>
            <p>His teaching approach is calm, direct, human, and adaptive. He values clarity over noise and progress over perfection.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Rustwood Teaching Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>From Confusion to Competence</h2>
            <GoldDivider />
            <blockquote className="mt-8 text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}>
              "Real teaching does not only pass on information. It builds capacity."
            </blockquote>
          </div>
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🔨", label: "Capability grows through guided practice" },
              { icon: "🛡️", label: "Confidence grows through experience" },
              { icon: "💡", label: "Clarity reduces overwhelm" },
              { icon: "📈", label: "Progress is built step by step" },
              { icon: "🤝", label: "The best coaching respects the individual" },
              { icon: "🎯", label: "Confusion → Competence → Confidence" },
            ].map((item, i) => (
              <div key={i} className="fade-up flex items-start gap-3 p-4" style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.1)", transitionDelay: `${i * 60}ms` }}>
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Coaching Areas</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Four Domains of Coaching</h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "⚔️", title: "Physical Coaching", items: ["Martial arts and self-defence", "Strength and conditioning", "Kettlebell training", "Calisthenics and body control", "Movement and breath awareness"] },
              { icon: "🎤", title: "Performance Coaching", items: ["Vocal confidence", "Stage presence", "Microphone technique", "Performance mindset"] },
              { icon: "🤖", title: "AI & Skills Coaching", items: ["Prompt engineering guidance", "AI workflow thinking", "Creative process support", "Practical tool use"] },
              { icon: "🌱", title: "Personal Development", items: ["Confidence building", "Discipline and self-command", "Calm under pressure", "Structured growth support"] },
            ].map((col, i) => (
              <div key={i} className="fade-up p-6" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 80}ms` }}>
                <div className="text-2xl mb-3">{col.icon}</div>
                <h3 className="text-sm font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: "#d4a843", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                      <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="fade-up mt-8 p-6" style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.12)" }}>
            <h3 className="text-sm font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#4fc3f7" }}>Delivery</h3>
            <div className="flex flex-wrap gap-3">
              {["In Person", "Online", "Direct Enquiry", "Customised Support"].map((d) => (
                <span key={d} className="px-3 py-1 text-xs font-semibold" style={{ color: "#8a9ab5", border: "1px solid rgba(79,195,247,0.2)" }}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center fade-up" style={{ background: "#0a0e18", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>Contact</p>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>Coaching · Mentoring · Training</h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm" style={{ color: "#8a9ab5" }}>For coaching, mentoring, or training enquiries across any domain.</p>
          <a href="mailto:completestrength@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{ color: "#080b12", background: "#d4a843" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#d4a843"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d4a843"; (e.currentTarget as HTMLAnchorElement).style.color = "#080b12"; }}>
            ✉ &nbsp; completestrength@gmail.com
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
