import { CLINIC_IMAGES } from '../assets/images';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  education: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  availableNext: string;
  location: string;
  bio: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  commonProcedures: string[];
  departmentHead: string;
  avgDuration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}

export interface InsuranceProvider {
  name: string;
  tier: 'Tier 1 Preferred' | 'In-Network' | 'Accepted';
  copayEstimate: string;
  deductibleApplies: boolean;
  notes: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen, MD, FACC',
    title: 'Chief of Cardiology',
    specialty: 'Cardiology',
    experienceYears: 14,
    education: 'Johns Hopkins School of Medicine',
    rating: 4.9,
    reviewsCount: 312,
    avatar: CLINIC_IMAGES.doctorPortrait,
    availableNext: 'Today, 3:15 PM',
    location: 'Building A, Suite 402',
    bio: 'Specializing in non-invasive preventive cardiology, coronary artery disease management, and advanced cardiac ultrasound diagnostics.'
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, MD',
    title: 'Lead Family Physician',
    specialty: 'Family Medicine',
    experienceYears: 11,
    education: 'Stanford University School of Medicine',
    rating: 4.9,
    reviewsCount: 428,
    avatar: CLINIC_IMAGES.doctorConsultation,
    availableNext: 'Tomorrow, 9:30 AM',
    location: 'Building B, Suite 105',
    bio: 'Dedicated to comprehensive lifetime wellness, preventive screenings, chronic illness management, and multi-generational family health.'
  },
  {
    id: 'dr-elena-rodriguez',
    name: 'Dr. Elena Rodriguez, MD, FAAP',
    title: 'Pediatric Specialist',
    specialty: 'Pediatrics',
    experienceYears: 9,
    education: 'UCSF School of Medicine',
    rating: 5.0,
    reviewsCount: 284,
    avatar: CLINIC_IMAGES.testimonialPatient,
    availableNext: 'Today, 4:45 PM',
    location: 'Pediatric Wing, 2nd Floor',
    bio: 'Focuses on infant development, childhood immunity, gentle pediatric vaccinations, and compassionate adolescent healthcare.'
  },
  {
    id: 'dr-arthur-pendelton',
    name: 'Dr. Arthur Pendelton, MD, FAAOS',
    title: 'Orthopedic & Joint Surgeon',
    specialty: 'Orthopedics',
    experienceYears: 18,
    education: 'Harvard Medical School',
    rating: 4.8,
    reviewsCount: 196,
    avatar: CLINIC_IMAGES.careTeam,
    availableNext: 'Friday, 10:00 AM',
    location: 'Surgical Center, 3rd Floor',
    bio: 'Pioneer in minimally invasive joint preservation, sports injury rehabilitation, and rapid recovery arthroscopic procedures.'
  }
];

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-medicine',
    title: 'Comprehensive General Medicine',
    category: 'Primary Care',
    description: 'Thorough health assessments, diagnostic blood panels, medication management, and proactive preventive physicals.',
    iconName: 'Activity',
    commonProcedures: ['Annual Wellness Exam', 'Routine Lab Panels', 'Chronic Care Management', 'Vaccination Schedule'],
    departmentHead: 'Dr. Marcus Vance',
    avgDuration: '30-45 mins'
  },
  {
    id: 'cardiology-care',
    title: 'Cardiology & Heart Health',
    category: 'Specialty Care',
    description: 'Advanced electrocardiograms, echocardiography, lipid profile analysis, and personalized cardiovascular rehabilitation.',
    iconName: 'HeartPulse',
    commonProcedures: ['12-Lead ECG Screening', 'Stress Echocardiogram', 'Holter Monitoring', 'Hypertension Therapy'],
    departmentHead: 'Dr. Sarah Chen',
    avgDuration: '45-60 mins'
  },
  {
    id: 'pediatrics-wellness',
    title: 'Pediatrics & Child Wellness',
    category: 'Family Care',
    description: 'Gentle, comforting medical attention tailored for newborns, children, and teens with dedicated kid-friendly suites.',
    iconName: 'Baby',
    commonProcedures: ['Well-Child Checkups', 'Developmental Screening', 'School & Sports Physicals', 'Allergy Assessment'],
    departmentHead: 'Dr. Elena Rodriguez',
    avgDuration: '30 mins'
  },
  {
    id: 'orthopedics-therapy',
    title: 'Orthopedics & Physical Therapy',
    category: 'Surgical & Rehab',
    description: 'Targeted mobility restoration, injury recovery, digital musculoskeletal ultrasound, and bespoke rehabilitation plans.',
    iconName: 'Bone',
    commonProcedures: ['Joint Mobility Assessment', 'Digital X-Ray Diagnostics', 'Physical Therapy Protocol', 'Tendon & Ligament Care'],
    departmentHead: 'Dr. Arthur Pendelton',
    avgDuration: '45 mins'
  },
  {
    id: 'womens-health',
    title: "Women's Health & Gynecology",
    category: 'Specialty Care',
    description: 'Empathetic, holistic women-centered clinical support including routine screenings, prenatal guidance, and hormonal balance.',
    iconName: 'Sparkles',
    commonProcedures: ['Well-Woman Exam', 'Prenatal Ultrasound', 'Hormonal Health Panels', 'Bone Density DEXA'],
    departmentHead: 'Dr. Maya Lin',
    avgDuration: '40 mins'
  },
  {
    id: 'diagnostic-imaging',
    title: 'Rapid Diagnostic Laboratory',
    category: 'Diagnostics',
    description: 'Same-day clinical pathology, low-dose digital radiography, high-resolution ultrasound, and confidential digital reports.',
    iconName: 'FileCheck',
    commonProcedures: ['Same-Day CBC & Chemistries', 'Digital Chest Radiography', 'Thyroid Ultrasound', 'Point-of-Care PCR'],
    departmentHead: 'Dr. Jason Miller',
    avgDuration: '15-20 mins'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'heart-health-habits',
    title: '5 Daily Habits for a Healthier Heart you deserve.',
    summary: 'Adopt simple daily habits like balanced eating, regular exercise, and stress control to strengthen your heart and boost longevity.',
    category: 'Cardiology & Lifestyle',
    date: 'Jan 25, 2026',
    readTime: '4 min read',
    author: 'Dr. Sarah Chen, FACC',
    image: CLINIC_IMAGES.hero,
    content: [
      'Cardiovascular wellness is built not in emergency rooms, but through the calm, consistent daily choices we cultivate. Decades of clinical cardiology evidence underscore that modest lifestyle adaptations yield dramatic dividends in arterial elasticity and cardiac performance.',
      '1. Mindful 30-Minute Aerobic Cadence: Brisk walking, light cycling, or swimming at a conversational pace reduces systolic blood pressure by an average of 4-9 mm Hg.',
      '2. The Potassium & Sodium Ratio: Prioritize whole foods rich in potassium (leafy greens, avocados, lentils) while curbing processed sodium.',
      '3. Sleep Architecture: Target 7-8 hours of continuous restorative sleep. Sleep fragmentation triggers sympathetic nerve activation, elevating cortisol and resting heart rate.',
      '4. Chronic Stress Down-Regulation: 10 minutes of diaphragmatic box-breathing activates vagal tone, promptly moderating heart rate variability.',
      '5. Preventive Biometric Tracking: Monitor your resting pulse and annual lipid fractions early. Identifying biomarker drift early preserves decades of vibrant vitality.'
    ]
  },
  {
    id: 'benefits-regular-checkups',
    title: 'Top Benefits of Regular Health Checkups.',
    summary: 'Discover how routine health checkups help detect issues early, prevent serious diseases, and promote long-term physical and mental wellness.',
    category: 'Preventive Medicine',
    date: 'Jan 25, 2026',
    readTime: '5 min read',
    author: 'Dr. Marcus Vance, MD',
    image: CLINIC_IMAGES.doctorConsultation,
    content: [
      'A common misconception is that a physician visit is only warranted in the presence of acute symptoms. In modern clinical practice, however, early asymptomatic interception is our most potent medical advantage.',
      'Hypertension, prediabetes, subtle thyroid sluggishness, and early lipid imbalances routinely manifest without subjective pain. An annual 45-minute clinical evaluation establishes your personal physiological baseline.',
      'During your checkup, your physician conducts comprehensive metabolic screening, assesses cardiovascular parameters, reviews immunization status, and examines mental wellness markers.',
      'Investing one morning per year in proactive clinical surveillance eliminates preventable crises and ensures you and your loved ones navigate life with unwavering health confidence.'
    ]
  },
  {
    id: 'stress-and-physical-health',
    title: 'The Link Between Stress & Physical Health.',
    summary: 'Understand how unmanaged stress affects your body and why regular health checkups are vital for early detection and prevention.',
    category: 'Mind-Body Wellness',
    date: 'Jan 25, 2026',
    readTime: '6 min read',
    author: 'Dr. Elena Rodriguez, MD',
    image: CLINIC_IMAGES.careTeam,
    content: [
      'The boundary between emotional strain and systemic physiology is non-existent. When emotional stress lingers unresolved, the hypothalamic-pituitary-adrenal (HPA) axis maintains a sustained flood of epinephrine and cortisol.',
      'This chronic neuroendocrine cascade impairs gastric mucosal integrity, disrupts microbiome balance, impairs insulin sensitivity, and stimulates low-grade arterial inflammation.',
      'At MedixWeb, our integrative care model pairs physical health tracking with pragmatic stress remediation protocols, including sleep hygiene audits, nutritional stabilization, and physician-guided behavioral wellness support.'
    ]
  }
];

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    name: 'Blue Cross Blue Shield',
    tier: 'Tier 1 Preferred',
    copayEstimate: '$15 - $25 copay for primary visits',
    deductibleApplies: false,
    notes: 'Full in-network coverage across all MedixWeb locations and specialists.'
  },
  {
    name: 'Aetna Health',
    tier: 'Tier 1 Preferred',
    copayEstimate: '$20 copay / $0 preventive annual exam',
    deductibleApplies: false,
    notes: 'Covers telehealth consults, routine lab work, and specialized diagnostics.'
  },
  {
    name: 'Cigna Healthcare',
    tier: 'In-Network',
    copayEstimate: '$20 - $30 copay',
    deductibleApplies: false,
    notes: 'No primary care referral required for cardiology and pediatrics.'
  },
  {
    name: 'UnitedHealthcare (Optum)',
    tier: 'Tier 1 Preferred',
    copayEstimate: '$15 copay / $0 well-child visits',
    deductibleApplies: false,
    notes: 'Direct electronic claims processing with immediate instant co-pay verification.'
  },
  {
    name: 'Medicare & Medicare Advantage',
    tier: 'In-Network',
    copayEstimate: 'Standard 20% coinsurance or $0 with supplement',
    deductibleApplies: true,
    notes: 'Full Part B coverage for outpatient clinical consults, screenings, and diagnostic panels.'
  },
  {
    name: 'Humana',
    tier: 'Accepted',
    copayEstimate: '$25 - $35 copay',
    deductibleApplies: false,
    notes: 'Accepted across all family medicine, cardiology, and orthopedics departments.'
  }
];

