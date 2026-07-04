"use client";

import React from "react";

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
        <div className="flex items-start gap-6 mb-16">
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
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y"
          style={
            {
              borderTop: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
              "--tw-divide-opacity": 1,
            } as React.CSSProperties
          }
        >
          {skillGroups.map((group) => (
            <div
              key={group.index}
              className="p-6 lg:p-8 group"
              style={{
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                background: "var(--card-bg)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "rgba(197,248,42,0.03)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--card-bg)")
              }
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {group.index}
                </span>
                <h3
                  className="font-serif-heading text-lg"
                  style={{ color: "var(--fg)" }}
                >
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm" style={{ color: "var(--fg)" }}>
                      {s.name}
                    </span>
                    <span className="font-mono-label text-muted">{s.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
