import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { TOTAL_CARE_STEPS } from '../data/clinicData';
import { Play, CheckCircle2, ShieldCheck, Smartphone, Clock, ArrowRight, Activity, Users, Sparkles, X } from 'lucide-react';

interface ApproachPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({
  onNavigateHome,
  onOpenBooking,
  onOpenVideo,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = TOTAL_CARE_STEPS[activeStepIndex];

  const comparisons = [
    {
      metric: 'Appointment Duration',
      traditional: 'Rushed 7-10 minute encounters with minimal dialogue',
      medix: 'Comprehensive 30-45 minute unhurried clinical evaluations'
    },
    {
      metric: 'Specialist Coordination',
      traditional: 'Disjointed clinics requiring separate referrals and lost records',
      medix: 'Unified multidisciplinary clinical team under one shared roof'
    },
    {
      metric: 'Diagnostic Turnaround',
      traditional: 'Outsourced lab results delivered 5-7 business days later',
      medix: 'In-house CLIA lab with digital portal results in 2-4 hours'
    },
    {
      metric: 'Billing & Transparency',
      traditional: 'Surprise out-of-network bills weeks after treatment',
      medix: 'Upfront in-network co-pay verification and transparent fee schedule'
    },
    {
      metric: 'Post-Care Support',
      traditional: 'Automated phone trees with days to reach a physician',
      medix: 'Encrypted direct messaging with your dedicated care team'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="THE MEDIXWEB TOTAL CARE™ MODEL"
        title="A Proactive, Patient-First Approach to Modern Medicine"
        subtitle="Healthcare shouldn't feel like an assembly line. Discover how our coordinated clinical model connects intake, diagnostics, treatment, and proactive wellness seamlessly."
        currentPageName="Approach"
        onNavigateHome={onNavigateHome}
        ctaText="Begin Your Intake"
        onCtaClick={onOpenBooking}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Video Hero Spotlight */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center text-center p-6 group">
          <img
            src="/assets/images/hero_care_family_1790248293775.jpg"
            alt="MedixWeb clinical family care"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/40" />

          <div className="relative z-10 max-w-2xl text-white space-y-4">
            <button
              onClick={onOpenVideo}
              aria-label="Play 2-minute clinical orientation video"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-slate-900 mx-auto flex items-center justify-center shadow-xl hover:scale-110 transition-transform group/btn focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-sky-700 fill-sky-700 ml-1 group-hover/btn:scale-110 transition-transform" />
            </button>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-teal-300 font-bold">2-Minute Clinical Orientation</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                How MedixWeb Revolutionizes Your Outpatient Journey
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Presented by Dr. Sarah Chen, MD, FACC &bull; Chief of Cardiology
              </p>
            </div>
          </div>
        </div>

        {/* Interactive 4-Phase Care Journey */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">The Four-Stage Continuum</span>
            <h3 className="font-display text-3xl font-bold text-slate-900">
              Interactive Patient Journey: From Check-In to Lifelong Wellness
            </h3>
          </div>

          {/* Steps navigation bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TOTAL_CARE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    isActive
                      ? 'bg-sky-50 border-sky-400 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block mb-1 ${isActive ? 'text-sky-700' : 'text-slate-400'}`}>
                    STEP {step.step}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold block leading-snug ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                    {step.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
                <span>Active Phase: Step {activeStep.step}</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-slate-900">
                {activeStep.phase}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeStep.desc}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Patient Deliverable:
                </span>
                <div className="bg-white rounded-xl p-3 border border-slate-200 flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{activeStep.deliverable}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <h5 className="font-display font-bold text-sm text-slate-900">
                Clinical Standard Guarantee
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Zero unnecessary diagnostic orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Transparent cost estimated before procedure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Encrypted digital chart access in &lt; 4 hours</span>
                </li>
              </ul>
              <button
                onClick={onOpenBooking}
                className="w-full mt-2 bg-[#0A1A2F] hover:bg-sky-950 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors text-center"
              >
                Schedule Step 01 Intake
              </button>
            </div>
          </div>
        </section>

        {/* Comparison Matrix: Traditional vs MedixWeb */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">The Difference is Clear</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Traditional Care vs. MedixWeb Total Care™
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 w-1/4">Aspect</th>
                  <th className="py-3 px-4 w-3/8 text-slate-500">Traditional Outpatient</th>
                  <th className="py-3 px-4 w-3/8 text-sky-700 bg-sky-50/70 rounded-t-xl">MedixWeb Total Care™</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{row.metric}</td>
                    <td className="py-4 px-4 text-slate-500">{row.traditional}</td>
                    <td className="py-4 px-4 font-semibold text-slate-800 bg-sky-50/40">
                      <div className="flex items-center gap-2 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.medix}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Digital Patient Portal Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
              <Smartphone className="w-4 h-4" />
              <span>Digital Patient Experience</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              Your Entire Health Record at Your Fingertips
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              No paper folders or lost prescription slips. Access lab trends, message your physician directly, download vaccination records, and manage billing effortlessly from your smartphone.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <strong className="block text-white mb-0.5">Direct Chat</strong>
                <span className="text-slate-300 text-[11px]">Direct encrypted access to your care team</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <strong className="block text-white mb-0.5">Biometric Trends</strong>
                <span className="text-slate-300 text-[11px]">Automated graphs for BP, glucose &amp; lipids</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 text-center">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl max-w-sm mx-auto space-y-3">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">Patient Portal Access</span>
              <h5 className="font-display font-bold text-lg">Existing MedixWeb Patient?</h5>
              <p className="text-xs text-slate-600">Log in to view recent blood work, upcoming appointments, and refill prescriptions.</p>
              <button
                onClick={() => alert("Patient Portal: In production, this links securely to Epic/MyChart patient SSO.")}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors"
              >
                Log In to Patient Portal
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
