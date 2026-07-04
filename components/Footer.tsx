"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import {
  fadeUp,
  slideInLeft,
  staggerContainer,
  staggerFadeUp,
  viewportOptions,
} from "@/lib/animations";

const socials = [
  {
    label: "GitHub",
    handle: "@NabarajBasnet",
    href: "https://github.com/NabarajBasnet",
    icon: <Github size={14} />,
  },
  {
    label: "LinkedIn",
    handle: "in/nabaraj-basnet",
    href: "https://www.linkedin.com/in/nabaraj-basnet-1b9216248/",
    icon: <Linkedin size={14} />,
  },
  {
    label: "Instagram",
    handle: "@nabaraj__basnet",
    href: "https://www.instagram.com/nabaraj__basnet/",
    icon: <Instagram size={14} />,
  },
  {
    label: "Email",
    handle: "nabarajbasnet2000@gmail.com",
    href: "mailto:nabarajbasnet2000@gmail.com",
    icon: <Mail size={14} />,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-4 sm:px-6 md:px-16 lg:px-24 py-14 sm:py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="flex items-start gap-4 sm:gap-6 mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={slideInLeft}
        >
          <span className="font-mono-label text-muted pt-1 shrink-0">
            05 ——
          </span>
          <div>
            <h2
              className="font-serif-heading text-[clamp(1.8rem,5vw,3.5rem)] leading-tight mb-3"
              style={{ color: "var(--fg)" }}
            >
              Hire or collaborate
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: "var(--fg-muted)" }}
            >
              I&apos;m open to full-stack developer roles, contract product
              work, and focused builds where production quality matters. If
              you&apos;re building something real, let&apos;s talk.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-10 sm:mb-16"
          style={{
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.div
            className="px-5 sm:px-8 py-5 sm:py-6"
            style={{ background: "var(--bg)" }}
            variants={staggerFadeUp}
          >
            <p className="font-mono-label text-muted mb-2">Direct contact</p>
            <motion.a
              href="mailto:nabarajbasnet2000@gmail.com"
              className="font-serif-heading text-base sm:text-xl break-all"
              style={{ color: "var(--fg)" }}
              whileHover={{ color: "var(--accent)" }}
              transition={{ duration: 0.2 }}
            >
              nabarajbasnet2000@gmail.com
            </motion.a>
          </motion.div>
          <motion.div
            className="px-5 sm:px-8 py-5 sm:py-6"
            style={{ background: "var(--bg)" }}
            variants={staggerFadeUp}
          >
            <p className="font-mono-label text-muted mb-2">Best fit</p>
            <p className="text-sm" style={{ color: "var(--fg)" }}>
              Full-stack roles, microservice builds, API design, production
              hardening, real-time features.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 sm:mb-16"
          style={{
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-2"
              style={{ background: "var(--bg)" }}
              variants={staggerFadeUp}
              whileHover={{
                background: "rgba(197,248,42,0.05)",
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              <span style={{ color: "var(--fg-muted)" }}>{s.icon}</span>
              <span className="font-mono-label text-muted">{s.label}</span>
              <span
                className="text-xs truncate"
                style={{ color: "var(--fg)" }}
              >
                {s.handle}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <span className="font-mono-label text-muted">
            © {new Date().getFullYear()} Nabaraj Basnet
          </span>
          <span className="font-mono-label text-muted">
            Next.js · Nest.js · TypeScript · Tailwind
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
