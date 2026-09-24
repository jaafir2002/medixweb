/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { ArticleModal } from './components/ArticleModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ApproachPage } from './pages/ApproachPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InsurancePage } from './pages/InsurancePage';
import { ContactPage } from './pages/ContactPage';

import { Doctor, ServiceItem, BlogPost } from './data/clinicData';

type PageType = 'home' | 'about' | 'services' | 'our-team' | 'approach' | 'testimonials' | 'insurance' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [doctorSpecialtyFilter, setDoctorSpecialtyFilter] = useState<string>('All');

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Sync with browser URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim() as PageType;
      const validPages: PageType[] = ['home', 'about', 'services', 'our-team', 'approach', 'testimonials', 'insurance', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: string) => {
    const validPages: PageType[] = ['home', 'about', 'services', 'our-team', 'approach', 'testimonials', 'insurance', 'contact'];
    const targetPage = validPages.includes(page as PageType) ? (page as PageType) : 'home';
    
    setActivePage(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithDoctor = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithService = (service: ServiceItem) => {
    setSelectedService(service);
    setSelectedDoctor(null);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedDoctor(null);
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleNavigateDoctorsWithSpecialty = (specialty: string) => {
    setDoctorSpecialtyFilter(specialty);
    handleNavigate('our-team');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      
      {/* 24/7 Urgent Care and Emergency Top Banner */}
      <EmergencyBanner onOpenBooking={handleOpenGeneralBooking} />

      {/* Sticky Top Navbar with Multi-Page Navigation */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onOpenBooking={handleOpenGeneralBooking} 
      />

      {/* Main Multi-Page Container with Smooth Interactions */}
      <main className="flex-1 transition-opacity duration-300">
        
        {activePage === 'home' && (
          <HomePage
            onOpenBooking={handleOpenGeneralBooking}
            onExploreServices={() => handleNavigate('services')}
            onOpenBookingWithDoctor={handleOpenBookingWithDoctor}
            onOpenBookingWithService={handleOpenBookingWithService}
            onOpenVideo={() => setIsVideoOpen(true)}
            onSelectArticle={(post) => setSelectedArticle(post)}
            onNavigatePage={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBooking={handleOpenGeneralBooking}
            onNavigateServices={() => handleNavigate('services')}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBookingWithService={handleOpenBookingWithService}
            onNavigateDoctorsWithSpecialty={handleNavigateDoctorsWithSpecialty}
          />
        )}

        {activePage === 'our-team' && (
          <DoctorsPage
            onNavigateHome={() => handleNavigate('home')}
            onBookDoctor={handleOpenBookingWithDoctor}
            initialSpecialty={doctorSpecialtyFilter}
          />
        )}

        {activePage === 'approach' && (
          <ApproachPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBooking={handleOpenGeneralBooking}
            onOpenVideo={() => setIsVideoOpen(true)}
          />
        )}

        {activePage === 'testimonials' && (
          <TestimonialsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

        {activePage === 'insurance' && (
          <InsurancePage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

      </main>

      {/* Footer with Multi-Page Links */}
      <Footer 
        onOpenBooking={handleOpenGeneralBooking} 
        onNavigate={handleNavigate} 
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedDoctor={selectedDoctor}
        preSelectedService={selectedService}
      />

      {/* Total Care Orientation Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Expert Health Article Reader Modal */}
      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={handleOpenGeneralBooking}
      />

    </div>
  );
}
