import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { TESTIMONIALS_LIST } from '../data/clinicData';
import { Star, Quote, CheckCircle, ThumbsUp, MessageSquare, ShieldCheck, Heart, Send } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigateHome,
  onOpenBooking,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);

  // Form State
  const [patientName, setPatientName] = useState('');
  const [rating, setRating] = useState(5);
  const [department, setDepartment] = useState('Cardiology');
  const [feedback, setFeedback] = useState('');

  const tags = ['All', 'Cardiology & Lifestyle', 'Family Medicine', 'Orthopedics & Rehab', 'Pediatrics', 'Urgent Care & Diagnostics'];

  const filteredReviews = useMemo(() => {
    if (selectedTag === 'All') return TESTIMONIALS_LIST;
    return TESTIMONIALS_LIST.filter(t => t.tag === selectedTag);
  }, [selectedTag]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setReviewSubmitted(false);
      setPatientName('');
      setFeedback('');
    }, 2500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="PATIENT EXPERIENCES & VERIFIED REVIEWS"
        title="Real Healing Journeys, Unfiltered Patient Voices"
        subtitle="Discover why over 135,000 patients trust MedixWeb for their family's health. Every review is verified through our post-consultation intake portal."
        currentPageName="Testimonials"
        onNavigateHome={onNavigateHome}
        ctaText="Share Your Feedback"
        onCtaClick={() => setShowReviewForm(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Rating Scorecard Overview */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
          <div className="md:border-r border-slate-100 md:pr-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Overall Patient Score</span>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-black text-4xl text-slate-900 tabular-nums">4.92</span>
              <div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500">out of 5.0 stars</span>
              </div>
            </div>
          </div>

          <div className="md:border-r border-slate-100 md:pr-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Verified Outcomes</span>
            <span className="font-display font-bold text-3xl text-slate-900 block tabular-nums">1,240+</span>
            <span className="text-xs text-slate-500">Independent verified reviews</span>
          </div>

          <div className="md:border-r border-slate-100 md:pr-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Recommendation Rate</span>
            <span className="font-display font-bold text-3xl text-emerald-600 block tabular-nums">98.2%</span>
            <span className="text-xs text-slate-500">Would recommend to friends &amp; family</span>
          </div>

          <div>
            <button
              onClick={() => setShowReviewForm(true)}
              className="w-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm border border-sky-200 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Write a Patient Review</span>
            </button>
          </div>
        </section>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-[#0A1A2F] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <h4 className="font-display font-bold text-base text-slate-900 mb-2 leading-snug">
                  &ldquo;{item.title}&rdquo;
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.patientName}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-1.5">
                    <strong className="text-slate-900 font-bold">{item.patientName}</strong>
                    <span title="Verified MedixWeb Patient" className="inline-flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                    </span>
                  </div>
                  <span className="text-slate-500 text-[11px] block">{item.duration} &bull; {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Review Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
              {reviewSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900">Thank You For Your Feedback!</h4>
                  <p className="text-xs text-slate-600">Your review helps our clinical team maintain exceptional patient standards.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="font-display font-bold text-lg text-slate-900">Share Your Clinic Experience</h4>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                    >
                      &times;
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name (or Initials)</label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. John D."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Clinical Department</label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="Cardiology">Cardiology</option>
                        <option value="Family Medicine">Family Medicine</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Diagnostics Lab">Diagnostics Lab</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Overall Rating</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Great</option>
                        <option value={3}>3 Stars - Good</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Experience / Physician Care</label>
                    <textarea
                      required
                      rows={4}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Tell us about the bedside manner, appointment timeliness, or recovery outcome..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#0A1A2F] hover:bg-sky-950 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
