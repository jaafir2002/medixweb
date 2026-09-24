import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/clinicData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header with Tag, Split Left Title and Right Description */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
          <span>+</span>
          <span>BLOG</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Explore Expert Insights for a Healthier, Happier Life
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Discover expert health insights, wellness advice, and medical updates to help you make informed decisions and live a healthier life every day.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Blog Article Cards matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Image Container */}
              <div className="h-48 sm:h-52 w-full overflow-hidden relative bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700 shadow-xs">
                  {post.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </div>

            {/* Card Footer: Read More and Date */}
            <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 font-bold text-sky-600 group-hover:text-sky-700 transition-colors focus-visible:outline-none"
              >
                <span>Read More</span>
                <span className="w-5 h-5 rounded-full border border-sky-200 flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              <span className="text-slate-400 font-medium tabular-nums">
                {post.date}
              </span>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
