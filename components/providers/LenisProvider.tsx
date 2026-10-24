"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const NAV_OFFSET = -88;

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let instance: Lenis | null = null;
    const tick = (time: number) => instance?.raf(time * 1000);

    if (!reduceMotion) {
      instance = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      instance.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href")!.slice(1);
      const target = id === "top" ? 0 : document.getElementById(id);
      if (target === null) return;

      event.preventDefault();
      const custom =
        typeof target === "number" ? undefined : target.dataset.scrollOffset;
      const offset =
        typeof target === "number"
          ? 0
          : custom !== undefined
            ? Number(custom)
            : NAV_OFFSET;
      if (instance) {
        instance.scrollTo(target, { offset, duration: 1.4 });
      } else {
        const top =
          typeof target === "number"
            ? target
            : target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", onClick);

    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      instance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
