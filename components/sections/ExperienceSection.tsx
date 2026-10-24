"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { gsap, MOTION_OK, revealOnScroll, useGsap } from "@/lib/gsap";
import {
  durationSince,
  FITBINARY_START,
  ONEPASAL_START,
  projects,
} from "@/lib/content";

interface Role {
  company: string;
  link: string;
  role: string;
  kind: string;
  period: string;
  start: { year: number; month: number };
  summary: string;
  points: string[];
  stack: string[];
  hasProducts?: boolean;
}

const roles: Role[] = [
  {
    company: "OnePasal",
    link: "https://onepasal.com/",
    role: "Frontend Developer",
    kind: "Employment",
    period: "Aug 2025 — Present",
    start: ONEPASAL_START,
    summary:
      "Working across all three of OnePasal's portals — admin, vendor, and customer — as part of the engineering team, inside an existing production codebase.",
    points: [
      "Build and maintain features across the admin, vendor, and customer portals",
      "Reusable component architecture shared between portals",
      "Clean, scalable API integration patterns across the platform",
    ],
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "Fitbinary",
    link: "https://www.fitbinary.com/",
    role: "Founder & Full-Stack Engineer",
    kind: "My own products",
    period: "2024 — Present",
    start: FITBINARY_START,
    summary:
      "Fitbinary is the umbrella for everything I build independently. I own each product end to end — architecture, backend, mobile apps, deployment, and support for the businesses using them.",
    points: [
      "Grew Fitcloud from single-gym software into a multi-tenant SaaS, then a microservices platform",
      "Shipped Trainlink, Fitcloud, and Fitstock to the Play Store",
      "Run the shared platform: auth/admin and notification services, Dockerized on a VPS",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
    hasProducts: true,
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (mm, root) => {
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        root.querySelector("[data-rail-fill]"),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-timeline]"),
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
          },
        },
      );
      revealOnScroll(root);
    });
  });

  return (
    <section ref={ref} id="experience" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="03"
          label="Experience"
          title="Where I've been working."
          aside="2 roles · both ongoing"
          intro="A full-time frontend role, and my own product company alongside it."
        />

        <ol data-timeline className="relative">
          <span
            aria-hidden
            className="absolute top-2 bottom-0 left-[3px] md:left-[15rem] w-px bg-[var(--line-strong)]"
          />
          <span
            aria-hidden
            data-rail-fill
            className="absolute top-2 bottom-0 left-[2.5px] md:left-[calc(15rem-0.5px)] w-[2px] origin-top bg-[var(--cherry)]"
          />

          {roles.map((r) => (
            <li
              key={r.company}
              className="relative grid grid-cols-1 md:grid-cols-[13rem_minmax(0,1fr)] gap-x-16 gap-y-5 pl-8 md:pl-0 pb-20 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute top-[0.45rem] left-0 md:left-[calc(15rem-3px)] w-[7px] h-[7px] bg-[var(--cherry)] ring-4 ring-[var(--bg)]"
              />

              <div data-reveal className="md:text-right">
                <p className="font-mono text-sm text-[var(--cream)]">
                  {r.period}
                </p>
                <p
                  className="mt-1 text-sm text-[var(--cream-muted)]"
                  suppressHydrationWarning
                >
                  {durationSince(r.start)}
                </p>
                <p className="label mt-2">{r.kind}</p>
              </div>

              <div data-reveal>
                <h3 className="heading text-[1.75rem] sm:text-[2.125rem] leading-tight">
                  {r.role}
                </h3>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1.5 text-lg text-[var(--cream)] link-underline"
                >
                  {r.company}
                  <ArrowUpRight size={16} />
                </a>

                <p className="mt-5 max-w-[62ch] text-[var(--cream-muted)]">
                  {r.summary}
                </p>

                {r.hasProducts && (
                  <div className="mt-8">
                    <p className="label mb-3">Products under Fitbinary</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {projects.map((p) => (
                        <a
                          key={p.id}
                          href={`#${p.id}`}
                          className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface-2)] transition-colors"
                        >
                          <span className="flex items-center justify-between font-medium text-[var(--white)]">
                            {p.name}
                            <ArrowUpRight
                              size={15}
                              className="text-[var(--label)] group-hover:text-[var(--white)] transition-colors"
                            />
                          </span>
                          <span className="block mt-0.5 text-sm leading-snug text-[var(--cream-muted)]">
                            {p.tagline}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="mt-8 space-y-3 max-w-[62ch]">
                  {r.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[var(--cream)]">
                      <span className="marker mt-[0.6rem]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
