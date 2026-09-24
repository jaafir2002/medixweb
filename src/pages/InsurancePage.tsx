import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { INSURANCE_PROVIDERS } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, DollarSign, CreditCard, HelpCircle, PhoneCall, AlertCircle, ChevronDown } from 'lucide-react';

interface InsurancePageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({
  onNavigateHome,
  onOpenBooking,
}) => {
  const [selectedCarrier, setSelectedCarrier] = useState<string>('Blue Cross Blue Shield');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const activeProvider = INSURANCE_PROVIDERS.find(p => p.name.includes(selectedCarrier)) || INSURANCE_PROVIDERS[0];

  const transparentFees = [
    { service: 'New Patient Comprehensive Health Evaluation', code: 'CPT 99204', cashPrice: '$165', insuranceEstimate: '$15 - $30 copay' },
    { service: 'Established Patient Routine Checkup', code: 'CPT 99213', cashPrice: '$110', insuranceEstimate: '$15 - $25 copay' },
    { service: '12-Lead Electrocardiogram (ECG) with Interpretation', code: 'CPT 93000', cashPrice: '$85', insuranceEstimate: 'Covered 100% In-Network' },
    { service: 'Pediatric Well-Child Wellness Exam', code: 'CPT 99382', cashPrice: '$120', insuranceEstimate: '$0 (ACA Preventive Mandate)' },
    { service: 'Comprehensive Metabolic Panel (CMP) + Lipid Panel', code: 'CPT 80053', cashPrice: '$65', insuranceEstimate: 'Covered / In-Network Tier 1' },
    { service: 'Two-View Digital Radiography (X-Ray)', code: 'CPT 71046', cashPrice: '$95', insuranceEstimate: '$20 copay or deductible' },
  ];

  const insuranceFaqs = [
    {
      q: 'Will I receive unexpected medical bills after my visit?',
      a: 'Never. MedixWeb strictly adheres to the No Surprises Act and provides transparent Good Faith Estimates prior to any non-emergency treatment. Your out-of-pocket copay or coinsurance is calculated and disclosed before you enter the examination room.'
    },
    {
      q: 'Can I use my Health Savings Account (HSA) or Flexible Spending Account (FSA)?',
      a: 'Yes! All services, clinical co-pays, diagnostic tests, and prescribed rehabilitative braces at MedixWeb are 100% qualified medical expenses eligible for pre-tax HSA and FSA debit cards.'
    },
    {
      q: 'What if my insurance is out-of-network?',
      a: 'If you are out-of-network, we provide transparent discounted self-pay rates and immediately generate itemized Superbills formatted for prompt direct reimbursement from your insurance carrier.'
    },
    {
      q: 'Do you offer monthly interest-free payment plans?',
      a: 'Yes. For balances exceeding $200, our financial care coordinators can arrange structured 3, 6, or 12-month interest-free payment arrangements with zero administrative fees.'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="INSURANCE & AFFORDABLE BILLING"
        title="Transparent Medical Pricing with Zero Hidden Surprises"
        subtitle="We partner with over 40 leading health insurance networks and provide straightforward cash-pay pricing to keep exceptional medical care accessible."
        currentPageName="Insurance"
        onNavigateHome={onNavigateHome}
        ctaText="Check Your Coverage"
        onCtaClick={onOpenBooking}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Interactive Instant Insurance Eligibility Checker */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">Instant Verification</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Check Your Health Plan In-Network Coverage
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select your insurance carrier below to view standard tier coverage, typical copays, and referral guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Selection */}
            <div className="lg:col-span-6 space-y-3">
              <label className="block text-xs font-semibold text-slate-700">Select Carrier</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INSURANCE_PROVIDERS.map((provider) => {
                  const isSelected = activeProvider.name === provider.name;
                  return (
                    <button
                      key={provider.name}
                      onClick={() => setSelectedCarrier(provider.name)}
                      className={`p-3.5 rounded-2xl text-left transition-all border text-xs font-bold flex items-center justify-between ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="truncate">{provider.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-display font-bold text-lg text-slate-900">{activeProvider.name}</h4>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  {activeProvider.tier}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">Estimated Copay:</span>
                  <strong className="text-slate-900">{activeProvider.copayEstimate}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-500">Deductible Status:</span>
                  <span className="text-slate-700 font-medium">
                    {activeProvider.deductibleApplies ? 'Deductible applies for major outpatient procedures' : 'Waived for preventive & primary care'}
                  </span>
                </div>
                <div className="py-1 text-slate-600 text-xs leading-relaxed">
                  {activeProvider.notes}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors text-center shadow-xs"
                >
                  Book with {activeProvider.name.split(' ')[0]}
                </button>
                <a
                  href="tel:8005550199"
                  className="px-3.5 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                  <span>Verify Card</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Fee Schedule Table */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">Fee Transparency</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Sample Self-Pay &amp; Cash Price Schedule
              </h3>
            </div>
            <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
              Updated for 2026 Clinical Rates
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Clinical Service</th>
                  <th className="py-3 px-4">Medical Billing Code</th>
                  <th className="py-3 px-4">Transparent Cash Rate</th>
                  <th className="py-3 px-4">Typical In-Network Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transparentFees.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.service}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-500 text-xs">{row.code}</td>
                    <td className="py-3.5 px-4 font-bold text-sky-700">{row.cashPrice}</td>
                    <td className="py-3.5 px-4 text-emerald-700 font-semibold">{row.insuranceEstimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HSA / FSA & Financial Assistance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl">HSA &amp; FSA Eligible</h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Use your pre-tax Flexible Spending Account or Health Savings Account debit card for doctor visits, immunizations, diagnostic scans, and physical therapy with zero penalty.
            </p>
          </div>

          <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100 space-y-3 text-sky-950">
            <div className="w-10 h-10 rounded-xl bg-sky-200 text-sky-800 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-xl text-slate-900">Interest-Free Payment Plans</h4>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              We believe financial strain should never compromise recovery. Ask our billing advisors about customizable 3 to 12-month interest-free installments.
            </p>
          </div>
        </div>

        {/* Billing FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">Billing Support</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Frequently Asked Questions About Insurance
            </h3>
          </div>

          <div className="space-y-3">
            {insuranceFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180 text-sky-600' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