export const CLINIC_VALUES = [
  {
    id: 'compassion',
    name: 'Compassion',
    number: '01/05',
    summary: 'Approaching every patient with deep empathy, active listening, and unconditional dignity.',
    detail: 'Every treatment path begins with listening. We prioritize patient dignity, comfort, and emotional reassurance at every interaction.'
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    number: '02/05',
    summary: 'Uniting doctors, specialists, and patients in shared, transparent healthcare decisions.',
    detail: 'Healthcare thrives when specialists converse seamlessly. Our multidisciplinary care teams coordinate closely so no detail is lost.'
  },
  {
    id: 'transparency',
    name: 'Transparency',
    number: '03/05',
    summary: 'Clear clinical explanations, immediate digital record access, and straightforward pricing.',
    detail: 'No hidden medical jargon or surprise bills. You receive honest explanations, transparent billing upfront, and instant access to your records.'
  },
  {
    id: 'flexibility',
    name: 'Flexibility',
    number: '04/05',
    summary: 'Same-day urgent appointments, virtual telehealth visits, and patient-first scheduling.',
    detail: 'Illness does not keep business hours. We offer early morning, evening, and Saturday hours, alongside encrypted virtual consultations.'
  },
  {
    id: 'excellence',
    name: 'Excellence',
    number: '05/05',
    summary: 'Board-certified medical specialists utilizing cutting-edge diagnostic technology.',
    detail: 'Our clinical practice continuously adopts gold-standard evidence-based methodologies and modern diagnostics for superior patient recovery.'
  }
];

