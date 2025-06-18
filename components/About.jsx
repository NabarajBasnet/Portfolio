'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-black relative overflow-hidden"
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        {/* Single subtle glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <motion.div
        className="container max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-white rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 z-10" />
                
                <img
                  src="./image.jpg"
                  alt="Nabaraj Basnet"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-1 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            variants={itemVariants} 
            className="lg:col-span-7 space-y-8"
          >
            {/* Main description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with expertise in building modern web applications
                using cutting-edge technologies. I focus on creating clean, efficient, and user-friendly
                solutions that solve real-world problems.
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                My journey in web development started with a curiosity about how websites work,
                and has evolved into a deep understanding of both <span className="text-white font-medium">frontend and backend</span> technologies.
                I enjoy the process of transforming ideas into functional and beautiful applications.
              </p>
            </div>
            
            {/* Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <h3 className="text-xl font-semibold text-white tracking-wide">VISION</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Creating intuitive digital experiences that make a positive impact on people's lives.
                  </p>
                </div>
              </div>
              
              <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <h3 className="text-xl font-semibold text-white tracking-wide">APPROACH</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    User-centered design combined with clean code architecture and performance optimization.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats or highlights */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">3+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}