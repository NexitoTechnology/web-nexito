import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Chp2LETn.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Di92oz3H.mjs';
import { $ as $$ServicesHeroSection, a as $$ServicesDividerSection, b as $$SevicesFeaturesSection, c as $$ServicesUseCasesSection, d as $$ServicesBenefitsSection, e as $$ServicesProcessSection, f as $$SercivesFaqCtaSection } from '../../chunks/services_divider_section_BgIGxkTz.mjs';
import { $ as $$TestimonialsSection, a as $$FaqSection } from '../../chunks/testimonials_section_pzqLsyS-.mjs';
import { $ as $$ServicesCtaSection, a as $$ServicesContactSection } from '../../chunks/services_contact_section_tD5mUURG.mjs';
import { $ as $$JsonLD } from '../../chunks/ClientRouter_BoSfKJ7P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Consultoria = createComponent(($$result, $$props, $$slots) => {
  const consultoriaData = {
    title: "Consultor\xEDa Tech y Transformaci\xF3n Digital | Nexito Tech",
    description: "Potencia tu empresa con nuestra consultor\xEDa tecnol\xF3gica especializada. Optimizamos procesos, reducimos costos y aceleramos tu transformaci\xF3n digital con soluciones personalizadas.",
    hero: {
      title: "Consultor\xEDa Tecnol\xF3gica y Digital",
      subtitle: "Impulsa la Transformaci\xF3n Digital de tu Empresa",
      description: "Optimiza tus procesos empresariales con estrategias tecnol\xF3gicas innovadoras y soluciones digitales de vanguardia",
      tag: "\u{1F680} Acelera tu Transformaci\xF3n Digital"
    },
    features: {
      title: "Soluciones",
      subtitle: "de Consultor\xEDa Digital",
      description: "Servicios especializados para potenciar tu transformaci\xF3n tecnol\xF3gica",
      tag: "Servicios Especializados",
      features: [
        {
          title: "Estrategia Digital Integral",
          description: "Desarrollo de roadmaps digitales personalizados y KPIs medibles",
          icon: "\u{1F310}"
        },
        {
          title: "Transformaci\xF3n Digital End-to-End",
          description: "Modernizaci\xF3n completa de procesos y sistemas empresariales",
          icon: "\u{1F504}"
        },
        {
          title: "Gesti\xF3n \xC1gil de Proyectos",
          description: "Metodolog\xEDas \xE1giles para implementaci\xF3n de tecnolog\xEDas",
          icon: "\u{1F4CA}"
        },
        {
          title: "Ciberseguridad Avanzada",
          description: "Protecci\xF3n integral de datos y sistemas empresariales",
          icon: "\u{1F512}"
        }
      ]
    },
    useCases: {
      title: "Casos de",
      subtitle: "\xC9xito Digital",
      description: "Descubre c\xF3mo transformamos empresas en diferentes sectores",
      tag: "Transformaciones Exitosas",
      useCases: [
        {
          title: "Sector Financiero",
          description: "Digitalizaci\xF3n completa de procesos financieros y optimizaci\xF3n de risk management",
          image: "/images/finance-consulting.webp",
          link: "/blog/caso-exito-consultoria-tech-industria-retail/",
          linkText: "Ver caso completo"
        },
        {
          title: "Sector Salud",
          description: "Implementaci\xF3n de telemedicina y sistemas integrados de gesti\xF3n hospitalaria",
          image: "/images/health-consulting.webp",
          link: "/blog/caso-exito-consultoria-tech-industria-retail/",
          linkText: "Ver caso completo"
        },
        {
          title: "Sector Retail",
          description: "Transformaci\xF3n omnicanal y optimizaci\xF3n de experiencia del cliente",
          image: "/images/retail-consulting.webp",
          link: "/blog/caso-exito-consultoria-tech-industria-retail/",
          linkText: "Ver caso completo"
        }
      ],
      extraCTA: {
        text: "Explora m\xE1s casos de \xE9xito",
        href: "#calendar-booking"
      }
    },
    benefits: {
      title: "Beneficios",
      subtitle: "Empresariales",
      description: "Ventajas tangibles que impulsan tu crecimiento digital",
      tag: "Ventajas Competitivas",
      benefits: [
        "Reducci\xF3n de hasta 40% en costes operativos",
        "Eliminaci\xF3n del 95% de errores en procesos manuales",
        "Incremento del 60% en eficiencia operativa",
        "Mejora del 85% en satisfacci\xF3n de empleados",
        "ROI medible en transformaci\xF3n digital"
      ]
    },
    process: {
      title: "Proceso de",
      subtitle: "Consultor\xEDa",
      description: "Metodolog\xEDa probada para una transformaci\xF3n digital exitosa",
      tag: "Metodolog\xEDa \xC1gil",
      steps: [
        {
          step: 1,
          title: "Diagn\xF3stico Digital",
          description: "Evaluaci\xF3n completa de madurez tecnol\xF3gica"
        },
        {
          step: 2,
          title: "Dise\xF1o Estrat\xE9gico",
          description: "Plan personalizado de transformaci\xF3n"
        },
        {
          step: 3,
          title: "Implementaci\xF3n \xC1gil",
          description: "Desarrollo iterativo de soluciones"
        },
        {
          step: 4,
          title: "Validaci\xF3n y Testing",
          description: "Pruebas exhaustivas de sistemas"
        },
        {
          step: 5,
          title: "Optimizaci\xF3n Continua",
          description: "Mejora y mantenimiento permanente"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Resolvemos tus dudas sobre consultor\xEDa tecnol\xF3gica",
      tag: "FAQ",
      faqItems: [
        {
          question: "\xBFQu\xE9 beneficios aporta la consultor\xEDa tecnol\xF3gica?",
          answer: "La consultor\xEDa tecnol\xF3gica mejora la eficiencia operativa, reduce costos, optimiza procesos, aumenta la productividad y proporciona ventajas competitivas mediante la implementaci\xF3n de soluciones digitales innovadoras."
        },
        {
          question: "\xBFCu\xE1l es el tiempo medio de implementaci\xF3n?",
          answer: "Los proyectos de transformaci\xF3n digital suelen durar entre 2 y 12 semanas, dependiendo del alcance y complejidad. Ofrecemos un cronograma detallado en la fase de planificaci\xF3n."
        },
        {
          question: "\xBFQu\xE9 tipos de procesos se pueden optimizar?",
          answer: "Optimizamos cualquier proceso empresarial: gesti\xF3n financiera, operaciones, recursos humanos, marketing, ventas, servicio al cliente y m\xE1s. Cada soluci\xF3n se adapta a tus necesidades espec\xEDficas."
        },
        {
          question: "\xBFSe requiere experiencia t\xE9cnica previa?",
          answer: "No es necesaria. Proporcionamos formaci\xF3n completa y acompa\xF1amiento continuo durante todo el proceso de transformaci\xF3n digital, asegurando que tu equipo pueda aprovechar al m\xE1ximo las nuevas tecnolog\xEDas."
        }
      ]
    },
    cta: {
      title: "\xBFListo para transformar digitalmente tu empresa?",
      description: "Descubre el potencial de la transformaci\xF3n digital con una consultor\xEDa gratuita personalizada",
      buttonText: "Agenda tu Consultor\xEDa Gratuita",
      buttonLink: "#calendar-booking",
      features: ["Sin compromiso", "100% Confidencial", "Consultor\xEDa Inicial Gratuita"]
    }};
  const serviceSchema = {
    "@type": "Service",
    name: consultoriaData.hero.title,
    description: consultoriaData.description,
    provider: {
      "@type": "Organization",
      name: "Nexito Technology",
      "@id": "https://nexito.com"
    },
    serviceType: "Technology Consulting",
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": consultoriaData.title, "description": consultoriaData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })} ${renderComponent($$result2, "Hero", $$ServicesHeroSection, { ...consultoriaData.hero })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Features", $$SevicesFeaturesSection, { ...consultoriaData.features })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "UseCases", $$ServicesUseCasesSection, { ...consultoriaData.useCases })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})}  ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Benefits", $$ServicesBenefitsSection, { ...consultoriaData.benefits })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> ${renderComponent($$result2, "CTASection", $$ServicesCtaSection, { ...consultoriaData.cta })} </div> </section> ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Process", $$ServicesProcessSection, { ...consultoriaData.process })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "FAQ", $$FaqSection, { ...consultoriaData.faq })} ${renderComponent($$result2, "FaqCtaServices", $$SercivesFaqCtaSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "ContactServices", $$ServicesContactSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/consultoria.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/consultoria.astro";
const $$url = "/servicios/consultoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consultoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
