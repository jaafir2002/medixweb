import React, { useState } from 'react';
import { ArrowRight, Check, X, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [tags, setTags] = useState([
    { id: 'caring', label: 'Caring', active: true },
    { id: 'personalized', label: 'Personalized', active: true },
    { id: 'reliable', label: 'Reliable', active: true },
  ]);

  const toggleTag = (id: string) => {
    setTags((prev) =>
      prev.map((t) => (t.id === id ? { ...t, active: !t.active } : t))
    );
  };

  const slides = [
    {
      title: "Your Trusted Partner in Modern Healthcare",
      highlight: "Comprehensive Care",
      desc: "Accessible, modern medical care — where technology meets compassion. Book appointments, view reports, and stay healthy from anywhere."
    },
    {
      title: "Compassionate Healing Tailored to Your Family",
      highlight: "Family First Medicine",
      desc: "From pediatric wellness to geriatric vitality, our multidisciplinary clinics surround your family with unwavering clinical expertise."
    },
    {
      title: "Advanced Diagnostics With Rapid Same-Day Results",
      highlight: "Precision Analytics",
      desc: "State-of-the-art ultrasound, high-resolution radiology, and secure HIPAA-encrypted digital test results directly on your smartphone."
    }
  ];

  const currentSlide = slides[activeSlide];

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12">
      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#2D8BD0] via-[#207BBF] to-[#166CAD] text-white shadow-xl">
        
        {/* Subtle decorative background light blurs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch">
          
          {/* Left Column: Headings, CTA, and Floating Comprehensive Care card */}
          <div className="lg:col-span-6 xl:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-10">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Trust Badge / Avatar cluster with live pulse & hover animations */}
              <div className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/40 py-1.5 px-3.5 rounded-full mb-6 text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm animate-pulse-glow hover:shadow-lg cursor-default group/badge">
                <div className="flex -space-x-2 overflow-hidden py-0.5">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white/90 object-cover transform transition-transform duration-300 hover:scale-125 hover:z-20 hover:ring-sky-300"
                    src="/src/assets/images/about_doctor_portrait_1790248368496.jpg"
                    alt="Clinic patient"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white/90 object-cover transform transition-transform duration-300 hover:scale-125 hover:z-20 hover:ring-sky-300"
                    src="/src/assets/images/testimonial_cody_fisher_1790248399526.jpg"
                    alt="Clinic patient"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white/90 object-cover transform transition-transform duration-300 hover:scale-125 hover:z-20 hover:ring-sky-300"
                    src="/src/assets/images/doctor_consultation_family_1790248379120.jpg"
                    alt="Clinic patient"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-white/95 font-medium tracking-wide">
                    Trusted by <strong className="text-white font-bold underline decoration-sky-300/60 underline-offset-2">135k+</strong> people
                  </span>
                </div>
              </div>

              {/* Main Headline with subtle drop shadow and dynamic transition */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white mb-6 text-balance drop-shadow-sm transition-all duration-300 hover:translate-x-1">
                {currentSlide.title}
              </h1>

              {/* Action Buttons with shine sweep, micro-elevation, and icon translation */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <button
                  onClick={onExploreServices}
                  className="shine-sweep inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 active:bg-slate-200 text-slate-900 py-3 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:shadow-sky-950/30 hover:scale-105 active:scale-95 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600 cursor-pointer"
                >
                  <span className="transition-transform group-hover:translate-x-0.5">Explore Services</span>
                  <span className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sky-600">
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
                  </span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-[#0A1A2F]/80 hover:bg-[#0A1A2F] active:bg-black text-white border border-white/20 hover:border-white/50 py-3 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer group"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>

            {/* Bottom-left Floating Glass Card */}
            <div className="bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 max-w-lg mt-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-teal-300 animate-ping" />
                <h3 className="font-display font-semibold text-white text-base sm:text-lg">
                  {currentSlide.highlight}
                </h3>
              </div>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                {currentSlide.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Hero Photo & Floating Stats Card */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col justify-end p-6 sm:p-10 lg:p-10 z-10">
            
            {/* Center-Right Hero Photo with organic curve mask */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-white/20 group">
              <img
                src="/src/assets/images/hero_care_family_1790248293775.jpg"
                alt="Father and child receiving joyful compassionate care at MedixWeb Clinic"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Trusted Care Rate Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-xl border border-white/60 text-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl transition-all">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-sky-700 block">
                      Trusted Care Rate
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tabular-nums">
                        97%
                      </span>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-0.5">
                        <Check className="w-3.5 h-3.5" /> High Satisfaction
                      </span>
                    </div>
                  </div>

                  {/* Interactive Tags matching screenshot */}
                  <div className="flex flex-wrap items-center justify-end gap-1.5 max-w-[170px]">
                    {tags.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => toggleTag(t.id)}
                        className={`text-[10px] font-medium py-1 px-2 rounded-full border transition-colors flex items-center gap-1 cursor-pointer ${
                          t.active
                            ? 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100'
                            : 'bg-slate-100 text-slate-400 border-slate-200 line-through'
                        }`}
                        title="Click to toggle attribute"
                      >
                        <span>{t.label}</span>
                        <X className="w-2.5 h-2.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-2">
                  Our patients trust us and are consistently satisfied with our personalized treatment & recovery support.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Hero Indicator Bar */}
        <div className="py-4 border-t border-white/15 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`View hero slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                activeSlide === idx ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