export const CLINIC_LOCATIONS = [
  {
    id: 'downtown-pavilion',
    name: 'Downtown Health Pavilion',
    role: 'Main Clinical Campus & Diagnostics Center',
    address: '450 Medical Arts Plaza, Suite 200, Downtown',
    phone: '(800) 555-0199',
    hours: 'Mon - Fri: 7:30 AM - 7:00 PM | Sat: 8:00 AM - 3:00 PM',
    status: 'Open Today until 7:00 PM',
    departments: ['Cardiology', 'General Medicine', 'Rapid Pathology Lab', 'Radiology & Ultrasound'],
    parking: 'Complimentary validated garage parking with wheelchair ramp access at Entrance B.',
    transit: '2 blocks east of Central Metro Station (Blue/Green Line).'
  },
  {
    id: 'westside-urgent',
    name: 'Westside Family & Urgent Care Center',
    role: 'Walk-In Urgent Care & Family Medicine',
    address: '820 Westside Boulevard, Westside District',
    phone: '(800) 555-0198',
    hours: 'Mon - Sun: 8:00 AM - 9:00 PM (365 Days)',
    status: 'Open Now — Current Wait: 12 mins',
    departments: ['Walk-in Urgent Care', 'Pediatrics', 'Family Medicine', 'Minor Injury Suturing'],
    parking: 'Dedicated patient parking lot directly in front of the primary entrance.',
    transit: 'Bus routes 14 and 27 stop directly opposite the pavilion entrance.'
  },
  {
    id: 'uptown-pediatric',
    name: 'Uptown Pediatric & Specialty Suites',
    role: 'Pediatric Care & Orthopedic Rehabilitation',
    address: '1240 Grand Avenue, 3rd Floor, Uptown Medical Quarter',
    phone: '(800) 555-0197',
    hours: 'Mon - Fri: 8:00 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM',
    status: 'Open Today until 5:30 PM',
    departments: ['Pediatrics', 'Orthopedic Surgery', 'Physical Therapy Studio', 'Sports Medicine'],
    parking: 'Free street-level parking and designated patient loading bay.',
    transit: 'Uptown Light Rail station connected via covered skybridge.'
  }
];

