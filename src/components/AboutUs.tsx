import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Shield, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [impactIndex, setImpactIndex] = useState(0);

  const impacts = [
    {
      stat: '50+',
      label: 'Healthcare Professionals',
      desc: 'Supporting Lives Worldwide with certified clinical excellence',
    },
    {
      stat: '135k+',
      label: 'Patient Consultations',
      desc: 'Delivering reassuring recovery journeys across 14 specialties',
    },
    {
      stat: '99.4%',
      label: 'Diagnostic Accuracy',
      desc: 'AI-assisted imaging and accredited peer-reviewed lab panels',
    }
  ];

  const handlePrev = () => {
    setImpactIndex((prev) => (prev === 0 ? impacts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImpactIndex((prev) => (prev === impacts.length - 1 ? 0 : prev + 1));
  };

  const currentImpact = impacts[impactIndex];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Top Tag & Main Statement Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        
        {/* Left Side: Tag + Doctor Portrait with Artistic Splash Effect */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-6">
            <span>+</span>
            <span>ABOUT US</span>
          </div>

          <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
            {/* Artistic blue particle / splash decorative rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/25 via-teal-400/20 to-blue-500/25 rounded-full blur-xl transform -rotate-6 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-200/50 rounded-full blur-2xl pointer-events-none" />
            
            {/* Portrait Frame */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 aspect-square">
              <img
                src="/assets/images/about_doctor_portrait_1790248368496.jpg"
                alt="Lead clinical physician at MedixWeb"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 text-white">
                <p className="text-xs font-semibold">Dr. Sarah Chen & Clinical Faculty</p>
                <p className="text-[11px] text-slate-300">Dedicated Care Without Compromise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Bold Core Mission Statement with Professional Bounce Animation */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50/90 text-sky-700 text-xs font-semibold mb-3.5 border border-sky-100 shadow-2xs animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Seamless Doctor-Patient Continuum</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug sm:leading-tight tracking-tight mb-6 animate-bounce-subtle group/headline transition-all duration-300">
            <span>MedixWeb Clinic connects doctors and patients effortlessly, providing </span>
            <span className="inline-block text-sky-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer font-extrabold decoration-sky-300 underline underline-offset-4 decoration-2">
              smarter
            </span>
            <span>, </span>
            <span className="inline-block text-sky-700 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer font-extrabold decoration-sky-400 underline underline-offset-4 decoration-2">
              safer
            </span>
            <span>, and </span>
            <span className="inline-block text-teal-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer font-extrabold decoration-teal-300 underline underline-offset-4 decoration-2">
              compassionate
            </span>
            <span> healthcare from diagnosis to full recovery.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Founded with the belief that healing thrives at the intersection of human empathy and modern diagnostic precision. We eliminate administrative friction, empowering our medical teams to dedicate their full focus to listening, diagnosing accurately, and walking beside you toward lasting vitality.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Accredited Specialists</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Same-Day Appointments</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Feature & Impact Cards matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Our impact */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Our impact
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  aria-label="Previous impact metric"
                  className="w-7 h-7 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 flex items-center justify-center text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next impact metric"
                  className="w-7 h-7 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 flex items-center justify-center text-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-2 tabular-nums">
              {currentImpact.stat}
            </div>
            <div className="text-xs font-semibold text-sky-700 mb-1">
              {currentImpact.label}
            </div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 mt-4">
            {currentImpact.desc}
          </p>
        </div>

        {/* Card 2: Smart Care */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-800 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-4">
              <Heart className="w-3 h-3 text-sky-600 fill-sky-200" />
              <span>Connected Care</span>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
              Smart Care
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Smart digital health tracking ensures accurate insights and better outcomes with personalized monitoring.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-4 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
            <span>Learn about our digital portal &rarr;</span>
          </div>
        </div>

        {/* Card 3: Secure Data */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full mb-4">
              <Shield className="w-3 h-3 text-teal-600 fill-teal-100" />
              <span>Data Privacy</span>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
              Secure Data
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Protecting patient data through secure, HIPAA-compliant digital health systems with end-to-end cryptographic encryption.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-4 flex items-center text-xs font-semibold text-teal-700 group-hover:translate-x-1 transition-transform">
            <span>Explore privacy standards &rarr;</span>
          </div>
        </div>

      </div>

    </section>
  );
};
