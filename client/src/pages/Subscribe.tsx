import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { subscribeEmail } from "@/lib/subscribeEmail";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";

const valuePoints = [
  {
    icon: "⚔️",
    title: "Practical signal",
    text: "Useful notes on strength, voice, mindset, and AI — written to be applied, not merely admired.",
  },
  {
    icon: "⚡",
    title: "Early access",
    text: "Get first notice of new guides, releases, coaching availability, and live Rustwood projects.",
  },
  {
    icon: "🛡️",
    title: "Clean delivery",
    text: "One clear weekly email. No spammy clutter. Unsubscribe any time.",
  },
];

const trustPoints = [
  "34+ years coaching",
  "8 years hypnotherapy",
  "AI specialist since 2022",
];

export default function Subscribe() {
  usePageMeta("Join the Rustwood Weekly");

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await subscribeEmail({
        email,
        source: "subscribe-page",
      });

      if (result.status === "exists") {
        toast.info("You're already on the Rustwood Weekly list.");
      } else {
        toast.success("Thanks — you're on the Rustwood Weekly list.");
      }

      setEmail("");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Couldn't save your subscription right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#080b12",
        color: "#f0ead8",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 10%, rgba(79,195,247,0.12), transparent 28%), radial-gradient(circle at 85% 18%, rgba(212,168,67,0.14), transparent 24%), linear-gradient(180deg, rgba(8,11,18,0.96), #080b12 72%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <header
        className="relative z-10"
        style={{
          borderBottom: "1px solid rgba(212,168,67,0.12)",
          background: "rgba(8,11,18,0.82)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                src={LOGO_URL}
                alt="Rustwood"
                className="w-10 h-10 object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(79,195,247,0.25))" }}
              />
              <div>
                <div
                  className="text-xs font-black tracking-widest uppercase leading-none"
                  style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}
                >
                  Rustwood
                </div>
                <div
                  className="text-[10px] tracking-widest uppercase leading-none mt-0.5"
                  style={{ color: "#8a9ab5" }}
                >
                  Aaron Ellis
                </div>
              </div>
            </div>
          </Link>

          <Link href="/">
            <div
              className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{
                color: "#8a9ab5",
                border: "1px solid rgba(212,168,67,0.18)",
                background: "rgba(212,168,67,0.04)",
              }}
            >
              Back to Hub
            </div>
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-4 py-12 md:py-20">
        <section className="max-w-6xl mx-auto grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{
                color: "#d4a843",
                border: "1px solid rgba(212,168,67,0.24)",
                background: "rgba(212,168,67,0.06)",
              }}
            >
              Free weekly email
            </p>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl leading-[1.05] mb-6"
              style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
            >
              Join the Rustwood Weekly
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#8a9ab5" }}
            >
              One clean weekly email from Aaron Ellis covering strength, voice, mindset, and AI. Practical signal, early access, and useful updates from the Rustwood world — without the bloat.
            </p>

            <div className="gold-divider mb-8">
              <div className="gold-divider-diamond" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {valuePoints.map((point) => (
                <div
                  key={point.title}
                  className="p-4 md:p-5"
                  style={{
                    background: "rgba(20,26,40,0.82)",
                    border: "1px solid rgba(212,168,67,0.14)",
                  }}
                >
                  <div className="text-2xl mb-3">{point.icon}</div>
                  <h2
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
                  >
                    {point.title}
                  </h2>
                  <p className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="px-3 py-2 text-[10px] font-bold tracking-[0.24em] uppercase"
                  style={{
                    color: "#8a9ab5",
                    border: "1px solid rgba(79,195,247,0.18)",
                    background: "rgba(79,195,247,0.04)",
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,26,40,0.96), rgba(12,16,26,0.98))",
                border: "1px solid rgba(212,168,67,0.18)",
                boxShadow:
                  "0 16px 60px rgba(0,0,0,0.35), 0 0 32px rgba(212,168,67,0.08)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(212,168,67,0.16), transparent 70%)",
                }}
              />

              <div className="relative p-6 md:p-8 lg:p-10">
                <p
                  className="text-[10px] tracking-[0.35em] uppercase mb-4"
                  style={{
                    color: "#4fc3f7",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Subscribe now
                </p>

                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
                >
                  Get the weekly email
                </h2>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "#8a9ab5" }}
                >
                  Pop your best email in below and I’ll send the good stuff there.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    autoComplete="email"
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 text-sm tracking-wide bg-transparent border outline-none transition-all duration-300 focus:border-[#d4a843] focus:shadow-[0_0_16px_rgba(212,168,67,0.2)]"
                    style={{
                      borderColor: "rgba(212,168,67,0.28)",
                      color: "#f0ead8",
                      background: "rgba(8,11,18,0.5)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,168,67,0.35)] hover:translate-y-[-2px] disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #d4a843, #8a6a1e)",
                      color: "#080b12",
                      fontFamily: "'Raleway', sans-serif",
                      border: "1px solid rgba(212,168,67,0.6)",
                      opacity: isSubmitting ? 0.75 : 1,
                    }}
                  >
                    {isSubmitting ? "Saving..." : "Join the Rustwood Weekly"}
                  </button>
                </form>

                <div className="mt-6 space-y-3">
                  {[
                    "Unsubscribe any time",
                    "No spammy nonsense",
                    "First notice of guides, products, and openings",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span style={{ color: "#d4a843" }}>›</span>
                      <span className="text-xs leading-relaxed" style={{ color: "#8a9ab5" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p
              className="text-xs leading-relaxed mt-4 text-center"
              style={{ color: "#8a9ab5", opacity: 0.72 }}
            >
              Your details stay private and you can unsubscribe any time.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
