"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  fadeIn,
  fadeUp,
  slideInRight,
  staggerContainer,
  staggerFadeUp,
} from "@/lib/animations";

const stats = [
  { value: "2+", label: "Years shipping" },
  { value: "2", label: "Apps in production" },
  { value: "3", label: "DBs mastered" },
];

const titleWords = ["Nabaraj", "Basnet"];

interface HeroSectionProps {
  onViewProjects: () => void;
}

export default function HeroSection({ onViewProjects }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const statY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 pt-28 sm:pt-32 pb-16 sm:pb-20 border-b overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          <span className="font-mono-label text-muted">
            Based in Kathmandu, Nepal
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
          <motion.div style={{ y: contentY }}>
            <h1
              className="font-serif-heading text-[clamp(2.8rem,10vw,6.5rem)] leading-[1.05] tracking-tight mb-6 sm:mb-8"
              style={{ color: "var(--fg)" }}
            >
              {titleWords.map((word, wi) => (
                <motion.span
                  key={word}
                  className="inline-block overflow-hidden align-bottom"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: wi * 0.18 + 0.2,
                      },
                    },
                  }}
                >
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={ci}
                      className="inline-block"
                      style={
                        wi === 1
                          ? { color: "var(--accent)", fontStyle: "italic" }
                          : {}
                      }
                      variants={{
                        hidden: { y: "110%", opacity: 0 },
                        visible: {
                          y: "0%",
                          opacity: 1,
                          transition: {
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wi < titleWords.length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10"
              style={{ color: "var(--fg-muted)" }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.55 }}
            >
              Full-stack software developer building scalable microservices and
              production-grade web applications. I care about clean
              architecture, reliable systems, and shipping software that works.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delayChildren: 0.65 }}
            >
              <motion.button
                className="btn-accent"
                onClick={onViewProjects}
                variants={staggerFadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View projects
              </motion.button>
              <motion.a
                href="https://www.linkedin.com/in/nabaraj-basnet-1b9216248/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                variants={staggerFadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stat block — full width row on mobile, sidebar on desktop */}
          <motion.div
            style={{ y: statY }}
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ delay: 0.4 }}
          >
            <div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-px mt-10 lg:mt-0 lg:w-52"
              style={{
                border: "1px solid var(--border)",
                background: "var(--border)",
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="px-4 sm:px-5 py-3 sm:py-4"
                  style={{ background: "var(--bg)" }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <motion.div
                    className="font-serif-heading text-2xl sm:text-3xl mb-0.5"
                    style={{ color: "var(--accent)" }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.6 + i * 0.08,
                      duration: 0.4,
                      ease: "backOut",
                    }}
                  >
                    {s.value}
                  </motion.div>
                  <div className="font-mono-label text-muted">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
