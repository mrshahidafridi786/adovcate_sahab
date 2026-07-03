'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'How can I book a consultation with Advocate Atif Khattak?',
    answer: 'You can book a consultation by filling out the contact form on this website, clicking the floating WhatsApp button to chat instantly, or calling our Peshawar chambers directly at +92 333 9136195. Our team will coordinate a time.',
  },
  {
    question: 'Which legal matters do you handle?',
    answer: 'We provide comprehensive litigation and advisory services covering Civil Law (property, partition, recovery), Criminal Law (bail, defense appeals), Corporate Law (SECP company registration, contract drafting), Tax Law (FBR returns, KPRA audits, appeals), and Constitutional writ petitions.',
  },
  {
    question: 'Do you provide online or remote consultations?',
    answer: 'Yes, we conduct remote consultations via WhatsApp video, Google Meet, or Zoom. This is particularly helpful for corporate clients, organizations outside Peshawar, and overseas Pakistanis needing regional representation.',
  },
  {
    question: 'What documents should I bring to my initial consultation?',
    answer: 'To help us evaluate your position effectively, please bring all relevant notices, court summons, registry deeds, contracts, tax notifications, and correspondence. A brief written summary or timeline of your dispute is also highly useful.',
  },
  {
    question: 'Do you represent clients outside Peshawar?',
    answer: 'Yes, while our primary chambers are in Peshawar, we represent corporate clients, government secretariats, and private individuals before tribunals and courts across Khyber Pakhtunkhwa, as well as appellate boards in Islamabad.',
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left font-serif text-base sm:text-lg font-bold text-primary-navy dark:text-white hover:text-accent-gold transition-colors duration-300 gap-4"
      >
        <span>{question}</span>
        <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
          {isOpen ? <Minus className="w-3.5 h-3.5 text-accent-gold" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Frictionless Advice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Answers to common questions about legal procedures, scheduling consultations, and case management.
          </p>
        </div>

        {/* Custom Accordion Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-10 rounded-2xl border-slate-100 dark:border-slate-800/80 shadow-md"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
