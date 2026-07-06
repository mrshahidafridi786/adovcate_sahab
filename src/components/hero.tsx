'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, Award, ShieldAlert, CheckCircle2 } from 'lucide-react';

const ROLES = [
  'Advocate High Court',
  'Tax Practitioner',
  'Panel Advocate BISE Peshawar',
  'Legal Advisor Civil Secretariat KPK',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && roleText === fullText) {
      // Pause before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setRoleText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-navy/[0.03] via-transparent to-transparent dark:from-[#080d16] dark:via-transparent dark:to-transparent"
    >
      {/* Background elegant details */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-navy/5 dark:bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />
        {/* Soft diagonal line texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Text details */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold mb-6"
          >
            <Scale className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-[0.2em] font-semibold uppercase">Peshawar High Court Advocate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-navy dark:text-white leading-[1.1] mb-4"
          >
            Khurshid Azam
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-8 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span className="text-lg md:text-xl font-medium text-accent-gold font-sans cursor-blink select-none">
              {roleText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans"
          >
            Providing strategic legal solutions with professionalism, integrity, and years of practical courtroom experience. Committed to protecting your rights and delivering favorable legal outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider bg-primary-navy dark:bg-accent-gold text-white dark:text-primary-navy border border-transparent hover:bg-accent-gold dark:hover:bg-primary-navy dark:hover:text-white dark:hover:border-accent-gold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

          </motion.div>
        </div>

        {/* Right Portrait Image details */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] flex items-center justify-center">
            {/* Soft background shape rotating */}
            <div className="absolute inset-2 bg-gradient-to-tr from-accent-gold via-accent-gold/20 to-transparent rounded-full animate-pulse-slow pointer-events-none" />

            {/* Glowing borders around the photo */}
            <div className="absolute inset-0 rounded-full border border-accent-gold/30 animate-gold-glow pointer-events-none" />

            {/* Portrait Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl relative z-10 animate-reveal-image"
            >
              <img
                src="/khurshid-azam.jpg"
                alt="Advocate Khurshid Azam"
                className="w-full h-full object-cover scale-[1.05] hover:scale-[1.12] transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Card 1: Tax Practitioner */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 z-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold text-primary-navy dark:text-white tracking-wide">
                Tax Practitioner
              </span>
            </motion.div>

            {/* Floating Card 2: Legal Advisor */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-12 z-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Award className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-semibold text-primary-navy dark:text-white tracking-wide">
                Legal Advisor
              </span>
            </motion.div>

            {/* Floating Card 3: Panel Advocate */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-2 -left-10 z-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Scale className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-semibold text-primary-navy dark:text-white tracking-wide">
                BISE Panel Advocate
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-[10px] tracking-[0.25em] font-semibold text-slate-400 dark:text-slate-500 uppercase hover:text-accent-gold transition-colors"
        >
          Scroll Down
          <div className="w-5 h-9 rounded-full border border-slate-300 dark:border-slate-800 flex justify-center p-1.5">
            <div className="w-1 h-2 bg-accent-gold rounded-full" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
