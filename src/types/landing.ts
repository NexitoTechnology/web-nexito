// src/types/landing.ts

// Tipos para la sección Hero
export interface HeroImage {
  url: string;
  alt: string;
}

// Tipos para la sección de Beneficios
export interface Benefit {
  icon: string;
  title: string;
  text: string;
}

export interface BenefitsSection {
  title?: string;
  benefits?: Benefit[];
}

// Tipos para la sección de Testimonios
export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  image?: string;
}

export interface TestimonialCTA {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonURL?: string;
  secondaryButtonText?: string;
  secondaryButtonURL?: string;
}

export interface TestimonialsSection {
  title?: string;
  testimonials: Testimonial[];
  cta?: TestimonialCTA;
}

// Tipos para la sección de Demo
export interface DemoStep {
  title: string;
  text: string;
  icon?: string;
}

export interface FallbackImage {
  url: string;
  alt: string;
}

export interface DemoSection {
  title?: string;
  subtitle?: string;
  videoURL?: string;
  processTitle?: string;
  steps?: DemoStep[];
  ctaButtonText?: string;
  ctaSubtext?: string;
  fallbackImage?: FallbackImage;
}

// Tipos para la configuración del Chatbot
export interface ChatbotConfig {
  collection?: string;
  apiUrl?: string;
  apiKey?: string;
  title?: string;
  welcomeMessage?: string;
  primaryColor?: string;
  position?: string; // Cambiado de enum a string para permitir 'bottom-right', etc.
  avatar?: string;
}

// Tipos para la sección de Casos de Éxito
export interface SuccessCase {
  type: string;
  headline: string;
  description: string;
  image?: string;
  results: string[];
  testimonial?: string;
  author?: string;
  role?: string;
}

export interface SuccessCasesSection {
  title?: string;
  cases?: SuccessCase[];
  ctaButtonText?: string;
  ctaButtonURL?: string;
}

// Tipos para la sección de Caso de Uso
export interface UseCaseSection {
  title?: string;
  text: string;
  image?: {
    url?: string;
    alt?: string;
  };
}

// Tipos para la sección de FAQ
export interface FAQ {
  question: string;
  answer: string;
}

export interface Statistic {
  value?: string;
  description?: string;
}

export interface FAQSection {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  statistic?: Statistic;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

// Tipos para la sección de CTA Final
export interface FinalCTA {
  headline?: string;
  text?: string;
  buttonText?: string;
  buttonURL?: string;
}

// Tipos para la sección de Precios
export interface Module {
  id: string;
  title: string;
  description: string;
  oneTimePrice?: number;
  monthlyPrice?: number;
  idealFor?: string[];
  requiresBaseModule?: boolean;
  isHighlighted?: boolean;
  icon?: string;
}

export interface Package {
  title: string;
  description: string;
  modules: string[];
  oneTimePrice?: number;
  monthlyPrice?: number;
  mostPopular?: boolean;
  idealFor?: string;
}

export interface Service {
  title: string;
  description?: string;
  price: number;
  priceLabel?: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export interface PricingSection {
  title?: string;
  subtitle?: string;
  description?: string;
  showPricingToggle?: boolean;
  pricingToggleLabel1?: string;
  pricingToggleLabel2?: string;
  baseModuleTitle?: string;
  baseModuleDescription?: string;
  baseModuleOneTimePrice?: number;
  baseModuleMonthlyPrice?: number;
  modules?: Module[];
  packages?: Package[];
  additionalServices?: ServiceCategory[];
  notesTitle?: string;
  notes?: string[];
  ctaButtonText?: string;
  ctaButtonURL?: string;
}

export interface ContactOptions {
  showContactForm?: boolean;
  whatsappNumber?: string;
  email?: string;
  phone?: string;
}

// Tipo para la página de landing completa
export interface LandingPageData {
  title: string;
  description: string;
  
  // Hero Section
  heroHeadline: string;
  heroSubheadline?: string;
  heroButtonText?: string;
  heroButtonURL?: string;
  heroImage?: HeroImage;
  heroEmailPlaceholder?: string;
  heroAppointmentButtonText?: string;
  heroAppointmentTagText?: string;
  calendlyURL?: string;
  
  // Secciones
  benefitsSection?: BenefitsSection;
  demoSection?: DemoSection;
  testimonialsSection?: TestimonialsSection;
  chatbotConfig?: ChatbotConfig;
  successCasesSection?: SuccessCasesSection;
  useCaseSection?: UseCaseSection;
  faqSection?: FAQSection;
  finalCTA?: FinalCTA;
  pricingSection?: PricingSection;
  
  // Otros metadatos
  contactOptions?: ContactOptions;
  isDraft?: boolean;
  publishedDate?: string;
  updatedDate?: string;
  slug?: string;
  noIndex?: boolean;
}

// Alias para PricingData para compatibilidad con componentes existentes
export type PricingData = PricingSection;