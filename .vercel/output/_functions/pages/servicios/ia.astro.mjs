/* empty css                                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BE3i_TMP.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../../chunks/Layout_CMMWLRpX.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_D5JCnCqK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ia = createComponent(($$result, $$props, $$slots) => {
  const iaData = {
    title: "Desarrollos de IA | Nexito Technology",
    description: "Transforma tu negocio con nuestras soluciones de inteligencia artificial. Mejora la eficiencia, toma decisiones informadas y optimiza procesos con IA.",
    heroTitle: "Desarrollos de IA",
    heroSubtitle: "Transforma tu Negocio con Inteligencia Artificial",
    features: [
      {
        title: "Automatizaci\xF3n Inteligente",
        description: "Automatizaci\xF3n de procesos complejos con algoritmos avanzados",
        icon: "\u{1F916}"
      },
      {
        title: "An\xE1lisis Predictivo",
        description: "Previsi\xF3n de tendencias y comportamientos con precisi\xF3n",
        icon: "\u{1F4C8}"
      },
      {
        title: "Procesamiento de Lenguaje Natural",
        description: "Interacci\xF3n humana natural con m\xE1quinas",
        icon: "\u{1F5E3}"
      },
      {
        title: "Visi\xF3n por Computadora",
        description: "Reconocimiento y an\xE1lisis de im\xE1genes y videos",
        icon: "\u{1F4F8}"
      }
    ],
    benefits: [
      "Mejora de la eficiencia operativa",
      "Toma de decisiones informadas",
      "Optimizaci\xF3n de procesos",
      "Innovaci\xF3n continua",
      "Ventaja competitiva"
    ],
    useCases: [
      {
        title: "Finanzas",
        description: "Detecci\xF3n de fraudes y an\xE1lisis de riesgos",
        image: "/images/finance-ai.jpg"
      },
      {
        title: "Salud",
        description: "Diagn\xF3sticos m\xE9dicos y tratamientos personalizados",
        image: "/images/health-ai.jpg"
      },
      {
        title: "Retail",
        description: "Recomendaciones de productos y gesti\xF3n de inventario",
        image: "/images/retail-ai.jpg"
      }
    ],
    process: [
      {
        step: 1,
        title: "An\xE1lisis",
        description: "Identificaci\xF3n de necesidades y oportunidades"
      },
      {
        step: 2,
        title: "Dise\xF1o",
        description: "Planificaci\xF3n y modelado de soluciones"
      },
      {
        step: 3,
        title: "Desarrollo",
        description: "Implementaci\xF3n de algoritmos y modelos"
      },
      {
        step: 4,
        title: "Pruebas",
        description: "Validaci\xF3n y ajuste de resultados"
      },
      {
        step: 5,
        title: "Despliegue",
        description: "Integraci\xF3n y monitoreo continuo"
      }
    ],
    faq: [
      {
        question: "\xBFQu\xE9 es IA?",
        answer: "IA (Inteligencia Artificial) es una tecnolog\xEDa que permite a las m\xE1quinas realizar tareas que normalmente requieren inteligencia humana."
      },
      {
        question: "\xBFCu\xE1nto tiempo se tarda en implementar IA?",
        answer: "La implementaci\xF3n puede variar de 2 a 12 semanas, dependiendo de la complejidad de los procesos a automatizar."
      },
      {
        question: "\xBFQu\xE9 procesos se pueden automatizar?",
        answer: "Cualquier proceso que involucre datos y toma de decisiones es candidato para IA."
      },
      {
        question: "\xBFSe necesita conocimientos t\xE9cnicos?",
        answer: "No necesariamente. Nuestras soluciones IA son accesibles y proporcionamos formaci\xF3n completa a tu equipo."
      }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "name": iaData.heroTitle,
    "description": iaData.description,
    "provider": {
      "@type": "Organization",
      "name": "Nexito Technology"
    },
    "serviceType": "Artificial Intelligence Development",
    "areaServed": "ES"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": iaData.title, "description": iaData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })}  ${maybeRenderHead()}<section class="relative py-20 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700"> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative"> <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6"> ${iaData.heroTitle} <span class="block text-blue-300 mt-2">${iaData.heroSubtitle}</span> </h1> <p class="text-xl text-blue-100 mb-8">
Transforma tu negocio con soluciones de inteligencia artificial
</p> <a href="#contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
Evalúa tus Procesos Gratis
</a> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Funcionalidades IA
</h2> <p class="text-xl text-gray-600">
Herramientas avanzadas para la inteligencia artificial
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${iaData.features.map((feature) => renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-semibold mb-2">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Casos de Éxito IA
</h2> <p class="text-xl text-gray-600">
Descubre cómo la inteligencia artificial transforma las empresas
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${iaData.useCases.map((useCase) => renderTemplate`<div class="bg-white rounded-xl overflow-hidden shadow-lg"> <div class="aspect-video bg-gray-200"> <img${addAttribute(useCase.image, "src")}${addAttribute(useCase.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${useCase.title}</h3> <p class="text-gray-600">${useCase.description}</p> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Beneficios IA
</h2> <p class="text-xl text-gray-600">
Ventajas competitivas de la inteligencia artificial
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${iaData.benefits.map((benefit) => renderTemplate`<div class="flex items-start space-x-4"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="text-gray-700">${benefit}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Proceso de Implementación
</h2> <p class="text-xl text-gray-600">
Metodología probada para el éxito
</p> </div> <div class="relative"> <div class="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 hidden md:block"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-8"> ${iaData.process.map((step) => renderTemplate`<div class="relative"> <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-blue-200 mx-auto z-10 relative"> ${step.step} </div> <div class="text-center mt-4"> <h3 class="font-semibold mb-2">${step.title}</h3> <p class="text-gray-600 text-sm">${step.description}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Preguntas Frecuentes
</h2> </div> <div class="space-y-6"> ${iaData.faq.map((item) => renderTemplate`<div class="bg-gray-50 rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold mb-2">${item.question}</h3> <p class="text-gray-600">${item.answer}</p> </div>`)} </div> </div> </section>  <section id="contact" class="py-20 bg-blue-900"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </section> ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/servicios/ia.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/servicios/ia.astro";
const $$url = "/servicios/ia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
