'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/NabarajBasnet',
    color: 'hover:text-[#333]',
    hoverBg: 'hover:bg-white',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/nabaraj-basnet-1b9216248/',
    color: 'hover:text-[#0077B5]',
    hoverBg: 'hover:bg-white',
  },
  {
    name: 'Instagram',
    icon: <Instagram size={20} />,
    url: 'https://www.instagram.com/nabaraj__basnet/',
    color: 'hover:text-[#E1306C]',
    hoverBg: 'hover:bg-white',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:nabarajbasnet2000@gmail.com',
    color: 'hover:text-[#D44638]',
    hoverBg: 'hover:bg-white',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-secondary/30 text-foreground transition-all duration-300 ${link.color} ${link.hoverBg}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}