/* empty css                                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CJ6p3tUL.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../../chunks/Layout_BOxJ0sKy.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BOB11ckY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Sap = createComponent(($$result, $$props, $$slots) => {
  const sapData = {
    title: "Servicios SAP | Nexito Technology",
    description: "Transforma tu negocio con nuestros servicios de SAP. Implementa soluciones SAP para mejorar la eficiencia, optimizar procesos y obtener insights valiosos.",
    heroTitle: "Servicios SAP",
    heroSubtitle: "Transforma tu Negocio con Soluciones SAP",
    features: [
      {
        title: "Implementaci\xF3n SAP S/4HANA",
        description: "Migra a la \xFAltima versi\xF3n de SAP para una gesti\xF3n empresarial m\xE1s eficiente",
        icon: "\u{1F527}"
      },
      {
        title: "Consultor\xEDa SAP",
        description: "Asesoramiento experto para optimizar tus procesos con SAP",
        icon: "\u{1F4A1}"
      },
      {
        title: "Soporte y Mantenimiento",
        description: "Servicios de soporte continuo para asegurar el funcionamiento \xF3ptimo de tus sistemas SAP",
        icon: "\u{1F6E0}"
      },
      {
        title: "Formaci\xF3n SAP",
        description: "Capacitaci\xF3n para tu equipo en el uso de soluciones SAP",
        icon: "\u{1F4DA}"
      }
    ],
    benefits: [
      "Mejora de la eficiencia operativa",
      "Optimizaci\xF3n de procesos",
      "Informaci\xF3n en tiempo real",
      "Toma de decisiones informadas",
      "Ventaja competitiva"
    ],
    useCases: [
      {
        title: "Finanzas",
        description: "Gesti\xF3n financiera integral y an\xE1lisis de riesgos con SAP",
        image: "/images/finance-sap.jpg"
      },
      {
        title: "Manufactura",
        description: "Optimizaci\xF3n de la cadena de suministro y producci\xF3n con SAP",
        image: "/images/manufacturing-sap.jpg"
      },
      {
        title: "Retail",
        description: "Mejora de la experiencia del cliente y gesti\xF3n de inventario con SAP",
        image: "/images/retail-sap.jpg"
      }
    ],
    process: [
      {
        step: 1,
        title: "An\xE1lisis",
        description: "Evaluaci\xF3n de necesidades y oportunidades"
      },
      {
        step: 2,
        title: "Planificaci\xF3n",
        description: "Dise\xF1o de la estrategia de implementaci\xF3n"
      },
      {
        step: 3,
        title: "Desarrollo",
        description: "Configuraci\xF3n y personalizaci\xF3n de soluciones SAP"
      },
      {
        step: 4,
        title: "Pruebas",
        description: "Validaci\xF3n y ajuste de la implementaci\xF3n"
      },
      {
        step: 5,
        title: "Despliegue",
        description: "Implementaci\xF3n y monitoreo continuo"
      }
    ],
    faq: [
      {
        question: "\xBFQu\xE9 es SAP?",
        answer: "SAP es un sistema de planificaci\xF3n de recursos empresariales que ayuda a las empresas a gestionar sus operaciones y procesos de negocio de manera eficiente."
      },
      {
        question: "\xBFCu\xE1nto tiempo se tarda en implementar SAP?",
        answer: "La implementaci\xF3n puede variar de 3 a 12 meses, dependiendo de la complejidad de los procesos y el tama\xF1o de la empresa."
      },
      {
        question: "\xBFQu\xE9 procesos se pueden optimizar con SAP?",
        answer: "Cualquier proceso empresarial, desde finanzas y recursos humanos hasta cadena de suministro y manufactura, puede ser optimizado con SAP."
      },
      {
        question: "\xBFSe necesita conocimientos t\xE9cnicos para usar SAP?",
        answer: "No necesariamente. Proporcionamos formaci\xF3n completa y soporte continuo para asegurar que tu equipo pueda utilizar SAP de manera efectiva."
      }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "name": sapData.heroTitle,
    "description": sapData.description,
    "provider": {
      "@type": "Organization",
      "name": "Nexito Technology"
    },
    "serviceType": "SAP Services",
    "areaServed": "ES"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": sapData.title, "description": sapData.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema })}  ${maybeRenderHead()}<section class="relative py-20 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700"> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative"> <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6"> ${sapData.heroTitle} <span class="block text-blue-300 mt-2">${sapData.heroSubtitle}</span> </h1> <p class="text-xl text-blue-100 mb-8">
Transforma tu negocio con soluciones SAP avanzadas
</p> <a href="#contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
Evalúa tus Procesos Gratis
</a> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Funcionalidades SAP
</h2> <p class="text-xl text-gray-600">
Herramientas avanzadas para la implementación de SAP
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${sapData.features.map((feature) => renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-semibold mb-2">${feature.title}</h3> <p class="text-gray-600">${feature.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Casos de Éxito SAP
</h2> <p class="text-xl text-gray-600">
Descubre cómo SAP transforma las empresas
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${sapData.useCases.map((useCase) => renderTemplate`<div class="bg-white rounded-xl overflow-hidden shadow-lg"> <div class="aspect-video bg-gray-200"> <img${addAttribute(useCase.image, "src")}${addAttribute(useCase.title, "alt")} class="w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${useCase.title}</h3> <p class="text-gray-600">${useCase.description}</p> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Beneficios SAP
</h2> <p class="text-xl text-gray-600">
Ventajas competitivas de la implementación de SAP
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sapData.benefits.map((benefit) => renderTemplate`<div class="flex items-start space-x-4"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="text-gray-700">${benefit}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Proceso de Implementación
</h2> <p class="text-xl text-gray-600">
Metodología probada para el éxito
</p> </div> <div class="relative"> <div class="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 hidden md:block"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-8"> ${sapData.process.map((step) => renderTemplate`<div class="relative"> <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-blue-200 mx-auto z-10 relative"> ${step.step} </div> <div class="text-center mt-4"> <h3 class="font-semibold mb-2">${step.title}</h3> <p class="text-gray-600 text-sm">${step.description}</p> </div> </div>`)} </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Preguntas Frecuentes
</h2> </div> <div class="space-y-6"> ${sapData.faq.map((item) => renderTemplate`<div class="bg-gray-50 rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold mb-2">${item.question}</h3> <p class="text-gray-600">${item.answer}</p> </div>`)} </div> </div> </section>  <section id="contact" class="py-20 bg-blue-900"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </section>` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/servicios/sap.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/servicios/sap.astro";
const $$url = "/servicios/sap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
