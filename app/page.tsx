"use client";

import SmoothScroll from "../components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SmoothScroll>
      <div className="relative z-10">
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="top"
        className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Top label row */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono-label text-muted">
              Based in Kathmandu, Nepal
            </span>
            <span
              className="inline-flex items-center gap-1.5 font-mono-label"
              style={{ color: "var(--accent)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              Open to work
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
            <div>
              <h1
                className="font-serif-heading text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] tracking-tight mb-8"
                style={{ color: "var(--fg)" }}
              >
                Nabaraj
                <br />
                <em style={{ color: "var(--accent)" }}>Basnet</em>
              </h1>

              <p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ color: "var(--fg-muted)" }}
              >
                Full-stack software developer building scalable microservices
                and production-grade web applications. I care about clean
                architecture, reliable systems, and shipping software that
                works.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  className="btn-accent"
                  onClick={() => scrollTo("projects")}
                >
                  View projects
                </button>
                <a
                  href="https://www.linkedin.com/in/nabaraj-basnet-1b9216248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Contact me
                </a>
              </div>
            </div>

            {/* Stat block */}
            <div
              className="grid grid-cols-2 gap-px lg:grid-cols-1 lg:gap-0 lg:w-52"
              style={{
                border: "1px solid var(--border)",
                background: "var(--border)",
              }}
            >
              {[
                { value: "2+", label: "Years shipping" },
                { value: "2", label: "Apps in production" },
                { value: "6+", label: "Services in TrainLink" },
                { value: "3", label: "DBs mastered" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-4"
                  style={{ background: "var(--bg)" }}
                >
                  <div
                    className="font-serif-heading text-3xl mb-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {s.value}
                  </div>
                  <div className="font-mono-label text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SKILLS ── */}
      <section
        id="skills"
        className="px-6 md:px-16 lg:px-24 py-24 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Section header */}
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
            {[
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
            ].map((group) => (
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
                      <span className="font-mono-label text-muted">
                        {s.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="px-6 md:px-16 lg:px-24 py-24 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Section header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="font-mono-label text-muted pt-1 shrink-0">
              04 ——
            </span>
            <div>
              <h2
                className="font-serif-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Selected Work
              </h2>
              <p className="font-mono-label text-muted mt-2">
                Shipped to production, not toy examples
              </p>
            </div>
          </div>

          <div
            className="space-y-px"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* FitStock */}
            <div
              className="grid lg:grid-cols-[1fr_1.2fr] gap-0 group"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div
                className="p-8 lg:p-10 flex flex-col justify-between"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-label text-muted">
                      2024 / shipped
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 font-mono-label"
                      style={{ color: "var(--accent)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "var(--accent)" }}
                      />
                      Live · Paying client
                    </span>
                  </div>

                  <h3
                    className="font-serif-heading text-3xl md:text-4xl mb-1"
                    style={{ color: "var(--fg)" }}
                  >
                    FitStock
                  </h3>
                  <p
                    className="font-serif-heading italic text-lg mb-6"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Inventory Management SaaS
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["NestJS", "MongoDB", "TypeScript", "React"].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div
                  className="mb-6 pl-4"
                  style={{ borderLeft: "2px solid var(--accent)" }}
                >
                  <p className="font-mono-label text-muted mb-1">Impact</p>
                  <p
                    style={{
                      color: "var(--fg)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Multi-branch inventory system currently live with a paying
                    gym client.
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Multi-branch inventory management system built for gyms and
                  fitness businesses. Covers stock transfers between branches,
                  barcode-based product tracking, low-stock alerts, sales
                  reporting, and a complete audit trail so every change is
                  logged and traceable.
                </p>

                <ul className="space-y-2">
                  {[
                    "Multi-branch stock transfer flows",
                    "Barcode scanning for product lookup",
                    "Low-stock threshold alerts",
                    "Full audit trail on every mutation",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          marginTop: "0.15em",
                        }}
                      >
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TrainLink */}
            <div
              className="grid lg:grid-cols-[1fr_1.2fr] gap-0 group"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div
                className="p-8 lg:p-10 flex flex-col justify-between"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-label text-muted">
                      2025 / in progress
                    </span>
                    <span
                      className="font-mono-label"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Private beta
                    </span>
                  </div>

                  <h3
                    className="font-serif-heading text-3xl md:text-4xl mb-1"
                    style={{ color: "var(--fg)" }}
                  >
                    TrainLink
                  </h3>
                  <p
                    className="font-serif-heading italic text-lg mb-6"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Fitness Marketplace Platform
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "NestJS",
                    "PostgreSQL",
                    "gRPC",
                    "Docker",
                    "Turborepo",
                    "Redis",
                  ].map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <div
                  className="mb-6 pl-4"
                  style={{ borderLeft: "2px solid var(--accent)" }}
                >
                  <p className="font-mono-label text-muted mb-1">
                    Architecture
                  </p>
                  <p
                    style={{
                      color: "var(--fg)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    8 independent microservices behind a single API Gateway,
                    communicating via gRPC.
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Two-sided marketplace connecting personal trainers with
                  clients. Microservices architecture with 8 independent
                  services — auth, billing, core, media, notifications — each
                  with their own PostgreSQL database, communicating via gRPC
                  behind a single API Gateway.
                </p>

                <ul className="space-y-2">
                  {[
                    "8 services behind a single API Gateway",
                    "Redis-backed refresh token rotation",
                    "Per-service PostgreSQL databases",
                    "Dockerized deployment with Turborepo",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          marginTop: "0.15em",
                        }}
                      >
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SmoothScroll>
  );
}
