"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerFadeUp,
  viewportOptions,
} from "@/lib/animations";

interface Project {
  id: string;
  index: string;
  year: string;
  status: { label: string; live: boolean };
  name: string;
  subtitle: string;
  tags: string[];
  link: string;
  highlight?: { label: string; text: string };
  description: string;
  points?: string[];
}

const projects: Project[] = [
  {
    id: "fitbinary",
    index: "01",
    year: "2024 — ongoing",
    status: { label: "Live · Multi-product", live: true },
    name: "Fitbinary",
    subtitle: "Fitness Business Platform",
    tags: ["NestJS", "MongoDB", "TypeScript", "React", "Microservices"],
    link: "https://www.fitbinary.com/",
    description:
      "Fitbinary is a suite of products for gyms and fitness businesses, currently serving a paying client in production. FitStock and FitCloud are both products under the Fitbinary brand.",
  },
  {
    id: "fitstock",
    index: "02",
    year: "2024 — shipped",
    status: { label: "Live · Paying client", live: true },
    name: "FitStock",
    subtitle: "Inventory Management Platform",
    tags: ["NestJS", "MongoDB", "TypeScript", "React"],
    link: "https://fitstock.fitbinary.com/",
    highlight: {
      label: "Impact",
      text: "Multi-branch inventory system currently live with a paying gym client.",
    },
    description:
      "Multi-branch inventory management system built for gyms and fitness businesses, under Fitbinary. Covers stock transfers between branches, barcode-based product tracking, low-stock alerts, sales reporting, and a complete audit trail so every change is logged and traceable.",
    points: [
      "Multi-branch stock transfer flows",
      "Barcode scanning for product lookup",
      "Low-stock threshold alerts",
      "Full audit trail on every mutation",
    ],
  },
  {
    id: "fitcloud",
    index: "03",
    year: "2024 — live",
    status: { label: "Live · Paying client", live: true },
    name: "FitCloud",
    subtitle: "Gym Management Platform",
    tags: ["NestJS", "MongoDB", "TypeScript", "React"],
    link: "https://fitcloud.fitbinary.com/",
    description:
      "Gym management platform under Fitbinary, handling day-to-day gym operations. Originally built in Express, migrated to NestJS as part of a broader move toward a consistent microservices architecture across the Fitbinary product line.",
  },
  {
    id: "onepasal",
    index: "04",
    year: "Aug 2025 — ongoing",
    status: { label: "Professional · Since Aug 2025", live: false },
    name: "OnePasal",
    subtitle: "Admin, Vendor & Customer Portals",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://onepasal.com/",
    description:
      "Worked across all three portals — admin, vendor, and customer — as part of the engineering team. Focused on building scalable, reusable component architecture and clean API integration patterns across the platform.",
    points: [
      "Built and maintained features across all three portals",
      "Reusable component architecture shared across portals",
      "Scalable API integration patterns",
      "Collaborated within an existing production codebase",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-24 border-b overflow-x-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          className="flex items-start gap-4 sm:gap-6 mb-12 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <span className="font-mono-label text-muted pt-1 shrink-0">
            02 ——
          </span>
          <div>
            <h2
              className="font-serif-heading text-[clamp(1.8rem,5vw,3.5rem)] leading-tight"
              style={{ color: "var(--fg)" }}
            >
              Selected Work
            </h2>
            <p className="font-mono-label text-muted mt-2">
              Shipped to production
            </p>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, pi) => (
            <motion.article
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{
                delay: pi * 0.07,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--card-bg)",
                }}
              >
                {/* Ghost number watermark */}
                <div
                  className="absolute top-0 right-0 font-serif-heading leading-none select-none pointer-events-none hidden sm:block"
                  style={{
                    fontSize: "clamp(5rem, 12vw, 9rem)",
                    color: "rgba(243,242,236,0.03)",
                    lineHeight: 1,
                    transform: "translate(8%, -15%)",
                  }}
                >
                  {project.index}
                </div>

                {/* Top bar — index + year + status */}
                <div
                  className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-3 sm:py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className="font-mono-label font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      {project.index}
                    </span>
                    <span
                      className="font-mono-label"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {project.status.live ? (
                    <span
                      className="inline-flex items-center gap-1.5 font-mono-label"
                      style={{ color: "var(--accent)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "var(--accent)" }}
                      />
                      {project.status.label}
                    </span>
                  ) : (
                    <span
                      className="font-mono-label"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.status.label}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
                  {/* Left — name, subtitle, tags, link */}
                  <div
                    className="p-5 sm:p-8 flex flex-col gap-5 sm:gap-6"
                    style={{ borderRight: "1px solid var(--border)" }}
                  >
                    <div>
                      <h3
                        className="font-serif-heading text-3xl sm:text-4xl leading-tight mb-1"
                        style={{ color: "var(--fg)" }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="font-serif-heading italic text-base sm:text-lg"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOptions}
                      variants={staggerContainer}
                      transition={{ delayChildren: pi * 0.07 + 0.2 }}
                    >
                      {project.tags.map((t) => (
                        <motion.span
                          key={t}
                          className="tag"
                          variants={staggerFadeUp}
                          whileHover={{ scale: 1.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline self-start mt-auto"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOptions}
                      transition={{ delay: pi * 0.07 + 0.3, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Visit site ↗
                    </motion.a>
                  </div>

                  {/* Right — highlight, description, bullets */}
                  <div className="p-5 sm:p-8 flex flex-col gap-5">
                    {project.highlight && (
                      <div
                        className="pl-4 py-1"
                        style={{ borderLeft: "2px solid var(--accent)" }}
                      >
                        <p className="font-mono-label text-muted mb-1">
                          {project.highlight.label}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--fg)" }}
                        >
                          {project.highlight.text}
                        </p>
                      </div>
                    )}

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.description}
                    </p>

                    {project.points && project.points.length > 0 && (
                      <motion.ul
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        variants={staggerContainer}
                        transition={{ delayChildren: pi * 0.07 + 0.3 }}
                      >
                        {project.points.map((point) => (
                          <motion.li
                            key={point}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--fg-muted)" }}
                            variants={staggerFadeUp}
                          >
                            <span
                              style={{
                                color: "var(--accent)",
                                marginTop: "0.2em",
                                flexShrink: 0,
                              }}
                            >
                              ↳
                            </span>
                            {point}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
