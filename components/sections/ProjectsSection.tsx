"use client";

const projects = [
  {
    id: "fitstock",
    year: "2024 / shipped",
    status: { label: "Live · Paying client", live: true },
    name: "FitStock",
    subtitle: "Inventory Management SaaS",
    tags: ["NestJS", "MongoDB", "TypeScript", "React"],
    highlight: {
      label: "Impact",
      text: "Multi-branch inventory system currently live with a paying gym client.",
    },
    description:
      "Multi-branch inventory management system built for gyms and fitness businesses. Covers stock transfers between branches, barcode-based product tracking, low-stock alerts, sales reporting, and a complete audit trail so every change is logged and traceable.",
    points: [
      "Multi-branch stock transfer flows",
      "Barcode scanning for product lookup",
      "Low-stock threshold alerts",
      "Full audit trail on every mutation",
    ],
  },
  {
    id: "trainlink",
    year: "2025 / in progress",
    status: { label: "Private beta", live: false },
    name: "TrainLink",
    subtitle: "Fitness Marketplace Platform",
    tags: ["NestJS", "PostgreSQL", "gRPC", "Docker", "Turborepo", "Redis"],
    highlight: {
      label: "Architecture",
      text: "8 independent microservices behind a single API Gateway, communicating via gRPC.",
    },
    description:
      "Two-sided marketplace connecting personal trainers with clients. Microservices architecture with 8 independent services — auth, billing, core, media, notifications — each with their own PostgreSQL database, communicating via gRPC behind a single API Gateway.",
    points: [
      "8 services behind a single API Gateway",
      "Redis-backed refresh token rotation",
      "Per-service PostgreSQL databases",
      "Dockerized deployment with Turborepo",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 py-24 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
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
          {projects.map((project) => (
            <div
              key={project.id}
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

                  <h3
                    className="font-serif-heading text-3xl md:text-4xl mb-1"
                    style={{ color: "var(--fg)" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="font-serif-heading italic text-lg mb-6"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
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
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.points.map((point) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
