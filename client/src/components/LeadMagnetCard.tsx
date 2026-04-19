/*
 * RUSTWOOD HUB — Lead Magnet Card Component
 * A visually distinct CTA card for free resources / digital products
 * Used on domain pages to capture emails or link to products
 */

import { useState } from "react";
import { toast } from "sonner";

interface LeadMagnetCardProps {
  type: "free" | "paid";
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  accentColor?: string;
  icon?: string;
}

export default function LeadMagnetCard({
  type,
  title,
  description,
  price,
  buttonText,
  accentColor = "#d4a843",
  icon = "📦",
}: LeadMagnetCardProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (type === "free") {
      if (!email.trim()) {
        toast.error("Please enter your email to get the free resource.");
        return;
      }
      toast.success("Thanks! This resource is launching soon — you'll be first to receive it.");
      setEmail("");
    } else {
      toast.info("Product launching soon — join the newsletter to be notified!");
    }
  }

  return (
    <div
      className="relative p-6 md:p-8 fade-up"
      style={{
        background: "linear-gradient(135deg, rgba(20,26,40,0.9), rgba(15,20,32,0.95))",
        border: `1px solid ${accentColor}40`,
        boxShadow: `0 0 30px ${accentColor}10`,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16"
        style={{
          background: `linear-gradient(135deg, ${accentColor}20, transparent)`,
        }}
      />

      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Icon */}
        <div
          className="text-4xl flex-shrink-0 w-16 h-16 flex items-center justify-center"
          style={{
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5"
              style={{
                color: accentColor,
                border: `1px solid ${accentColor}40`,
                background: `${accentColor}12`,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              {type === "free" ? "Free Resource" : `${price}`}
            </span>
          </div>
          <h3
            className="text-lg font-bold mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ead8" }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 w-full md:w-auto">
          {type === "free" ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2.5 text-xs tracking-wide bg-transparent border outline-none transition-all duration-300 focus:border-[#d4a843] w-full md:w-56"
                style={{
                  borderColor: `${accentColor}30`,
                  color: "#f0ead8",
                  fontFamily: "'Raleway', sans-serif",
                }}
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,67,0.3)] hover:translate-y-[-1px]"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
                  color: "#080b12",
                  fontFamily: "'Raleway', sans-serif",
                  border: `1px solid ${accentColor}80`,
                }}
              >
                {buttonText}
              </button>
            </form>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,168,67,0.35)] hover:translate-y-[-2px] whitespace-nowrap"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}88)`,
                color: "#080b12",
                fontFamily: "'Raleway', sans-serif",
                border: `1px solid ${accentColor}80`,
              }}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
