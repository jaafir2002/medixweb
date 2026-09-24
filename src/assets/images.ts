// Centralized image bundle with Vite ESM imports and resilient CDN fallbacks

import heroFamily from './images/hero_care_family_1790248293775.jpg';
import doctorConsult from './images/doctor_consultation_family_1790248379120.jpg';
import doctorPortrait from './images/about_doctor_portrait_1790248368496.jpg';
import careTeam from './images/care_team_scrubs_1790248388964.jpg';
import patientCody from './images/testimonial_cody_fisher_1790248399526.jpg';

export const CLINIC_IMAGES = {
  hero: heroFamily,
  doctorConsultation: doctorConsult,
  doctorPortrait: doctorPortrait,
  careTeam: careTeam,
  testimonialPatient: patientCody,
};

export const CLINIC_IMAGE_FALLBACKS: Record<string, string> = {
  hero: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
  doctorConsultation: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
  doctorPortrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
  careTeam: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
  testimonialPatient: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
};

/**
 * Resilient image error handler to prevent broken image icons on any host
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType?: keyof typeof CLINIC_IMAGE_FALLBACKS
) {
  const target = e.currentTarget;
  if (target.dataset.hasFailed) return;
  target.dataset.hasFailed = 'true';

  if (fallbackType && CLINIC_IMAGE_FALLBACKS[fallbackType]) {
    target.src = CLINIC_IMAGE_FALLBACKS[fallbackType];
  } else {
    // Default medical wellness fallback
    target.src = 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80';
  }
}
