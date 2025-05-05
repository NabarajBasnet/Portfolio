'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-background to-background/95"
    >
      <motion.div
        className="container max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <Separator className="w-24 h-1 bg-primary mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <div className="relative w-full aspect-square mb-6 md:mb-0 overflow-hidden rounded-lg border border-border/30 bg-muted/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <img
                src="./image.jpg"
                alt="Nabaraj Basnet"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants} 
            className="md:col-span-7 flex flex-col space-y-6"
          >
            <p className="text-lg text-foreground/80">
              I'm a passionate Full Stack Developer with expertise in building modern web applications
              using cutting-edge technologies. I focus on creating clean, efficient, and user-friendly
              solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-foreground/80">
              My journey in web development started with a curiosity about how websites work,
              and has evolved into a deep understanding of both frontend and backend technologies.
              I enjoy the process of transforming ideas into functional and beautiful applications.
            </p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Vision</h3>
                  <p className="text-foreground/70">
                    Creating intuitive digital experiences that make a positive impact on people's lives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Approach</h3>
                  <p className="text-foreground/70">
                    User-centered design combined with clean code architecture and performance optimization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}