import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { CLINIC_IMAGES, handleImageError } from '../assets/images';

export const Testimonials: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1); // Cody Fisher as active center card

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Centered Header with Tag */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
          <span>+</span>
          <span>TESTIMONIALS</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Real Stories, Real Healing — From Our Community
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
        </p>
      </div>

      {/* 3-Cards Testimonial Grid matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Card 1: Robert Fox */}
        <div 
          onClick={() => setActiveCard(0)}
          className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
            activeCard === 0 
              ? 'border-sky-300 shadow-lg ring-2 ring-sky-100' 
              : 'border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
          }`}
        >
          <div>
            <span className="font-display font-bold text-lg sm:text-xl text-sky-900 block mb-3">
              Friendly staff review
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              &ldquo;The team made every step stress-free and supportive. I finally feel confident about my treatment and ongoing heart health plan.&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={CLINIC_IMAGES.doctorPortrait}
                  alt="Robert Fox"
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, 'doctorPortrait')}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Robert Fox</h4>
                <span className="text-[11px] text-slate-500">Regular Patient</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">𝕏</span>
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">f</span>
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">▶</span>
            </div>
          </div>
        </div>

        {/* Card 2: Cody Fisher (Hero / Active Center Card with Tall Portrait) */}
        <div 
          onClick={() => setActiveCard(1)}
          className={`relative rounded-3xl overflow-hidden shadow-xl border transition-all duration-300 group cursor-pointer ${
            activeCard === 1 
              ? 'border-sky-400 ring-4 ring-sky-100 scale-[1.03] z-10' 
              : 'border-slate-200 hover:border-sky-300'
          }`}
        >
          <div className="h-[360px] sm:h-[400px] w-full relative">
            <img
              src={CLINIC_IMAGES.testimonialPatient}
              alt="Cody Fisher smiling after successful treatment"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => handleImageError(e, 'testimonialPatient')}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Bottom Details Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-white">Cody Fisher</h3>
                <span className="text-xs text-slate-300">Regular Patient</span>
              </div>

              {/* Social icons in white */}
              <div className="flex items-center gap-1.5 text-white/80">
                <span className="w-6 h-6 rounded-md border border-white/30 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold hover:bg-white/20">𝕏</span>
                <span className="w-6 h-6 rounded-md border border-white/30 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold hover:bg-white/20">f</span>
                <span className="w-6 h-6 rounded-md border border-white/30 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold hover:bg-white/20">▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Albert Flores */}
        <div 
          onClick={() => setActiveCard(2)}
          className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
            activeCard === 2 
              ? 'border-sky-300 shadow-lg ring-2 ring-sky-100' 
              : 'border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
          }`}
        >
          <div>
            <span className="font-display font-bold text-lg sm:text-xl text-sky-900 block mb-3">
              Seamless experience
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              &ldquo;The team made every step stress-free and supportive. I finally feel confident about my treatment and fast physical recovery.&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={CLINIC_IMAGES.doctorConsultation}
                  alt="Albert Flores"
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, 'doctorConsultation')}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Albert Flores</h4>
                <span className="text-[11px] text-slate-500">Regular Patient</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">𝕏</span>
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">f</span>
              <span className="w-5 h-5 rounded-md border border-slate-200 flex items-center justify-center text-[10px] font-bold hover:text-slate-700">▶</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
