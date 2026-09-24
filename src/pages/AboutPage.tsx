import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Shield, Award, Heart, Users, CheckCircle2, Clock, MapPin, Building2, Stethoscope, ArrowRight } from 'lucide-react';
import { CLINIC_VALUES } from '../data/clinicData';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
  onNavigateServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenBooking,
  onNavigateServices,
}) => {
  const [selectedFacility, setSelectedFacility] = useState<'diagnostics' | 'imaging' | 'pediatric' | 'recovery'>('diagnostics');

  const facilityData = {
    diagnostics: {
      title: 'State-of-the-Art Point-of-Care Pathology Lab',
      desc: 'Accredited CLIA-certified pathology lab delivering routine metabolic panels, complete blood counts, and rapid molecular PCR assays in under 2 hours.',
      features: ['Automated hematology analyzers', 'Real-time digital results to smartphone', 'Peer-reviewed quality calibration daily'],
      badge: 'CLIA Certified'
    },
    imaging: {
      title: 'Ultra-Low-Dose Digital Radiography & High-Res Ultrasound',
      desc: 'Equipped with the latest high-frequency transducers and low-radiation digital radiography for precise musculoskeletal and cardiovascular evaluations.',
      features: ['80% less radiation exposure than conventional X-ray', 'Instant physician cloud review', 'Comfortable ergonomic positioning beds'],
      badge: 'FDA Cleared Equipment'
    },
    pediatric: {
      title: 'Kid-Friendly Sensory-Neutral Examination Suites',
      desc: 'Designed with calming color palettes, interactive sensory displays, and separate well-child waiting areas to reduce medical anxiety for young patients.',
      features: ['Distraction-free acoustic dampening', 'Pediatric-specialized diagnostic tools', 'Complimentary bravery tokens and books'],
      badge: 'Child Wellness Certified'
    },
    recovery: {
      title: 'Private Day-Recovery & Observation Lounges',
      desc: 'Spacious suites designed for patients receiving outpatient infusions, minor surgical procedures, or extended observation with natural daylight.',
      features: ['Zero-gravity clinical recliner suites', 'Continuous non-invasive biometric monitoring', 'Dedicated post-care nursing support'],
      badge: 'Comfort First'
    }
  };

  const activeFac = facilityData[selectedFacility];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="ABOUT US & CLINICAL EXCELLENCE"
        title="Where Clinical Precision Meets Human Compassion"
        subtitle="MedixWeb Clinic connects doctors and patients effortlessly, providing smarter, safer, and compassionate healthcare from diagnosis to full recovery."
        currentPageName="About Us"
        onNavigateHome={onNavigateHome}
        ctaText="Book Clinical Visit"
        onCtaClick={onOpenBooking}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        
        {/* Core Mission & Doctor Portrait */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-square max-w-md mx-auto">
              <img
                src="/assets/images/about_doctor_portrait_1790248368496.jpg"
                alt="Lead Physician Dr. Sarah Chen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-sky-300 block">Clinical Leadership</span>
                <h3 className="font-display font-bold text-xl">Dr. Sarah Chen, MD, FACC</h3>
                <p className="text-xs text-slate-300">Chief of Cardiology &amp; Clinical Quality Board</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-slate-900 text-lg block tabular-nums leading-none">12+ Years</span>
                <span className="text-[11px] text-slate-500 font-medium">Excellence in Care</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              <Heart className="w-3.5 h-3.5 fill-sky-200" />
              <span>Our Founding Creed</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-snug tracking-tight">
              We eliminate administrative friction so physicians can dedicate 100% of their focus to healing.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              MedixWeb was founded in 2014 by a coalition of academic physicians who recognized that modern healthcare had become fractured, bureaucratic, and rushed. We set out to design an outpatient sanctuary where appointments are unhurried, lab results arrive within hours rather than days, and multi-specialty communication happens seamlessly under one roof.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60">
                <span className="font-display font-bold text-2xl text-slate-900 block tabular-nums">135k+</span>
                <span className="text-xs text-slate-500">Patients Treated</span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60">
                <span className="font-display font-bold text-2xl text-slate-900 block tabular-nums">97.4%</span>
                <span className="text-xs text-slate-500">Satisfaction Rate</span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60 col-span-2 sm:col-span-1">
                <span className="font-display font-bold text-2xl text-slate-900 block tabular-nums">14</span>
                <span className="text-xs text-slate-500">Clinical Specialties</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Core Values Breakdown */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">Our Operating Standards</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              The Five Clinical Pillars Guiding Every Diagnosis
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLINIC_VALUES.map((val) => (
              <div key={val.id} className="bg-slate-50 hover:bg-sky-50/50 rounded-2xl p-5 border border-slate-200/80 transition-all flex flex-col justify-between group">
                <div>
                  <span className="font-mono text-xs font-bold text-sky-600 block mb-2">{val.number}</span>
                  <h4 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {val.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Facility & Technology Tour */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/70 inline-block mb-3">
              Modern Clinical Infrastructure
            </span>
            <h3 className="font-display text-3xl font-bold text-slate-900">
              Engineered for Diagnostics Precision &amp; Patient Peace of Mind
            </h3>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'diagnostics', label: 'Point-of-Care Lab' },
              { id: 'imaging', label: 'Digital Radiography' },
              { id: 'pediatric', label: 'Pediatric Suites' },
              { id: 'recovery', label: 'Observation Lounges' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFacility(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedFacility === tab.id
                    ? 'bg-[#0A1A2F] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Facility Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                {activeFac.badge}
              </span>
              <h4 className="font-display font-bold text-2xl text-slate-900">
                {activeFac.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeFac.desc}
              </p>

              <div className="space-y-2 pt-2">
                {activeFac.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3]">
              <img
                src="/assets/images/care_team_scrubs_1790248388964.jpg"
                alt="MedixWeb clinical medical suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Accreditations & Safety Badges */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
                <Shield className="w-4 h-4" />
                <span>Highest Clinical Certifications</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Zero Compromise on Patient Safety, Sterilization &amp; Privacy
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All clinical wings operate under rigorous clinical protocols exceeding state and federal safety mandates. Our electronic record exchange is fortified by AES-256 bit end-to-end encryption.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                <strong className="block text-white font-bold text-sm mb-1">HIPAA Compliant</strong>
                <span className="text-slate-300 text-[11px]">Strict cryptographic patient data privacy protocol.</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                <strong className="block text-white font-bold text-sm mb-1">CLIA Laboratory</strong>
                <span className="text-slate-300 text-[11px]">Federal clinical lab standards verification.</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                <strong className="block text-white font-bold text-sm mb-1">Board Certified</strong>
                <span className="text-slate-300 text-[11px]">100% of specialists maintain active board accreditation.</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                <strong className="block text-white font-bold text-sm mb-1">JCAHO Gold Seal</strong>
                <span className="text-slate-300 text-[11px]">National accreditation for quality health outcomes.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="text-center bg-gradient-to-r from-sky-600 to-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
            Ready to Experience Healthcare Without the Friction?
          </h3>
          <p className="text-sky-100 text-sm max-w-xl mx-auto mb-6">
            Schedule an in-person consultation or encrypted video appointment with our board-certified clinical faculty today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all"
            >
              Book an Appointment
            </button>
            <button
              onClick={onNavigateServices}
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full text-xs sm:text-sm border border-white/40 transition-all"
            >
              Explore Our Services
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
