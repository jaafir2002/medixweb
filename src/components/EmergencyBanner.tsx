import React, { useState } from 'react';
import { PhoneCall, AlertCircle, Clock, X, ChevronRight } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenBooking: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Emergency and Urgent Care Notice"
      className="bg-slate-900 text-white border-b border-slate-800 text-xs py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
            <AlertCircle className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
            <span>24/7 Clinical Hotline</span>
          </div>
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">|</span>
          <span className="text-slate-300">
            Immediate emergency triage: <a href="tel:8005550199" className="font-semibold text-white underline hover:text-sky-300 focus-visible:ring-1 focus-visible:ring-sky-400 rounded transition-colors">(800) 555-0199</a>
          </span>
          <span className="hidden md:inline text-slate-600" aria-hidden="true">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-emerald-400">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Downtown Walk-In Triage Wait: <strong className="text-white font-medium">~7 mins</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="text-sky-300 hover:text-white font-medium flex items-center gap-1 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded py-0.5 px-1"
          >
            <span>Need Same-Day Care?</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss emergency banner"
            className="text-slate-400 hover:text-slate-200 p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
