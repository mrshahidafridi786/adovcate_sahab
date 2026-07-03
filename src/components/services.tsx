'use client';

import { motion, Variants } from 'framer-motion';
import { 
  Scale, Shield, DollarSign, Building2, Home, Users, FileText, 
  MessageSquareCode, Gavel, FileCheck, FileSignature, Landmark, Briefcase, ShoppingBag, GraduationCap 
} from 'lucide-react';

const SERVICES = [
  {
    title: 'Civil Law',
    icon: Scale,
    description: 'Representation in civil suits, property disputes, execution petitions, recovery suits, and appellate matters.',
  },
  {
    title: 'Criminal Law',
    icon: Shield,
    description: 'Aggressive trial defense, bail petitions, criminal appeals, and advisory services on penal code matters.',
  },
  {
    title: 'Tax Law',
    icon: DollarSign,
    description: 'Filing returns, tax audits, representation before FBR/KPRA tribunals, corporate tax advisory, and compliance.',
  },
  {
    title: 'Corporate Law',
    icon: Building2,
    description: 'Company registration (SECP), partnership agreements, legal audits, corporate governance, and commercial disputes.',
  },
  {
    title: 'Property Law',
    icon: Home,
    description: 'Verification of registry deeds, land acquisition, lease agreements, partition suits, and tenancy disputes.',
  },
  {
    title: 'Family Law',
    icon: Users,
    description: 'Handling divorce (Khula), child custody disputes, maintenance claims, and inheritance distribution rights.',
  },
  {
    title: 'Constitutional Matters',
    icon: FileText,
    description: 'Filing writ petitions before the Peshawar High Court for violation of fundamental rights and government rules.',
  },
  {
    title: 'Legal Consultation',
    icon: MessageSquareCode,
    description: 'Strategic advisory, risk analysis, legal opinions, and preventive legal health checks for corporate firms.',
  },
  {
    title: 'Court Representation',
    icon: Gavel,
    description: 'Professional advocacy and representation before District Courts, Special Tribunals, and the High Court.',
  },
  {
    title: 'Legal Documentation',
    icon: FileCheck,
    description: 'Drafting power of attorney, deeds, legal notices, replies, affidavits, and registration files.',
  },
  {
    title: 'Contract Drafting',
    icon: FileSignature,
    description: 'Meticulous drafting and vetting of service agreements, NDA, MOU, JV agreements, and business vendor contracts.',
  },
  {
    title: 'Labour Law',
    icon: Landmark,
    description: 'Representation in labour court, dispute resolution, drafting employment agreements, and salary claims.',
  },
  {
    title: 'Consumer Protection',
    icon: ShoppingBag,
    description: 'Prosecution and defense before Consumer Courts for product liability, deficient services, and trade violations.',
  },
  {
    title: 'Government Legal Advisory',
    icon: Briefcase,
    description: 'Advising provincial government departments, municipal corporations, and administrative panels.',
  },
  {
    title: 'BISE Legal Services',
    icon: GraduationCap,
    description: 'Representing educational boards, handling student disputes, service matters, and regulatory audits.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC] dark:bg-[#090d16] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary-navy/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Expertise &amp; Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Areas of Practice &amp; Services
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A comprehensive, multi-disciplinary legal practice tailored to protect individual rights and foster corporate compliance under Pakistani jurisprudence.
          </p>
        </div>

        {/* Practice Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0, 0, 0, 0.04)' }}
                className="glass-card p-7 rounded-2xl border-slate-100 hover:border-accent-gold/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary-navy/5 dark:bg-white/5 group-hover:bg-accent-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-5.5 h-5.5 text-slate-700 dark:text-slate-300 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-primary-navy dark:text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="text-[10px] tracking-wider uppercase font-semibold text-accent-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1 mt-2">
                  Request Case Review <span className="text-xs">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
