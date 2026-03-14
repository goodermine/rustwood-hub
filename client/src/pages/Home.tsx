/*
 * RUSTWOOD HUB — Home Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex / Mythic Emblem Page
 * Sections: Hero → Pillars → Domains (10 cards) → Footer with socials
 * Domain cards: placeholder links, will connect to dedicated pages later
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";

// ─── Asset URLs (CDN) ───────────────────────────────────────────────────────
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-hero-bg-gieiYqVjsNz328VAJGtb37.webp";
const MARTIAL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-martial-arts-DKYhj9gwy2vmHyBKGqUYwh.webp";
const MUSIC_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-music-WVgBNvu5xz9Uji7G49MRqo.webp";
const AI_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-ai-oLXzntDRZqYme2EAvUnxwZ.webp";
const MIND_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-mind-EFT38EPRENMWuUqQ9uTaAY.webp";

// ─── Domain Data ────────────────────────────────────────────────────────────
const domains = [
  {
    id: 1,
    title: "Martial Arts & Physical Training",
    pillar: "Body",
    image: MARTIAL_URL,
    icon: "⚔️",
    tagline: "23+ Years of Forged Mastery",
    skills: ["Queensland & 2× Australian Kickboxing Champion", "Russian Kettlebell Pioneer in Australia", "Systema · Calisthenics · Tactical Defence"],
    href: "/martial-arts",
  },
  {
    id: 2,
    title: "Music & Vocal Performance",
    pillar: "Voice",
    image: MUSIC_URL,
    icon: "🎤",
    tagline: "Singer · Songwriter · Stage Performer",
    skills: ["Vocal technique & coaching", "Karaoke host & performer", "Rap lyricist · AI music creation"],
    href: "/music",
  },
  {
    id: 3,
    title: "Audio Engineering & Sound",
    pillar: "Voice",
    image: MUSIC_URL,
    icon: "🎚️",
    tagline: "Technical Mastery of Sound",
    skills: ["Mixing & vocal processing", "Karaoke system engineering", "Voice cloning technologies"],
    href: "/audio-engineering",
  },
  {
    id: 4,
    title: "Artificial Intelligence & Technology",
    pillar: "Intelligence",
    image: AI_URL,
    icon: "🤖",
    tagline: "Prompt Engineer · AI Architect",
    skills: ["Multi-agent AI orchestration", "Local LLM experimentation", "AI business automation"],
    href: "/ai-technology",
  },
  {
    id: 5,
    title: "Hypnotherapy & Mind Work",
    pillar: "Mind",
    image: MIND_URL,
    icon: "🧠",
    tagline: "Rewiring the Subconscious",
    skills: ["Hypnotherapy practice", "Mental conditioning & behaviour change", "Performance psychology"],
    href: "/hypnotherapy",
  },
  {
    id: 6,
    title: "Coaching & Teaching",
    pillar: "Mind",
    image: MARTIAL_URL,
    icon: "🏆",
    tagline: "Elevating Human Potential",
    skills: ["Martial arts & strength coaching", "Vocal improvement coaching", "AI education & mentoring"],
    href: "/coaching",
  },
  {
    id: 7,
    title: "Human Support & Service",
    pillar: "Mind",
    image: MIND_URL,
    icon: "🤝",
    tagline: "Helping People Thrive",
    skills: ["Independent support worker", "Emotional support & life assistance", "Problem-solving for vulnerable individuals"],
    href: "/human-support",
  },
  {
    id: 8,
    title: "Entrepreneurship",
    pillar: "Intelligence",
    image: AI_URL,
    icon: "🔥",
    tagline: "Building Systems & Ventures",
    skills: ["Grit & Groove Karaoke", "AI consulting & prompt products", "Future karaoke bar vision"],
    href: "/entrepreneurship",
  },
  {
    id: 9,
    title: "Creativity & Storytelling",
    pillar: "Voice",
    image: MUSIC_URL,
    icon: "✍️",
    tagline: "Myth-Maker · Brand Architect",
    skills: ["Songwriting & rap writing", "Personal branding & content creation", "Mythic identity (Rustwood)"],
    href: "/creativity",
  },
  {
    id: 10,
    title: "Philosophy & Consciousness",
    pillar: "Mind",
    image: MIND_URL,
    icon: "🌌",
    tagline: "Explorer of the Unseen",
    skills: ["Remote viewing exploration", "Meditation & consciousness study", "Energy systems & higher intelligence"],
    href: "/philosophy",
  },
];

const pillars = [
  { label: "Body", icon: "⚔️", desc: "Martial arts, kettlebells, calisthenics, strength" },
  { label: "Voice", icon: "🎤", desc: "Singing, sound, audio engineering" },
  { label: "Mind", icon: "🧠", desc: "Hypnosis, psychology, consciousness" },
  { label: "Intelligence", icon: "🤖", desc: "AI systems, prompt engineering, orchestration" },
];

const pillarColors: Record<string, string> = {
  Body: "#d4a843",
  Voice: "#4fc3f7",
  Mind: "#a78bfa",
  Intelligence: "#34d399",
};

// ─── Social Links ────────────────────────────────────────────────────────────
const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    color: "#69C9D0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
];

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Geometric Background SVG ────────────────────────────────────────────────
function GeometricBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,11,18,0)_0%,_rgba(8,11,18,0.7)_60%,_rgba(8,11,18,0.95)_100%)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080b12] to-transparent" />
    </div>
  );
}

// ─── Gold Divider ─────────────────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="gold-divider my-2">
      <div className="gold-divider-diamond" />
    </div>
  );
}

// ─── Domain Card ─────────────────────────────────────────────────────────────
function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const pillarColor = pillarColors[domain.pillar] || "#d4a843";
  const isPlaceholder = domain.href === "#";

  const cardContent = (
    <>
      {/* Card image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={domain.image}
          alt={domain.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141a28] via-[#141a28]/60 to-transparent" />
        <div
          className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase"
          style={{
            color: pillarColor,
            border: `1px solid ${pillarColor}40`,
            background: `${pillarColor}12`,
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {domain.pillar}
        </div>
        <div className="absolute bottom-3 left-4 text-2xl">{domain.icon}</div>
        {isPlaceholder && (
          <div className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-[#080b12]/80 border border-[rgba(212,168,67,0.2)] text-[#8a9ab5]"
            style={{ fontFamily: "'Raleway', sans-serif" }}>Coming Soon</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold mb-1 leading-tight" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
          {domain.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: pillarColor, fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>
          {domain.tagline}
        </p>
        <ul className="space-y-1">
          {domain.skills.map((skill, i) => (
            <li key={i} className="text-xs flex items-start gap-2" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
              <span style={{ color: "#d4a843", marginTop: "2px", flexShrink: 0 }}>›</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(90deg, ${pillarColor}, transparent)` }} />
    </>
  );

  if (!isPlaceholder) {
    return (
      <Link href={domain.href}>
        <div
          className="domain-card fade-up block group cursor-pointer"
          style={{ transitionDelay: `${(index % 5) * 60}ms` }}
        >
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <div
      className="domain-card fade-up block group"
      style={{ transitionDelay: `${(index % 5) * 60}ms` }}
    >
      {/* Card image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={domain.image}
          alt={domain.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141a28] via-[#141a28]/60 to-transparent" />
        {/* Pillar badge */}
        <div
          className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase"
          style={{
            color: pillarColor,
            border: `1px solid ${pillarColor}40`,
            background: `${pillarColor}12`,
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {domain.pillar}
        </div>
        {/* Icon */}
        <div className="absolute bottom-3 left-4 text-2xl">{domain.icon}</div>
        {/* Coming soon badge */}
        <div className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-[#080b12]/80 border border-[rgba(212,168,67,0.2)] text-[#8a9ab5]"
          style={{ fontFamily: "'Raleway', sans-serif" }}>
          Coming Soon
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3
          className="text-sm font-bold mb-1 leading-tight"
          style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
        >
          {domain.title}
        </h3>
        <p
          className="text-xs mb-3"
          style={{ color: pillarColor, fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}
        >
          {domain.tagline}
        </p>
        <ul className="space-y-1">
          {domain.skills.map((skill, i) => (
            <li
              key={i}
              className="text-xs flex items-start gap-2"
              style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
            >
              <span style={{ color: "#d4a843", marginTop: "2px", flexShrink: 0 }}>›</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom hover bar */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${pillarColor}, transparent)` }}
      />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();
  const domainsRef = useRef<HTMLElement>(null);

  function scrollToDomains() {
    domainsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <GeometricBg />

        <div className="relative z-10 flex flex-col items-center" style={{ animation: "float-up 1s ease-out forwards" }}>
          {/* Logo */}
          <div className="mb-8 relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(79,195,247,0.15) 0%, transparent 70%)",
                animation: "pulse-glow 3s ease-in-out infinite",
                transform: "scale(1.3)",
              }}
            />
            <img
              src={LOGO_URL}
              alt="Rustwood — Aaron Ellis"
              className="relative w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 0 24px rgba(79,195,247,0.3))" }}
            />
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-widest mb-2"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#f0ead8",
              textShadow: "0 0 40px rgba(212,168,67,0.3)",
              letterSpacing: "0.12em",
            }}
          >
            AARON ELLIS
          </h1>

          {/* Brand name */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span
              className="text-sm tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Raleway', sans-serif", color: "#d4a843", fontWeight: 600 }}
            >
              Rustwood
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>

          {/* Tagline */}
          <p
            className="text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
          >
            Mastery of <span style={{ color: "#d4a843" }}>Body</span>,{" "}
            <span style={{ color: "#4fc3f7" }}>Voice</span>,{" "}
            <span style={{ color: "#a78bfa" }}>Mind</span>, and{" "}
            <span style={{ color: "#34d399" }}>Intelligence</span>
          </p>

          {/* Four Pillars */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {pillars.map((p) => (
              <div key={p.label} className="pillar-badge" style={{ color: pillarColors[p.label], borderColor: `${pillarColors[p.label]}40`, background: `${pillarColors[p.label]}0d` }}>
                <span>{p.icon}</span>
                <span style={{ color: pillarColors[p.label] }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* Archetypes row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-12">
            {["Warrior", "Creator", "Technologist", "Teacher", "Architect of Systems", "Voice Artist", "Mind Coach"].map((a) => (
              <span
                key={a}
                className="text-xs tracking-widest uppercase"
                style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
              >
                {a}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToDomains}
            className="group flex flex-col items-center gap-2 transition-all duration-300"
            style={{ background: "none", border: "none" }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}
            >
              Explore Domains
            </span>
            <div
              className="w-6 h-10 border-2 rounded-full flex items-start justify-center pt-1.5 group-hover:border-[#d4a843] transition-colors"
              style={{ borderColor: "rgba(212,168,67,0.4)" }}
            >
              <div
                className="w-1.5 h-3 rounded-full"
                style={{
                  background: "#d4a843",
                  animation: "float-up 1.5s ease-in-out infinite alternate",
                }}
              />
            </div>
          </button>
        </div>
      </section>

      {/* ── DOMAINS ──────────────────────────────────────────────────────── */}
      <section ref={domainsRef} className="py-24 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16 fade-up">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
            >
              Domains of Mastery
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
            >
              The Rustwood Codex
            </h2>
            <GoldDivider />
            <p
              className="mt-6 text-sm max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
            >
              Each domain below represents a pillar of Aaron's life's work. These pages are being built — click to explore as they come online.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {domains.map((domain, i) => (
              <DomainCard key={domain.id} domain={domain} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IDENTITY SUMMARY ─────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto text-center fade-up">
          <GoldDivider />
          <blockquote
            className="mt-12 mb-12 text-xl md:text-2xl leading-relaxed font-light italic"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.9 }}
          >
            "That combination is extremely rare."
          </blockquote>
          <GoldDivider />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="fade-up text-center p-6" style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.1)" }}>
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3
                  className="text-sm font-bold mb-2 tracking-widest uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: pillarColors[p.label] }}
                >
                  {p.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-12 px-4" style={{ background: "#080b12", borderTop: "1px solid rgba(212,168,67,0.15)" }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

          {/* Logo small */}
          <img
            src={LOGO_URL}
            alt="Rustwood"
            className="w-16 h-16 object-contain opacity-80"
            style={{ filter: "drop-shadow(0 0 8px rgba(79,195,247,0.2))" }}
          />

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title={s.name}
                style={{ color: "#8a9ab5" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = s.color;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 16px ${s.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8a9ab5";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,168,67,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Social labels */}
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <span
                key={s.name}
                className="text-xs tracking-widest uppercase"
                style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
              >
                {s.name}
              </span>
            ))}
          </div>

          <GoldDivider />

          {/* Copyright */}
          <div className="text-center">
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ color: "#d4a843", fontFamily: "'Cinzel', serif" }}
            >
              Rustwood · Aaron Ellis
            </p>
            <p
              className="text-xs"
              style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
            >
              © {new Date().getFullYear()} Aaron Ellis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
