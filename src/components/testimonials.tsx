'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Tariq Mahmood',
    role: 'Executive Director, Peshawar Retail Group',
    review: 'Advocate Atif Khattak resolved a complex tax audit issue for our retail group with FBR. His grasp of KP revenue laws and FBR procedural codes is outstanding. He saved us from unjustified penal assessments.',
    stars: 5,
  },
  {
    name: 'Sajjad Ahmad Khan',
    role: 'General Secretary, KPK Secretariats Alliance',
    review: 'Mr. Atif acted as legal advisor for our union writ in the High Court regarding employee scales. His command over administrative service rules and persuasive argument won us our relief.',
    stars: 5,
  },
  {
    name: 'Dr. Maria Yusuf',
    role: 'Associate Professor, Peshawar',
    review: 'I approached Advocate Atif regarding a complicated family property partition suit. He showed tremendous professionalism, maintained strict confidentiality, and settled the dispute through strategic mediation.',
    stars: 5,
  },
  {
    name: 'Aimal Khan Khattak',
    role: 'CEO, Khattak & Sons Logistics',
    review: 'We retain Mr. Atif for drafting and vetting our transport and labor contracts. His legal advisory is highly preventative, helping us avoid disputes before they ever reach the courtroom.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC] dark:bg-[#090d16] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute left-10 top-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Client Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Testimonials &amp; Feedback
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Real feedback from local businesses, civil servants, and private individuals who have experienced our dedicated representation.
          </p>
        </div>

        {/* Testimonial slider card */}
        <div className="relative glass-card px-8 py-12 md:p-16 rounded-3xl border-slate-100 max-w-4xl mx-auto shadow-xl">
          <div className="absolute top-8 left-8 text-accent-gold/10 dark:text-accent-gold/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <div className="min-h-[200px] flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-6 justify-center md:justify-start">
                  {[...Array(TESTIMONIALS[index].stars)].map((_, i) => (
                    <Star key={i} className="w-5.5 h-5.5 text-accent-gold fill-current" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed font-sans mb-8 text-center md:text-left italic">
                  "{TESTIMONIALS[index].review}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                  {/* Initials avatar */}
                  <div className="w-12 h-12 rounded-full border border-accent-gold/40 flex items-center justify-center bg-primary-navy text-white text-sm font-bold tracking-wider font-serif">
                    {TESTIMONIALS[index].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <cite className="not-italic font-serif text-base font-bold text-primary-navy dark:text-white block">
                      {TESTIMONIALS[index].name}
                    </cite>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {TESTIMONIALS[index].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-8 relative z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-accent-gold dark:hover:border-accent-gold hover:text-accent-gold transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-accent-gold dark:hover:border-accent-gold hover:text-accent-gold transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
