'use client';

import { motion } from 'framer-motion';
import { Briefcase, Landmark, ShieldCheck, Scale, Award } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Panel Advocate',
    organization: 'Board of Intermediate & Secondary Education (BISE) Peshawar',
    period: '2019 - Present',
    icon: Landmark,
    details: 'Serving as standing legal counsel. Actively representing BISE Peshawar in educational service matters, administrative appeals, and regulatory litigation before district courts and the Peshawar High Court.',
  },
  {
    role: 'Legal Advisor',
    organization: 'All Employees Coordination Council, Civil Secretariat KPK',
    period: '2021 - Present',
    icon: Award,
    details: 'Providing strategic advisory services to civil service panels. Meticulously vetting civil servant regulations, representing service tribunal matters, and drafting representation structures.',
  },
  {
    role: 'Independent Practicing Lawyer',
    organization: 'Peshawar High Court & District Courts',
    period: '2018 - Present',
    icon: Scale,
    details: 'Managing a diverse trial and appellate litigation catalog. Representing private and commercial clients in property suits, constitutional writs, civil injunctions, and criminal defense trials.',
  },
  {
    role: 'Registered Tax Practitioner',
    organization: 'Federal Board of Revenue (FBR) & KP Revenue Authority',
    period: '2018 - Present',
    icon: Briefcase,
    details: 'Assisting corporate and private entities with taxation advisory. Drafting compliance forms, auditing tax positions, and filing appeals before commissioners and FBR tribunals.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A solid track record of institutional legal representation, corporate counsel, and High Court advocacy.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Center/Left Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-800 timeline-line pointer-events-none transform -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  {/* Icon Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-10 h-10 rounded-full bg-primary-navy dark:bg-[#0c121e] border-2 border-accent-gold flex items-center justify-center shadow-lg group-hover:bg-accent-gold transition-colors duration-300"
                    >
                      <Icon className="w-4.5 h-4.5 text-accent-gold group-hover:text-primary-navy transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Left Block (Empty on desktop if even, content if odd) */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-[10px] tracking-widest font-bold text-accent-gold uppercase mb-3">
                        {exp.period}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-primary-navy dark:text-white mb-1 group-hover:text-accent-gold transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-3">
                        {exp.organization}
                      </h4>
                    </motion.div>
                  </div>

                  {/* Spacer for structure */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Timeline Card details */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="glass-card p-6 rounded-2xl border-slate-100 dark:border-slate-800/80 group-hover:border-accent-gold/25 transition-colors duration-300"
                    >
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {exp.details}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
