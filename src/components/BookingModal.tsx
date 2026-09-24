import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Shield, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { DOCTORS, Doctor, CLINIC_SERVICES, ServiceItem, INSURANCE_PROVIDERS } from '../data/clinicData';
import { handleImageError } from '../assets/images';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDoctor?: Doctor | null;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedDoctor,
  preSelectedService,
}) => {
  const [step, setStep] = useState<number>(1);
  const [specialty, setSpecialty] = useState<string>('Cardiology');
  const [doctorId, setDoctorId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Sep 25');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [visitType, setVisitType] = useState<'in-person' | 'telehealth'>('in-person');
  
  // Patient details form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    insuranceCarrier: INSURANCE_PROVIDERS[0].name,
    reasonForVisit: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedDoctor) {
      setDoctorId(preSelectedDoctor.id);
      setSpecialty(preSelectedDoctor.specialty);
      setStep(2);
    } else if (preSelectedService) {
      setSpecialty(preSelectedService.category === 'Family Care' ? 'Pediatrics' : 'Cardiology');
    }
  }, [preSelectedDoctor, preSelectedService, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:30 AM',
    '01:45 PM', '02:30 PM', '03:15 PM', '04:45 PM'
  ];

  const dateOptions = [
    'Today, Sep 24',
    'Tomorrow, Sep 25',
    'Friday, Sep 26',
    'Monday, Sep 29'
  ];

  const validateStep3 = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full legal name';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required for confirmation';
    if (!formData.phone.trim() || formData.phone.length < 8) errors.phone = 'Valid contact phone number is required';
    if (!formData.reasonForVisit.trim()) errors.reasonForVisit = 'Brief reason for your visit helps our clinical team prepare';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    // Generate reference number
    const ref = `MED-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      insuranceCarrier: INSURANCE_PROVIDERS[0].name,
      reasonForVisit: '',
    });
    onClose();
  };

  const selectedDoctorObj = DOCTORS.find((d) => d.id === doctorId) || DOCTORS[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 sm:px-8 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
              <span>MedixWeb Clinic</span>
              <span>•</span>
              <span>Online Appointment Scheduler</span>
            </div>
            <h2 id="booking-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white">
              {isSubmitted ? 'Appointment Confirmed' : 'Book Your Clinical Visit'}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                You&apos;re All Set, {formData.fullName}!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Your appointment request has been scheduled with our clinical team. A calendar invite and prep instructions have been sent to <strong className="text-slate-800">{formData.email}</strong>.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left max-w-md mx-auto mb-8 text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-sky-700">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor / Specialist:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctorObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled Date & Time:</span>
                  <span className="font-semibold text-slate-900">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Visit Format:</span>
                  <span className="font-semibold text-slate-900 capitalize">{visitType} Consultation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctorObj.location}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-[#0A1A2F] hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full text-sm transition-colors shadow-sm"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Booking Flow */
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 text-xs font-semibold">
                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-sky-600 font-bold' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>1</span>
                  <span>Specialist</span>
                </div>
                <div className="w-12 h-0.5 bg-slate-200" />
                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-sky-600 font-bold' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>2</span>
                  <span>Schedule</span>
                </div>
                <div className="w-12 h-0.5 bg-slate-200" />
                <div className={`flex items-center gap-2 ${step >= 3 ? 'text-sky-600 font-bold' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>3</span>
                  <span>Patient Info</span>
                </div>
              </div>

              {/* Step 1: Select Specialty & Doctor */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      1. Select Specialty
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {['Cardiology', 'Family Medicine', 'Pediatrics', 'Orthopedics'].map((spec) => (
                        <button
                          key={spec}
                          type="button"
                          onClick={() => setSpecialty(spec)}
                          className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                            specialty === spec
                              ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {spec}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      2. Choose Your Physician
                    </label>
                    <div className="space-y-2.5">
                      {DOCTORS.map((doc) => {
                        const isMatch = specialty ? doc.specialty === specialty : true;
                        if (!isMatch) return null;
                        const isSelected = doctorId === doc.id;
                        return (
                          <div
                            key={doc.id}
                            onClick={() => setDoctorId(doc.id)}
                            className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-sky-50/80 border-sky-500 ring-1 ring-sky-400'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                                <img
                                  src={doc.avatar}
                                  alt={doc.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => handleImageError(e, 'doctorPortrait')}
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-sm text-slate-900">{doc.name}</h4>
                                <span className="text-xs text-sky-700 font-medium block">{doc.title}</span>
                                <span className="text-[11px] text-slate-500">Next Available: {doc.availableNext}</span>
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300'}`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-full text-sm transition-colors shadow-sm"
                    >
                      <span>Continue to Date & Time</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Picker */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Appointment Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setVisitType('in-person')}
                        className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all ${
                          visitType === 'in-person'
                            ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        In-Person Clinic Visit
                      </button>
                      <button
                        type="button"
                        onClick={() => setVisitType('telehealth')}
                        className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all ${
                          visitType === 'telehealth'
                            ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Encrypted Video Telehealth
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {dateOptions.map((date) => (
                        <button
                          key={date}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            selectedDate === date
                              ? 'bg-sky-600 border-sky-600 text-white font-bold shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 mx-auto mb-1 opacity-80" />
                          <span>{date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 px-2 rounded-xl text-xs border text-center font-medium transition-all ${
                            selectedTime === slot
                              ? 'bg-slate-900 border-slate-900 text-white font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <Clock className="w-3 h-3 inline mr-1 opacity-70" />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-full text-sm transition-colors shadow-sm"
                    >
                      <span>Continue to Patient Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Information Form */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-rose-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="patient-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="patient-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@example.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="patient-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 234-5678"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="patient-insurance" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Insurance Plan
                      </label>
                      <select
                        id="patient-insurance"
                        value={formData.insuranceCarrier}
                        onChange={(e) => setFormData({ ...formData, insuranceCarrier: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        {INSURANCE_PROVIDERS.map((p) => (
                          <option key={p.name} value={p.name}>{p.name}</option>
                        ))}
                        <option value="Self-Pay">Self-Pay / Uninsured</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="visit-reason" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Reason for Visit / Primary Symptoms *
                    </label>
                    <textarea
                      id="visit-reason"
                      rows={3}
                      value={formData.reasonForVisit}
                      onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                      placeholder="e.g. Annual cardiology screening, occasional palpitation, follow-up after blood pressure check..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    {formErrors.reasonForVisit && (
                      <p className="text-[11px] text-rose-600 mt-1">{formErrors.reasonForVisit}</p>
                    )}
                  </div>

                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Your personal health data is protected under strict HIPAA regulations. No financial information is charged until check-in.</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#0A1A2F] hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full text-sm transition-colors shadow-md"
                    >
                      <span>Confirm & Book Appointment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
