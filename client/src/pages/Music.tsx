/*
 * RUSTWOOD HUB — Music & Vocal Performance Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Palette: Abyss black, Ancient gold (#d4a843), Arcane blue (#4fc3f7)
 * Pillar: VOICE
 */

import { useEffect } from "react";
import RustwoodNav from "@/components/RustwoodNav";
import RustwoodFooter from "@/components/RustwoodFooter";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/music-hero-banner-DdHQRxertXkwBnoqDoSX6H.webp";
const KARAOKE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/music-karaoke-7w7KK9VgADajTUd4ktdWTP.webp";
const VOCAL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/music-vocal-FGsPbMP4pmhyvdpoUMtDwY.webp";
const CREATION_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/music-creation-4xDJgZhhiu6wjQjHVSS2uB.webp";

// ─── Scroll Reveal ───────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Gold Divider ─────────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="gold-divider my-2">
      <div className="gold-divider-diamond" />
    </div>
  );
}

// ─── Voice Philosophy Card ───────────────────────────────────────────────────
function VoicePillar({ icon, title, text, delay = 0 }: { icon: string; title: string; text: string; delay?: number }) {
  return (
    <div
      className="fade-up p-6 flex flex-col gap-3"
      style={{
        background: "#141a28",
        border: "1px solid rgba(79,195,247,0.15)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-sm font-bold" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{text}</p>
    </div>
  );
}

// ─── Service Row ─────────────────────────────────────────────────────────────
function ServiceItem({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid rgba(212,168,67,0.08)" }}>
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <span className="text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{text}</span>
    </li>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Music() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>

      {/* ── NAV BAR ──────────────────────────────────────────────────────── */}
      <RustwoodNav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-20 overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_URL})`, opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-[#080b12]/60" />

        <div className="relative z-10 text-center px-4" style={{ animation: "float-up 0.9s ease-out forwards" }}>
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold"
            style={{ color: "#4fc3f7", border: "1px solid rgba(79,195,247,0.4)", background: "rgba(79,195,247,0.07)", fontFamily: "'Raleway', sans-serif" }}
          >
            🎤 &nbsp; Voice — Domain II
          </div>

          <h1
            className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(79,195,247,0.2)" }}
          >
            Music & Vocal<br />Performance
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4fc3f7]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Performance · Voice · Community
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4fc3f7]" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🎤 Singer & Performer",
              "🎉 Karaoke Host — Grit & Groove",
              "🎵 AI-Assisted Music Creation",
              "🎼 Vocal Development Coach",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold tracking-wide"
                style={{
                  color: "#d4a843",
                  border: "1px solid rgba(212,168,67,0.3)",
                  background: "rgba(212,168,67,0.07)",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              The Journey
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Music as Connection
            </h2>
            <GoldDivider />
          </div>

          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
            <p>
              Music has always been one of the most powerful forms of human expression. For Aaron Ellis, singing and performance are not just entertainment — they are ways of connecting people, telling stories, and bringing energy into a room.
            </p>
            <p>
              Aaron performs regularly as both a singer and karaoke host, creating spaces where people can step forward, find their voice, and enjoy the shared experience of music. Whether performing himself or encouraging others to take the stage, his approach focuses on <span style={{ color: "#f0ead8", fontWeight: 600 }}>confidence, authenticity, and connection</span> with the audience.
            </p>
            <p>
              Over the years Aaron has developed a strong appreciation for vocal tone, emotional delivery, and stage presence. He continues to study and refine his own voice while helping others discover theirs. Music is treated not just as performance, but as a craft — something that improves through practice, listening, and the courage to express oneself fully.
            </p>
            <p>
              Alongside live performance, Aaron also explores modern music creation using AI-assisted tools, songwriting, and recording techniques — combining creativity with emerging technology to expand his musical identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── VOICE PHILOSOPHY ─────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Rustwood Voice Philosophy
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              The Voice as an Instrument
            </h2>
            <GoldDivider />
            <blockquote
              className="mt-8 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}
            >
              "A great voice is not just about range or volume. It is about resonance, honesty, and the ability to communicate feeling."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <VoicePillar
              icon="🌬️"
              title="Relaxation & Breath"
              text="The foundation of all great vocal performance. Tension is the enemy of the voice. Breath is the source of power, control, and tone."
              delay={0}
            />
            <VoicePillar
              icon="❤️"
              title="Emotional Authenticity"
              text="Vocal development is not only technical — it is psychological. When someone sings with genuine emotion, the audience feels it."
              delay={80}
            />
            <VoicePillar
              icon="🔥"
              title="Confidence Through Experience"
              text="Confidence is built through repetition and courage. Every time someone steps up to the mic, they grow — regardless of the outcome."
              delay={160}
            />
          </div>
        </div>
      </section>

      {/* ── GRIT & GROOVE ────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                Performance & Community
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
                Grit & Groove
              </h2>
              <h3 className="text-base mb-6" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843", letterSpacing: "0.1em" }}>
                Karaoke Events
              </h3>
              <GoldDivider />
              <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                <p>
                  Aaron hosts and performs at karaoke events through his entertainment brand <span style={{ color: "#f0ead8", fontWeight: 600 }}>Grit & Groove Karaoke</span>. These events are built around the idea that everyone deserves the chance to step up to the microphone and enjoy the moment.
                </p>
                <p>
                  The atmosphere is welcoming, supportive, and focused on fun rather than judgement. Through Grit & Groove events, Aaron helps bring together communities, friends, and performers in a shared experience that celebrates music and personality.
                </p>
                <p>
                  The goal is simple: <span style={{ color: "#f0ead8" }}>create a space where people feel comfortable expressing themselves through music.</span>
                </p>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "100ms" }}>
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(79,195,247,0.2)" }}>
                <img src={KARAOKE_URL} alt="Grit & Groove Karaoke" className="w-full h-72 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/60 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 right-4 text-center py-2"
                  style={{ background: "rgba(8,11,18,0.85)", border: "1px solid rgba(212,168,67,0.3)" }}
                >
                  <span className="text-xs tracking-widest uppercase font-bold" style={{ color: "#d4a843", fontFamily: "'Cinzel', serif" }}>
                    Grit & Groove Karaoke
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOCAL DEVELOPMENT ────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-up order-2 md:order-1">
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                <img src={VOCAL_URL} alt="Vocal development" className="w-full h-72 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18]/60 to-transparent" />
              </div>
            </div>
            <div className="fade-up order-1 md:order-2" style={{ transitionDelay: "100ms" }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                Vocal Development
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
                Finding Your Voice
              </h2>
              <GoldDivider />
              <p className="mt-6 mb-6 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                Aaron enjoys helping people improve their singing and stage confidence. This guidance comes from real performance experience and an ongoing personal journey of vocal improvement.
              </p>
              <ul className="space-y-0">
                <ServiceItem icon="🌬️" text="Vocal relaxation and breathing techniques" />
                <ServiceItem icon="🎵" text="Improving tone, resonance, and projection" />
                <ServiceItem icon="🎤" text="Understanding microphone technique" />
                <ServiceItem icon="🌟" text="Developing stage presence and confidence" />
                <ServiceItem icon="🧠" text="Overcoming performance nerves and self-consciousness" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREATIVE PROJECTS ────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                Creative Music Projects
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
                Where Craft Meets Technology
              </h2>
              <GoldDivider />
              <p className="mt-6 mb-6 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                Aaron also explores music creation through songwriting and modern AI-assisted production tools. By combining creativity with emerging technology, he continues to expand his musical output while learning new ways of producing and shaping songs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "✍️", label: "Original Lyrics & Songwriting" },
                  { icon: "🤖", label: "AI-Assisted Music Production" },
                  { icon: "🎙️", label: "Vocal Experimentation" },
                  { icon: "🤝", label: "Collaborative Creative Projects" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3"
                    style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.1)" }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-semibold" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "100ms" }}>
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                <img src={CREATION_URL} alt="Music creation" className="w-full h-72 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE EVENTS ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-up mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Live Events & Performances
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Great Music. Great Energy.
            </h2>
            <GoldDivider />
            <p className="mt-6 text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
              Aaron regularly performs and hosts karaoke events across local venues and community spaces. Whether performing himself or supporting others on stage, the aim is always the same — great music, great energy, and an unforgettable night.
            </p>
          </div>

          <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🎭", title: "Live Performance", desc: "Energetic vocal performances that connect with the crowd" },
              { icon: "🎉", title: "Karaoke Hosting", desc: "Professional hosting that creates a welcoming, fun atmosphere" },
              { icon: "🌍", title: "Community Events", desc: "Bringing people together through the shared language of music" },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up p-6 text-center"
                style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.12)", transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12", borderTop: "1px solid rgba(79,195,247,0.1)" }}>
        <div className="max-w-2xl mx-auto text-center fade-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
            Book · Collaborate · Connect
          </h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
            For enquiries about performances, karaoke hosting, vocal guidance, or creative collaboration, reach out directly.
          </p>
          <a
            href="mailto:completestrength@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "#080b12",
              background: "#4fc3f7",
              border: "1px solid #4fc3f7",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#4fc3f7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#4fc3f7";
              (e.currentTarget as HTMLAnchorElement).style.color = "#080b12";
            }}
          >
            ✉ &nbsp; completestrength@gmail.com
          </a>
        </div>
      </section>
      <RustwoodFooter />
    </div>
  );
}
