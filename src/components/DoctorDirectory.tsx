import React, { useState } from 'react';
import { Star, Clock, MapPin, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { DOCTORS, Doctor } from '../data/clinicData';
import { handleImageError } from '../assets/images';

interface DoctorDirectoryProps {
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({ onBookDoctor }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Cardiology', 'Family Medicine', 'Pediatrics', 'Orthopedics'];

  const filteredDoctors = selectedSpecialty === 'All'
    ? DOCTORS
    : DOCTORS.filter(doc => doc.specialty === selectedSpecialty);

  return (
    <section id="our-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      
      {/* Header with Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full mb-4">
            <span>+</span>
            <span>CLINICAL FACULTY & DIRECTORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Board-Certified Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            Our physicians bring distinguished academic training, decades of clinical empathy, and cutting-edge diagnostics to your recovery.
          </p>
        </div>

        {/* Specialty Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                selectedSpecialty === spec
                  ? 'bg-[#0A1A2F] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Doctor Headshot */}
              <div className="h-56 w-full overflow-hidden relative bg-slate-100">
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => handleImageError(e, 'doctorPortrait')}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-800 tabular-nums">{doc.rating}</span>
                  <span className="text-[10px] text-slate-400">({doc.reviewsCount})</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-sky-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">
                  {doc.specialty}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs text-sky-700 font-semibold mb-3">
                  {doc.title}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  {doc.bio}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{doc.experienceYears} Years Clinical Exp.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{doc.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sky-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>Next: {doc.availableNext}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Doctor Action */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onBookDoctor(doc)}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white py-2.5 px-4 rounded-xl text-xs font-bold border border-sky-200/80 hover:border-transparent transition-all shadow-xs"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book with {doc.name.split(',')[0]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
