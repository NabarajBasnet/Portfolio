'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.2, ease: "easeOut" },
  }),
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-black"
    >
      {/* Tech-themed background */}
      <div className="absolute inset-0 -z-10">
        {/* White gradient glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-black" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Cpath d='M7 8v44h44V8H7zm1 1h42v42H8V9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 -z-5">
        {/* React icon */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-white/10"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.121zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z" />
          </svg>
        </motion.div>

        {/* Code brackets */}
        <motion.div
          className="absolute top-1/3 right-1/5 text-white/8"
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.5 6.5L3 12l5.5 5.5L7 19l-7-7 7-7 1.5 1.5zm7 0L21 12l-5.5 5.5L17 19l7-7-7-7-1.5 1.5z" />
          </svg>
        </motion.div>

        {/* Database icon */}
        <motion.div
          className="absolute bottom-1/4 left-1/5 text-white/10"
          animate={{
            y: [-8, 8, -8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm8 5.25c0 2.21-3.58 4-8 4s-8-1.79-8-4V10c0 2.21 3.58 4 8 4s8-1.79 8-4v-1.75zm0 5.25c0 2.21-3.58 4-8 4s-8-1.79-8-4V15c0 2.21 3.58 4 8 4s8-1.79 8-4v-1.5z" />
          </svg>
        </motion.div>

        {/* API/Network icon */}
        <motion.div
          className="absolute top-1/2 right-1/4 text-white/8"
          animate={{
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-8.5L9 14.5m6-6L9 2.5" />
          </svg>
        </motion.div>

        {/* Terminal icon */}
        <motion.div
          className="absolute bottom-1/3 right-1/6 text-white/9"
          animate={{
            y: [5, -15, 5],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 17h16v-2H4v2zm0-4h16v-2H4v2zm0-4h16V7H4v2zM2 3v18h20V3H2zm18 16H4V5h16v14z" />
          </svg>
        </motion.div>

        {/* Cloud/SaaS icon */}
        <motion.div
          className="absolute top-2/3 left-1/4 text-white/8"
          animate={{
            y: [-12, 8, -12],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </motion.div>
      </div>

      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 60px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Hi, I'm
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mt-2"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <span className="relative inline-block">
              NABARAJ
              <motion.div
                className="absolute -bottom-4 left-0 h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                style={{
                  boxShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with icons */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Code className="w-8 h-8 text-white/60" />
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-light text-white/90 tracking-wide">
            FULL STACK DEVELOPER
          </h2>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-8 h-8 text-white/60" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 mb-12 leading-relaxed font-light"
        >
          I build <span className="text-white font-medium">exceptional digital experiences</span> with modern technologies.
          Specializing in creating <span className="text-white font-medium">elegant, responsive, and high-performance</span> web applications.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.button
            onClick={scrollToAbout}
            className="group relative px-12 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              EXPLORE MY WORK
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </span>

            {/* Hover shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.div
          onClick={scrollToAbout}
          className="relative w-8 h-16 border-2 border-white/30 rounded-full flex items-start justify-center p-2 cursor-pointer group hover:border-white/50 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          {/* Mouse wheel indicator */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-4 bg-white/60 rounded-full group-hover:bg-white/80 transition-colors duration-300"
          />

          {/* Subtle glow around scroll indicator */}
          <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        </motion.div>
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
            }}
            animate={{
              y: [-15, -35, -15],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}