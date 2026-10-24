"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import { EASE_OUT, gsap, MOTION_OK, revealOnScroll, useGsap } from "@/lib/gsap";

const facts = [
  { label: "Based in", value: "Kathmandu, Nepal" },
  { label: "Focus", value: "Backend systems, APIs & product UI" },
  { label: "Day job", value: "Frontend Developer at OnePasal" },
  { label: "Own products", value: "Fitbinary — Trainlink, Fitcloud, Fitstock" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useGsap(ref, (mm, root) => {
    mm.add(MOTION_OK, () => {
      const photo = root.querySelector("[data-photo]");
      const image = root.querySelector("[data-photo-img]");

      gsap.fromTo(
        photo,
        { clipPath: "inset(100% 0% 0% 0% round 0.75rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 0.75rem)",
          duration: 1.6,
          ease: EASE_OUT,
          scrollTrigger: { trigger: photo, start: "top 82%" },
        },
      );
      gsap.fromTo(
        image,
        { scale: 1.25 },
        {
          scale: 1.08,
          duration: 2,
          ease: EASE_OUT,
          scrollTrigger: { trigger: photo, start: "top 82%" },
        },
      );
      gsap.fromTo(
        image,
        { yPercent: -4, filter: "grayscale(100%)" },
        {
          yPercent: 4,
          filter: "grayscale(0%)",
          ease: "none",
          scrollTrigger: {
            trigger: photo,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      revealOnScroll(root);
    });
  });

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          index="01"
          label="About"
          title="I like the parts of software most people never see."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[22rem_minmax(0,1fr)] gap-12 lg:gap-20 items-start">
          <figure
            data-photo
            className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-[var(--surface)]"
          >
            <div data-photo-img className="absolute inset-0">
              <Image
                src="/nabaraj-basnet.webp"
                alt="Nabaraj Basnet — Full-Stack Software Developer from Kathmandu, Nepal"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 22rem"
              />
            </div>
          </figure>

          <div>
            <div className="space-y-6 text-[1.125rem] leading-relaxed max-w-[60ch]">
              <p data-reveal className="text-[var(--cream)]">
                I&apos;m a full-stack developer who spends most of my time on
                the backend: service boundaries, transactions, queues, and the
                failure cases that only show up once real users arrive.
              </p>
              <p data-reveal className="text-[var(--cream-muted)]">
                By day I build frontend features at OnePasal. The rest of my
                time goes into Fitbinary, my own product company, where I
                design, build, and run every product end to end — from the
                database schema to the Play Store release.
              </p>
            </div>

            <dl className="mt-14 border-t border-[var(--line)]">
              {facts.map((f) => (
                <div
                  key={f.label}
                  data-reveal
                  className="grid grid-cols-1 sm:grid-cols-[10rem_minmax(0,1fr)] gap-1 sm:gap-6 py-4 border-b border-[var(--line)]"
                >
                  <dt className="label pt-0.5">{f.label}</dt>
                  <dd className="text-[var(--white)]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
