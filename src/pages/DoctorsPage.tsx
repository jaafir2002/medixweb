import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { DOCTORS, Doctor } from '../data/clinicData';
import { Star, MapPin, Calendar, Award, GraduationCap, Search, CheckCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { handleImageError } from '../assets/images';

interface DoctorsPageProps {
  onNavigateHome: () => void;
  onBookDoctor: (doctor: Doctor) => void;
  initialSpecialty?: string;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({
  onNavigateHome,
  onBookDoctor,
  initialSpecialty = 'All',
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(initialSpecialty);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const specialties = ['All', 'Cardiology', 'Family Medicine', 'Pediatrics', 'Orthopedics'];
  const locations = ['All', 'Downtown', 'Westside', 'Uptown'];

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      const matchSpec = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
      const matchLoc = selectedLocation === 'All' || doc.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.title.toLowerCase().includes(q) ||
        doc.specialty.toLowerCase().includes(q) ||
        doc.bio.toLowerCase().includes(q);
      return matchSpec && matchLoc && matchSearch;
    });
  }, [selectedSpecialty, selectedLocation, searchQuery]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="ACCREDITED CLINICAL FACULTY"
        title="Meet Our Board-Certified Physicians & Specialists"
        subtitle="Every MedixWeb physician brings distinguished medical residency credentials, an unhurried bedside manner, and a commitment to collaborative healing."
        currentPageName="Our Team"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Filters and Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search physician by name, specialty, or condition..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results counter */}
            <span className="text-xs font-semibold text-slate-500 shrink-0">
              Showing <strong className="text-slate-900">{filteredDoctors.length}</strong> active physicians
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Specialty Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Specialty:</span>
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedSpecialty === spec
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="font-bold text-slate-400 uppercase tracking-wider">Campus:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc === 'All' ? 'All Campuses' : `${loc} Campus`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-5 mb-5">
                  {/* Doctor Image */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200 shadow-xs mx-auto sm:mx-0">
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => handleImageError(e, 'doctorPortrait')}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 w-3 h-3 rounded-full border-2 border-white" title="Accepting new patients" />
                  </div>

                  {/* Doctor Primary Info */}
                  <div className="space-y-1.5 text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                        {doc.specialty}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{doc.rating}</span>
                        <span className="text-slate-400 font-normal">({doc.reviewsCount} reviews)</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600">
                      {doc.title}
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500 pt-1">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">{doc.education}</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{doc.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 pt-3 border-t border-slate-100">
                  {doc.bio}
                </p>

                {/* Badges */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <Award className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>{doc.experienceYears}+ Years</strong> Experience</span>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-2.5 border border-emerald-100 flex items-center gap-2 text-xs text-emerald-800">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Next: <strong>{doc.availableNext}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onBookDoctor(doc)}
                className="w-full bg-[#0A1A2F] hover:bg-sky-950 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Book Consultation with {doc.name.split(',')[0]}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Clinical Standards Box */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Rigorous Credentialing Standards</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Every Physician is Board-Certified &amp; Peer-Vetted
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We mandate annual clinical peer reviews, continuing medical education (CME) hours, and continuous patient outcome tracking to maintain the highest standard of outpatient safety.
            </p>
          </div>

          <div className="text-center sm:text-right shrink-0">
            <span className="text-xs text-slate-400 block mb-1">Interested in joining our medical team?</span>
            <a
              href="mailto:careers@medixwebclinic.com"
              className="inline-block bg-white text-slate-900 hover:bg-sky-50 font-bold px-5 py-2.5 rounded-full text-xs transition-colors shadow-sm"
            >
              Physician Careers &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
