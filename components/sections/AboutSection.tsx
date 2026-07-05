"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOptions } from "@/lib/animations";

const traits = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Location", value: "Kathmandu, Nepal" },
  { label: "Focus", value: "Microservices & APIs" },
  { label: "Currently", value: "Building Fitbinary" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-24 border-b overflow-x-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Photo column */}
          <motion.div
            className="relative overflow-hidden"
            style={{
              borderRight: "1px solid var(--border)",
              minHeight: "420px",
              maxHeight: "600px",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/last.png"
              alt="Nabaraj Basnet — Full-Stack Software Developer from Kathmandu, Nepal"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(8,8,8,0.7))",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 px-5 sm:px-7 py-4 flex items-end justify-between"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="font-mono-label text-white">Nabaraj Basnet</span>
              <span
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                Kathmandu, NP
              </span>
            </motion.div>
          </motion.div>

          {/* Content column */}
          <motion.div
            className="px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <span className="font-mono-label text-muted shrink-0">
                  01 ——
                </span>
                <div>
                  <h2
                    className="font-serif-heading text-[clamp(1.8rem,4vw,3rem)] leading-tight"
                    style={{ color: "var(--fg)" }}
                  >
                    About me
                  </h2>
                </div>
              </div>

              <motion.p
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: "var(--fg-muted)", maxWidth: "52ch" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                I&apos;m a full-stack software developer based in Kathmandu,
                Nepal, focused on building production-grade web applications and
                scalable microservices. I care deeply about clean architecture,
                reliable systems, and shipping software that actually works.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--fg-muted)", maxWidth: "52ch" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                I&apos;m the founder of Fitbinary — a suite of SaaS products for
                gyms and fitness businesses currently live with paying clients.
                I also contribute professionally to OnePasal as part of their
                engineering team.
              </motion.p>
            </div>

            {/* Trait grid */}
            <motion.div
              className="grid grid-cols-2 gap-px"
              style={{
                border: "1px solid var(--border)",
                background: "var(--border)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="px-4 sm:px-5 py-3 sm:py-4"
                  style={{ background: "var(--bg)" }}
                >
                  <p className="font-mono-label text-muted mb-1">{t.label}</p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--fg)" }}
                  >
                    {t.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOptions}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="https://github.com/NabarajBasnet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/nabaraj-basnet-1b9216248/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
