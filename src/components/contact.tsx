'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number (min 10 digits).' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(4, { message: 'Subject must be at least 4 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('advocate.atifkhattak@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#070b13] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Book a Legal Consultation
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Submit your query below or contact our chambers directly. All client correspondences are strictly confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border-slate-100 dark:border-slate-800/80 shadow-xl relative"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-navy dark:text-white mb-6">
                Consultation Request
              </h3>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-primary-navy dark:text-white mb-2">
                      Request Submitted Successfully
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                      Thank you for contacting Advocate Atif Khattak. We will review your query and contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] tracking-widest font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-sans">
                          Your Name
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-primary-navy dark:text-white focus:border-accent-gold dark:focus:border-accent-gold outline-none transition-colors"
                        />
                        {errors.name && (
                          <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-widest font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-sans">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="e.g. +92 333 1234567"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-primary-navy dark:text-white focus:border-accent-gold dark:focus:border-accent-gold outline-none transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-primary-navy dark:text-white focus:border-accent-gold dark:focus:border-accent-gold outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-sans">
                        Subject
                      </label>
                      <input
                        type="text"
                        {...register('subject')}
                        placeholder="Legal Matter Category"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-primary-navy dark:text-white focus:border-accent-gold dark:focus:border-accent-gold outline-none transition-colors"
                      />
                      {errors.subject && (
                        <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 font-sans">
                        Describe your Case / Inquiry
                      </label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Please provide details regarding your legal matter..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-primary-navy dark:text-white focus:border-accent-gold dark:focus:border-accent-gold outline-none transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-500 font-semibold mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-primary-navy dark:bg-accent-gold text-white dark:text-primary-navy border border-transparent hover:bg-accent-gold dark:hover:bg-primary-navy dark:hover:text-white dark:hover:border-accent-gold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Book Consultation
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl border-slate-100 dark:border-slate-800/80 shadow-xl space-y-6 flex-1 flex flex-col justify-center"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-navy dark:text-white mb-4">
                Chamber Details
              </h3>

              {/* Info Items */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold uppercase text-slate-400 mb-1">Office Location</h4>
                    <p className="text-xs font-semibold text-primary-navy dark:text-white leading-relaxed">
                      Peshawar High Court, Peshawar, Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold uppercase text-slate-400 mb-1">Contact Office</h4>
                    <a href="tel:+923339136195" className="text-xs font-semibold text-primary-navy dark:text-white hover:text-accent-gold transition-colors">
                      +92 333 9136195
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[10px] tracking-widest font-bold uppercase text-slate-400 mb-1">Send Email</h4>
                    <div className="flex items-center justify-between gap-2">
                      <a href="mailto:advocate.atifkhattak@gmail.com" className="text-xs font-semibold text-primary-navy dark:text-white hover:text-accent-gold transition-colors truncate">
                        advocate.atifkhattak@gmail.com
                      </a>
                      <button
                        onClick={copyEmail}
                        className="p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-accent-gold transition-colors shrink-0"
                        title="Copy Email Address"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest font-bold uppercase text-slate-400 mb-1">Office Hours</h4>
                    <p className="text-xs font-semibold text-primary-navy dark:text-white">
                      Monday — Friday: 9:00 AM — 5:00 PM
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Saturday: By Prior Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map Premium Vector Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card h-48 rounded-3xl border-slate-100 dark:border-slate-800/80 shadow-md relative overflow-hidden flex flex-col justify-center items-center p-6 text-center"
            >
              {/* Premium Vector Grid map background */}
              <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1] bg-grid-slate-400 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20h300M0 50h300M0 80h300M0 110h300M0 140h300M0 170h300M50 0v200M100 0v200M150 0v200M200 0v200M250 0v200" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="150" cy="90" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                </svg>
              </div>

              <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center mb-3 relative z-10">
                <MapPin className="w-5 h-5 text-accent-gold animate-bounce" />
              </div>
              <h4 className="font-serif text-sm font-bold text-primary-navy dark:text-white relative z-10">
                Peshawar Chambers Location Map
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-xs mt-1 relative z-10 leading-relaxed">
                Adjacent to the Peshawar High Court Building, Khyber Road, Peshawar Civil Lines.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
