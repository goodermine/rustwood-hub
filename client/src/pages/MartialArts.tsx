/*
 * RUSTWOOD HUB — Martial Arts & Physical Training Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Palette: Abyss black, Ancient gold (#d4a843), Arcane blue (#4fc3f7)
 * Pillar: BODY
 */

import { useEffect } from "react";
import { Link } from "wouter";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/martial-hero-banner-AfdT9vbtjBXc2BB7WutEyk.webp";
const KETTLEBELL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/martial-kettlebell-SSGVkV2r7QPSkeWzirtB8C.webp";
const SYSTEMA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/martial-systema-K9DWfeynTiAWvcfFFGQfAL.webp";
const CALISTHENICS_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/martial-calisthenics-gTXBghce5RyAkwUnUMooGA.webp";

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

// ─── Discipline Card ─────────────────────────────────────────────────────────
function DisciplineCard({
  image, title, items, delay = 0,
}: {
  image: string; title: string; items: string[]; delay?: number;
}) {
  return (
    <div
      className="fade-up domain-card overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141a28] via-[#141a28]/50 to-transparent" />
        <h3
          className="absolute bottom-4 left-5 text-base font-bold"
          style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
        >
          {title}
        </h3>
      </div>
      <div className="p-5">
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
              <span style={{ color: "#d4a843", flexShrink: 0, marginTop: "2px" }}>›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Philosophy Pillar ───────────────────────────────────────────────────────
function PhilosophyPillar({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      className="fade-up flex flex-col items-center text-center p-6 gap-3"
      style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)" }}
    >
      <span className="text-3xl">{icon}</span>
      <p className="text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
        {text}
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MartialArts() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>

      {/* ── NAV BAR ──────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(8,11,18,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(212,168,67,0.12)" }}
      >
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src={LOGO_URL} alt="Rustwood" className="w-9 h-9 object-contain" style={{ filter: "drop-shadow(0 0 6px rgba(79,195,247,0.3))" }} />
            <div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>Rustwood</div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>Aaron Ellis</div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div
            className="flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer transition-colors duration-300"
            style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a9ab5")}
          >
            <span style={{ fontSize: "16px" }}>←</span> All Domains
          </div>
        </Link>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-20 overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_URL})`, opacity: 0.45 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-[#080b12]/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-4" style={{ animation: "float-up 0.9s ease-out forwards" }}>
          {/* Pillar badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold"
            style={{ color: "#d4a843", border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.07)", fontFamily: "'Raleway', sans-serif" }}>
            ⚔️ &nbsp; Body — Domain I
          </div>

          <h1
            className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(212,168,67,0.25)" }}
          >
            Martial Arts &<br />Physical Training
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              23+ Years of Forged Mastery
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>

          {/* Achievement badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🏆 Queensland Kickboxing Champion",
              "🥇 2× Australian Kickboxing Champion",
              "💪 34+ Years Strength Coaching",
              "🔑 Kettlebell Pioneer in Australia",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold tracking-wide"
                style={{
                  color: "#4fc3f7",
                  border: "1px solid rgba(79,195,247,0.3)",
                  background: "rgba(79,195,247,0.07)",
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
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              The Journey
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Decades in the Forge
            </h2>
            <GoldDivider />
          </div>

          <div className="fade-up space-y-6 text-base leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
            <p>
              Aaron Ellis has spent decades pursuing physical mastery through martial arts, strength training, and disciplined self-development. His journey combines traditional martial practice with modern strength and conditioning, creating a practical approach to real-world capability.
            </p>
            <p>
              Beginning his martial arts path in his youth, Aaron went on to achieve significant competitive success in kickboxing, including a Queensland kickboxing title and two Australian kickboxing titles. Over the years he evolved beyond competition into teaching, coaching, and exploring deeper aspects of movement, control, and resilience.
            </p>
            <p>
              Since 2005, Aaron has also studied Russian martial arts <span style={{ color: "#f0ead8", fontWeight: 600 }}>Systema</span> — a discipline known for its emphasis on relaxation, breathing, structural movement, and calmness under pressure. Systema deeply influenced his understanding of combat, body mechanics, and the relationship between tension, movement, and awareness.
            </p>
            <p>
              Alongside martial training, Aaron has spent over three decades working as a strength and conditioning coach, specialising in practical strength development. He was also among the early Australians introducing <span style={{ color: "#f0ead8", fontWeight: 600 }}>Russian kettlebell training</span>, helping bring functional strength systems into wider awareness.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY DISCIPLINES ──────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-6xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Key Disciplines
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              The Three Pillars of Practice
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DisciplineCard
              image={HERO_URL}
              title="Martial Arts"
              delay={0}
              items={[
                "Kickboxing — Queensland & 2× Australian Champion",
                "Russian Martial Art Systema (since 2005)",
                "Tactical self-defence",
                "Combat movement principles",
              ]}
            />
            <DisciplineCard
              image={KETTLEBELL_URL}
              title="Strength & Conditioning"
              delay={80}
              items={[
                "34+ years coaching experience",
                "Russian kettlebell training pioneer in Australia",
                "Functional strength systems",
                "Athletic conditioning",
              ]}
            />
            <DisciplineCard
              image={CALISTHENICS_URL}
              title="Bodyweight Mastery"
              delay={160}
              items={[
                "Calisthenics training",
                "Body control and mobility",
                "Structural strength development",
                "Natural movement patterns",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── SYSTEMA SPOTLIGHT ────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
                Systema — Since 2005
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
                The Art of Calm Under Pressure
              </h2>
              <GoldDivider />
              <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                <p>
                  Systema is a Russian martial art unlike any other. Rather than rigid techniques, it teaches principles — relaxation, breathing, structural integrity, and fluid movement. It is as much a study of the self as it is of combat.
                </p>
                <p>
                  Aaron has studied Systema since 2005, integrating its principles into his broader martial and coaching practice. The art's emphasis on <span style={{ color: "#f0ead8" }}>calmness under pressure</span> has profoundly shaped his approach to both physical training and personal development.
                </p>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "100ms" }}>
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                <img src={SYSTEMA_URL} alt="Systema training" className="w-full h-72 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Training Philosophy
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Strength is Control
            </h2>
            <GoldDivider />
            <blockquote
              className="mt-8 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}
            >
              "Strength is not just power — it is control, awareness, and composure."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <PhilosophyPillar icon="🎯" text="Real-world strength built for life, not just the gym" />
            <PhilosophyPillar icon="🌬️" text="Relaxed power and breath control as the foundation of movement" />
            <PhilosophyPillar icon="⚡" text="Efficient movement — doing more with less effort and tension" />
            <PhilosophyPillar icon="🧘" text="Confidence under pressure through calm, not aggression" />
            <PhilosophyPillar icon="♾️" text="Lifelong physical capability — training that serves you for decades" />
            <PhilosophyPillar icon="🌿" text="Martial discipline combined with natural body awareness" />
          </div>
        </div>
      </section>

      {/* ── COACHING SERVICES ────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Coaching & Training
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              What Training May Include
            </h2>
            <GoldDivider />
          </div>

          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "⚔️", title: "Martial Arts Instruction", desc: "Kickboxing, combat fundamentals, and tactical self-defence" },
              { icon: "🛡️", title: "Self-Defence Fundamentals", desc: "Practical, real-world self-protection principles" },
              { icon: "💪", title: "Strength & Conditioning", desc: "34+ years of coaching experience applied to your goals" },
              { icon: "🔔", title: "Kettlebell Training", desc: "Functional strength through Russian kettlebell methodology" },
              { icon: "🤸", title: "Calisthenics Development", desc: "Mastering your own bodyweight for true structural strength" },
              { icon: "🌬️", title: "Movement & Breathing", desc: "Systema-inspired breath and movement training for composure" },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up flex items-start gap-4 p-5"
                style={{
                  background: "#141a28",
                  border: "1px solid rgba(212,168,67,0.12)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-2xl mx-auto text-center fade-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
            Begin Your Training
          </h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
            For enquiries about training, coaching, or collaboration, reach out directly. Whether you are starting from scratch or looking to refine existing skills, Aaron works with people who are serious about growth.
          </p>
          <a
            href="mailto:completestrength@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "#080b12",
              background: "#d4a843",
              border: "1px solid #d4a843",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#d4a843";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#d4a843";
              (e.currentTarget as HTMLAnchorElement).style.color = "#080b12";
            }}
          >
            ✉ &nbsp; completestrength@gmail.com
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-10 px-4 text-center" style={{ background: "#080b12", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <Link href="/">
          <div className="inline-flex flex-col items-center gap-2 cursor-pointer group">
            <img src={LOGO_URL} alt="Rustwood" className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
              ← Back to Rustwood Hub
            </span>
          </div>
        </Link>
        <p className="mt-6 text-xs" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
          © {new Date().getFullYear()} Aaron Ellis · Rustwood
        </p>
      </footer>
    </div>
  );
}
