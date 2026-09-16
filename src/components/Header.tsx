import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenDiagnostic: () => void;
  onOpenSchedule: (planName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDiagnostic, onOpenSchedule }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Momento', href: '#momento' },
    { label: 'A Tese', href: '#tese' },
    { label: 'Autoridade', href: '#autoridade' },
    { label: 'Planos', href: '#planos' },
    { label: 'Funil', href: '#funil' },
    { label: 'Cases', href: '#cases' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.08] py-2.5 shadow-xl shadow-black/60'
          : 'bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/[0.05] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo - Compact and Crisp */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src="https://grupoemidia.com/wp-content/uploads/2024/03/grupo-emidia-logo-01branco.png"
            alt="Grupo Emídia"
            className="h-8 sm:h-8.5 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation - Streamlined, single-line, non-crowded */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-neutral-300 font-heading">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-1 text-neutral-300 hover:text-[#fe6600] transition-colors whitespace-nowrap uppercase tracking-wider text-[11px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions - Compact and Elegant */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            id="btn-header-diagnostic"
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold font-heading uppercase text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-[#fe6600]/60 transition-all cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-3.5 h-3.5 text-[#fe6600]" />
            <span>Descobrir Plano</span>
          </button>

          <button
            id="btn-header-schedule"
            onClick={() => onOpenSchedule()}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-black font-heading uppercase text-white bg-[#fe6600] hover:bg-[#ff771a] shadow-sm shadow-[#fe6600]/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reunião 45 min</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            id="btn-header-schedule-mobile"
            onClick={() => onOpenSchedule()}
            className="px-3 py-1 rounded-full text-[11px] font-black uppercase text-white bg-[#fe6600]"
          >
            Reunião 45m
          </button>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/80 cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111111] border-b border-white/[0.08] px-4 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 px-2 rounded-lg text-neutral-300 hover:text-[#fe6600] hover:bg-white/[0.03] font-heading text-xs uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-white/[0.05] text-neutral-200 text-xs font-bold uppercase font-heading flex items-center justify-center gap-2 border border-white/[0.1]"
              >
                <Compass className="w-3.5 h-3.5 text-[#fe6600]" />
                <span>Descubra seu Plano</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#fe6600] text-white text-xs font-black uppercase font-heading flex items-center justify-center gap-2 shadow-lg shadow-[#fe6600]/30"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Reunião Estratégica (45 min)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
