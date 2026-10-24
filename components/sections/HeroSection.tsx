"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EASE_OUT, gsap, MOTION_OK, splitReveal, useGsap } from "@/lib/gsap";

const endings = [
  "production.",
  "real traffic.",
  "peak hours.",
  "the real world.",
];

const facts = [
  { label: "Now", value: "Frontend Developer at OnePasal" },
  { label: "Building", value: "Fitbinary — Trainlink, Fitcloud, Fitstock" },
  { label: "Core", value: "NestJS, gRPC, PostgreSQL, Redis, React" },
  { label: "Next", value: "Open to full-stack & backend roles", live: true },
];

function KathmanduClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kathmandu",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const update = () => setTime(format.format(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums text-[var(--cream)]">
      {time ?? "--:--:--"}
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (mm, root) => {
    document.documentElement.classList.remove("hero-pending");

    mm.add(MOTION_OK, () => {
      gsap
        .timeline({ defaults: { ease: EASE_OUT, duration: 1.2 } })
        .from(
          "[data-hero-media]",
          { opacity: 0, scale: 1.1, duration: 2.6, ease: "power2.out" },
          0,
        )
        .from("[data-hero-label]", { autoAlpha: 0, y: 12 }, 0.2)
        .from("[data-hero-fade]", { autoAlpha: 0, y: 20, stagger: 0.08 }, 0.7)
        .from(
          "[data-row-line]",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.5,
            stagger: 0.1,
          },
          0.65,
        )
        .from(
          "[data-row-content]",
          { autoAlpha: 0, x: -12, stagger: 0.06 },
          0.85,
        )
        .from("[data-hero-bar]", { autoAlpha: 0, y: 10 }, 1.2);

      splitReveal(root.querySelector("[data-hero-title]"), {
        duration: 1.3,
        stagger: 0.1,
        delay: 0.3,
      });

      const words = gsap.utils.toArray<HTMLElement>(
        "[data-rotator-word]",
        root,
      );
      gsap.set(words.slice(1), { yPercent: 110, autoAlpha: 1 });
      gsap.from(words[0], {
        yPercent: 110,
        duration: 1.3,
        ease: EASE_OUT,
        delay: 0.55,
      });

      const cycle = gsap.timeline({ repeat: -1, delay: 2.4 });
      words.forEach((word, i) => {
        const next = words[(i + 1) % words.length];
        cycle
          .to(
            word,
            { yPercent: -110, duration: 0.9, ease: "expo.inOut" },
            "+=2.2",
          )
          .fromTo(
            next,
            { yPercent: 110 },
            { yPercent: 0, duration: 0.9, ease: "expo.inOut" },
            "<",
          );
      });

      gsap.to("[data-hero-breathe]", {
        scale: 1.07,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(
          "[data-hero-img]",
          { scale: 1.22, yPercent: 0, opacity: 0.6, filter: "grayscale(0%)" },
          {
            scale: 1.04,
            yPercent: 30,
            opacity: 0.85,
            filter: "grayscale(100%)",
          },
          0,
        )
        .to("[data-hero-scrim]", { opacity: 0.5 }, 0)
        .to("[data-hero-inner]", { y: -120, opacity: 0 }, 0);
    });
  });

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      <div
        aria-hidden
        data-hero-media
        data-hero-hide
        className="absolute inset-0 pointer-events-none"
      >
        <div data-hero-breathe className="absolute inset-0">
          <div
            data-hero-img
            className="absolute inset-0 scale-[1.22] opacity-60 will-change-transform"
          >
            <Image
              src="/nabaraj-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </div>
        <div data-hero-scrim className="hero-scrim absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </div>

      <div data-hero-inner className="relative flex-1 flex flex-col">
        <div className="container-page flex-1 flex flex-col justify-center pt-32 pb-14">
          <p data-hero-label data-hero-hide className="label mb-8 sm:mb-10">
            Full-stack engineer · Kathmandu, Nepal
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_19rem] gap-14 lg:gap-16 items-end">
            <div>
              <h1
                data-hero-hide
                className="heading text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[0.98] tracking-[-0.045em] max-w-[11em]"
              >
                <span data-hero-title className="block">
                  I build software that holds up in
                </span>
                <span className="sr-only">{endings[0]}</span>
                <span
                  aria-hidden
                  className="grid overflow-hidden pb-[0.12em] -mb-[0.12em] text-[var(--cream)]"
                >
                  {endings.map((ending, i) => (
                    <span
                      key={ending}
                      data-rotator-word
                      className={`[grid-area:1/1] whitespace-nowrap ${
                        i === 0 ? "" : "invisible"
                      }`}
                    >
                      {ending}
                    </span>
                  ))}
                </span>
              </h1>

              <p
                data-hero-fade
                data-hero-hide
                className="mt-8 max-w-[34rem] text-[1.0625rem] text-[var(--cream-muted)]"
              >
                Backend-first full-stack developer working in TypeScript. I
                design the parts that have to be right — payments, queues,
                real-time calls — and the interfaces people use on top of them.
              </p>

              <div
                data-hero-fade
                data-hero-hide
                className="mt-10 flex flex-wrap gap-3"
              >
                <a href="#work" className="btn btn-light">
                  View selected work <ArrowDown size={16} />
                </a>
                <a
                  href="https://github.com/NabarajBasnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline backdrop-blur-sm"
                >
                  GitHub <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nabaraj-basnet-1b9216248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline backdrop-blur-sm"
                >
                  LinkedIn <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <dl>
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="relative grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 py-4"
                >
                  <span
                    aria-hidden
                    data-row-line
                    data-hero-hide
                    className="absolute inset-x-0 top-0 h-px bg-[var(--line-strong)]"
                  />
                  <dt data-row-content data-hero-hide className="label pt-px">
                    {f.label}
                  </dt>
                  <dd
                    data-row-content
                    data-hero-hide
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--cream)]"
                  >
                    {f.live && (
                      <span className="marker mt-[0.45rem] animate-pulse" />
                    )}
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div
          data-hero-bar
          data-hero-hide
          className="container-page pb-8 flex items-center justify-between gap-6"
        >
          <a
            href="#about"
            className="label inline-flex items-center gap-3 hover:text-[var(--cream)] transition-colors"
          >
            <span className="relative block w-10 h-px overflow-hidden bg-[var(--line-strong)]">
              <span className="scroll-cue absolute inset-0 bg-[var(--cream)]" />
            </span>
            Scroll
          </a>
          <p className="label">
            Kathmandu <KathmanduClock /> NPT
          </p>
        </div>
      </div>
    </section>
  );
}
