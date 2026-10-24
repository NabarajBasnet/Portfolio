"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, ScrollTrigger, useGsap } from "@/lib/gsap";

const items = [
  "NestJS",
  "gRPC",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "WebSockets",
  "WebRTC",
  "Stripe Connect",
  "React Native",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "AWS S3",
];

export default function StackMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  useGsap(ref, (mm, root) => {
    mm.add(MOTION_OK, () => {
      const loop = gsap.to(root.querySelector("[data-marquee]"), {
        xPercent: -50,
        duration: 55,
        ease: "none",
        repeat: -1,
      });

      let boost = 0;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          boost = Math.min(Math.abs(self.getVelocity()) / 250, 7);
        },
      });
      const tick = () => {
        boost *= 0.94;
        loop.timeScale(
          gsap.utils.interpolate(loop.timeScale(), 1 + boost, 0.08),
        );
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative overflow-hidden border-y border-[var(--line)] py-5 select-none"
    >
      <div data-marquee className="flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="label flex items-center gap-10 pr-10 text-[0.8125rem] text-[var(--cream-muted)]"
              >
                <span className="marker" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
