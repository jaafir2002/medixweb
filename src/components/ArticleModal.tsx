import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, ArrowRight, Bookmark } from 'lucide-react';
import { BlogPost } from '../data/clinicData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && post) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/60 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <button
            onClick={onClose}
            aria-label="Close article view"
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="h-56 w-full rounded-2xl overflow-hidden bg-slate-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h2 id="article-modal-title" className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-tight mb-3">
              {post.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1 font-medium text-slate-800">
                <User className="w-3.5 h-3.5 text-sky-600" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <h4 className="font-display font-bold text-slate-900 text-sm mb-1">
                Have questions regarding your personal health indicators?
              </h4>
              <p className="text-xs text-slate-600">
                Schedule a consultation with our medical authors at MedixWeb.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 bg-[#0A1A2F] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-sky-900 transition-colors shrink-0"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
