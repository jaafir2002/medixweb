import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Team', id: 'our-team' },
    { name: 'Approach', id: 'approach' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Insurance', id: 'insurance' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Modern Medical Brand Logo */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1 text-left cursor-pointer"
          aria-label="MedixWeb Clinic Home"
        >
          <Logo variant="light" size="md" showText={true} showBadge={false} />
        </button>

        {/* Desktop Nav Links */}
        <nav 
          aria-label="Primary navigation" 
          className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-sm"
        >
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer ${
                  isActive
                    ? 'text-sky-700 font-bold bg-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" aria-hidden="true" />
                )}
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Medium Screen Nav Links (Top 5 primary pages) */}
        <nav 
          aria-label="Primary navigation compact" 
          className="hidden lg:flex xl:hidden items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/70"
        >
          {navLinks.slice(0, 5).map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'text-sky-700 font-bold bg-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions Zone */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:8005550199"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-600 px-3 py-2 rounded-full border border-slate-200 hover:border-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>(800) 555-0199</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-[#0A1A2F] hover:bg-sky-950 active:bg-black text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 whitespace-nowrap"
          >
            <span>Book Appointment</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 group-hover:bg-sky-500 flex items-center justify-center transition-colors">
              <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-600" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:8005550199"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl"
              >
                <PhoneCall className="w-4 h-4 text-sky-600" />
                <span>Call Hotline (800) 555-0199</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0A1A2F] text-white py-3 rounded-xl text-sm font-semibold shadow-sm"
              >
                <span>Book Appointment Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
