'use client';

import { Scale, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8 dark:bg-[#05080e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
        
        {/* Brand details col-span-4 */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-accent-gold/40 flex items-center justify-center rounded-lg bg-white/5">
              <Scale className="w-5 h-5 text-accent-gold" />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-wider uppercase text-white">
                Khurshid Azam
              </span>
              <span className="block text-[10px] tracking-[0.2em] font-medium text-accent-gold/80 uppercase">
                Advocate High Court
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
            Providing expert legal consultation, courtroom representation, tax advisory, and institutional legal counsel. Committed to delivering professional integrity and favorable outcomes.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/923369592956"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-accent-gold/10 hover:text-accent-gold transition-colors text-slate-400"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-accent-gold/10 hover:text-accent-gold transition-colors text-slate-400"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:advocate.khurshidazam@gmail.com"
              className="p-2 rounded bg-white/5 hover:bg-accent-gold/10 hover:text-accent-gold transition-colors text-slate-400"
              title="Email Office"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links col-span-2 */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-accent-gold">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-accent-gold transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-accent-gold transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-accent-gold transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="hover:text-accent-gold transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-accent-gold transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services shortcuts col-span-3 */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-accent-gold">
            Practice Areas
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                Civil Disputes Litigation
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                Criminal Trial Defense
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                Federal/Provincial Taxation
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                Corporate Contract Drafting
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-gold transition-colors">
                BISE Educational Advocacy
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Contact Info col-span-3 */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-accent-gold">
            Chambers
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400 font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
              <span>Peshawar High Court, Peshawar, KP, Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent-gold shrink-0" />
              <a href="tel:+923369592956" className="hover:text-accent-gold transition-colors">
                +92 336 9592956
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent-gold shrink-0" />
              <a href="mailto:advocate.khurshidazam@gmail.com" className="hover:text-accent-gold transition-colors truncate">
                advocate.khurshidazam@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-sans font-semibold tracking-wider uppercase">
        <div>
          © {new Date().getFullYear()} Khurshid Azam. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Designed with Professionalism</span>
          <span className="text-accent-gold">•</span>
          <span>High Court Chambers</span>
        </div>
      </div>
    </footer>
  );
}
