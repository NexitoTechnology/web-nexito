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
    categoria: z.string().optional(), // Cambiado de z.enum a z.string

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
    tiempoImplementacion: z.string().optional(),
  }),
});

// Schema para testimonios
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    order: z.number(),
    // Nuevos campos opcionales
    image: z.string().optional(),
    companyLogo: z.string().optional(),
    linkedIn: z.string().optional(),
    featured: z.boolean().default(false),
    projectType: z.string().optional(),
    industry: z.string().optional(),
  }),
});

// --- COLECCIÓN ACTUALIZADA PARA LANDINGS ---

const landingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // --- Campos existentes ---
    title: z.string(),
    description: z.string(),

    // --- Campos del Hero Section (Actualizados) ---
    heroHeadline: z.string(),
    heroSubheadline: z.string().optional(),
    heroButtonText: z.string().optional().default('Saber Más'),
    heroButtonURL: z.string().optional().default('#contact'),
    heroImage: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    // Nuevos campos para Hero
    heroEmailPlaceholder: z.string().optional().default('Dirección de correo electrónico'),
    heroAppointmentButtonText: z.string().optional().default('Agenda tu cita ahora'),
    heroAppointmentTagText: z.string().optional().default('GRATIS'),
    calendlyURL: z.string().optional().default('https://calendly.com/tu_usuario/consulta-gratuita'),

    // --- Sección de Beneficios (Sin cambios) ---
    benefitsSection: z
      .object({
        title: z.string().optional().default('Beneficios Clave'),
        benefits: z
          .array(
            z.object({
              icon: z.string().optional(),
              title: z.string(),
              text: z.string(),
            })
          )
          .optional(),
      })
      .optional(),

    // --- Sección de Demo o Video (Actualizada) ---
    demoSection: z
      .object({
        title: z.string().optional().default('Mira cómo funciona'),
        subtitle: z
          .string()
          .optional()
          .default(
            'Implementación sencilla, rápida y efectiva sin necesidad de conocimientos técnicos'
          ),
        videoURL: z.string().optional(),
        fallbackImage: z
          .object({
            url: z.string(),
            alt: z.string(),
          })
          .optional(),
        // Nuevos campos para Demo
        processTitle: z.string().optional().default('Un proceso simple que transforma tu clínica'),
        steps: z
          .array(
            z.object({
              title: z.string(),
              text: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional()
          .default([
            {
              title: 'Responde dudas automáticamente',
              text: 'El chatbot atiende consultas frecuentes de pacientes las 24 horas, liberando tiempo de tu personal.',
            },
            {
              title: 'Gestiona citas eficientemente',
              text: 'Permite a los pacientes programar, reprogramar o cancelar citas sin intervención humana.',
            },
            {
              title: 'Filtra y cualifica pacientes',
              text: 'Identifica las necesidades de cada paciente y los dirige al profesional adecuado en tu clínica.',
            },
          ]),
        ctaButtonText: z.string().optional().default('Ver una demostración personalizada'),
        ctaSubtext: z
          .string()
          .optional()
          .default('Sin compromiso • Configuración en menos de 48 horas'),
      })
      .optional(),

    // --- Testimonios (Sin cambios) ---
    testimonialsSection: z
      .object({
        title: z.string().optional().default('Lo que dicen nuestros clientes'),
        testimonials: z.array(
          z.object({
            name: z.string(),
            role: z.string().optional(),
            text: z.string(),
            image: z.string().optional(),
          })
        ),
        cta: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
            primaryButtonText: z.string().optional(),
            primaryButtonURL: z.string().optional(),
            secondaryButtonText: z.string().optional(),
            secondaryButtonURL: z.string().optional(),
          })
          .optional(),
      })
      .optional(),

    // --- Configuración del Chatbot (Nueva sección) ---
    chatbotConfig: z
      .object({
        collection: z.string().optional().default('chatbot_nexito'),
        apiUrl: z.string().optional().default('https://api.nexito.tech/api/query'),
        apiKey: z.string().optional().default('f8b7e4d5c6a3b2910f8e7d6c5b4a3210f8e7d6c5b4a32109'),
        title: z.string().optional().default('Asistente de Ventas'),
        welcomeMessage: z
          .string()
          .optional()
          .default(
            '¡Hola! Soy el asistente Nexito. Puedo ayudarte con información sobre nuestros planes, precios y características. ¿En qué puedo ayudarte hoy?'
          ),
        primaryColor: z.string().optional().default('#3B82F6'),
        position: z.string().optional().default('bottom-right'),
        avatar: z.string().optional().default('/images/nexito-logo.png'),
      })
      .optional(),

    // --- Casos de Éxito (Nueva sección) ---
    successCasesSection: z
      .object({
        title: z
          .string()
          .optional()
          .default('Casos de éxito: Cómo nuestro chatbot transforma clínicas'),
        cases: z
          .array(
            z.object({
              type: z.string(),
              headline: z.string(),
              description: z.string(),
              image: z.string().optional(),
              results: z.array(z.string()),
              testimonial: z.string().optional(),
              author: z.string().optional(),
              role: z.string().optional(),
            })
          )
          .optional(),
        ctaButtonText: z.string().optional().default('Descubre cómo podemos ayudarte'),
        ctaButtonURL: z.string().optional().default('#contacto'),
      })
      .optional(),

    // --- Caso de Uso (Sin cambios) ---
    useCaseSection: z
      .object({
        title: z.string().optional().default('Un caso real'),
        text: z.string(),
        image: z
          .object({
            url: z.string().optional(),
            alt: z.string().optional(),
          })
          .optional(),
      })
      .optional(),

    // --- FAQs (Actualizado) ---
    faqSection: z
      .object({
        title: z.string().optional().default('Preguntas frecuentes'),
        subtitle: z
          .string()
          .optional()
          .default(
            'Todo lo que necesitas saber antes de transformar la comunicación en tu clínica'
          ),
        faqs: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        ),
        statistic: z
          .object({
            value: z.string().optional().default('97%'),
            description: z
              .string()
              .optional()
              .default('de preguntas resueltas por el chatbot sin intervención humana'),
          })
          .optional(),
        ctaTitle: z.string().optional().default('¿Tienes más preguntas específicas sobre tu caso?'),
        ctaDescription: z
          .string()
          .optional()
          .default(
            'Agenda una demostración personalizada y te mostraremos cómo nuestro chatbot puede adaptarse exactamente a las necesidades de tu clínica.'
          ),
        ctaButtonText: z.string().optional().default('Agenda una demostración gratuita'),
      })
      .optional(),

    // --- CTA Final (Sin cambios) ---
    finalCTA: z
      .object({
        headline: z.string().default('¿Listo para empezar?'),
        text: z.string().optional(),
        buttonText: z.string().default('Contactar Ahora'),
        buttonURL: z.string().default('#contact'),
      })
      .optional(),
    // --- Sección de Precios (Nueva sección) ---
    pricingSection: z
      .object({
        title: z.string().optional().default('Precios transparentes y flexibles'),
        subtitle: z
          .string()
          .optional()
          .default('Elige la modalidad que mejor se adapte a tus necesidades'),
        description: z
          .string()
          .optional()
          .default('Todos los módulos requieren el Chatbot Básico. Precios sin IVA (21%).'),
        showPricingToggle: z.boolean().optional().default(true),
        pricingToggleLabel1: z.string().optional().default('Pago Único + Mensual'),
        pricingToggleLabel2: z.string().optional().default('Solo Mensual'),
        baseModuleTitle: z.string().optional().default('Chatbot Básico (Obligatorio)'),
        baseModuleDescription: z
          .string()
          .optional()
          .default(
            'Instalación y configuración esencial del chatbot. Base obligatoria para todos los módulos.'
          ),
        baseModuleOneTimePrice: z.number().optional().default(700),
        baseModuleMonthlyPrice: z.number().optional().default(49),
        modules: z
          .array(
            z.object({
              id: z.string(),
              title: z.string(),
              description: z.string(),
              oneTimePrice: z.number().optional(),
              monthlyPrice: z.number().optional(),
              idealFor: z.array(z.string()).optional(),
              requiresBaseModule: z.boolean().optional().default(true),
              isHighlighted: z.boolean().optional().default(false),
              icon: z.string().optional(),
            })
          )
          .optional(),
        packages: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
              modules: z.array(z.string()),
              oneTimePrice: z.number().optional(),
              monthlyPrice: z.number().optional(),
              mostPopular: z.boolean().optional().default(false),
              idealFor: z.string().optional(),
            })
          )
          .optional(),
        additionalServices: z
          .array(
            z.object({
              category: z.string(),
              services: z.array(
                z.object({
                  title: z.string(),
                  description: z.string().optional(),
                  price: z.number(),
                  priceLabel: z.string().optional().default('/mes'),
                })
              ),
            })
          )
          .optional(),
        notesTitle: z.string().optional().default('Información importante'),
        notes: z.array(z.string()).optional(),
        ctaButtonText: z.string().optional().default('Consulta tu plan personalizado'),
        ctaButtonURL: z.string().optional().default('#contacto'),
      })
      .optional(),

    // --- Resto de campos sin cambios ---
    contactOptions: z
      .object({
        showContactForm: z.boolean().optional().default(true),
        whatsappNumber: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
      })
      .optional(),
    isDraft: z.boolean().optional().default(false),
    publishedDate: z.string().optional(),
    updatedDate: z.string().optional(),
    slug: z.string().optional(),
    noIndex: z.boolean().optional().default(false),
  }),
});
// --- FIN COLECCIÓN ACTUALIZADA ---

// Exportación de las colecciones
export const collections = {
  blog: blog,
  testimonials: testimonials,
  landing: landingCollection, // Añade la nueva colección de landing
};
