"use client";

const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "2", label: "Apps in production" },
  { value: "6+", label: "Services in TrainLink" },
  { value: "3", label: "DBs mastered" },
];

interface HeroSectionProps {
  onViewProjects: () => void;
}

export default function HeroSection({ onViewProjects }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
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
              Full-stack software developer building scalable microservices and
              production-grade web applications. I care about clean architecture,
              reliable systems, and shipping software that works.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="btn-accent" onClick={onViewProjects}>
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

          <div
            className="grid grid-cols-2 gap-px lg:grid-cols-1 lg:gap-0 lg:w-52"
            style={{
              border: "1px solid var(--border)",
              background: "var(--border)",
            }}
          >
            {stats.map((s) => (
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
  );
}
