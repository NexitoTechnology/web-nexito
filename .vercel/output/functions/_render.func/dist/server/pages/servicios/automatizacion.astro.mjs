import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BHlgMJLG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B-hpLPf_.mjs';
import { $ as $$ServicesHeroSection, a as $$ServicesDividerSection, b as $$SevicesFeaturesSection, c as $$ServicesUseCasesSection, d as $$ServicesBenefitsSection, e as $$ServicesProcessSection, f as $$SercivesFaqCtaSection } from '../../chunks/services_divider_section_CgF33WJt.mjs';
import { $ as $$TestimonialsSection, a as $$FaqSection } from '../../chunks/testimonials_section_CFi6QyIh.mjs';
import { $ as $$ServicesCtaSection, a as $$ServicesContactSection } from '../../chunks/services_contact_section_AAMdoZ0z.mjs';
import { $ as $$JsonLD } from '../../chunks/ClientRouter_M5qoWx1f.mjs';
export { renderers } from '../../renderers.mjs';

const $$Automatizacion = createComponent(($$result, $$props, $$slots) => {
  const automatizacionData = {
    title: "Automatizaci\xF3n de Procesos | Nexito Technology",
    description: "Optimiza tus procesos empresariales con nuestra automatizaci\xF3n inteligente. Mejora la eficiencia y reduce costes.",
    hero: {
      title: "Automatizaci\xF3n de Procesos",
      subtitle: "Digitaliza y Optimiza tu Operaci\xF3n",
      description: "Transforma tus procesos manuales en flujos digitales eficientes y escalables",
      tag: "\u{1F680} Impulsa tu Eficiencia Operativa"
    },
    features: {
      title: "Soluciones",
      subtitle: "de Automatizaci\xF3n",
      description: "Herramientas avanzadas para optimizar tu negocio",
      tag: "Caracter\xEDsticas",
      features: [
        {
          title: "Automatizaci\xF3n de Flujos",
          description: "Digitaliza y automatiza tus procesos empresariales",
          icon: "\u26A1"
        },
        {
          title: "Integraci\xF3n Total",
          description: "Conecta todas tus aplicaciones y sistemas",
          icon: "\u{1F504}"
        },
        {
          title: "An\xE1lisis de Datos",
          description: "Obt\xE9n insights valiosos de tus procesos",
          icon: "\u{1F4CA}"
        },
        {
          title: "Escalabilidad",
          description: "Crece sin l\xEDmites con procesos optimizados",
          icon: "\u{1F4C8}"
        }
      ]
    },
    useCases: {
      title: "Casos de",
      subtitle: "Aplicaci\xF3n",
      description: "Descubre c\xF3mo la automatizaci\xF3n transforma diferentes \xE1reas",
      tag: "Ejemplos Pr\xE1cticos",
      useCases: [
        {
          title: "Gesti\xF3n Documental",
          description: "Automatizaci\xF3n del procesamiento de documentos",
          image: "/images/finance-automation.webp",
          link: "/blog/caso-exito-automatizacion-documental/",
          // Opcional
          linkText: "Ver caso completo"
          // Opcional
        },
        {
          title: "Procesos de Ventas",
          description: "Optimizaci\xF3n del ciclo de ventas completo",
          image: "/images/hr-automation.webp",
          link: "/blog/caso-exito-optimizacion-integral-ciclo-ventas/",
          // linkText es opcional, usará el valor por defecto
          linkText: "Ver caso completo"
        },
        {
          title: "Servicio al Cliente",
          description: "Automatizaci\xF3n de atenci\xF3n y soporte",
          image: "/images/customer-service-automation.webp",
          link: "/blog/automatizacion-atencion-cliente-caso-exito/",
          linkText: "Ver caso completo"
        }
      ],
      extraCTA: {
        // Opcional
        text: "Explora m\xE1s casos de \xE9xito",
        href: "#calendar-booking"
      }
    },
    benefits: {
      title: "Ventajas",
      subtitle: "para tu Empresa",
      description: "Beneficios tangibles que transformar\xE1n tu operaci\xF3n",
      tag: "Beneficios",
      benefits: [
        "Reducci\xF3n significativa de costes operativos",
        "Eliminaci\xF3n de errores manuales",
        "Mayor velocidad de procesamiento",
        "Mejor experiencia de empleados",
        "Datos precisos y en tiempo real"
      ]
    },
    process: {
      title: "Proceso de",
      subtitle: "Implementaci\xF3n",
      description: "Metodolog\xEDa probada para una automatizaci\xF3n exitosa",
      tag: "Metodolog\xEDa",
      steps: [
        {
          step: 1,
          title: "An\xE1lisis",
          description: "Evaluaci\xF3n de procesos actuales"
        },
        {
          step: 2,
          title: "Dise\xF1o",
          description: "Planificaci\xF3n de la soluci\xF3n"
        },
        {
          step: 3,
          title: "Desarrollo",
          description: "Implementaci\xF3n de automatizaciones"
        },
        {
          step: 4,
          title: "Pruebas",
          description: "Validaci\xF3n y ajustes"
        },
        {
          step: 5,
          title: "Despliegue",
          description: "Puesta en producci\xF3n"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Resolvemos tus dudas sobre automatizaci\xF3n",
      tag: "FAQ",
      faqItems: [
        {
          question: "\xBFQu\xE9 procesos puedo automatizar?",
          answer: "Cualquier proceso repetitivo y basado en reglas puede ser automatizado, desde tareas administrativas hasta procesos complejos de negocio."
        },
        {
          question: "\xBFCu\xE1nto tiempo toma implementar una automatizaci\xF3n?",
          answer: "El tiempo var\xEDa seg\xFAn la complejidad, pero t\xEDpicamente entre 2 y 8 semanas para procesos est\xE1ndar."
        },
        {
          question: "\xBFNecesito conocimientos t\xE9cnicos?",
          answer: "No necesariamente. Nuestras soluciones son intuitivas y proporcionamos capacitaci\xF3n completa."
        },
        {
          question: "\xBFC\xF3mo mido el ROI?",
          answer: "Proporcionamos m\xE9tricas claras de ahorro de tiempo, reducci\xF3n de errores y optimizaci\xF3n de recursos."
        }
      ]
    },
    cta: {
      title: "\xBFListo para automatizar tu negocio?",
      description: "Agenda una consultor\xEDa gratuita y descubre el potencial de la automatizaci\xF3n",
      buttonText: "Reserva tu Consultor\xEDa Gratis",
      buttonLink: "https://nexito.tech/consultoria-gratuita/",
      features: ["Sin compromiso", "100% Confidencial", "Gratis"]
    }};
  const serviceSchema = {
    "@type": "Service",
    name: automatizacionData.hero.title,
    description: automatizacionData.description,
    provider: {
      "@type": "Organization",
      name: "Nexito Technology"
    },
    serviceType: "Process Automation",
    areaServed: "ES"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": automatizacionData.title, "description": automatizacionData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })} ${renderComponent($$result2, "Hero", $$ServicesHeroSection, { "title": automatizacionData.hero.title, "subtitle": automatizacionData.hero.subtitle, "description": automatizacionData.hero.description, "tag": automatizacionData.hero.tag }, { "default": ($$result3) => renderTemplate`  ` })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Features", $$SevicesFeaturesSection, { ...automatizacionData.features })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "UseCases", $$ServicesUseCasesSection, { ...automatizacionData.useCases })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})}  ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Benefits", $$ServicesBenefitsSection, { ...automatizacionData.benefits })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> ${renderComponent($$result2, "CTASection", $$ServicesCtaSection, { ...automatizacionData.cta })} </div> </section> ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Process", $$ServicesProcessSection, { ...automatizacionData.process })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "FAQ", $$FaqSection, { ...automatizacionData.faq })} ${renderComponent($$result2, "FaqCtaServices", $$SercivesFaqCtaSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "ContactServices", $$ServicesContactSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/automatizacion.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/automatizacion.astro";
const $$url = "/servicios/automatizacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Automatizacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
