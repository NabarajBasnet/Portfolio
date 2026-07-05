"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerFadeUp,
  viewportOptions,
} from "@/lib/animations";

interface Project {
  id: string;
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
    year: "2024 / ongoing",
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
    year: "2024 / shipped",
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
    year: "2024 / live",
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
    year: "Aug 2025 / ongoing",
    status: { label: "Professional work · Since Aug 2025", live: false },
    name: "OnePasal",
    subtitle: "Admin, Vendor & Customer Portals",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://onepasal.com/",
    description:
      "Worked across all three portals — admin, vendor, and customer — as part of the engineering team. Focused on building scalable, reusable component architecture and clean API integration patterns across the platform.",
    points: [
      "Built and maintained features across admin, vendor, and customer portals",
      "Reusable component architecture shared across multiple portals",
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
        <motion.div
          className="flex items-start gap-4 sm:gap-6 mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <span className="font-mono-label text-muted pt-1 shrink-0">
            04 ——
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

        <div
          className="space-y-px"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {projects.map((project, pi) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Left panel */}
              <motion.div
                className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6"
                style={{ borderBottom: "1px solid var(--border)" }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={slideInLeft}
                transition={{ delay: pi * 0.08 }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span className="font-mono-label text-muted">
                      {project.year}
                    </span>
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

                  <motion.h3
                    className="font-serif-heading text-2xl sm:text-3xl md:text-4xl mb-1"
                    style={{ color: "var(--fg)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{
                      delay: pi * 0.08 + 0.15,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {project.name}
                  </motion.h3>
                  <p
                    className="font-serif-heading italic text-base sm:text-lg mb-4 sm:mb-6"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={staggerContainer}
                    transition={{ delayChildren: pi * 0.08 + 0.25 }}
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
                    className="btn-outline self-start"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOptions}
                    transition={{ delay: pi * 0.08 + 0.35, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Visit site ↗
                  </motion.a>
                </div>
              </motion.div>

              {/* Right panel */}
              <motion.div
                className="p-6 sm:p-8 lg:p-10"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={slideInRight}
                transition={{ delay: pi * 0.08 + 0.05 }}
              >
                {project.highlight && (
                  <motion.div
                    className="mb-5 sm:mb-6 pl-4"
                    style={{ borderLeft: "2px solid var(--accent)" }}
                    initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={viewportOptions}
                    transition={{
                      delay: pi * 0.08 + 0.2,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <p className="font-mono-label text-muted mb-1">
                      {project.highlight.label}
                    </p>
                    <p
                      style={{
                        color: "var(--fg)",
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {project.highlight.text}
                    </p>
                  </motion.div>
                )}

                <motion.p
                  className="text-sm leading-relaxed mb-5 sm:mb-6"
                  style={{ color: "var(--fg-muted)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ delay: pi * 0.08 + 0.3, duration: 0.6 }}
                >
                  {project.description}
                </motion.p>

                {project.points && project.points.length > 0 && (
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={staggerContainer}
                    transition={{ delayChildren: pi * 0.08 + 0.35 }}
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
                            marginTop: "0.15em",
                            flexShrink: 0,
                          }}
                        >
                          —
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
