import { defineCollection, z } from 'astro:content';

// Schema para el blog
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    // Nuevos campos opcionales que mantienen compatibilidad
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lastModified: z.date().optional(),
    readingTime: z.number().optional(),
    // SEO y metadatos adicionales
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
    // Campos de gestión
    isPublished: z.boolean().default(true),
    featured: z.boolean().default(false),
    author: z.string().default('Nexito Technology')
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