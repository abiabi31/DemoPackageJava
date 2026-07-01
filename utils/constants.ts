export interface NavigationLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  badge: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  meta: string;
}

export interface GalleryItem {
  title: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export const featureItems: FeatureItem[] = [
  {
    title: "100% Natural Medicine",
    description:
      "Pure herbal formulations guided by ancient Siddha traditions.",
    badge: "Pure",
  },
  {
    title: "Yoga Therapy",
    description:
      "Personalized sessions for flexibility, balance and stress relief.",
    badge: "Holistic",
  },
  {
    title: "Affordable Treatment",
    description:
      "Transparent pricing with compassionate care for every family.",
    badge: "Budget",
  },
  {
    title: "Experienced Doctor",
    description: "Dedicated practitioner with deep Siddha and yoga expertise.",
    badge: "Expert",
  },
  {
    title: "Friendly Care",
    description: "Patient-first experience with a calm healing environment.",
    badge: "Comfort",
  },
  {
    title: "Safe Treatment",
    description: "Gentle therapies designed to support long-term wellness.",
    badge: "Secure",
  },
];

export const servicesData: ServiceItem[] = [
  {
    title: "Spine Treatment",
    category: "Back Care",
    description:
      "Specialized Siddha protocols for spinal relief and posture recovery.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Shoulder Pain",
    category: "Joint Therapy",
    description: "Targeted massage and joint realignment for fast pain relief.",
    image:
      "https://images.unsplash.com/photo-1556228724-4b1e7d5a6d55?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Neck Pain",
    category: "Neck Care",
    description: "Gentle therapy and posture coaching for neck comfort.",
    image:
      "https://images.unsplash.com/photo-1510626176961-4b5327c42f2a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Knee Pain",
    category: "Mobility",
    description: "Herbal remedies and exercise plans for stronger knees.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Piles Treatment",
    category: "Digestive Care",
    description: "Comforting care with natural medicine and wellness guidance.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Varma Therapy",
    category: "Energy Healing",
    description: "Ancient pressure therapy to restore life force and balance.",
    image:
      "https://images.unsplash.com/photo-1485963631004-f2f5698c064f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Massage Therapy",
    category: "Relaxation",
    description: "Deep healing massage with herbal oils for body renewal.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Yoga Therapy",
    category: "Wellness",
    description: "Guided yoga rituals for strength, breath and calm mind.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
];

export const blogsData: BlogPost[] = [
  {
    title: "Benefits of Siddha Medicine",
    description: "Discover how Siddha herbs help balance the body and mind.",
    author: "Dr. K. Amutha",
    date: "June 10, 2026",
    category: "Siddha",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Yoga for Daily Health",
    description: "Simple yoga routines you can practice every morning.",
    author: "Dr. K. Amutha",
    date: "June 16, 2026",
    category: "Yoga",
    image:
      "https://images.unsplash.com/photo-1526401485004-4173d33b2bfa?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Natural Treatment for Spine Pain",
    description: "How herbal care and posture work together for recovery.",
    author: "Dr. K. Amutha",
    date: "June 22, 2026",
    category: "Spine",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "How Herbal Medicine Improves Immunity",
    description: "Strengthen your immune system with the power of plants.",
    author: "Dr. K. Amutha",
    date: "June 28, 2026",
    category: "Herbal",
    image:
      "https://images.unsplash.com/photo-1518976024611-488215b36c47?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifestyle Tips for Healthy Living",
    description: "Daily habits for lasting wellness, sleep and energy.",
    author: "Dr. K. Amutha",
    date: "July 02, 2026",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    quote:
      "Excellent natural treatment with Siddha medicine and Yoga. Very knowledgeable doctor. Highly recommended.",
    name: "Meena R.",
    meta: "Happy Patient",
  },
  {
    quote: "Low-cost treatment with quick pain relief. Friendly doctor.",
    name: "Suresh K.",
    meta: "Wellness Client",
  },
  {
    quote: "Affordable treatment for spinal problems.",
    name: "Anitha P.",
    meta: "Recovery Story",
  },
  {
    quote: "Shoulder pain recovered quickly.",
    name: "Vikram M.",
    meta: "Therapy Success",
  },
];

export const galleryData: GalleryItem[] = [
  {
    title: "Healing Herbs",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Yoga Practice",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Healing",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Medicine Care",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nature Retreat",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Doctor Consultation",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
  },
];

export const faqData: FAQItem[] = [
  {
    question: "What is Siddha Medicine?",
    answer:
      "Siddha is an ancient South Indian healing system that uses herbs, purification practices, diet and lifestyle guidance to restore balance.",
  },
  {
    question: "Is Yoga Included?",
    answer:
      "Yes, every treatment plan blends yoga therapy, breathwork and meditation tailored to individual needs.",
  },
  {
    question: "How Long Does Treatment Take?",
    answer:
      "Most patients feel improvement in 2–4 weeks, while full recovery depends on the condition and consistency of care.",
  },
  {
    question: "Are Medicines Natural?",
    answer:
      "All medicines are sourced from trusted herbs and prepared to be safe, gentle and free from synthetic additives.",
  },
];

export const statsData = [
  { value: "736+", label: "Happy Patients" },
  { value: "5.0", label: "Google Rating" },
  { value: "10+", label: "Treatments" },
  { value: "100%", label: "Natural Medicine" },
];
