"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Skills", index: "03", href: "#skills" },
  { label: "Work", index: "04", href: "#projects" },
  { label: "Contact", index: "05", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: "1px solid var(--border)",
        background: scrolled
          ? "rgba(8,8,8,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#top")}
          className="font-mono-label flex items-center gap-1"
          style={{ color: "var(--fg)" }}
        >
          <span
            className="w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            N
          </span>
          <span>Nabaraj</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-mono-label flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "var(--fg-muted)")
              }
            >
              <span style={{ color: "var(--accent)" }}>{link.index}</span>
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:nabarajbasnet2000@gmail.com"
          className="btn-outline hidden md:inline-flex"
          id="contact"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono-label"
          style={{ color: "var(--fg)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--border)",
            background: "rgba(8,8,8,0.97)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="w-full flex items-center gap-3 px-6 py-4 font-mono-label text-left"
              style={{
                borderBottom: "1px solid var(--border)",
                color: "var(--fg-muted)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>{link.index}</span>
              {link.label}
            </button>
          ))}
          <div className="px-6 py-4">
            <a
              href="mailto:nabarajbasnet2000@gmail.com"
              className="btn-accent w-full justify-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
