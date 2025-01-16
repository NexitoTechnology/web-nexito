import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    // Contenido y multimedia
    image: z.string().optional(),
    imageAlt: z.string().optional(), // Texto alternativo para la imagen
    tags: z.array(z.string()).optional(),
    categoria: z.string().optional(),  // Cambiado de z.enum a z.string
    
    // Metadatos del artículo
    lastModified: z.date().optional(),
    readingTime: z.number().optional(),
    dificultad: z.enum(['Básico', 'Intermedio', 'Avanzado']).optional(),
    audiencia: z.array(z.string()).optional(),
    
    // SEO y metadatos
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
    
    // Gestión y organización
    isPublished: z.boolean().default(true),
    featured: z.boolean().default(false),
    author: z.string().default('Nexito Technology'),
    
    // Relaciones y series
    articulosRelacionados: z.array(z.string()).optional(),
    serie: z.string().optional(),
    ordenEnSerie: z.number().optional(),
    
    // Requisitos y tiempo
    requisitoPrevio: z.array(z.string()).optional(),
    tiempoImplementacion: z.string().optional()
  })
});


// Schema para testimonios
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string()
    })),
    order: z.number(),
    // Nuevos campos opcionales
    image: z.string().optional(),
    companyLogo: z.string().optional(),
    linkedIn: z.string().optional(),
    featured: z.boolean().default(false),
    projectType: z.string().optional(),
    industry: z.string().optional()
  })
});

// Exportación de las colecciones
export const collections = {
  'blog': blog,
  'testimonials': testimonials
};