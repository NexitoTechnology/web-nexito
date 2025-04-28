// src/types/landing.ts

export interface LandingPageData {
    title: string;
    description: string;
    heroHeadline: string;
    heroSubheadline?: string;
    heroButtonText?: string;
    heroButtonURL?: string;
    heroEmailPlaceholder?: string;
    heroAppointmentButtonText?: string;
    heroAppointmentTagText?: string;
    calendlyURL?: string;
    heroImage?: { url: string; alt: string };
    
    // Añade aquí el resto de propiedades...
    
    // Por ejemplo:
    demoSection?: {
      title?: string;
      subtitle?: string;
      videoURL?: string;
      // ...
    };
    
    chatbotConfig?: {
      // ...
    };
    
    successCasesSection?: {
      // ...
    };
    
    isDraft?: boolean;
    noIndex?: boolean;
  }