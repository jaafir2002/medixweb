import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CLINIC_LOCATIONS } from '../data/clinicData';
import { MapPin, Phone, Clock, Navigation, Car, Train, CheckCircle2, Send, AlertTriangle } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onOpenBooking,
}) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('downtown-pavilion');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    message: ''
  });

  const activeLocation = CLINIC_LOCATIONS.find(loc => loc.id === selectedLocationId) || CLINIC_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'General Inquiries',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <PageHeader
        tag="CAMPUS LOCATIONS & INTAKE"
        title="Find a Clinic Near You or Connect with Our Team"
        subtitle="Three modern medical campuses with convenient parking, public transit connectivity, and same-day walk-in urgent care availability."
        currentPageName="Contact"
        onNavigateHome={onNavigateHome}
        ctaText="Book at a Campus"
        onCtaClick={onOpenBooking}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Urgent Triage Warning Callout */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-rose-900 font-bold block">Experiencing a Life-Threatening Emergency?</strong>
              <span className="text-rose-700">If you have chest pain, sudden numbness, or severe respiratory distress, immediately dial 911 or head to the nearest hospital ER.</span>
            </div>
          </div>
          <a
            href="tel:911"
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl shrink-0 transition-colors"
          >
            Call 911 Now
          </a>
        </div>

        {/* Interactive Campus Selector & Detail Card */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-2">Our Network</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Select a MedixWeb Medical Center
            </h3>
          </div>

          {/* Location Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {CLINIC_LOCATIONS.map((loc) => {
              const isSelected = loc.id === activeLocation.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-sky-50 border-sky-500 shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                    {loc.role}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                    {loc.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {loc.address}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Campus Detail Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase text-sky-700 block">{activeLocation.role}</span>
                  <h3 className="font-display font-bold text-2xl text-slate-900">{activeLocation.name}</h3>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {activeLocation.status}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Physical Address:</strong>
                    <span>{activeLocation.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Campus Desk:</strong>
                    <a href={`tel:${activeLocation.phone.replace(/\D/g, '')}`} className="text-sky-600 hover:underline">
                      {activeLocation.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Clinical Operating Hours:</strong>
                    <span>{activeLocation.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Parking &amp; Accessibility:</strong>
                    <span>{activeLocation.parking}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Public Transit:</strong>
                    <span>{activeLocation.transit}</span>
                  </div>
                </div>
              </div>

              {/* On-site departments */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Departments at this campus:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeLocation.departments.map((dept, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#0A1A2F] hover:bg-sky-950 text-white font-semibold py-2.5 px-5 rounded-xl text-xs transition-colors shadow-xs"
                >
                  Book Appointment at {activeLocation.name.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* Map visual card */}
            <div className="lg:col-span-5 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 aspect-square flex flex-col items-center justify-center p-6 text-center relative group">
              <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-3 shadow-inner">
                <Navigation className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                Interactive Campus GPS
              </h4>
              <p className="text-xs text-slate-500 mb-4 max-w-xs">
                {activeLocation.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.address)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold py-2 px-4 rounded-xl shadow-xs transition-all"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form & Messaging */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">Send Us a Message</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Have a Clinical Question or Medical Inquiry?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our patient coordination desk answers inquiries regarding scheduling, accepted insurance networks, physician credentials, and medical records requests within 4 business hours.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Encrypted, HIPAA-compliant patient communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Same-day response for urgent triage requests</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-emerald-900">Message Received</h4>
                <p className="text-xs text-emerald-700">
                  Thank you, {formData.name}. A clinic coordinator will reach out to you via {formData.email || 'phone'} within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    >
                      <option value="General Inquiries">General Inquiries</option>
                      <option value="Appointments & Scheduling">Appointments &amp; Scheduling</option>
                      <option value="Billing & Insurance Verification">Billing &amp; Insurance</option>
                      <option value="Medical Records Request">Medical Records Request</option>
                      <option value="Physician Referrals">Physician Referrals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message or Clinical Question *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our clinical team assist you today?"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#0A1A2F] hover:bg-sky-950 text-white font-semibold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};
