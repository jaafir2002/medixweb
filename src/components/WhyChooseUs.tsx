import React, { useState } from 'react';
import { ArrowRight, Check, HeartPulse, Activity, Star } from 'lucide-react';
import { CLINIC_VALUES } from '../data/clinicData';
import { CLINIC_IMAGES, handleImageError } from '../assets/images';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const [activeValueId, setActiveValueId] = useState('collaboration');

  const activeValue = CLINIC_VALUES.find((v) => v.id === activeValueId) || CLINIC_VALUES[1];

  return (
    <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header with Tag, Left Title and Right Subhead */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
          <span>+</span>
          <span>WHY CHOOSE US</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              A Simplified Path to Comprehensive Medical Care
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Column Interactive Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Column 1: Values List with Interactive Animations */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group/card">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider pb-4 mb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span>Values List</span>
              </span>
              <span 
                key={activeValue.number}
                className="font-mono tabular-nums text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100 animate-in fade-in zoom-in-90 duration-300"
              >
                {activeValue.number}
              </span>
            </div>

            <nav aria-label="Clinic core values" className="space-y-2">
              {CLINIC_VALUES.map((val) => {
                const isActive = val.id === activeValueId;
                const valueImages: Record<string, string> = {
                  compassion: CLINIC_IMAGES.doctorPortrait,
                  collaboration: CLINIC_IMAGES.careTeam,
                  transparency: CLINIC_IMAGES.doctorConsultation,
                  flexibility: CLINIC_IMAGES.hero,
                  excellence: CLINIC_IMAGES.doctorPortrait,
                };
                const previewImg = valueImages[val.id] || CLINIC_IMAGES.doctorPortrait;

                return (
                  <button
                    key={val.id}
                    onClick={() => setActiveValueId(val.id)}
                    className={`w-full text-left p-3 rounded-2xl transition-all duration-300 flex items-center justify-between group/item cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-50 via-sky-50/90 to-sky-100/40 border border-sky-300 text-slate-900 font-bold shadow-xs scale-[1.01]'
                        : 'hover:bg-slate-50/80 hover:translate-x-1.5 text-slate-500 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-sky-600 scale-125' : 'bg-transparent group-hover/item:bg-slate-300'}`} />
                      <span className="text-base sm:text-lg transition-colors">{val.name}</span>
                    </div>

                    {/* Active doctor thumbnail with spring entrance animation */}
                    {isActive && (
                      <div className="flex items-center gap-2 animate-in zoom-in-75 fade-in duration-300">
                        <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-400 ring-offset-2 ring-offset-white shadow-sm transform transition-transform duration-300 hover:scale-110">
                          <img
                            src={previewImg}
                            alt={`${val.name} preview`}
                            className="w-full h-full object-cover transition-transform duration-300"
                            onError={(e) => handleImageError(e, 'doctorPortrait')}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Dynamic Value Detail Box with Smooth Fade-in on Selection */}
            <div 
              key={activeValue.id}
              className="mt-4 p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-sky-50/30 border border-slate-200/80 text-xs text-slate-600 leading-relaxed shadow-2xs animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="flex items-center gap-1.5 mb-1.5 text-slate-900 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>{activeValue.name} Focus:</span>
              </div>
              <p className="text-slate-600">
                {activeValue.detail}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100">
            <button
              onClick={onOpenBooking}
              className="shine-sweep w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-sky-600 active:bg-sky-800 text-white py-3 px-5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-lg hover:shadow-sky-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <span>Book Appointment</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-sky-600">
                <ArrowRight className="w-3 h-3 text-white group-hover:text-sky-600 transition-colors" />
              </span>
            </button>
          </div>
        </div>

        {/* Column 2: Center Photo of doctor consulting with family with rich animations */}
        <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-900/15 border border-slate-200/90 relative min-h-[380px] lg:min-h-full group/photo-card transition-all duration-500 flex flex-col justify-between">
          
          {/* Top Floating Care Status Badge with gentle float animation */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold py-1.5 px-3 rounded-full border border-white/20 shadow-md animate-float-gentle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Live Care • Family Clinic</span>
            </div>

            <div className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold py-1.5 px-2.5 rounded-full border border-white/50 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>4.9 / 5</span>
            </div>
          </div>

          {/* Animated Image Wrapper with Breathing Zoom and Smooth Hover Physics */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={CLINIC_IMAGES.doctorConsultation}
              alt="Compassionate physician consultation with young mother and child"
              className="w-full h-full object-cover object-center animate-breathe-zoom group-hover/photo-card:scale-110 group-hover/photo-card:contrast-[1.04] transition-all duration-700 ease-out"
              onError={(e) => handleImageError(e, 'doctorConsultation')}
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30 transition-opacity duration-500" />
            
            {/* Interactive light gleam on card hover */}
            <div className="absolute inset-0 opacity-0 group-hover/photo-card:opacity-100 bg-gradient-to-tr from-sky-500/10 via-transparent to-teal-400/15 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* Bottom Interactive Frosted Glass Floating Card */}
          <div className="relative z-10 mt-auto p-4 sm:p-5">
            <div className="bg-white/90 group-hover/photo-card:bg-white/95 backdrop-blur-md rounded-2xl p-4 text-xs text-slate-800 border border-white/70 shadow-lg group-hover/photo-card:shadow-xl group-hover/photo-card:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center group-hover/photo-card:bg-rose-50 group-hover/photo-card:text-rose-600 transition-colors duration-300">
                  <HeartPulse className="w-3.5 h-3.5 group-hover/photo-card:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-bold text-slate-900 text-sm">Patient-First Care Model</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Every consultation provides ample time to listen, explain, and comfort—putting families at ease.
              </p>
            </div>
          </div>

        </div>

        {/* Column 3: Deep Cyan Statement & Interactive Pills */}
        <div className="lg:col-span-4 bg-[#0A6C8C] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
          {/* Subtle circular blur */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-teal-200 block mb-3">
              Our Core Philosophy
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-6 text-balance">
              We&apos;re committed to delivering the highest standard of medical care with sensitivity.
            </h3>
            <p className="text-teal-50/85 text-xs sm:text-sm leading-relaxed mb-6">
              Our clinic balances scientific rigor with genuine human warmth. Whether you require a routine checkup, pediatric attention, or specialized cardiology diagnostics, you are treated as a whole human being.
            </p>
          </div>

          {/* Bottom Interactive Pills */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-teal-200/80 font-bold block mb-2.5">
              Select Value Pillar:
            </span>
            <div className="flex flex-wrap gap-2">
              {CLINIC_VALUES.map((val) => {
                const isSelected = val.id === activeValueId;
                return (
                  <button
                    key={val.id}
                    onClick={() => setActiveValueId(val.id)}
                    className={`text-xs py-1.5 px-3 rounded-xl transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isSelected
                        ? 'bg-white text-[#0A6C8C] font-bold shadow-xs scale-105'
                        : 'bg-white/20 hover:bg-white/30 text-white'
                    }`}
                  >
                    {val.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
