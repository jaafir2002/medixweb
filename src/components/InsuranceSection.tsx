import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, HelpCircle, FileText, CreditCard } from 'lucide-react';
import { INSURANCE_PROVIDERS } from '../data/clinicData';

export const InsuranceSection: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>(INSURANCE_PROVIDERS[0].name);
  const [patientStatus, setPatientStatus] = useState<'new' | 'returning'>('new');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const activeProviderData = INSURANCE_PROVIDERS.find(p => p.name === selectedProvider) || INSURANCE_PROVIDERS[0];

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationResult(
      `Verified: ${selectedProvider} is actively accepted at MedixWeb Clinic. In-network benefits apply for ${patientStatus === 'new' ? 'new patient comprehensive evaluations' : 'established patient consultations'}. Standard estimated copay: ${activeProviderData.copayEstimate}.`
    );
  };

  return (
    <section id="insurance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
          <span>+</span>
          <span>INSURANCE & AFFORDABILITY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Transparent Coverage, Zero Hidden Costs
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We partner with premier commercial insurers, Medicare, and regional networks to ensure your clinical care remains affordable, clear, and worry-free.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Coverage Checker */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-2 text-sky-700 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              Instant Coverage Verification Tool
            </h3>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm mb-6">
            Select your health plan below to preview estimated copays, network status, and preventive care coverage.
          </p>

          <form onSubmit={handleCheckCoverage} className="space-y-4">
            <div>
              <label htmlFor="insurance-provider" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Select Insurance Carrier
              </label>
              <select
                id="insurance-provider"
                value={selectedProvider}
                onChange={(e) => {
                  setSelectedProvider(e.target.value);
                  setVerificationResult(null);
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
              >
                {INSURANCE_PROVIDERS.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name} ({p.tier})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Patient Status
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setPatientStatus('new');
                    setVerificationResult(null);
                  }}
                  className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                    patientStatus === 'new'
                      ? 'bg-sky-50 border-sky-500 text-sky-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  New Patient (Initial Visit)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPatientStatus('returning');
                    setVerificationResult(null);
                  }}
                  className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                    patientStatus === 'returning'
                      ? 'bg-sky-50 border-sky-500 text-sky-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Returning Patient
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-5 rounded-xl text-sm transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Verify My Coverage Now
            </button>
          </form>

          {/* Verification Result Box */}
          {verificationResult && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm animate-in fade-in duration-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-emerald-900 mb-1">Network Confirmed</strong>
                  <p className="leading-relaxed text-emerald-800">{verificationResult}</p>
                </div>
              </div>
            </div>
          )}

          {/* Plan snapshot badge */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>Carrier Tier: <strong className="text-slate-800">{activeProviderData.tier}</strong></span>
            <span>Preventive Copay: <strong className="text-emerald-700 font-bold">$0 with qualifying wellness plans</strong></span>
          </div>
        </div>

        {/* Right Column: Financial Policies & Transparent Options */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
              <CreditCard className="w-4 h-4 text-sky-600" />
              <h4>HSA, FSA & Direct Pay Accepted</h4>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              We process Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) with itemized digital super-bills automatically generated for rapid reimbursement.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
              <FileText className="w-4 h-4 text-sky-600" />
              <h4>No Surprise Billing Guarantee</h4>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Under federal compliance, our clinic provides Good Faith Estimates prior to scheduled non-emergency services. You are notified of all fees before care is administered.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-base">
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <h4>Uninsured or High-Deductible?</h4>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              We provide prompt-pay discounts and customized installment plans. Speak with our patient finance advocate at <a href="tel:8005550199" className="text-sky-600 font-semibold underline">(800) 555-0199</a>.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
