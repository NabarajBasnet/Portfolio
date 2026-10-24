"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { EASE_OUT, gsap, MOTION_OK, ScrollTrigger, useGsap } from "@/lib/gsap";

const navLinks = [
  { label: "Work", id: "work", index: "02" },
  { label: "Experience", id: "experience", index: "03" },
  { label: "Stack", id: "stack", index: "04" },
  { label: "Contact", id: "contact", index: "05" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGsap(headerRef, (mm, header) => {
    mm.add("all", () => {
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) =>
            setActive((current) =>
              self.isActive ? id : current === id ? null : current,
            ),
        });
      });

      gsap.fromTo(
        header.querySelector("[data-progress]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );
    });

    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        header,
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: EASE_OUT, delay: 0.1 },
      );
    });
  });

  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      data-hero-hide
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`relative border-b transition-colors duration-300 ${
          solid
            ? "bg-[rgba(39,39,42,0.82)] backdrop-blur-xl border-[var(--line)]"
            : "border-transparent"
        }`}
      >
        <div className="container-page h-[4.5rem] flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="justify-self-start inline-flex items-center gap-2.5 rounded-lg border border-[var(--line-strong)] py-1.5 pl-1.5 pr-3 hover:bg-[var(--surface)] transition-colors"
          >
            <Image
              src="/icon-96.webp"
              alt=""
              width={26}
              height={26}
              className="rounded-full"
              priority
            />
            <span className="whitespace-nowrap text-sm font-medium text-[var(--white)]">
              Nabaraj Basnet
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navLinks.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  active === id
                    ? "text-[var(--white)]"
                    : "text-[var(--cream-muted)] hover:text-[var(--white)]"
                }`}
              >
                {label}
                <span
                  aria-hidden
                  className={`absolute left-1/2 bottom-0.5 -translate-x-1/2 w-1 h-1 bg-[var(--cherry)] transition-opacity ${
                    active === id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="justify-self-end flex items-center gap-2">
            <a
              href="#contact"
              className="btn btn-outline btn-sm hidden md:inline-flex"
            >
              Get in touch
            </a>
            <button
              className="md:hidden w-10 h-10 rounded-lg border border-[var(--line-strong)] flex items-center justify-center text-[var(--white)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="container-page pb-4" aria-label="Mobile">
              {navLinks.map(({ label, id, index }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 border-t border-[var(--line)] text-[var(--cream)]"
                >
                  {label}
                  <span className="label">{index}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <span
          aria-hidden
          data-progress
          className="absolute left-0 -bottom-px h-[2px] w-full origin-left scale-x-0 bg-[var(--cherry)]"
        />
      </div>
    </header>
  );
}
