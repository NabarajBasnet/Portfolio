'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', section: 'hero' },
  { name: 'About', section: 'about' },
  { name: 'Skills', section: 'skills' },
  { name: 'Contact', section: 'contact' },
];

export default function Navbar({ currentSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/40'
            : 'bg-transparent'
        )}
      >
        <div className="text-2xl font-bold tracking-tighter">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-foreground hover:text-primary transition-colors duration-300"
          >
            Nabaraj<span className="text-primary">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.section);
              }}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                currentSection === item.section
                  ? 'text-primary'
                  : 'text-foreground/70'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20"
          >
            <nav className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.section}
                  href={`#${item.section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.section);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    'text-2xl font-medium my-4 transition-colors hover:text-primary',
                    currentSection === item.section
                      ? 'text-primary'
                      : 'text-foreground/70'
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}