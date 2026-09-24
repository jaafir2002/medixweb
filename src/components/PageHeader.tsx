import React from 'react';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  currentPageName: string;
  onNavigateHome: () => void;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  tag,
  title,
  subtitle,
  currentPageName,
  onNavigateHome,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="bg-gradient-to-b from-sky-50/70 via-white to-transparent pt-6 pb-10 border-b border-slate-100 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb row */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1 hover:text-sky-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 rounded px-1 py-0.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">{currentPageName}</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors py-1 px-2.5 rounded-full border border-slate-200 hover:border-sky-200 bg-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        {/* Tag & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 border border-sky-200/80 px-3 py-1 rounded-full mb-3">
              <span>+</span>
              <span>{tag}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {ctaText && onCtaClick && (
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center bg-[#0A1A2F] hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full text-xs sm:text-sm transition-all shadow-sm shrink-0 self-start md:self-auto"
            >
              {ctaText}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
