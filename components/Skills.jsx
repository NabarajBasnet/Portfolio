'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import SkillCard from '@/components/SkillCard';

// Frontend skills
const frontendSkills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
];

// Backend skills
const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'RESTful APIs', level: 85 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-background/95 to-background"
    >
      <motion.div
        className="container max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <Separator className="w-24 h-1 bg-primary mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 p-6 border border-border/30 rounded-lg bg-card/30 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-4">Other Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Redux Toolkit', 'React Query', 'React Hook Form', 'Zod', 'Authentication', 'CRUD', 'UI Libraries', 'Responsive Design'].map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}