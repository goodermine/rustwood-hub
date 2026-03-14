/*
 * RUSTWOOD HUB — Shared Navigation Component
 * Design: "Rustwood Sigil" — Dark Fantasy Codex
 * Full desktop menu + hamburger mobile menu
 * Used across all 11 pages
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663030843086/hJ7Zcj6oF9wJe9E5jZhTEC/rustwood-logo_306e987b.png";

const navLinks = [
  { label: "Hub", href: "/" },
  { label: "Martial Arts", href: "/martial-arts" },
  { label: "Music", href: "/music" },
  { label: "Audio", href: "/audio-engineering" },
  { label: "AI & Tech", href: "/ai-technology" },
  { label: "Hypnotherapy", href: "/hypnotherapy" },
  { label: "Coaching", href: "/coaching" },
  { label: "Support", href: "/human-support" },
  { label: "Entrepreneurship", href: "/entrepreneurship" },
  { label: "Creativity", href: "/creativity" },
  { label: "Philosophy", href: "/philosophy" },
];

export default function RustwoodNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || open
            ? "rgba(8,11,18,0.97)"
            : "rgba(8,11,18,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled || open
            ? "1px solid rgba(212,168,67,0.18)"
            : "1px solid rgba(79,195,247,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                src={LOGO_URL}
                alt="Rustwood"
                className="w-9 h-9 object-contain transition-all duration-300"
                style={{ filter: "drop-shadow(0 0 6px rgba(79,195,247,0.25))" }}
              />
              <div className="hidden sm:block">
                <div
                  className="text-xs font-black tracking-widest uppercase leading-none"
                  style={{ fontFamily: "'Cinzel', serif", color: "#d4a843" }}
                >
                  Rustwood
                </div>
                <div
                  className="text-[10px] tracking-widest uppercase leading-none mt-0.5"
                  style={{ color: "#8a9ab5", fontFamily: "'Raleway', sans-serif" }}
                >
                  Aaron Ellis
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className="px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase cursor-pointer transition-all duration-200 relative"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: active ? "#d4a843" : "#8a9ab5",
                    }}
                    onMouseEnter={(e) =>
                      !active && ((e.currentTarget as HTMLDivElement).style.color = "#f0ead8")
                    }
                    onMouseLeave={(e) =>
                      !active && ((e.currentTarget as HTMLDivElement).style.color = "#8a9ab5")
                    }
                  >
                    {link.label}
                    {active && (
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5"
                        style={{ background: "#d4a843" }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none" }}
          >
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                background: "#d4a843",
                transform: open ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                background: "#d4a843",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                background: "#d4a843",
                transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: open ? "600px" : "0",
            borderTop: open ? "1px solid rgba(212,168,67,0.12)" : "none",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1" style={{ background: "rgba(8,11,18,0.98)" }}>
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className="px-4 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-200"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: active ? "#d4a843" : "#8a9ab5",
                      borderLeft: active ? "2px solid #d4a843" : "2px solid transparent",
                      background: active ? "rgba(212,168,67,0.06)" : "transparent",
                    }}
                  >
                    {link.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
