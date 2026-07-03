'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-navy dark:bg-[#06080e] text-white"
        >
          <div className="text-center relative max-w-md px-6 flex flex-col items-center">
            {/* Elegant scale crest vector accent */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.04 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <svg className="w-72 h-72 text-accent-gold" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17m9-10c0 4.418-4.03 8-9 8s-9-3.582-9-8m18 0l-3-3m3 3l-3 3M3 10l3-3M3 10l3 3M12 3L9 6m3-3l3 3" />
              </svg>
            </motion.div>

            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 border border-accent-gold/40 flex items-center justify-center rounded-full mb-6 relative">
                <div className="absolute inset-1 border border-accent-gold/20 rounded-full animate-pulse-slow" />
                <span className="font-serif text-3xl font-semibold tracking-wider text-accent-gold">
                  MAK
                </span>
              </div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.18em] text-slate-100 uppercase">
                Muhammad Atif Khattak
              </h1>
              <p className="mt-3 text-xs md:text-sm tracking-[0.3em] text-accent-gold font-medium uppercase">
                Advocate High Court
              </p>
            </motion.div>

            {/* Premium Loader Bar */}
            <div className="mt-10 w-40 h-[1.5px] bg-white/10 rounded-full overflow-hidden relative z-10">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
