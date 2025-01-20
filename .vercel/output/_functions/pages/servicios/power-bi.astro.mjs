/* empty css                                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DElV5CCb.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../../chunks/Layout_D7fsvetn.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BmPKKPLy.mjs';
export { renderers } from '../../renderers.mjs';

const $$PowerBi = createComponent(($$result, $$props, $$slots) => {
  const powerBIData = {
    title: "Servicios Power BI | Nexito Technology",
    description: "Convierte tus datos en decisiones estrat\xE9gicas con nuestros servicios de Power BI. Dashboards personalizados, informes en tiempo real y an\xE1lisis avanzado de datos.",
    heroTitle: "Servicios Power BI",
    heroSubtitle: "Transforma tus Datos en Decisiones Inteligentes",
    features: [
      {
        title: "Dashboards Interactivos",
        description: "Visualizaciones din\xE1micas que permiten explorar tus datos en tiempo real",
        icon: "\u{1F4CA}"
      },
      {
        title: "Integraci\xF3n de Datos",
        description: "Conecta y unifica datos de m\xFAltiples fuentes en un solo lugar",
        icon: "\u{1F504}"
      },
      {
        title: "Informes Automatizados",
        description: "Generaci\xF3n y distribuci\xF3n autom\xE1tica de informes personalizados",
        icon: "\u{1F4C8}"
      },
      {
        title: "Analytics Avanzado",
        description: "An\xE1lisis predictivo y descubrimiento de patrones en tus datos",
        icon: "\u{1F3AF}"
      }
    ],
    benefits: [
      "Toma de decisiones basada en datos",
      "Reducci\xF3n del tiempo de an\xE1lisis",
      "Mejora en la precisi\xF3n de reportes",
      "Acceso en tiempo real a informaci\xF3n cr\xEDtica",
      "Colaboraci\xF3n mejorada entre equipos"
    ],
    useCases: [
      {
        title: "Finanzas",
        description: "An\xE1lisis financiero y reportes de KPIs",
        image: "/images/finance-dashboard.jpg"
      },
      {
        title: "Ventas",
        description: "Seguimiento de ventas y an\xE1lisis de rendimiento",
        image: "/images/sales-dashboard.jpg"
      },
      {
        title: "Marketing",
        description: "An\xE1lisis de campa\xF1as y ROI",
        image: "/images/marketing-dashboard.jpg"
      }
    ],
    process: [
      {
        step: 1,
        title: "Evaluaci\xF3n",
        description: "An\xE1lisis de necesidades y objetivos"
      },
      {
        step: 2,
        title: "Dise\xF1o",
        description: "Creaci\xF3n de mockups y arquitectura de datos"
      },
      {
        step: 3,
        title: "Desarrollo",
        description: "Implementaci\xF3n y configuraci\xF3n"
      },
      {
        step: 4,
        title: "Pruebas",
        description: "Validaci\xF3n y ajustes"
      },
      {
        step: 5,
        title: "Despliegue",
        description: "Implementaci\xF3n y capacitaci\xF3n"
      }
    ],
    faq: [
      {
        question: "\xBFQu\xE9 es Power BI?",
        answer: "Power BI es una plataforma de an\xE1lisis empresarial que permite visualizar sus datos y compartir informaci\xF3n en toda su organizaci\xF3n."
      },
      {
        question: "\xBFCu\xE1nto tiempo toma implementar Power BI?",
        answer: "El tiempo de implementaci\xF3n var\xEDa seg\xFAn la complejidad del proyecto, pero t\xEDpicamente toma entre 2-8 semanas."
      }
      // ... más preguntas frecuentes
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "name": powerBIData.heroTitle,
    "description": powerBIData.description,
    "provider": {
      "@type": "Organization",
      "name": "Nexito Technology"
    },
    "serviceType": "Business Intelligence Service",
    "areaServed": "ES"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": powerBIData.title, "description": powerBIData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })} ${maybeRenderHead()}<section class="relative py-20 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700"> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative"> <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6"> ${powerBIData.heroTitle} <span class="block text-blue-300 mt-2">${powerBIData.heroSubtitle}</span> </h1> <p class="text-xl text-blue-100 mb-8">
Convierte tus datos en insights accionables con dashboards interactivos y reportes personalizados
</p> <a href="#contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
Solicitar Demo Gratuita
</a> </div> </div> </section> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Características Principales
</h2> <p class="text-xl text-gray-600">
Todo lo que necesitas para transformar tus datos en decisiones inteligentes
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${powerBIData.features.map((feature) => renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-semibold mb-2">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> </div>`)} </div> </div> </section> <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Casos de Uso
</h2> <p class="text-xl text-gray-600">
Descubre cómo Power BI puede transformar tu negocio
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${powerBIData.useCases.map((useCase) => renderTemplate`<div class="bg-white rounded-xl overflow-hidden shadow-lg"> <div class="aspect-video bg-gray-200"> <img${addAttribute(useCase.image, "src")}${addAttribute(useCase.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${useCase.title}</h3> <p class="text-gray-600">${useCase.description}</p> </div> </div>`)} </div> </div> </section> <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Proceso de Implementación
</h2> <p class="text-xl text-gray-600">
Un enfoque estructurado para garantizar el éxito
</p> </div> <div class="relative">  <div class="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 hidden md:block"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-8"> ${powerBIData.process.map((step) => renderTemplate`<div class="relative"> <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-blue-200 mx-auto z-10 relative"> ${step.step} </div> <div class="text-center mt-4"> <h3 class="font-semibold mb-2">${step.title}</h3> <p class="text-gray-600 text-sm">${step.description}</p> </div> </div>`)} </div> </div> </div> </section> <section class="py-20 bg-gray-50"> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Preguntas Frecuentes
</h2> </div> <div class="space-y-6"> ${powerBIData.faq.map((item) => renderTemplate`<div class="bg-white rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold mb-2">${item.question}</h3> <p class="text-gray-600">${item.answer}</p> </div>`)} </div> </div> </section> <section id="contact" class="py-20 bg-blue-900"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </section> <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Beneficios
</h2> <p class="text-xl text-gray-600">
Ventajas competitivas que obtendrás
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${powerBIData.benefits.map((benefit) => renderTemplate`<div class="flex items-start space-x-4"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="text-gray-700">${benefit}</p> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/servicios/power-bi.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/servicios/power-bi.astro";
const $$url = "/servicios/power-bi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PowerBi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