export const TESTIMONIALS_LIST = [
  {
    id: 'cody-fisher',
    patientName: 'Cody Fisher',
    tag: 'Cardiology & Lifestyle',
    condition: 'Hypertension & Arrhythmia Stabilization',
    rating: 5,
    title: 'Transformed my cardiac health and peace of mind',
    quote: 'The team at MedixWeb made every step stress-free and supportive. Dr. Chen took the time to explain my echocardiogram in plain language and designed an exercise and medication plan that got my blood pressure back to normal within six weeks. I feel 15 years younger.',
    avatar: CLINIC_IMAGES.testimonialPatient,
    duration: 'Patient for 2 years',
    location: 'Downtown Clinic'
  },
  {
    id: 'robert-fox',
    patientName: 'Robert Fox',
    tag: 'Family Medicine',
    condition: 'Annual Preventive Screening & Diabetes Management',
    rating: 5,
    title: 'Friendly staff and prompt diagnostic turnaround',
    quote: 'The team made every step stress-free and supportive. I finally feel confident about my treatment and ongoing health plan. My blood work was delivered to my phone with doctor commentary by 4 PM on the very same day.',
    avatar: CLINIC_IMAGES.doctorPortrait,
    duration: 'Patient for 4 years',
    location: 'Westside Center'
  },
  {
    id: 'albert-flores',
    patientName: 'Albert Flores',
    tag: 'Orthopedics & Rehab',
    condition: 'Minimally Invasive Knee Joint Recovery',
    rating: 5,
    title: 'Seamless experience from initial consult to full recovery',
    quote: 'After injuring my meniscus during weekend soccer, Dr. Pendelton walked me through non-surgical therapy first before proceeding with arthroscopy. The physical therapy staff next door made my rehab smooth and painless.',
    avatar: CLINIC_IMAGES.doctorConsultation,
    duration: 'Patient for 1 year',
    location: 'Uptown Suites'
  },
  {
    id: 'maria-santos',
    patientName: 'Maria Santos',
    tag: 'Pediatrics',
    condition: 'Newborn Wellness & Child Immunizations',
    rating: 5,
    title: 'Compassionate pediatric care that puts new parents at ease',
    quote: 'As first-time parents, we had a hundred questions about our baby girl. Dr. Elena Rodriguez was patient, gentle, and warm. The separate well-child waiting room gave us immense comfort.',
    avatar: CLINIC_IMAGES.hero,
    duration: 'Patient for 10 months',
    location: 'Uptown Pediatric Wing'
  },
  {
    id: 'david-kim',
    patientName: 'David Kim',
    tag: 'Urgent Care & Diagnostics',
    condition: 'Acute Bronchial Infection & Rapid PCR',
    rating: 5,
    title: 'Walked in on a Saturday and was treated within 20 minutes',
    quote: 'I woke up on a Saturday morning with acute chest congestion. I was able to walk into the Westside location without an appointment, receive an ultrasound and digital X-ray, and pick up my prescription in under an hour.',
    avatar: CLINIC_IMAGES.careTeam,
    duration: 'Patient for 3 years',
    location: 'Westside Family Care'
  }
];

export const TOTAL_CARE_STEPS = [
  {
    step: '01',
    phase: 'Precision Intake & Baseline Diagnostics',
    desc: 'We start with unhurried clinical history listening, low-radiation imaging, and rapid in-house biomarkers.',
    deliverable: 'Same-day baseline diagnostic report and preliminary clinical impressions.'
  },
  {
    step: '02',
    phase: 'Multidisciplinary Care Coordination',
    desc: 'Primary physicians and board-certified specialists review complex cases collaboratively under one roof.',
    deliverable: 'Unified, cross-departmental personalized care pathway without conflicting advice.'
  },
  {
    step: '03',
    phase: 'Compassionate, Evidence-Based Treatment',
    desc: 'Minimally invasive therapies, targeted medication management, and patient-centered counseling.',
    deliverable: 'Direct 24/7 digital chat with your care team and clear recovery milestones.'
  },
  {
    step: '04',
    phase: 'Lifelong Vitality & Proactive Prevention',
    desc: 'Regular proactive checkups, lifestyle medicine coaching, and biometric tracking to prevent recurrence.',
    deliverable: 'Long-term health dashboard and scheduled annual wellness protection.'
  }
];

