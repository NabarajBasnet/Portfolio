"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  EASE_OUT,
  gsap,
  MOTION_OK,
  revealOnScroll,
  splitReveal,
  useGsap,
} from "@/lib/gsap";

const HORIZONTAL =
  "(min-width: 768px) and (min-height: 520px) and (prefers-reduced-motion: no-preference)";

const skillGroups = [
  {
    category: "Backend",
    description: "Service design, gateways, and the contracts between them.",
    skills: [
      "NestJS",
      "Node.js",
      "Express.js",
      "gRPC",
      "Microservices",
      "REST",
    ],
  },
  {
    category: "Data",
    description: "Relational modelling, document stores, and caching.",
    skills: ["PostgreSQL", "TypeORM", "MongoDB", "Redis"],
  },
  {
    category: "Async & real-time",
    description: "Queues, scheduled jobs, live chat, and video calls.",
    skills: ["BullMQ", "WebSockets", "Socket.io", "WebRTC"],
  },
  {
    category: "Frontend & mobile",
    description: "Web and React Native apps on top of the APIs.",
    skills: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Payments & infra",
    description: "Marketplace payments, storage, and shipping it.",
    skills: [
      "Stripe",
      "Stripe Connect",
      "AWS S3",
      "Docker",
      "VPS deploys",
      "GitHub Actions",
    ],
  },
  {
    category: "System design",
    description: "The patterns that keep it correct under real traffic.",
    skills: [
      "Multi-tenancy",
      "RBAC",
      "ACID transactions",
      "Idempotency",
      "Event-driven design",
      "API gateway",
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (mm, section) => {
    mm.add({ horizontal: HORIZONTAL, motion: MOTION_OK }, (ctx) => {
      const { horizontal, motion } = ctx.conditions as Record<string, boolean>;
      if (!motion) return;

      splitReveal(section.querySelector("h2"), {
        scrollTrigger: { trigger: section, start: "top 70%" },
      });

      if (!horizontal) {
        revealOnScroll(section);
        return;
      }

      section.dataset.layout = "horizontal";
      const pin = section.querySelector<HTMLElement>("[data-pin]")!;
      const track = section.querySelector<HTMLElement>("[data-track]")!;
      const panels = gsap.utils.toArray<HTMLElement>("[data-skill]", track);
      const bar = section.querySelector("[data-progress-bar]");
      const counter = section.querySelector("[data-progress-count]");
      const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth);

      const updateProgress = () => {
        const max = distance();
        const progress = max ? -Number(gsap.getProperty(track, "x")) / max : 0;
        gsap.set(bar, { scaleX: progress });
        if (counter) {
          counter.textContent = pad(
            Math.round(progress * (panels.length - 1)) + 1,
          );
        }
      };

      const scrollTween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        onUpdate: updateProgress,
        scrollTrigger: {
          trigger: pin,
          pin: true,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.from(section.querySelectorAll("[data-intro-fade]"), {
        opacity: 0,
        y: 16,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.08,
        delay: 0.2,
        scrollTrigger: { trigger: section, start: "top 70%" },
      });

      panels.forEach((panel) => {
        const visibleAtStart = panel.offsetLeft < pin.clientWidth * 0.85;
        gsap.from(panel.querySelectorAll("[data-skill-item]"), {
          y: 36,
          opacity: 0,
          duration: 1,
          ease: EASE_OUT,
          stagger: 0.06,
          scrollTrigger: visibleAtStart
            ? { trigger: section, start: "top 60%" }
            : {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 85%",
                toggleActions: "play none none reverse",
              },
        });
        gsap.fromTo(
          panel.querySelector("[data-skill-index]"),
          { xPercent: 35 },
          {
            xPercent: -35,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });

      return () => {
        delete section.dataset.layout;
      };
    });
  });

  return (
    <section
      ref={ref}
      id="stack"
      data-scroll-offset="0"
      className="skills relative"
    >
      <div data-pin className="skills-pin py-24 sm:py-32">
        <div className="container-page">
          <div className="flex items-center justify-between gap-6 pb-4 border-b border-[var(--line-strong)]">
            <p className="label">04 — Stack</p>
            <div className="skills-progress items-center gap-4">
              <span className="label tabular-nums">
                <span data-progress-count>01</span> / {pad(skillGroups.length)}
              </span>
              <span className="relative block w-32 h-[2px] bg-[var(--line-strong)]">
                <span
                  data-progress-bar
                  className="absolute inset-0 origin-left scale-x-0 bg-[var(--cherry)]"
                />
              </span>
            </div>
            <p className="skills-static label">{skillGroups.length} areas</p>
          </div>
        </div>

        <div data-track className="skills-track container-page mt-10 sm:mt-14">
          <div className="skills-intro">
            <h2 className="heading text-[clamp(2.1rem,4vw,3.4rem)]">
              The toolkit behind it.
            </h2>
            <p
              data-intro-fade
              className="mt-6 max-w-[36ch] text-[1.0625rem] text-[var(--cream-muted)]"
            >
              What I reach for when a system needs to be correct first and fast
              second.
            </p>
            <p
              data-intro-fade
              className="skills-progress label mt-auto pt-10 items-center gap-3"
            >
              Keep scrolling <ArrowRight size={14} />
            </p>
          </div>

          {skillGroups.map((group, i) => (
            <article
              key={group.category}
              data-skill
              data-reveal
              className="skill-panel relative flex flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
            >
              <span
                aria-hidden
                data-skill-index
                className="pointer-events-none absolute -right-2 -top-8 select-none text-[9rem] font-semibold leading-none tracking-[-0.06em] text-white/[0.04]"
              >
                {pad(i + 1)}
              </span>
              <div className="relative">
                <p data-skill-item className="label">
                  {pad(i + 1)} / {pad(skillGroups.length)}
                </p>
                <h3
                  data-skill-item
                  className="heading mt-6 text-[clamp(1.75rem,2.6vw,2.4rem)]"
                >
                  {group.category}
                </h3>
                <p data-skill-item className="mt-3 text-[var(--cream-muted)]">
                  {group.description}
                </p>
              </div>
              <ul data-skill-item className="relative flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
