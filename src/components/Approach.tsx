import React from 'react';
import { Play } from 'lucide-react';

interface ApproachProps {
  onOpenVideo: () => void;
}

export const Approach: React.FC<ApproachProps> = ({ onOpenVideo }) => {
  return (
    <section id="approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header with Tag, Centered Title and Subhead */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
          <span>+</span>
          <span>APPROACH</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          The MedixWeb Total Care™ Model
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
        </p>
      </div>

      {/* Large Hero Video / Cinematic Card matching screenshot */}
      <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-200 bg-slate-900 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] max-h-[560px] group">
        
        {/* Medical care team image */}
        <img
          src="/assets/images/care_team_scrubs_1790248388964.jpg"
          alt="MedixWeb surgical and medical team providing compassionate patient care"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/20" />

        {/* Center Glowing Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={onOpenVideo}
            aria-label="Play MedixWeb Total Care introduction video"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-sky-700 shadow-md">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-1" />
            </div>
          </button>
        </div>

        {/* Floating Bottom Card Banner matching screenshot */}
        <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-8 bg-[#094D62]/90 hover:bg-[#094D62] backdrop-blur-md border border-white/20 text-white rounded-2xl p-4 sm:p-6 transition-all duration-300">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Our MedixWeb™ model unites doctors, specialists, and wellness experts in one place. From diagnostics to recovery, we ensure holistic healing and long-term wellness.
          </p>
        </div>

      </div>

    </section>
  );
};
