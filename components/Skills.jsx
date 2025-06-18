'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

const SkillCard = ({ name, level, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Skill name and percentage */}
        <div className="relative z-10 flex justify-between items-center mb-4">
          <h4 className="text-white font-semibold text-lg tracking-wide">{name}</h4>
          <span className="text-white/70 font-mono text-sm">{level}%</span>
        </div>

        {/* Progress bar container */}
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-white/5 rounded-full" />

          {/* Progress bar */}
          <motion.div
            className="h-full bg-gradient-to-r from-white/80 to-white/60 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

            {/* Moving shine effect */}
            <motion.div
              className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-32, 200] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                delay: index * 0.2
              }}
            />
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute -inset-1 bg-white/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        />
      </div>
    </motion.div>
  );
};

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Large glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
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
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            SKILLS
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-white mx-auto rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-8 tracking-wide relative inline-block">
                FRONTEND
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-white/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h3>
            </div>
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

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-8 tracking-wide relative inline-block">
                BACKEND
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-white/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </h3>
            </div>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  index={index + frontendSkills.length}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools & Technologies */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">
              TOOLS & TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Git', 'Redux Toolkit', 'React Query', 'React Hook Form', 'Zod', 'Authentication', 'CRUD', 'UI Libraries', 'Responsive Design'].map((tool, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Corner glow effects */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full blur-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}