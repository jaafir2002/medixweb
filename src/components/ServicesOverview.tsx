import React, { useState } from 'react';
import { Activity, HeartPulse, Baby, Bone, Sparkles, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Primary Care', 'Specialty Care', 'Family Care', 'Surgical & Rehab', 'Diagnostics'];

  const filteredServices = selectedCategory === 'All'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter(s => s.category === selectedCategory);

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

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
            <span>+</span>
            <span>OUR SPECIALTIES & SERVICES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Medical Care for Every Chapter of Life
          </h2>
        </div>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-sky-950 transition-colors shadow-sm shrink-0 self-start md:self-auto"
        >
          <span>Schedule Visit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              selectedCategory === cat
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
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

              <div className="space-y-1.5 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Common Procedures:</span>
                {service.commonProcedures.map((proc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Department Lead</span>
                <span className="text-xs font-semibold text-slate-800">{service.departmentHead}</span>
              </div>

              <button
                onClick={() => onSelectService(service)}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform p-1"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
