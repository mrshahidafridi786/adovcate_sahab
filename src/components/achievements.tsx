'use client';

import { motion } from 'framer-motion';
import { Scale, Award, Landmark, DollarSign, ShieldAlert, CheckCircle, ShieldCheck, Briefcase } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'Panel Advocate Appointment',
    subtitle: 'BISE Peshawar',
    description: 'Officially appointed legal counsel managing a wide catalog of cases, regulatory disputes, and administrative policies.',
    icon: Landmark,
  },
  {
    title: 'Civil Secretariat Advisory',
    subtitle: 'Coordination Council KPK',
    description: 'Serving as the official legal advisor to the All Employees Coordination Council, guiding civil servants on procedural and constitutional rights.',
    icon: Award,
  },
  {
    title: 'Active High Court Practice',
    subtitle: 'Peshawar Jurisdictions',
    description: 'Representing critical civil writs, criminal appeals, and commercial tax litigation directly before High Court benches.',
    icon: Scale,
  },
  {
    title: 'Taxation Advisory Milestones',
    subtitle: 'FBR & KPRA Practice',
    description: 'Developed a robust tax consultation wing helping retail, commercial, and salary clients file returns and secure tax exemptions.',
    icon: DollarSign,
  },
  {
    title: 'High Court Bar Membership',
    subtitle: 'PHCBA Affiliation',
    description: 'Elected member of the Peshawar High Court Bar Association, collaborating on public interest litigations and legal aid programs.',
    icon: ShieldCheck,
  },
  {
    title: '500+ Legal Matters Settled',
    subtitle: 'Trial & Mediation successes',
    description: 'Successfully guided over 500 litigation, regulatory, and corporate matters to favorable resolutions inside and outside courtrooms.',
    icon: Briefcase,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#F8FAFC] dark:bg-[#090d16] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Honors &amp; Appointments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Professional Achievements
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A selection of key credentials, panel appointments, and career milestones achieved through years of diligent practice.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-2xl border-slate-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Gold Glow behind */}
                <div className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-accent-gold/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="w-11 h-11 rounded-full bg-primary-navy/5 dark:bg-white/5 group-hover:bg-accent-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  
                  <span className="text-[9px] tracking-widest font-bold text-accent-gold uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-primary-navy dark:text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {item.description}
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
