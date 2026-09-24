import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';
import { Activity, HeartPulse, Baby, Bone, Sparkles, FileCheck, Search, CheckCircle2, ChevronDown, Clock, User, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenBookingWithService: (service: ServiceItem) => void;
  onNavigateDoctorsWithSpecialty: (specialty: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenBookingWithService,
  onNavigateDoctorsWithSpecialty,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = ['All', 'Primary Care', 'Specialty Care', 'Family Care', 'Surgical & Rehab', 'Diagnostics'];

  const filteredServices = useMemo(() => {
    return CLINIC_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.commonProcedures.some(p => p.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-5 h-5 text-sky-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Baby': return <Baby className="w-5 h-5 text-amber-500" />;
      case 'Bone': return <Bone className="w-5 h-5 text-indigo-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-emerald-600" />;
      default: return <Activity className="w-5 h-5 text-sky-600" />;
    }
  };

  const mapCategoryToSpecialty = (cat: string) => {
    if (cat === 'Family Care') return 'Pediatrics';
    if (cat === 'Surgical & Rehab') return 'Orthopedics';
    if (cat === 'Specialty Care') return 'Cardiology';
    return 'Family Medicine';
  };

  const faqs = [
    {
      q: 'Do I need a primary care physician referral to see a MedixWeb specialist?',
      a: 'In most instances, no referral is required! Major PPO health plans allow direct scheduling with our cardiology, orthopedics, and pediatric specialists. If your specific HMO plan requires an authorization, our patient intake coordinators handle the documentation on your behalf.'
    },
    {
      q: 'How fast will my lab results and imaging be delivered?',
      a: 'Routine blood panels, metabolic screenings, and digital radiography are processed in-house with digital reports accessible in your secure patient portal within 4 to 8 hours. Any critical anomalies are immediately flagged by the ordering physician with a direct phone consult.'
    },
    {
      q: 'Are virtual telehealth consultations billed at the same rate as in-person visits?',
      a: 'Most commercial insurers (BlueCross, Aetna, Cigna, UnitedHealthcare) and Medicare reimburse telehealth consultations at standard in-person rates, typically requiring only your regular specialist or primary copay.'
    },
    {
      q: 'What should I bring to my initial clinic appointment?',
      a: 'Please bring a valid photo ID, your active insurance card, and an up-to-date list of current medications or supplements. If you have relevant prior diagnostic records or imaging discs, our team will scan them into your chart.'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="SPECIALTIES & CLINICAL DEPARTMENTS"
        title="Comprehensive Medical Care for Every Chapter of Life"
        subtitle="From routine preventive checkups to complex outpatient diagnostics, our board-certified departments provide integrated medical excellence under one roof."
        currentPageName="Services"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures, symptoms, or tests (e.g. ECG, blood test, vaccine)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <span className="text-xs font-semibold text-slate-500 shrink-0">
              Showing <strong className="text-slate-900">{filteredServices.length}</strong> clinical services
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Common procedures checklist */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Common Diagnostic Procedures:
                  </span>
                  {service.commonProcedures.map((proc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Lead: <strong className="text-slate-700">{service.departmentHead}</strong></span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.avgDuration}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onOpenBookingWithService(service)}
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors text-center shadow-xs"
                  >
                    Book This Service
                  </button>
                  <button
                    onClick={() => onNavigateDoctorsWithSpecialty(mapCategoryToSpecialty(service.category))}
                    title="View specialists in this department"
                    className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors"
                  >
                    Specialists &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Preparation Guide */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-2">Patient Preparation Guide</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              How to Prepare for Your Diagnostic Visit
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <strong className="block text-white font-bold text-base mb-2">Fasting Lab Panels</strong>
              <p className="text-slate-300 leading-relaxed text-xs">
                For lipid profiles or comprehensive metabolic screening, drink plenty of water but avoid caloric intake for 8 to 12 hours prior to draw.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <strong className="block text-white font-bold text-base mb-2">Cardiology Stress Tests</strong>
              <p className="text-slate-300 leading-relaxed text-xs">
                Wear comfortable athletic clothing and running shoes. Avoid caffeine or beta-blockers as specifically instructed by Dr. Chen&apos;s team.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <strong className="block text-white font-bold text-base mb-2">Pediatric Visits</strong>
              <p className="text-slate-300 leading-relaxed text-xs">
                Bring baby&apos;s immunization record booklet and a favorite toy or blanket. Our suites have private nursing rooms and quiet sensory corners.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">Frequently Asked Questions</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Common Questions About Our Services &amp; Testing
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
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
