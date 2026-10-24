"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const EASE_OUT = "expo.out";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGsap(
  scope: RefObject<HTMLElement | null>,
  setup: (mm: gsap.MatchMedia, root: HTMLElement) => void,
) {
  useIsoLayoutEffect(() => {
    if (!scope.current) return;
    const mm = gsap.matchMedia(scope.current);
    setup(mm, scope.current);
    return () => mm.revert();
  }, []);
}

export function splitReveal(el: Element | null, vars: gsap.TweenVars = {}) {
  if (!el) return;
  SplitText.create(el, {
    type: "lines",
    mask: "lines",
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 110,
        duration: 1.2,
        ease: EASE_OUT,
        stagger: 0.08,
        ...vars,
      }),
  });
}

export function revealOnScroll(root: Element) {
  const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return;
  gsap.set(items, { opacity: 0, y: 28 });
  ScrollTrigger.batch(items, {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.08,
        overwrite: true,
      }),
  });
}

let refreshTimer: number | undefined;

export function refreshSoon(delay = 600) {
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), delay);
}
