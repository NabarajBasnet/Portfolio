"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerFadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/animations";

const skillGroups = [
  {
    index: "01",
    category: "Frontend",
    skills: [
      { name: "Next.js", note: "App Router" },
      { name: "React", note: "Hooks, context" },
      { name: "TypeScript", note: "Strict mode" },
      { name: "Tailwind CSS", note: "Utility-first" },
    ],
  },
  {
    index: "02",
    category: "Backend",
    skills: [
      { name: "NestJS", note: "DI, modules" },
      { name: "Node.js", note: "Runtime" },
      { name: "Express.js", note: "REST" },
      { name: "gRPC", note: "Proto + streaming" },
      { name: "Microservices", note: "Service mesh" },
    ],
  },
  {
    index: "03",
    category: "Databases",
    skills: [
      { name: "PostgreSQL", note: "Per-service" },
      { name: "MongoDB", note: "Document model" },
      { name: "Redis", note: "Cache + streams" },
    ],
  },
  {
    index: "04",
    category: "Infrastructure",
    skills: [
      { name: "Docker", note: "Compose + images" },
      { name: "Turborepo", note: "Monorepo" },
      { name: "pnpm", note: "Workspaces" },
      { name: "GitHub Actions", note: "CI/CD" },
    ],
  },
  {
    index: "05",
    category: "Real-time & APIs",
    skills: [
      { name: "Socket.io", note: "Bidirectional" },
      { name: "REST", note: "OpenAPI" },
      { name: "Redis Streams", note: "Event bus" },
    ],
  },
  {
    index: "06",
    category: "System Design",
    skills: [
      { name: "Service boundaries", note: "DDD" },
      { name: "Event-driven", note: "Pub/sub" },
      { name: "JWT auth", note: "Refresh rotation" },
      { name: "API Gateway", note: "Single ingress" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 lg:px-24 py-24 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="flex items-start gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <span className="font-mono-label text-muted pt-1 shrink-0">
            03 ——
          </span>
          <div>
            <h2
              className="font-serif-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight"
              style={{ color: "var(--fg)" }}
            >
              Technical Skills
            </h2>
            <p className="font-mono-label text-muted mt-2">
              Tools selected for shipping reliable, scalable systems
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y"
          style={
            {
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
              "--tw-divide-opacity": 1,
            } as React.CSSProperties
          }
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.index}
              className="p-6 lg:p-8"
              style={{
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                background: "var(--card-bg)",
              }}
              variants={scaleIn}
              whileHover={{
                background: "rgba(197,248,42,0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.4 }}
                >
                  {group.index}
                </motion.span>
                <h3
                  className="font-serif-heading text-lg"
                  style={{ color: "var(--fg)" }}
                >
                  {group.category}
                </h3>
              </div>

              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={staggerContainer}
              >
                {group.skills.map((s) => (
                  <motion.li
                    key={s.name}
                    className="flex items-center justify-between"
                    variants={staggerFadeUp}
                  >
                    <span className="text-sm" style={{ color: "var(--fg)" }}>
                      {s.name}
                    </span>
                    <span className="font-mono-label text-muted">{s.note}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
