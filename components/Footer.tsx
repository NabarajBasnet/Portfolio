"use client";

import { useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import {
  gsap,
  MOTION_OK,
  revealOnScroll,
  splitReveal,
  useGsap,
} from "@/lib/gsap";

const EMAIL = "nabarajbasnet2000@gmail.com";

const socials = [
  {
    label: "GitHub",
    handle: "@NabarajBasnet",
    href: "https://github.com/NabarajBasnet",
  },
  {
    label: "LinkedIn",
    handle: "in/nabaraj-basnet",
    href: "https://www.linkedin.com/in/nabaraj-basnet-1b9216248/",
  },
  {
    label: "Instagram",
    handle: "@nabaraj__basnet",
    href: "https://www.instagram.com/nabaraj__basnet/",
  },
  {
    label: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGsap(ref, (mm, root) => {
    mm.add(MOTION_OK, () => {
      splitReveal(root.querySelector("h2"), {
        scrollTrigger: { trigger: root, start: "top 75%" },
      });
      revealOnScroll(root);

      gsap.from(root.querySelectorAll("[data-char]"), {
        yPercent: 100,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: root.querySelector("[data-band]"),
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
    });
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer
      ref={ref}
      id="contact"
      className="border-t border-[var(--line)] overflow-hidden"
    >
      <div className="container-page py-24 sm:py-32">
        <div className="flex items-center justify-between gap-6 mb-10 sm:mb-14">
          <p className="label">05 — Contact</p>
          <p className="label inline-flex items-center gap-2.5">
            <span className="marker animate-pulse" />
            Open to new roles
          </p>
        </div>

        <h2 className="heading text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[0.98] tracking-[-0.045em] max-w-[13ch]">
          Building something real? Let&apos;s talk.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p
            data-reveal
            className="max-w-[50ch] text-[1.0625rem] text-[var(--cream-muted)]"
          >
            I&apos;m open to full-stack and backend roles, contract product
            work, and focused builds where production quality matters —
            microservices, API design, payments, and real-time features.
          </p>
          <div data-reveal className="flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="btn btn-light">
              Email me <ArrowUpRight size={16} />
            </a>
            <button onClick={copyEmail} className="btn btn-outline">
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>

        <ul
          data-reveal
          className="mt-16 sm:mt-20 border-t border-[var(--line)]"
        >
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group grid grid-cols-[6.5rem_minmax(0,1fr)_auto] sm:grid-cols-[12rem_minmax(0,1fr)_auto] items-center gap-4 py-5 border-b border-[var(--line)]"
              >
                <span className="label">{s.label}</span>
                <span className="truncate text-[var(--cream)] group-hover:text-[var(--white)] transition-colors">
                  {s.handle}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--label)] group-hover:text-[var(--white)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-band className="bg-[var(--cherry)] text-[var(--cream)]">
        <div className="container-page pt-6 sm:pt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm">
          <span>© {new Date().getFullYear()} Nabaraj Basnet</span>
          <span className="hidden sm:inline">Kathmandu, Nepal</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 hover:text-[var(--white)] transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
        <p
          aria-hidden
          className="overflow-hidden pb-20 whitespace-nowrap text-center font-semibold leading-[0.8] tracking-[-0.06em] text-[clamp(5rem,27vw,26rem)] pt-4 sm:pt-6 select-none"
        >
          {"Nabaraj".split("").map((char, i) => (
            <span key={i} data-char className="inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
