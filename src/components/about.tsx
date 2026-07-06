'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Target, Shield, Compass } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1.5; // in seconds
      const stepTime = Math.max(Math.floor((duration * 1000) / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl font-extrabold text-accent-gold block mb-1">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-accent-gold/5 rounded-l-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Graphic details */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-2xl border-accent-gold/20 shadow-xl relative overflow-hidden group"
            >
              {/* Crest background accent */}
              <div className="absolute -right-16 -bottom-16 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                <Scale className="w-64 h-64 text-accent-gold" />
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-accent-gold" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-primary-navy dark:text-white mb-4">
                Professional Advocacy
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                My approach to legal counsel is built on three pillars: unwavering integrity, meticulous strategic planning, and aggressive pursuit of positive results. With deep courtroom familiarity and a wide legal command, I serve clients throughout KPK and beyond.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-navy dark:text-white mb-1">High Court Practice</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Licensed to represent clients before the Peshawar High Court in critical disputes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-navy dark:text-white mb-1">Corporate &amp; Advisory</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Acting counsel to institutions, secretariats, and tax entities on commercial safety.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Text details */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
                Biography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                About Khurshid Azam
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-sans text-base">
                Khurshid Azam is a highly respected, multi-disciplinary practicing lawyer in Peshawar, specializing in litigation, civil disputes, criminal defence, taxation matters, and corporate advisory. He serves as a Panel Advocate at the Board of Intermediate and Secondary Education (BISE) Peshawar and represents civil servants as the Legal Advisor to the All Employees Coordination Council, Civil Secretariat KPK.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-sans text-base">
                With a deep understanding of regional regulations and an extensive litigation history at the High Court, he serves individuals, corporations, and public sector associations with strategic wisdom and professional diligence.
              </p>
            </motion.div>

            {/* Mission, Vision, Values Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4.5 h-4.5 text-accent-gold" />
                  <h4 className="font-serif text-base font-bold text-primary-navy dark:text-white">Our Mission</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To deliver exceptional, goal-oriented representation with absolute confidentiality and ethical practice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-4.5 h-4.5 text-accent-gold" />
                  <h4 className="font-serif text-base font-bold text-primary-navy dark:text-white">Our Vision</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  To act as a beacon of legal trust and security, empowering clients with legal shield solutions in Pakistan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4.5 h-4.5 text-accent-gold" />
                  <h4 className="font-serif text-base font-bold text-primary-navy dark:text-white">Core Values</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Unbending professionalism, absolute transparency, confidentiality, and fierce courtroom representation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 border-t border-slate-100 dark:border-slate-900 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Counter value={8} suffix="+" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Years Experience
              </span>
            </div>
            <div>
              <Counter value={550} suffix="+" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Cases Handled
              </span>
            </div>
            <div>
              <Counter value={400} suffix="+" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Satisfied Clients
              </span>
            </div>
            <div>
              <Counter value={12} suffix="+" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Organizations Served
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
