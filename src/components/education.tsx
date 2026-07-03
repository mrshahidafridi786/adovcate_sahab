'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Award, BookOpen } from 'lucide-react';

const EDUCATION_ITEMS = [
  {
    category: 'Degree',
    title: 'Bachelor of Laws (LL.B)',
    institution: 'University of Peshawar',
    period: 'Completed',
    icon: GraduationCap,
    details: 'Completed core legal coursework covering Constitutional Law, Civil Procedure Code (CPC), Code of Criminal Procedure (CrPC), Pakistan Penal Code, Revenue Laws, and Equity Principles.',
  },
  {
    category: 'Professional License',
    title: 'Advocate High Court Enrollment',
    institution: 'Khyber Pakhtunkhwa Bar Council',
    period: 'Licensed Practitioner',
    icon: Landmark,
    details: 'Enrolled as a practicing Advocate of the High Court, granting representation rights before the Peshawar High Court, tax tribunals, district courts, and regulatory agencies in KP.',
  },
  {
    category: 'Bar Association',
    title: 'Peshawar High Court Bar Association (PHCBA)',
    institution: 'High Court Bar Assembly',
    period: 'Active Member',
    icon: Award,
    details: 'Active member participating in PHCBA legal panels, advocacy workshops, and reform coordination, fostering professional development and regional litigation standards.',
  },
  {
    category: 'Specialization',
    title: 'Tax Practitioner Certification',
    institution: 'Federal Board of Revenue (FBR)',
    period: 'Registered Practitioner',
    icon: BookOpen,
    details: 'Officially certified and registered with FBR to advise clients on federal income tax, provincial sales tax, KPRA filings, corporate audits, and appellate actions.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#F8FAFC] dark:bg-[#090d16] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Qualifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Education &amp; Credentials
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Formal legal education and official licensing credentials ensuring authoritative advocacy before the bar and bench.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl border-slate-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300 flex gap-5 relative overflow-hidden group"
              >
                {/* Visual Accent */}
                <div className="absolute inset-y-0 left-0 w-[4px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                <div className="w-12 h-12 rounded-xl bg-primary-navy/5 dark:bg-white/5 group-hover:bg-accent-gold/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Icon className="w-5.5 h-5.5 text-slate-700 dark:text-slate-300 group-hover:text-accent-gold transition-colors duration-300" />
                </div>

                <div>
                  <span className="inline-block text-[9px] tracking-widest font-bold text-accent-gold uppercase mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-primary-navy dark:text-white mb-1 group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    {item.institution} — <span className="text-slate-400 dark:text-accent-gold/70">{item.period}</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
