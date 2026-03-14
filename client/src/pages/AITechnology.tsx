/*
 * RUSTWOOD HUB — AI & Technology Domain Page
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Palette: Abyss black, Ancient gold (#d4a843), Arcane blue (#4fc3f7)
 * Pillar: INTELLIGENCE
 */

import { useEffect } from "react";
import RustwoodNav from "@/components/RustwoodNav";
import RustwoodFooter from "@/components/RustwoodFooter";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";
const HERO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/ai-hero-banner-GistYtmKQEPd4Gj7zGYDPQ.webp";
const PROMPT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/ai-prompt-engineering-PfjsamrjVVHMeWVYMegqNA.webp";
const ORCH_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/ai-orchestration-fcpDxgGgoujrTYc8APUxGv.webp";
const CREATIVE_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/ai-creative-jC4KD2SjQeVseg3ddn6gJz.webp";

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
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
  return (
    <div className="gold-divider my-2">
      <div className="gold-divider-diamond" />
    </div>
  );
}

// ─── Mastery Area Card ────────────────────────────────────────────────────────
function MasteryCard({ icon, title, items, accent, delay = 0 }: {
  icon: string; title: string; items: string[]; accent: string; delay?: number;
}) {
  return (
    <div
      className="fade-up p-6 flex flex-col gap-4"
      style={{ background: "#141a28", border: `1px solid ${accent}22`, transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-sm font-bold tracking-wide" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ color: accent, fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
            <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Who This Is For ──────────────────────────────────────────────────────────
function AudienceTag({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-3"
      style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)" }}
    >
      <span className="text-base">{icon}</span>
      <span className="text-xs font-semibold" style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}>{label}</span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AITechnology() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#080b12", fontFamily: "'Raleway', sans-serif" }}>

      {/* ── NAV BAR ──────────────────────────────────────────────────────── */}
      <RustwoodNav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-20 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_URL})`, opacity: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-[#080b12]/60" />

        <div className="relative z-10 text-center px-4" style={{ animation: "float-up 0.9s ease-out forwards" }}>
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold"
            style={{ color: "#d4a843", border: "1px solid rgba(212,168,67,0.4)", background: "rgba(212,168,67,0.07)" }}
          >
            🤖 &nbsp; Intelligence — Domain IV
          </div>

          <h1
            className="text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", textShadow: "0 0 40px rgba(212,168,67,0.2)" }}
          >
            Artificial Intelligence<br />&amp; Technology
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4a843]" />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>
              Prompt Engineering · AI Orchestration · Creative Systems
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4a843]" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🧠 AI Orchestration Specialist",
              "⚙️ Prompt Engineer",
              "🔗 Multi-Agent Workflow Designer",
              "🚀 Practical AI Strategist",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ color: "#d4a843", border: "1px solid rgba(212,168,67,0.3)", background: "rgba(212,168,67,0.07)" }}
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
              The Domain
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Intelligence Properly Directed
            </h2>
            <GoldDivider />
          </div>

          <div className="fade-up space-y-5 text-base leading-relaxed" style={{ color: "#8a9ab5" }}>
            <p>
              Aaron Ellis is an AI orchestration and prompt engineering specialist focused on practical systems that help people create, automate, and think more clearly. His work sits at the intersection of human creativity and machine intelligence, where carefully designed prompts, workflows, and digital tools can unlock real productivity and new forms of expression.
            </p>
            <p>
              Since 2022, Aaron has been deeply engaged in the world of prompt engineering, advanced AI workflows, and multi-agent system design. Rather than treating AI as a novelty, he approaches it as a <span style={{ color: "#f0ead8", fontWeight: 600 }}>serious tool for problem-solving, content creation, business efficiency, and personal leverage.</span>
            </p>
            <p>
              His work includes designing structured prompt systems, building autonomous workflows, experimenting with local language models, and creating AI-supported processes for writing, music, websites, digital products, and operational systems. He is especially interested in helping people move beyond random prompting and into deliberate, repeatable AI use that produces high-quality results.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI PHILOSOPHY ────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Rustwood AI Philosophy
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Orchestration Over Chaos
            </h2>
            <GoldDivider />
            <blockquote
              className="mt-8 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8", opacity: 0.85 }}
            >
              "AI is not magic. It is amplified direction. The quality of an outcome depends on the quality of the thinking behind it."
            </blockquote>
          </div>

          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "✍️", label: "Better Prompts", desc: "Precision in language produces precision in results. Every word shapes the output." },
              { icon: "⚙️", label: "Better Systems", desc: "Individual prompts are powerful. Structured systems are transformational." },
              { icon: "🎨", label: "Better Creative Direction", desc: "AI amplifies human creativity when guided with clear intent and aesthetic vision." },
              { icon: "🔄", label: "Better Automation", desc: "Repeatable workflows eliminate guesswork and compound output over time." },
              { icon: "🧠", label: "Better Human Judgment", desc: "The goal is not to replace thinking — it is to elevate it." },
              { icon: "🎯", label: "Scattered Possibility → Usable Power", desc: "Turning raw AI capability into structured, reliable tools for real work." },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up p-5"
                style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-xs font-bold mb-2 tracking-wide" style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}>{item.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS OF MASTERY ─────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Areas of Mastery
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Four Pillars of AI Expertise
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="fade-up" style={{ transitionDelay: "0ms" }}>
              <div className="relative overflow-hidden mb-4" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                <img src={PROMPT_URL} alt="Prompt Engineering" className="w-full h-48 object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 to-transparent" />
              </div>
              <MasteryCard
                icon="✍️"
                title="Prompt Engineering"
                accent="#d4a843"
                items={[
                  "Advanced prompt design",
                  "Structured prompting systems",
                  "Variable-based prompt frameworks",
                  "Prompt packs and reusable templates",
                  "Creative and commercial prompt workflows",
                ]}
              />
            </div>

            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <div className="relative overflow-hidden mb-4" style={{ border: "1px solid rgba(79,195,247,0.2)" }}>
                <img src={ORCH_URL} alt="AI Orchestration" className="w-full h-48 object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 to-transparent" />
              </div>
              <MasteryCard
                icon="🔗"
                title="AI Orchestration"
                accent="#4fc3f7"
                items={[
                  "Multi-agent workflow thinking",
                  "AI task delegation systems",
                  "Autonomous prompt structures",
                  "AI-assisted productivity systems",
                  "Role-based expert prompting",
                ]}
              />
            </div>

            <div className="fade-up" style={{ transitionDelay: "160ms" }}>
              <div className="relative overflow-hidden mb-4" style={{ border: "1px solid rgba(212,168,67,0.2)" }}>
                <img src={CREATIVE_URL} alt="Creative AI" className="w-full h-48 object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12]/70 to-transparent" />
              </div>
              <MasteryCard
                icon="🎨"
                title="Creative AI"
                accent="#d4a843"
                items={[
                  "AI-assisted songwriting and music production",
                  "AI-supported writing and ideation",
                  "Website and landing page content generation",
                  "Brand voice and content workflows",
                  "Creative system design",
                ]}
              />
            </div>

            <div className="fade-up" style={{ transitionDelay: "240ms" }}>
              <MasteryCard
                icon="🛠️"
                title="Practical Technology"
                accent="#4fc3f7"
                items={[
                  "Local LLM experimentation",
                  "AI tool evaluation and implementation",
                  "Workflow testing and optimisation",
                  "Digital product creation using AI",
                  "System design for creators and small business operators",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT AARON HELPS WITH ────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              What Aaron Helps With
            </h2>
            <GoldDivider />
            <p className="mt-6 text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "#8a9ab5" }}>
              Aaron helps individuals and businesses use AI more deliberately and effectively. His work is especially valuable for people who want more than shallow AI tricks — the focus is on real usefulness, long-term leverage, and systems that can actually support meaningful work.
            </p>
          </div>

          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: "🎯", text: "Designing better prompts for consistent results" },
              { icon: "🔄", text: "Creating workflows for content, planning, and productivity" },
              { icon: "🏗️", text: "Structuring AI systems for creative or business use" },
              { icon: "📈", text: "Improving the quality of AI-generated outputs" },
              { icon: "📦", text: "Developing prompt packs, templates, and custom AI frameworks" },
              { icon: "⚡", text: "Exploring practical automation opportunities" },
              { icon: "🧠", text: "Teaching people how to think more clearly when using AI tools" },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up flex items-start gap-3 p-4"
                style={{ background: "#141a28", border: "1px solid rgba(79,195,247,0.1)", transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS & SERVICES ──────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12" }}>
        <div className="max-w-5xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Products, Services &amp; Projects
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              How to Work with Aaron
            </h2>
            <GoldDivider />
          </div>

          <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "💼", label: "AI Consulting" },
              { icon: "✍️", label: "Prompt Engineering Services" },
              { icon: "📦", label: "Prompt Packs & Digital Products" },
              { icon: "🔄", label: "Workflow Design" },
              { icon: "🎓", label: "AI Training & Guidance" },
              { icon: "🗺️", label: "Strategy Sessions" },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up flex flex-col items-center gap-3 p-6 text-center"
                style={{ background: "#141a28", border: "1px solid rgba(212,168,67,0.12)", transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-bold tracking-wide" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#0a0e18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-up text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              Who This Is For
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
              Is This You?
            </h2>
            <GoldDivider />
          </div>
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AudienceTag icon="🎨" label="Creators who want better AI-assisted output" />
            <AudienceTag icon="🚀" label="Entrepreneurs building digital systems" />
            <AudienceTag icon="💼" label="Professionals wanting smarter workflows" />
            <AudienceTag icon="🔍" label="People curious about prompt engineering" />
            <AudienceTag icon="🏢" label="Businesses exploring practical AI adoption" />
            <AudienceTag icon="💡" label="Anyone who wants to use AI with more clarity and less guesswork" />
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#080b12", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
        <div className="max-w-2xl mx-auto text-center fade-up">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}>
            Consult · Collaborate · Build
          </h2>
          <GoldDivider />
          <p className="mt-6 mb-8 text-sm leading-relaxed" style={{ color: "#8a9ab5" }}>
            For enquiries about AI consulting, prompt engineering, digital products, or workflow design, reach out directly.
          </p>
          <a
            href="mailto:aiwizard@aaronellis.au"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300"
            style={{ color: "#080b12", background: "#d4a843", border: "1px solid #d4a843" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#d4a843";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#d4a843";
              (e.currentTarget as HTMLAnchorElement).style.color = "#080b12";
            }}
          >
            ✉ &nbsp; aiwizard@aaronellis.au
          </a>
        </div>
      </section>
      <RustwoodFooter />
    </div>
  );
}
