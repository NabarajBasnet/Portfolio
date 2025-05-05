'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.2 },
  }),
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,rgba(0,0,0,0)_70%)]" />
      
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          Hi, I'm <span className="text-primary">Nabaraj Basnet</span>
        </motion.h1>
        
        <motion.h2
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl md:text-2xl font-medium text-foreground/70 mb-8"
        >
          Full Stack Developer
        </motion.h2>
        
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-2xl mx-auto text-base md:text-lg text-foreground/60 mb-12"
        >
          I build exceptional digital experiences with modern technologies.
          Specializing in creating elegant, responsive, and high-performance web applications.
        </motion.p>
        
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Button
            onClick={scrollToAbout}
            variant="default"
            size="lg"
            className="group"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div
          onClick={scrollToAbout}
          className="w-8 h-14 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}