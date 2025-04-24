// src/env.d.ts
declare module '@astrojs/partytown/components' {
  import { AstroComponentFactory } from 'astro/dist/runtime/server'; 
  export const Partytown: AstroComponentFactory;
}

/// <reference types="astro/client" />

// Declara el tipo de entrada de datos para Astro
declare module 'astro:content' {
  // Define la interfaz principal de colecciones
  interface DataEntryMap {
    'blog': BlogSchema;
    'testimonials': TestimonialsSchema;
    'landing': LandingSchema;
  }

  // Define los tipos específicos para cada colección
  type BlogSchema = {
    title: string;
    date: Date;
    description: string;
    isPublished: boolean;
    featured: boolean;
    author: string;
    image?: string;
    imageAlt?: string;
    tags?: string[];
    categoria?: string;
    lastModified?: Date;
    readingTime?: number;
    dificultad?: 'Básico' | 'Intermedio' | 'Avanzado';
    audiencia?: string[];
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    articulosRelacionados?: string[];
    serie?: string;
    ordenEnSerie?: number;
    requisitoPrevio?: string[];
    tiempoImplementacion?: string;
  };

  type TestimonialsSchema = {
    name: string;
    role: string;
    company: string;
    quote: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    order: number;
    image?: string;
    companyLogo?: string;
    linkedIn?: string;
    featured: boolean;
    projectType?: string;
    industry?: string;
  };

  type LandingSchema = {
    title: string;
    description: string;
    heroHeadline: string;
    heroSubheadline?: string;
    heroButtonText?: string;
    heroButtonURL?: string;
    heroImage?: {
      url: string;
      alt: string;
    };
    benefitsSection?: {
      title?: string;
      benefits?: Array<{
        icon?: string;
        title: string;
        text: string;
      }>;
    };
    testimonialSection?: {
      quote: string;
      author: string;
      authorTitle?: string;
      authorImage?: string;
    };
    finalCTA?: {
      headline: string;
      text?: string;
      buttonText: string;
      buttonURL: string;
    };
    showContactForm?: boolean;
    isDraft?: boolean;
  };
}

// Añadir soporte explícito para la colección 'landing' en el espacio de nombres global
declare global {
  interface AstroGlobal {
    collections: {
      landing: any[];
      blog: any[];
      testimonials: any[];
    }
  }
}