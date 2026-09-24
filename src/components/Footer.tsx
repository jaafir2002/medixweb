import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setIsSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-[#083344] text-white pt-16 pb-12 mt-12 border-t border-teal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter & Headline Card */}
        <div className="border-b border-teal-800/60 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
                Stay ahead of your health journey
              </h2>
              <p className="text-teal-100/80 text-sm sm:text-base leading-relaxed">
                Get expert insights, wellness guides, and clinic news — delivered monthly.
              </p>
            </div>

            <div className="lg:col-span-6">
              {isSubscribed ? (
                <div className="bg-teal-900/60 border border-teal-600/50 rounded-2xl p-4 flex items-center gap-3 text-sm text-teal-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! You are now subscribed to MedixWeb Health Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder="Enter Your Email"
                      className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-teal-200/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                    {emailError && (
                      <p className="text-[11px] text-rose-300 mt-1.5 pl-4">{emailError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-white hover:bg-slate-100 active:bg-slate-200 text-[#083344] font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* 4-Column Navigation Links matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs sm:text-sm">
          
          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-teal-100/80">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">Services</button></li>
              <li><button onClick={() => onNavigate('our-team')} className="hover:text-white transition-colors text-left">Doctors &amp; Specialists</button></li>
              <li><button onClick={() => onNavigate('approach')} className="hover:text-white transition-colors text-left">Our Approach</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">Clinic Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-teal-100/80">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">General Medicine</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">Cardiology Care</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">Pediatrics &amp; Child Wellness</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">Orthopedics &amp; Therapy</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">Rapid Diagnostic Laboratory</button></li>
              <li><button onClick={() => onNavigate('insurance')} className="hover:text-white transition-colors text-left">Insurance &amp; Billing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Doctors &amp; Quality
            </h4>
            <ul className="space-y-2.5 text-teal-100/80">
              <li><button onClick={() => onNavigate('our-team')} className="hover:text-white transition-colors text-left">Our Specialists</button></li>
              <li><button onClick={() => onNavigate('our-team')} className="hover:text-white transition-colors text-left">Board Certifications</button></li>
              <li><button onClick={() => onNavigate('testimonials')} className="hover:text-white transition-colors text-left">Patient Reviews &amp; Stories</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">Book Consultation</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">Clinical Standards &amp; Safety</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Clinic Location &amp; Hours
            </h4>
            <div className="space-y-2.5 text-teal-100/80">
              <p>Downtown Health Pavilion, 450 Medical Arts Plaza, Suite 200</p>
              <p>Monday – Friday: 7:30 AM – 7:00 PM</p>
              <p>Saturday Urgent Care: 8:00 AM – 3:00 PM</p>
              <button 
                onClick={() => onNavigate('contact')} 
                className="text-sky-300 hover:text-white underline text-xs font-semibold block pt-1 text-left"
              >
                View all 3 locations &rarr;
              </button>
              <p className="text-white font-semibold pt-1">Hotline: (800) 555-0199</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo with mark */}
          <button 
            onClick={() => onNavigate('home')} 
            className="text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-xl p-1 cursor-pointer"
            aria-label="MedixWeb Clinic Home"
          >
            <Logo variant="dark" size="sm" showText={true} />
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 text-white/80">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-7 h-7 rounded-md border border-white/20 hover:border-white flex items-center justify-center text-xs font-bold transition-colors">
              𝕏
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-md border border-white/20 hover:border-white flex items-center justify-center text-xs font-bold transition-colors">
              f
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-7 h-7 rounded-md border border-white/20 hover:border-white flex items-center justify-center text-xs font-bold transition-colors">
              ▶
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-teal-200/70 text-center sm:text-right">
            &copy; {new Date().getFullYear()} MedixWeb. All rights reserved. Designed with care for healthier communities.
          </div>

        </div>

      </div>
    </footer>
  );
};
