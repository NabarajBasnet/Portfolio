"use client";

import { Fragment, useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PlayStoreIcon } from "@/components/icons";
import {
  EASE_OUT,
  gsap,
  MOTION_OK,
  refreshSoon,
  revealOnScroll,
  useGsap,
} from "@/lib/gsap";
import { fitbinaryPlatform, projects, type Project } from "@/lib/content";

const STACK_TOP = 96;
const STACK_STEP = 18;
const STACK_BOTTOM_GAP = 24;

const pad = (n: number) => String(n).padStart(2, "0");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-card
      className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] origin-top will-change-transform"
    >
      <div
        aria-hidden
        data-card-shade
        className="pointer-events-none absolute inset-0 z-10 bg-black opacity-0"
      />

      <div className="p-6 sm:p-8 lg:p-10">
        <header className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[var(--line)]">
          <span className="label">
            {pad(index + 1)} / {pad(projects.length)} · Fitbinary
          </span>
          {project.status && (
            <span className="status">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cherry-soft)]" />
              {project.status}
            </span>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 pt-8">
          <div>
            <h3 className="heading text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
              {project.name}
            </h3>
            <p className="mt-3 text-lg text-[var(--cream)]">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-[46ch] text-[var(--cream-muted)]">
              {project.summary}
            </p>

            {project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      link.kind === "play"
                        ? `${project.name} on Google Play`
                        : undefined
                    }
                    className={`btn group ${
                      link.kind === "play" ? "btn-light" : "btn-outline"
                    }`}
                  >
                    {link.kind === "play" ? (
                      <PlayStoreIcon size={15} />
                    ) : (
                      <Globe size={16} strokeWidth={1.75} />
                    )}
                    {link.kind === "play"
                      ? link.label
                      : new URL(link.href).hostname}
                    <ArrowUpRight
                      size={14}
                      className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            )}

            <div className="mt-10">
              <p className="label mb-3">Stack</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line-strong)]">
              <p className="label">Engineering details</p>
              <p className="label tabular-nums">
                {pad(project.highlights.length)}
              </p>
            </div>

            <Accordion.Root
              type="single"
              collapsible
              defaultValue="0"
              onValueChange={() => refreshSoon()}
            >
              {project.highlights.map((h, i) => (
                <Accordion.Item
                  key={h.title}
                  value={String(i)}
                  className="border-b border-[var(--line)]"
                >
                  <Accordion.Header asChild>
                    <h4>
                      <Accordion.Trigger className="group flex w-full items-center gap-4 py-4 text-left">
                        <span className="w-7 shrink-0 font-mono text-xs text-[var(--label)] group-data-[state=open]:text-[var(--cherry-soft)] transition-colors">
                          {pad(i + 1)}
                        </span>
                        <span className="flex-1 font-medium leading-snug text-[var(--cream)] group-hover:text-[var(--white)] group-data-[state=open]:text-[var(--white)] transition-colors">
                          {h.title}
                        </span>
                        <span
                          aria-hidden
                          className="relative w-3.5 h-3.5 shrink-0 text-[var(--label)] group-hover:text-[var(--white)] transition-colors"
                        >
                          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-data-[state=open]:scale-y-0" />
                        </span>
                      </Accordion.Trigger>
                    </h4>
                  </Accordion.Header>
                  <Accordion.Content className="accordion-content overflow-hidden">
                    <p className="pb-5 pl-11 pr-8 text-[0.9375rem] leading-relaxed text-[var(--cream-muted)]">
                      {h.text}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (mm, root) => {
    const items = gsap.utils.toArray<HTMLElement>("[data-stack-item]", root);
    const anchors = gsap.utils.toArray<HTMLElement>(
      "[data-stack-anchor]",
      root,
    );
    const tops: number[] = [];

    const place = () => {
      items.forEach((item, i) => {
        tops[i] = Math.min(
          STACK_TOP + i * STACK_STEP,
          window.innerHeight - item.offsetHeight - STACK_BOTTOM_GAP,
        );
        item.style.top = `${tops[i]}px`;
      });
    };

    mm.add("all", () => {
      place();
      const observer = new ResizeObserver(() => {
        place();
        refreshSoon();
      });
      items.forEach((item) => observer.observe(item));
      window.addEventListener("resize", place);
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", place);
        items.forEach((item) => (item.style.top = ""));
      };
    });

    mm.add(MOTION_OK, () => {
      revealOnScroll(root);
      const anchorTop = (i: number) =>
        anchors[i].getBoundingClientRect().top + window.scrollY;

      items.forEach((item, i) => {
        const card = item.querySelector("[data-card]");
        gsap.from(card, {
          y: 90,
          opacity: 0,
          duration: 1.3,
          ease: EASE_OUT,
          scrollTrigger: { trigger: item, start: "top 92%", once: true },
        });

        if (i === items.length - 1) return;
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              start: () => anchorTop(i + 1) - window.innerHeight,
              end: () => anchorTop(i + 1) - tops[i + 1],
              scrub: true,
              invalidateOnRefresh: true,
            },
          })
          .to(card, { scale: 0.92 }, 0)
          .to(item.querySelector("[data-card-shade]"), { opacity: 0.55 }, 0);
      });
    });
  });

  return (
    <section ref={ref} id="work" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="02"
          label="Selected work"
          title="Products I've designed, built, and run."
          aside="3 products · Fitbinary"
          intro="All three live under Fitbinary, my own product company, and share the same platform services. Open any detail to see how it's built."
        />

        <div className="relative">
          {projects.map((project, i) => (
            <Fragment key={project.id}>
              <span
                id={project.id}
                data-stack-anchor
                aria-hidden
                className="block h-0"
              />
              <div
                data-stack-item
                className="sticky top-24 mb-[14vh] last:mb-0"
              >
                <ProjectCard project={project} index={i} />
              </div>
            </Fragment>
          ))}
        </div>

        <aside
          data-reveal
          className="mt-8 grid grid-cols-1 md:grid-cols-[14rem_minmax(0,1fr)] gap-6 md:gap-10 rounded-2xl border border-dashed border-[var(--line-strong)] p-6 sm:p-8"
        >
          <div>
            <p className="label mb-3">Shared infrastructure</p>
            <h3 className="heading text-2xl">Fitbinary Platform</h3>
          </div>
          <ul className="space-y-3 md:pt-1">
            {fitbinaryPlatform.map((item) => (
              <li key={item} className="flex gap-3 text-[var(--cream)]">
                <span className="marker mt-[0.6rem]" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
