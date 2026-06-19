export const CLINIC = {
  name: "Ayurdha Institute of Rehabilitation Sciences",
  short: "Ayurdha Institute",
  tagline: "Restoring Movement. Rebuilding Lives.",
  phone: "+91 98669 66866",
  phoneDigits: "919866966866",
  fee: "₹400",
  hours: "Mon – Sat: 9:00 AM – 9:00 PM • Sun: Closed",
  address: {
    line1: "Plot No. 554, Prashanth Nagar Colony",
    line2: "Near Kanaka Durga Temple, Vanasthalipuram",
    line3: "Hyderabad, Telangana 500070",
  },
  doctor: "Dr. GV Subbarayalu",
  waMessage: "Hello Ayurdha Institute, I would like to book a consultation.",
};

export const WA_URL = `https://wa.me/${CLINIC.phoneDigits}?text=${encodeURIComponent(CLINIC.waMessage)}`;
export const TEL_URL = `tel:${CLINIC.phone.replace(/\s/g, "")}`;
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Ayurdha+Institute+Vanasthalipuram+Hyderabad";

export const SERVICES = [
  { slug: "neuro", icon: "Brain", title: "Neurological Rehabilitation", desc: "Comprehensive programs for stroke, traumatic brain injury, neurological disorders, and movement impairments." },
  { slug: "stroke", icon: "HeartPulse", title: "Stroke Recovery Therapy", desc: "Customized plans focused on mobility, strength, balance, and independence after stroke." },
  { slug: "paralysis", icon: "Activity", title: "Paralysis Rehabilitation", desc: "Specialized physiotherapy interventions to improve functional recovery and quality of life." },
  { slug: "spinal", icon: "Bone", title: "Spinal Cord Injury Rehab", desc: "Focused programs designed to maximize independence and physical function." },
  { slug: "pediatric", icon: "Baby", title: "Pediatric Therapy", desc: "Therapy for children with developmental delays, cerebral palsy, and neurological conditions." },
  { slug: "muscular", icon: "Dumbbell", title: "Muscular Dystrophy Management", desc: "Personalized exercise and rehabilitation to support mobility and daily activities." },
  { slug: "physio", icon: "Stethoscope", title: "Physiotherapy Consultation", desc: "Comprehensive assessments and individualized treatment planning." },
];

export const WHY_US = [
  { icon: "UserCheck", title: "One-on-One Sessions", desc: "Personalized treatment focused entirely on patient recovery." },
  { icon: "ClipboardList", title: "Customized Recovery Plans", desc: "Every patient receives an individualized rehabilitation strategy." },
  { icon: "BookOpen", title: "Evidence-Based Treatment", desc: "Modern techniques backed by clinical best practices." },
  { icon: "Award", title: "Experienced Care Team", desc: "Years of expertise in neuro and pediatric rehabilitation." },
  { icon: "Users", title: "Family-Centered Care", desc: "Education and guidance for caregivers and family members." },
  { icon: "Sparkles", title: "Holistic Recovery", desc: "Physical, emotional, and functional rehabilitation support." },
];

export const STATS = [
  { value: "16+", label: "Years Experience" },
  { value: "1000+", label: "Patients Assisted" },
  { value: "1:1", label: "Therapy Sessions" },
  { value: "100%", label: "Personalized Plans" },
];

export const TESTIMONIALS = [
  { initials: "RS", name: "Stroke Recovery Patient", rating: 5, text: "The therapy program helped me regain confidence and independence after my stroke. The team's patience and expertise made every session count." },
  { initials: "PK", name: "Parent of Pediatric Patient", rating: 5, text: "The team showed exceptional care and helped improve my child's mobility significantly. We are deeply grateful for their support." },
  { initials: "MA", name: "Paralysis Rehabilitation Patient", rating: 5, text: "The personalized approach made a remarkable difference in my recovery journey. I never felt rushed and always felt heard." },
];

export const FAQS = [
  { q: "What conditions do you treat?", a: "We treat stroke, paralysis, spinal cord injuries, traumatic brain injury, cerebral palsy, developmental disorders, muscular dystrophy, post-surgical rehabilitation, and a wide range of orthopedic and neurological conditions." },
  { q: "Do I need a referral before visiting?", a: "No referral is required. You can directly book a consultation. If you have prior medical reports or scans, please bring them along." },
  { q: "How long does rehabilitation take?", a: "Recovery timelines vary based on diagnosis, severity, and individual response. After your first assessment, Dr. Subbarayalu will share an estimated plan tailored to your goals." },
  { q: "What happens during the first consultation?", a: "We perform a detailed assessment of medical history, mobility, strength, and functional needs, then design a personalized rehabilitation roadmap." },
  { q: "Do you provide pediatric therapy?", a: "Yes. We offer specialized pediatric programs for developmental delays, cerebral palsy, motor impairments, and other neurological conditions." },
  { q: "What is the consultation fee?", a: "The consultation fee is ₹400. Treatment session pricing is shared during the consultation based on your personalized plan." },
  { q: "How frequently should therapy sessions be scheduled?", a: "Most patients benefit from 3–5 sessions per week initially, gradually tapering as progress is achieved. Your plan will be customized to your needs." },
  { q: "How can I book an appointment?", a: "Call +91 98669 66866, message us on WhatsApp, or fill out the contact form. We confirm bookings the same day during working hours." },
];
