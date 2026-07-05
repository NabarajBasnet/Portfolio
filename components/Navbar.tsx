"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Skills", index: "01", href: "#skills" },
  { label: "Work", index: "02", href: "#projects" },
  { label: "Contact", index: "03", href: "#contact" },
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden"
      style={{
        borderBottom: "1px solid var(--border)",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <motion.button
          onClick={() => scrollTo("#top")}
          className="font-mono-label flex items-center gap-1"
          style={{ color: "var(--fg)" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <span
            className="w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            N
          </span>
          <span>Nabaraj</span>
        </motion.button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-mono-label flex items-center gap-1.5"
              style={{ color: "var(--fg-muted)" }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              whileHover={{ color: "var(--fg)", y: -1 }}
            >
              <span style={{ color: "var(--accent)" }}>{link.index}</span>
              {link.label}
            </motion.button>
          ))}
        </nav>

        <motion.a
          href="mailto:nabarajbasnet2000@gmail.com"
          className="btn-outline hidden md:inline-flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Contact
        </motion.a>

        <button
          className="md:hidden font-mono-label"
          style={{ color: "var(--fg)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? "✕" : "☰"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t overflow-hidden"
            style={{
              borderColor: "var(--border)",
              background: "rgba(8,8,8,0.97)",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="w-full flex items-center gap-3 px-6 py-4 font-mono-label text-left"
                style={{
                  borderBottom: "1px solid var(--border)",
                  color: "var(--fg-muted)",
                }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <span style={{ color: "var(--accent)" }}>{link.index}</span>
                {link.label}
              </motion.button>
            ))}
            <div className="px-6 py-4">
              <a
                href="mailto:nabarajbasnet2000@gmail.com"
                className="btn-accent w-full justify-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
