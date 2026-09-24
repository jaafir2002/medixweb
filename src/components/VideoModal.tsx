import React, { useEffect } from 'react';
import { X, CheckCircle2, Shield, HeartPulse, Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* Header bar */}
        <div className="p-4 sm:px-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 id="video-modal-title" className="font-display font-semibold text-sm sm:text-base text-white">
              The MedixWeb Total Care™ Orientation & Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close orientation video"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Simulation Display */}
        <div className="relative aspect-video bg-slate-950 flex flex-col justify-end overflow-hidden group">
          <img
            src="/src/assets/images/care_team_scrubs_1790248388964.jpg"
            alt="MedixWeb clinical faculty in scrubs during patient discussion"
            className="w-full h-full object-cover opacity-80 filter contrast-105"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

          {/* Subtitles / Narrative Card */}
          <div className="relative p-6 sm:p-8 z-10">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Dr. Sarah Chen, Chief of Cardiology Narrating</span>
            </div>
            <p className="font-display font-bold text-lg sm:text-xl text-white mb-2 leading-relaxed">
              &ldquo;Modern healing is not just about writing prescriptions. It is about aligning cardiology, family medicine, nutrition, and diagnostics under one reassuring roof.&rdquo;
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Take a walk through our downtown medical suites, same-day rapid pathology lab, and private recovery lounges designed with natural daylight and ambient acoustic dampening.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-sky-400" /> Accredited Facility</span>
            <span className="flex items-center gap-1"><HeartPulse className="w-3.5 h-3.5 text-rose-400" /> Patient-Centered</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors"
            >
              Close Tour
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>Schedule In-Person Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
