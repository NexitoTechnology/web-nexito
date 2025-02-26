import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Chp2LETn.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Di92oz3H.mjs';
import { $ as $$ServicesHeroSection, a as $$ServicesDividerSection, b as $$SevicesFeaturesSection, c as $$ServicesUseCasesSection, d as $$ServicesBenefitsSection, e as $$ServicesProcessSection, f as $$SercivesFaqCtaSection } from '../../chunks/services_divider_section_BgIGxkTz.mjs';
import { $ as $$TestimonialsSection, a as $$FaqSection } from '../../chunks/testimonials_section_pzqLsyS-.mjs';
import { $ as $$ServicesCtaSection, a as $$ServicesContactSection } from '../../chunks/services_contact_section_tD5mUURG.mjs';
import { $ as $$JsonLD } from '../../chunks/ClientRouter_BoSfKJ7P.mjs';
export { renderers } from '../../renderers.mjs';

const $$Sap = createComponent(($$result, $$props, $$slots) => {
  const sapData = {
    title: "Implementaci\xF3n y Consultor\xEDa SAP | Nexito Tech",
    description: "Optimiza tu empresa con nuestros servicios especializados en SAP. Implementaci\xF3n de S/4HANA, consultor\xEDa experta y soporte continuo para maximizar el valor de tu inversi\xF3n en SAP.",
    hero: {
      title: "Servicios Profesionales SAP",
      subtitle: "Transformaci\xF3n Digital con SAP",
      description: "Implementaci\xF3n, consultor\xEDa y optimizaci\xF3n de soluciones SAP para impulsar la eficiencia empresarial",
      tag: "\u{1F527} Expertos en Soluciones SAP"
    },
    features: {
      title: "Soluciones",
      subtitle: "SAP Enterprise",
      description: "Servicios especializados para maximizar tu inversi\xF3n en SAP",
      tag: "Servicios SAP",
      features: [
        {
          title: "Migraci\xF3n a S/4HANA",
          description: "Implementaci\xF3n y migraci\xF3n a la \xFAltima versi\xF3n de SAP con m\xEDnimo impacto operativo",
          icon: "\u{1F527}"
        },
        {
          title: "Consultor\xEDa SAP Estrat\xE9gica",
          description: "Asesoramiento experto en optimizaci\xF3n de procesos y mejores pr\xE1cticas SAP",
          icon: "\u{1F4A1}"
        },
        {
          title: "Soporte SAP 24/7",
          description: "Mantenimiento proactivo y soporte t\xE9cnico especializado continuo",
          icon: "\u{1F6E0}"
        },
        {
          title: "Capacitaci\xF3n SAP Integral",
          description: "Programas de formaci\xF3n personalizados para maximizar la adopci\xF3n",
          icon: "\u{1F4DA}"
        }
      ]
    },
    useCases: {
      title: "Casos de",
      subtitle: "\xC9xito SAP",
      description: "Transformaciones empresariales con SAP",
      tag: "Implementaciones Exitosas",
      useCases: [
        {
          title: "SAP Finance",
          description: "Gesti\xF3n financiera end-to-end y optimizaci\xF3n de procesos contables",
          image: "/images/finance-sap.webp",
          link: "/blog/caso-exito-sap-finance/",
          linkText: "Ver caso completo"
        },
        {
          title: "SAP Manufacturing",
          description: "Optimizaci\xF3n integral de producci\xF3n y cadena de suministro",
          image: "/images/manufacturing-sap.webp",
          link: "/blog/caso-exito-sap-finance/",
          linkText: "Ver caso completo"
        },
        {
          title: "SAP Retail",
          description: "Gesti\xF3n omnicanal y optimizaci\xF3n de inventario en tiempo real",
          image: "/images/retail-sap.webp",
          link: "/blog/caso-exito-sap-finance/",
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
      subtitle: "SAP",
      description: "Ventajas competitivas de implementar SAP",
      tag: "Valor Empresarial",
      benefits: [
        "Reducci\xF3n del 50% en tiempos de cierre financiero",
        "Mejora del 85% en precisi\xF3n de inventario",
        "Automatizaci\xF3n del 70% de procesos manuales",
        "ROI promedio del 300% en 24 meses",
        "Reducci\xF3n del 40% en costos operativos"
      ]
    },
    process: {
      title: "Implementaci\xF3n",
      subtitle: "SAP",
      description: "Metodolog\xEDa probada para proyectos SAP exitosos",
      tag: "Metodolog\xEDa SAP",
      steps: [
        {
          step: 1,
          title: "Diagn\xF3stico",
          description: "An\xE1lisis de procesos y requerimientos"
        },
        {
          step: 2,
          title: "Blueprint",
          description: "Dise\xF1o detallado de la soluci\xF3n"
        },
        {
          step: 3,
          title: "Construcci\xF3n",
          description: "Desarrollo y configuraci\xF3n SAP"
        },
        {
          step: 4,
          title: "Testing",
          description: "Pruebas integrales del sistema"
        },
        {
          step: 5,
          title: "Go-Live",
          description: "Despliegue y soporte post-implementaci\xF3n"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes sobre SAP",
      description: "Resolvemos tus dudas sobre implementaciones SAP",
      tag: "FAQ",
      faqItems: [
        {
          question: "\xBFPor qu\xE9 elegir SAP para mi empresa?",
          answer: "SAP es el l\xEDder mundial en software empresarial, ofreciendo soluciones integradas que optimizan todos los procesos de negocio. Las empresas que implementan SAP experimentan en promedio una mejora del 40% en eficiencia operativa y un ROI significativo en los primeros 24 meses."
        },
        {
          question: "\xBFCu\xE1nto tiempo toma implementar SAP?",
          answer: "Una implementaci\xF3n t\xEDpica de SAP toma entre 3 y 12 meses, dependiendo del alcance y complejidad. Utilizamos una metodolog\xEDa \xE1gil que permite obtener resultados tangibles en fases tempranas del proyecto."
        },
        {
          question: "\xBFQu\xE9 procesos empresariales puede optimizar SAP?",
          answer: "SAP puede optimizar pr\xE1cticamente todos los procesos empresariales: finanzas, contabilidad, recursos humanos, ventas, compras, producci\xF3n, log\xEDstica, mantenimiento, y m\xE1s. Cada m\xF3dulo se integra perfectamente para proporcionar una visi\xF3n completa del negocio."
        },
        {
          question: "\xBFQu\xE9 nivel de soporte ofrecen post-implementaci\xF3n?",
          answer: "Proporcionamos soporte t\xE9cnico 24/7, mantenimiento preventivo, actualizaciones peri\xF3dicas y consultor\xEDa continua. Nuestro equipo de expertos SAP est\xE1 siempre disponible para asegurar el funcionamiento \xF3ptimo de tu sistema."
        }
      ]
    },
    cta: {
      title: "\xBFListo para transformar tu empresa con SAP?",
      description: "Descubre c\xF3mo SAP puede optimizar tus procesos con una consultor\xEDa gratuita",
      buttonText: "Agenda tu Consultor\xEDa Gratuita",
      buttonLink: "#calendar-booking",
      features: ["Sin compromiso", "100% Personalizado", "ROI Garantizado"]
    }};
  const serviceSchema = {
    "@type": "Service",
    name: sapData.hero.title,
    description: sapData.description,
    provider: {
      "@type": "Organization",
      name: "Nexito Technology",
      "@id": "https://nexito.tech"
    },
    serviceType: "SAP Implementation Services",
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": sapData.title, "description": sapData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })} ${renderComponent($$result2, "Hero", $$ServicesHeroSection, { ...sapData.hero })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Features", $$SevicesFeaturesSection, { ...sapData.features })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "UseCases", $$ServicesUseCasesSection, { ...sapData.useCases })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})}  ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Benefits", $$ServicesBenefitsSection, { ...sapData.benefits })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> ${renderComponent($$result2, "CTASection", $$ServicesCtaSection, { ...sapData.cta })} </div> </section> ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "Process", $$ServicesProcessSection, { ...sapData.process })} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "FAQ", $$FaqSection, { ...sapData.faq })} ${renderComponent($$result2, "FaqCtaServices", $$SercivesFaqCtaSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ${renderComponent($$result2, "ContactServices", $$ServicesContactSection, {})} ${renderComponent($$result2, "Divider", $$ServicesDividerSection, {})} ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/sap.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/sap.astro";
const $$url = "/servicios/sap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
