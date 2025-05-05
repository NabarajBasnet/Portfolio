'use client';

import { motion } from 'framer-motion';

export default function SkillCard({ name, level, index }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-sm text-foreground/60">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ 
            duration: 1,
            delay: index * 0.1 + 0.3,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
}