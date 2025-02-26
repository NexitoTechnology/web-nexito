import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BHlgMJLG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B6qnvoAv.mjs';
import { $ as $$ServicesHeroSection, a as $$ServicesDividerSection, b as $$SevicesFeaturesSection, c as $$ServicesUseCasesSection, d as $$ServicesBenefitsSection, e as $$ServicesProcessSection, f as $$SercivesFaqCtaSection } from '../../chunks/services_divider_section_CgF33WJt.mjs';
import { $ as $$TestimonialsSection, a as $$FaqSection } from '../../chunks/testimonials_section_Behd7ylQ.mjs';
import { $ as $$ServicesCtaSection, a as $$ServicesContactSection } from '../../chunks/services_contact_section_CIhrsvAO.mjs';
import { $ as $$JsonLD } from '../../chunks/ClientRouter_BY__ljaW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Bi = createComponent(($$result, $$props, $$slots) => {
  const biData = {
    title: "Power BI y An\xE1lisis Empresarial | Nexito Tech",
    description: "Optimiza la toma de decisiones con nuestros servicios de Business Intelligence. Transforma datos en insights accionables, visualizaciones en tiempo real y reportes personalizados para impulsar el crecimiento de tu negocio.",
    hero: {
      title: "Servicios de Business Intelligence y An\xE1lisis Empresarial",
      subtitle: "Transforma tus Datos en Decisiones Estrat\xE9gicas",
      description: "Potencia tu empresa con an\xE1lisis avanzado de datos, dashboards interactivos y reportes personalizados que impulsan el crecimiento y la innovaci\xF3n",
      tag: "\u{1F680} Optimiza tu Toma de Decisiones"
    },
    features: {
      title: "Soluciones",
      subtitle: "Inteligentes de BI",
      description: "Herramientas anal\xEDticas avanzadas dise\xF1adas para maximizar el valor de tus datos",
      tag: "Caracter\xEDsticas Avanzadas",
      features: [
        {
          title: "An\xE1lisis Predictivo de Datos",
          description: "Convierte datos complejos en insights accionables y pron\xF3sticos precisos",
          icon: "\u{1F4CA}"
        },
        {
          title: "Dashboards Interactivos en Tiempo Real",
          description: "Visualiza y analiza datos empresariales con actualizaciones instant\xE1neas",
          icon: "\u{1F310}"
        },
        {
          title: "Reportes Empresariales Personalizados",
          description: "Informes adaptados a tus KPIs y objetivos espec\xEDficos",
          icon: "\u{1F4C8}"
        },
        {
          title: "Consultor\xEDa Estrat\xE9gica en BI",
          description: "Asesoramiento experto para optimizar tu estrategia de datos",
          icon: "\u{1F4A1}"
        }
      ]
    },
    useCases: {
      title: "Casos de",
      subtitle: "\xC9xito en BI",
      description: "Descubre c\xF3mo nuestras soluciones transforman diferentes sectores empresariales",
      tag: "Casos de \xC9xito",
      useCases: [
        {
          title: "An\xE1lisis Financiero Avanzado",
          description: "Optimizaci\xF3n de gesti\xF3n financiera y reducci\xF3n de riesgos con BI predictivo",
          image: "/images/finance-bi.webp",
          link: "/blog/caso-exito-business-intelligence-eficiencia-operativa/",
          linkText: "Ver caso completo"
        },
        {
          title: "Marketing Data-Driven",
          description: "Optimizaci\xF3n de ROI en campa\xF1as y an\xE1lisis profundo del comportamiento del cliente",
          image: "/images/marketing-bi.webp",
          link: "/blog/caso-exito-business-intelligence-eficiencia-operativa/",
          linkText: "Ver caso completo"
        },
        {
          title: "Eficiencia Operativa",
          description: "Mejora significativa en productividad y optimizaci\xF3n de recursos empresariales",
          image: "/images/operations-bi.webp",
          link: "/blog/caso-exito-business-intelligence-eficiencia-operativa/",
          linkText: "Ver caso completo"
        }
      ],
      extraCTA: {
        text: "Explora m\xE1s casos de \xE9xito en BI",
        href: "#calendar-booking"
      }
    },
    benefits: {
      title: "Beneficios",
      subtitle: "Transformadores",
      description: "Ventajas competitivas que impulsar\xE1n tu negocio",
      tag: "Business Intelligence",
      benefits: [
        "Toma de decisiones basada en datos con precisi\xF3n del 99.9%",
        "Reducci\xF3n del 60% en tiempo de an\xE1lisis y reportes",
        "Monitoreo en tiempo real de KPIs cr\xEDticos",
        "Ventaja competitiva mediante an\xE1lisis predictivo",
        "ROI demostrable en implementaciones de BI"
      ]
    },
    process: {
      title: "Proceso de",
      subtitle: "Implementaci\xF3n BI",
      description: "Metodolog\xEDa probada para una implementaci\xF3n exitosa de Business Intelligence",
      tag: "Metodolog\xEDa",
      steps: [
        {
          step: 1,
          title: "An\xE1lisis Inicial",
          description: "Evaluaci\xF3n completa de necesidades y oportunidades de datos"
        },
        {
          step: 2,
          title: "Planificaci\xF3n Estrat\xE9gica",
          description: "Dise\xF1o detallado de la soluci\xF3n BI personalizada"
        },
        {
          step: 3,
          title: "Desarrollo e Integraci\xF3n",
          description: "Implementaci\xF3n y conexi\xF3n de sistemas BI"
        },
        {
          step: 4,
          title: "Validaci\xF3n y Testing",
          description: "Pruebas exhaustivas y optimizaci\xF3n de rendimiento"
        },
        {
          step: 5,
          title: "Despliegue y Soporte",
          description: "Lanzamiento y monitoreo continuo del sistema"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes sobre BI",
      description: "Respuestas expertas a tus dudas sobre Business Intelligence",
      tag: "FAQ",
      faqItems: [
        {
          question: "\xBFQu\xE9 beneficios espec\xEDficos aporta el Business Intelligence?",
          answer: "El BI permite tomar decisiones basadas en datos, optimizar procesos operativos, identificar tendencias de mercado, mejorar la satisfacci\xF3n del cliente y aumentar los ingresos mediante an\xE1lisis predictivo y en tiempo real."
        },
        {
          question: "\xBFCu\xE1l es el tiempo promedio de implementaci\xF3n de una soluci\xF3n BI?",
          answer: "La implementaci\xF3n t\xEDpica toma entre 2 y 6 meses, dependiendo de la complejidad del proyecto, el volumen de datos y los requisitos espec\xEDficos. Ofrecemos un plan detallado en la fase inicial."
        },
        {
          question: "\xBFQu\xE9 tipos de procesos empresariales se pueden optimizar con BI?",
          answer: "El BI puede optimizar pr\xE1cticamente cualquier proceso basado en datos: an\xE1lisis financiero, gesti\xF3n de inventario, marketing, ventas, recursos humanos, servicio al cliente y m\xE1s."
        },
        {
          question: "\xBFSe requiere experiencia t\xE9cnica para utilizar las herramientas de BI?",
          answer: "No es necesaria experiencia t\xE9cnica previa. Nuestras soluciones son intuitivas y proporcionamos capacitaci\xF3n completa y soporte continuo para asegurar el \xE9xito de tu equipo."
        }
      ]
    },
    cta: {
      title: "\xBFListo para potenciar tu Business Intelligence?",
      description: "Descubre c\xF3mo nuestras soluciones de BI pueden transformar tu negocio con una consultor\xEDa personalizada gratuita",
      buttonText: "Agenda tu Consultor\xEDa Gratuita",
      buttonLink: "#calendar-booking",
      features: ["An\xE1lisis Personalizado", "100% Confidencial", "Sin Compromiso"]
    }};
  const serviceSchema = {
    "@type": "Service",
    name: biData.hero.title,
    description: biData.description,
    provider: {
      "@type": "Organization",
      name: "Nexito Technology",
      "@id": "https://nexito.com"
    },
    serviceType: "Business Intelligence Services",
    areaServed: "ES",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "EUR",
        description: "Consulta inicial gratuita"
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": biData.title, "description": biData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })} ${renderComponent($$result2, "Hero", $$ServicesHeroSection, { "title": biData.hero.title, "subtitle": biData.hero.subtitle, "description": biData.hero.description, "tag": biData.hero.tag })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Features", $$SevicesFeaturesSection, { ...biData.features })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "UseCases", $$ServicesUseCasesSection, { ...biData.useCases })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})}  ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Benefits", $$ServicesBenefitsSection, { ...biData.benefits })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> ${renderComponent($$result2, "CTASection", $$ServicesCtaSection, { ...biData.cta })} </div> </section> ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Process", $$ServicesProcessSection, { ...biData.process })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "FAQ", $$FaqSection, { ...biData.faq })} ${renderComponent($$result2, "FaqCtaServices", $$SercivesFaqCtaSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "ContactServices", $$ServicesContactSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/bi.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/bi.astro";
const $$url = "/servicios/bi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
