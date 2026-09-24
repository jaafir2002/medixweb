import React from 'react';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Approach } from '../components/Approach';
import { ServicesOverview } from '../components/ServicesOverview';
import { DoctorDirectory } from '../components/DoctorDirectory';
import { InsuranceSection } from '../components/InsuranceSection';
import { Testimonials } from '../components/Testimonials';
import { BlogSection } from '../components/BlogSection';
import { Doctor, ServiceItem, BlogPost } from '../data/clinicData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  onOpenBookingWithDoctor: (doc: Doctor) => void;
  onOpenBookingWithService: (service: ServiceItem) => void;
  onOpenVideo: () => void;
  onSelectArticle: (post: BlogPost) => void;
  onNavigatePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onExploreServices,
  onOpenBookingWithDoctor,
  onOpenBookingWithService,
  onOpenVideo,
  onSelectArticle,
  onNavigatePage,
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <Hero 
        onOpenBooking={onOpenBooking} 
        onExploreServices={onExploreServices} 
      />

      {/* About Us Section */}
      <AboutUs />
      
      {/* Quick link to detailed About page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('about')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>Discover Our Full Heritage &amp; Clinical Quality Standards</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs onOpenBooking={onOpenBooking} />

      {/* The MedixWeb Total Care™ Approach Section */}
      <Approach onOpenVideo={onOpenVideo} />

      {/* Quick link to detailed Approach page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('approach')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>Explore The 4-Phase Total Care™ Patient Journey</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Services & Clinical Specialties Overview */}
      <ServicesOverview 
        onSelectService={onOpenBookingWithService} 
        onOpenBooking={onOpenBooking} 
      />

      {/* Quick link to detailed Services page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('services')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>View All Clinical Departments, Preparation Guides &amp; FAQs</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Doctor Directory & Specialists */}
      <DoctorDirectory onBookDoctor={onOpenBookingWithDoctor} />

      {/* Quick link to detailed Team page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('our-team')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>Filter Physicians by Campus, Residency Credentials &amp; Bio</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Patient Testimonials Section */}
      <Testimonials />

      {/* Quick link to detailed Testimonials page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('testimonials')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>Browse All 1,200+ Patient Outcomes or Submit Your Story</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Insurance & Affordability Section */}
      <InsuranceSection />

      {/* Quick link to detailed Insurance page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 flex justify-end">
        <button
          onClick={() => onNavigatePage('insurance')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 px-4 py-2 rounded-full transition-all group"
        >
          <span>Check In-Network Eligibility &amp; Transparent Cash Fee Schedule</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Expert Insights & Health Blog Section */}
      <BlogSection onSelectPost={onSelectArticle} />
    </div>
  );
};
