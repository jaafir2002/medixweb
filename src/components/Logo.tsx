import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showBadge?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  showBadge = false,
  className = '',
}) => {
  // Dimensions based on size
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Modern Medical Emblem Badge */}
      <div className="relative group/logo flex-shrink-0">
        {/* Ambient Glow on hover */}
        <div 
          className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500 via-teal-400 to-emerald-400 opacity-40 blur-[6px] group-hover/logo:opacity-80 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Outer squircle container */}
        <div 
          className={`relative ${iconDimensions} rounded-xl sm:rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-400 via-teal-300 to-sky-600 shadow-md shadow-sky-500/20 transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:shadow-lg group-hover/logo:shadow-sky-500/30 overflow-hidden`}
        >
          {/* Inner Badge Gradient */}
          <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-gradient-to-br from-sky-600 via-sky-700 to-teal-800 flex items-center justify-center relative overflow-hidden">
            
            {/* Dynamic decorative backdrop light rays */}
            <div 
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/20 rounded-full blur-sm pointer-events-none"
              aria-hidden="true"
            />
            <div 
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-teal-400/20 rounded-full blur-sm pointer-events-none"
              aria-hidden="true"
            />

            {/* Custom Modern Medical Cross & Cardio Pulse SVG */}
            <svg
              className="w-[72%] h-[72%] text-white relative z-10 drop-shadow-sm"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Soft Translucent Cross Silhouette */}
              <rect
                x="12"
                y="4"
                width="8"
                height="24"
                rx="3.5"
                className="fill-white/30"
              />
              <rect
                x="4"
                y="12"
                width="24"
                height="8"
                rx="3.5"
                className="fill-white/30"
              />

              {/* Solid White Center Cross with Organic Rounded Corners */}
              <rect
                x="12.5"
                y="5"
                width="7"
                height="22"
                rx="3"
                className="fill-white"
              />
              <rect
                x="5"
                y="12.5"
                width="22"
                height="7"
                rx="3"
                className="fill-white"
              />

              {/* High-tech ECG / Pulse Wave cutting through with Sky Blue & Teal Accent */}
              <path
                d="M6 16H10.5L12.5 10.5L15.5 21.5L18.5 13L20.5 16H26"
                stroke="#0284C7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover/logo:stroke-sky-600"
              />

              {/* Pulse Sparkle / Vitality Node */}
              <circle
                cx="15.5"
                cy="21.5"
                r="1.2"
                fill="#0D9488"
                className="animate-ping opacity-75 origin-center"
              />
              <circle
                cx="15.5"
                cy="21.5"
                r="1.2"
                fill="#14B8A6"
              />
              <circle
                cx="18.5"
                cy="13"
                r="1"
                fill="#38BDF8"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span 
              className={`font-display font-extrabold tracking-tight ${textSizes} ${
                variant === 'light' ? 'text-slate-900' : 'text-white'
              }`}
            >
              Medix
              <span className={variant === 'light' ? 'text-sky-600' : 'text-sky-400'}>
                Web
              </span>
            </span>

            {showBadge && (
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-700 border border-sky-200">
                Clinic
              </span>
            )}
          </div>

          <span 
            className={`text-[10px] sm:text-[11px] font-medium tracking-wide leading-none mt-1 ${
              variant === 'light' ? 'text-slate-500' : 'text-teal-200/70'
            }`}
          >
            Health &amp; Wellness Center
          </span>
        </div>
      )}
    </div>
  );
};
