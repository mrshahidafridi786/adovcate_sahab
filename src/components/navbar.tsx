'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Scale } from 'lucide-react';
import { useTheme } from './theme-provider';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Scroll-Spy
      const scrollPosition = window.scrollY + 160;
      for (const item of NAV_ITEMS) {
        const id = item.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-accent-gold/40 flex items-center justify-center rounded-lg bg-primary-navy/5 dark:bg-white/5 transition-colors group-hover:border-accent-gold">
            <Scale className="w-5 h-5 text-accent-gold transition-transform group-hover:rotate-6" />
          </div>
          <div>
            <span className="block font-serif text-lg font-bold tracking-wider text-primary-navy dark:text-white uppercase transition-colors group-hover:text-accent-gold">
              M. Atif Khattak
            </span>
            <span className="block text-[10px] tracking-[0.2em] font-medium text-slate-500 dark:text-accent-gold/80 uppercase">
              Advocate High Court
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative py-2 text-sm tracking-wide transition-colors font-medium ${
                      isActive
                        ? 'text-accent-gold font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-accent-gold'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
            </button>

            {/* Book Consultation Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-primary-navy dark:bg-accent-gold text-white dark:text-primary-navy border border-transparent hover:bg-transparent hover:text-primary-navy hover:border-primary-navy dark:hover:bg-transparent dark:hover:text-accent-gold dark:hover:border-accent-gold transition-all duration-300 animate-gold-glow"
            >
              Book Consultation
            </a>
          </div>
        </nav>

        {/* Mobile Navbar Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <div className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-b border-slate-200 dark:border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-1.5 text-sm font-medium tracking-wide transition-colors ${
                        isActive ? 'text-accent-gold' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full py-2.5 text-center rounded-lg text-xs font-semibold uppercase tracking-wider bg-primary-navy dark:bg-accent-gold text-white dark:text-primary-navy"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
