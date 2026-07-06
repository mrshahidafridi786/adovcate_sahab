'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, Lock, Target, MessageSquare, Award, Scale } from 'lucide-react';

const REASONS = [
  {
    title: 'Professional Integrity',
    description: 'Operating under the highest ethical standards of the Pakistan Bar Council, ensuring honest legal counsel and transparency.',
    icon: ShieldCheck,
  },
  {
    title: 'Client-Centered Approach',
    description: 'Prioritizing client concerns, explaining complex legal concepts clearly, and mapping custom courses of action.',
    icon: Users,
  },
  {
    title: 'Absolute Confidentiality',
    description: 'Providing a secure shield for your corporate and personal affairs, protected by legal privilege rules.',
    icon: Lock,
  },
  {
    title: 'Strong Legal Strategy',
    description: 'Drafting proactive, thorough case files based on comprehensive research, precedents, and regulatory codes.',
    icon: Target,
  },
  {
    title: 'Transparent Communication',
    description: 'Keeping you informed at every milestone—case filings, hearing dates, and billing parameters, with zero hidden costs.',
    icon: MessageSquare,
  },
  {
    title: 'Result-Oriented Services',
    description: 'Driven to secure positive outcomes through trial advocacy, administrative representation, and skilled mediation.',
    icon: Award,
  },
  {
    title: 'Extensive Court Experience',
    description: 'Over 8 years representing complex civil, criminal, and tax suits before district and high courts in KP.',
    icon: Scale,
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-primary-navy/5 rounded-r-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Why Choose Khurshid Azam
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A practice grounded in professionalism, dedicated to providing strategic and secure advocacy for all clients.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === REASONS.length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`glass-card p-8 rounded-2xl border-slate-100 hover:border-accent-gold/30 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-5.5 h-5.5 text-accent-gold" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-primary-navy dark:text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
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
