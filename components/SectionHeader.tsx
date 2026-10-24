"use client";

import { useRef } from "react";
import { EASE_OUT, gsap, MOTION_OK, splitReveal, useGsap } from "@/lib/gsap";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
}

export default function SectionHeader({
  index,
  label,
  title,
  intro,
  aside,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGsap(ref, (mm, root) => {
    mm.add(MOTION_OK, () => {
      const enter = () => ({ trigger: root, start: "top 85%" });
      gsap.from(root.querySelector("[data-rule]"), {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.6,
        ease: EASE_OUT,
        scrollTrigger: enter(),
      });
      gsap.from(root.querySelectorAll("[data-fade]"), {
        opacity: 0,
        y: 14,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.08,
        delay: 0.15,
        scrollTrigger: enter(),
      });
      splitReveal(root.querySelector("h2"), {
        delay: 0.1,
        scrollTrigger: enter(),
      });
    });
  });

  return (
    <div ref={ref} className="mb-14 sm:mb-20">
      <div className="relative flex items-center justify-between gap-6 pt-4 mb-10 sm:mb-14">
        <span
          aria-hidden
          data-rule
          className="absolute inset-x-0 top-0 h-px bg-[var(--line-strong)]"
        />
        <p data-fade className="label">
          {index} — {label}
        </p>
        {aside && (
          <p data-fade className="label text-right">
            {aside}
          </p>
        )}
      </div>
      <h2 className="heading text-[clamp(2.1rem,4.6vw,3.6rem)] max-w-[20ch]">
        {title}
      </h2>
      {intro && (
        <p
          data-fade
          className="mt-6 max-w-[56ch] text-[1.0625rem] text-[var(--cream-muted)]"
        >
          {intro}
        </p>
      )}
    </div>
  );
}
