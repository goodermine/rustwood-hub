/*
 * RUSTWOOD HUB — Newsletter Signup Component
 * Reusable email capture for "The Rustwood Weekly"
 * Two variants: "full" (homepage section) and "compact" (footer row)
 */

import { useState } from "react";
import { toast } from "sonner";
import { subscribeEmail } from "@/lib/subscribeEmail";

interface NewsletterSignupProps {
  variant?: "full" | "compact";
  source?: string;
}

export default function NewsletterSignup({
  variant = "full",
  source,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await subscribeEmail({
        email,
        source:
          source ??
          (variant === "compact" ? "newsletter-compact" : "newsletter-full"),
      });

      if (result.status === "exists") {
        toast.info("You're already on the Rustwood Weekly list.");
      } else {
        toast.success("Thanks for joining. You're on the Rustwood Weekly list.");
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

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          disabled={isSubmitting}
          className="flex-1 w-full px-4 py-2.5 text-xs tracking-wide bg-transparent border outline-none transition-all duration-300 focus:border-[#d4a843] focus:shadow-[0_0_12px_rgba(212,168,67,0.15)]"
          style={{
            borderColor: "rgba(212,168,67,0.25)",
            color: "#f0ead8",
            fontFamily: "'Raleway', sans-serif",
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,67,0.3)] whitespace-nowrap disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #d4a843, #8a6a1e)",
            color: "#080b12",
            fontFamily: "'Raleway', sans-serif",
            border: "1px solid rgba(212,168,67,0.6)",
            opacity: isSubmitting ? 0.75 : 1,
          }}
        >
          {isSubmitting ? "Saving..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <div className="text-center">
      <p
        className="text-xs tracking-[0.4em] uppercase mb-4"
        style={{ color: "#d4a843", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
      >
        Stay Connected
      </p>
      <h2
        className="text-2xl md:text-3xl font-bold mb-4"
        style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
      >
        Join The Rustwood Weekly
      </h2>
      <p
        className="text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed"
        style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
      >
        Weekly insights on strength, voice, mindset, and AI — delivered straight to your inbox. No spam, no fluff — just forged knowledge.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          disabled={isSubmitting}
          className="flex-1 w-full px-5 py-3 text-sm tracking-wide bg-transparent border outline-none transition-all duration-300 focus:border-[#d4a843] focus:shadow-[0_0_16px_rgba(212,168,67,0.2)]"
          style={{
            borderColor: "rgba(212,168,67,0.3)",
            color: "#f0ead8",
            fontFamily: "'Raleway', sans-serif",
            background: "rgba(20,26,40,0.5)",
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,168,67,0.35)] hover:translate-y-[-2px] whitespace-nowrap disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #d4a843, #8a6a1e)",
            color: "#080b12",
            fontFamily: "'Raleway', sans-serif",
            border: "1px solid rgba(212,168,67,0.6)",
            opacity: isSubmitting ? 0.75 : 1,
          }}
        >
          {isSubmitting ? "Saving..." : "Join the Weekly"}
        </button>
      </form>
      <p
        className="text-xs mt-4"
        style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif", opacity: 0.6 }}
      >
        Unsubscribe anytime. Your data stays private.
      </p>
    </div>
  );
}
