'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'Legal Research', percentage: 95 },
  { name: 'Court Representation', percentage: 90 },
  { name: 'Negotiation', percentage: 88 },
  { name: 'Legal Drafting', percentage: 92 },
  { name: 'Corporate Advisory', percentage: 85 },
  { name: 'Tax Advisory', percentage: 90 },
  { name: 'Litigation', percentage: 92 },
  { name: 'Legal Consultation', percentage: 90 },
  { name: 'Case Analysis', percentage: 94 },
  { name: 'Client Communication', percentage: 92 },
];

interface SkillBarProps {
  name: string;
  percentage: number;
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold tracking-wider text-primary-navy dark:text-white uppercase font-sans">
          {name}
        </span>
        <span className="text-xs font-bold text-accent-gold font-sans">
          {percentage}%
        </span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
        {/* Glow behind bar */}
        <div className="absolute inset-y-0 left-0 bg-accent-gold/20 filter blur-[2px] rounded-full" style={{ width: `${percentage}%` }} />
        
        {/* Dynamic bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="h-full bg-gradient-to-r from-accent-gold to-accent-gold/80 rounded-full relative z-10"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
                Expertise Matrix
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Professional Skills &amp; Capabilities
              </h2>
              <div className="w-12 h-1 bg-accent-gold mb-6" />
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-sans text-base">
                A modern legal practice requires a blend of courtroom tenacity, academic research excellence, and strategic negotiation skills.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
                Through years of practical trial representation and institutional advisory, I have refined these core capacities to deliver elite legal counsel.
              </p>
            </motion.div>
          </div>

          {/* Right Progress Bars Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 sm:p-10 rounded-2xl border-slate-100 dark:border-slate-800/80 shadow-md grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
            >
              {SKILLS.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
