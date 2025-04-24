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

// --- COLECCIÓN ACTUALIZADA PARA LANDINGS ---
const landingCollection = defineCollection({
  type: 'content', // 'content' para usar Markdown/MDX para el cuerpo principal
  schema: z.object({
    // --- Campos Obligatorios ---
    title: z.string(), // Título principal (para SEO y H1)
    description: z.string(), // Descripción corta (para SEO)

    // --- Campos del Hero Section ---
    heroHeadline: z.string(),
    heroSubheadline: z.string().optional(),
    heroButtonText: z.string().optional().default("Saber Más"),
    heroButtonURL: z.string().optional().default("#contact"), // Puede ser un enlace interno o externo
    heroImage: z.object({
      url: z.string(), // Ruta a la imagen en /public/ o URL externa
      alt: z.string()
    }).optional(),

    // --- Sección de Beneficios ---
    benefitsSection: z.object({
        title: z.string().optional().default("Beneficios Clave"),
        benefits: z.array(z.object({
            icon: z.string().optional(), // Código SVG o nombre de icono
            title: z.string(),
            text: z.string()
        })).optional()
    }).optional(),

    // --- Sección de Demo o Video ---
    demoSection: z.object({
        title: z.string().optional().default("Mira cómo funciona"),
        videoURL: z.string().optional(), // URL de YouTube o Vimeo
        fallbackImage: z.object({
            url: z.string(),
            alt: z.string()
        }).optional()
    }).optional(),

    // --- Sección de Testimonios (forma singular - compatibilidad) ---
    testimonialSection: z.object({
        quote: z.string(),
        author: z.string(),
        authorTitle: z.string().optional(),
        authorImage: z.string().optional() // Ruta a imagen
    }).optional(),

    // --- Sección de Testimonios (forma plural - nueva estructura) ---
testimonialsSection: z.object({
  title: z.string().optional().default("Lo que dicen nuestros clientes"),
  testimonials: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
      text: z.string(),
      image: z.string().optional() // Ruta a imagen
  })),
  // Nuevo objeto para el CTA dentro de la sección de testimonios
  cta: z.object({
      title: z.string().optional().default("¿Quieres resultados como estos en tu clínica?"),
      description: z.string().optional().default("Más de 100 clínicas ya han automatizado su atención al paciente. La configuración toma menos de 48 horas."),
      primaryButtonText: z.string().optional().default("Quiero mi chatbot ahora"),
      primaryButtonURL: z.string().optional().default("#contacto"),
      secondaryButtonText: z.string().optional().default("Ver demostración"),
      secondaryButtonURL: z.string().optional().default("#demo")
  }).optional()
}).optional(),

    // --- Sección de Caso de Uso ---
    useCaseSection: z.object({
        title: z.string().optional().default("Un caso real"),
        text: z.string(),
        image: z.object({
            url: z.string().optional(),
            alt: z.string().optional()
        }).optional()
    }).optional(),

    // --- Sección de Preguntas Frecuentes ---
    faqSection: z.object({
        title: z.string().optional().default("Preguntas frecuentes"),
        faqs: z.array(z.object({
            question: z.string(),
            answer: z.string()
        }))
    }).optional(),

    // --- Sección de Llamada a la Acción (CTA) Final ---
    finalCTA: z.object({
        headline: z.string().default("¿Listo para empezar?"),
        text: z.string().optional(),
        buttonText: z.string().default("Contactar Ahora"),
        buttonURL: z.string().default("#contact")
    }).optional(),

    // --- Opciones de Contacto ---
    contactOptions: z.object({
        showContactForm: z.boolean().optional().default(true),
        whatsappNumber: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional()
    }).optional(),

    // --- Metadatos y Control ---
    isDraft: z.boolean().optional().default(false),
    publishedDate: z.string().optional(), // Fecha en formato ISO
    updatedDate: z.string().optional(), // Fecha en formato ISO
    slug: z.string().optional(), // URL personalizada (si se quiere sobrescribir el nombre de archivo)
    noIndex: z.boolean().optional().default(false) // Para controlar si los motores de búsqueda deben indexar esta página
  }),
});
// --- FIN COLECCIÓN ACTUALIZADA ---

// Exportación de las colecciones
export const collections = {
  'blog': blog,
  'testimonials': testimonials,
  'landing': landingCollection, // Añade la nueva colección de landing
};