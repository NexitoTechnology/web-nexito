import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, g as addAttribute, b as renderScript } from './astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import { $ as $$JsonLD } from './ClientRouter_Cy0holhV.mjs';
import { g as getCollection } from './_astro_content_DWJ0qoAj.mjs';
import 'clsx';

const $$Astro = createAstro("https://nexito.tech");
const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesSection;
  const services = [
    {
      id: "power-bi",
      title: "Power BI",
      icon: "\u{1F4CA}",
      description: "Convierte tus datos en decisiones estrat\xE9gicas",
      items: [
        "Cuadros de mando personalizados",
        "Integraci\xF3n con m\xFAltiples fuentes",
        "Reportes en tiempo real",
        "Visualizaciones interactivas",
        "KPIs y m\xE9tricas avanzadas"
      ],
      cta: {
        text: "Solicita una demo personalizada",
        subtext: "Ver c\xF3mo Power BI puede transformar tus datos"
      }
    },
    {
      id: "automatizacion",
      title: "Automatizaci\xF3n RPA",
      icon: "\u26A1",
      description: "Optimiza tus procesos y reduce costes operativos",
      items: [
        "Automatizaci\xF3n de tareas repetitivas",
        "Integraci\xF3n entre sistemas",
        "Reducci\xF3n de errores humanos",
        "Workflows automatizados",
        "Monitorizaci\xF3n 24/7"
      ],
      cta: {
        text: "Eval\xFAa tus procesos gratis en una consultoria",
        subtext: "Descubre qu\xE9 procesos puedes automatizar"
      }
    },
    {
      id: "ia",
      title: "Desarrollo IA",
      icon: "\u{1F916}",
      description: "Potencia tu negocio con Inteligencia Artificial",
      items: [
        "Machine Learning aplicado",
        "Automatizaci\xF3n inteligente",
        "An\xE1lisis predictivo",
        "Procesamiento de datos",
        "Modelos personalizados"
      ],
      cta: {
        text: "Descubre el potencial de la IA",
        subtext: "Analizamos los casos de uso para tu industria"
      }
    },
    {
      id: "consultoria",
      title: "Consultor\xEDa Tech",
      icon: "\u{1F4A1}",
      description: "Asesoramiento experto para tu transformaci\xF3n digital",
      items: [
        "Transformaci\xF3n digital",
        "Optimizaci\xF3n de procesos",
        "Arquitectura de sistemas",
        "Estrategia tecnol\xF3gica",
        "Gesti\xF3n del cambio"
      ],
      cta: {
        text: "Agenda una consultor\xEDa gratuita",
        subtext: "Evaluamos tus necesidades sin compromiso"
      }
    },
    {
      id: "sap",
      title: "Servicios SAP",
      icon: "\u{1F504}",
      description: "Maximiza todo el potencial de tu sistema SAP",
      items: [
        "Implementaci\xF3n y migraci\xF3n",
        "Optimizaci\xF3n de procesos",
        "Integraciones personalizadas",
        "Mantenimiento y soporte",
        "Formaci\xF3n especializada"
      ],
      cta: {
        text: "Consulta con un experto SAP",
        subtext: "Optimiza tu inversi\xF3n en SAP para sacar provecho"
      }
    },
    {
      id: "bi",
      title: "Business Intelligence",
      icon: "\u{1F4C8}",
      description: "Toma mejores decisiones basadas en datos",
      items: [
        "An\xE1lisis de datos avanzado",
        "Dashboards interactivos",
        "Informes automatizados",
        "Integraci\xF3n de fuentes",
        "Insights accionables"
      ],
      cta: {
        text: "Optimiza tus datos para resultados excepcionales",
        subtext: "Descubre el valor oculto que tienen tus datos"
      }
    }
  ];
  const servicesSchema = {
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "url": new URL(`/servicios#${service.id}`, Astro2.site).toString(),
      "provider": {
        "@type": "Organization",
        "name": "Nexito Technology",
        "url": Astro2.site?.toString()
      },
      "offers": {
        "@type": "Offer",
        "price": service.price || "Consultar",
        "priceCurrency": "EUR"
      }
    }))
  };
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="relative py-24 overflow-hidden"> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Service", "data": servicesSchema })} <!-- Fondo con gradiente y efecto de grid --> <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-5"></div> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <!-- Header mejorado --> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
Nuestras Soluciones
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Tecnología que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Impulsa</span> tu Negocio
</h2> <p class="text-xl text-gray-600">
Soluciones personalizadas que transforman la manera en que trabajas
</p> </div> <!-- Grid de servicios mejorado --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group relative"> <!-- Efecto de blur en hover --> <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-200"></div> <div class="relative h-full bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100"> <!-- Header del servicio --> <div class="flex items-center mb-6"> <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"> ${service.icon} </div> <h3 class="text-2xl font-bold ml-4 text-gray-900">${service.title}</h3> </div> <p class="text-gray-600 mb-6">${service.description}</p> <!-- Lista de características --> <ul class="space-y-3 mb-8"> ${service.items.map((item) => renderTemplate`<li class="flex items-start"> <svg class="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-600">${item}</span> </li>`)} </ul> <!-- CTAs mejorados --> <div class="flex flex-col gap-3 mt-auto pt-6 border-t border-gray-100"> <a${addAttribute(`/servicios/${service.id}`, "href")} class="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-between group/link">
Ver más detalles
<svg class="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="https://cal.com/nexito/30min" target="_blank" rel="nofollow noreferrer" class="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"> ${service.cta.text} <span class="text-blue-200 text-sm">${service.cta.subtext}</span> </a> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/ServicesSection.astro", void 0);

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await getCollection("testimonials");
  const sortedTestimonials = testimonials.sort(
    (a, b) => a.data.order - b.data.order
  );
  const testimonialSchema = {
    "@type": "Organization",
    "name": "Nexito Technology",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": sortedTestimonials.length,
      "reviewCount": sortedTestimonials.length
    },
    "review": sortedTestimonials.map((testimonial) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.data.name,
        "jobTitle": testimonial.data.role,
        "worksFor": {
          "@type": "Organization",
          "name": testimonial.data.company
        }
      },
      "reviewBody": testimonial.data.quote,
      "datePublished": (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      "itemReviewed": {
        "@type": "Organization",
        "name": "Nexito Technology"
      }
    }))
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-14 md:py-14 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Organization", "data": testimonialSchema })} <!-- Fondo con patrón --> <div class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <!-- Header mejorado --> <div class="text-center max-w-3xl mx-auto mb-20"> <span class="text-blue-800 font-medium bg-blue-200 inline-block mb-4 px-4 py-1.5 rounded-full text-sm">
Testimonios
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Lo que Dicen Nuestros <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Clientes</span> </h2> <p class="text-xl text-gray-600">
Descubre cómo hemos ayudado a otras empresas a alcanzar sus objetivos
</p> </div> <!-- Carrusel mejorado --> <div class="testimonials-carousel relative"> <div class="overflow-hidden"> <div id="testimonials-container" class="flex transition-transform duration-500 ease-in-out"> ${sortedTestimonials.map((testimonial) => renderTemplate`<div class="w-full lg:w-1/3 flex-shrink-0 px-4 transition-opacity duration-500"> <div class="bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100"> <!-- Quote icon --> <div class="mb-6"> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path> </svg> </div> </div> <blockquote class="mb-8"> <p class="text-gray-700 text-lg leading-relaxed">${testimonial.data.quote}</p> </blockquote> <div class="flex justify-between items-center"> <div class="flex items-center"> <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold"> ${testimonial.data.name[0]} </div> <div class="ml-4"> <p class="font-bold text-gray-900">${testimonial.data.name}</p> <p class="text-gray-600">${testimonial.data.role}</p> <p class="text-sm text-gray-500">${testimonial.data.company}</p> </div> </div> ${testimonial.data.metrics && renderTemplate`<div class="flex flex-col gap-2"> ${testimonial.data.metrics.map((metric) => renderTemplate`<div class="text-right"> <div class="text-xl font-bold text-blue-600">${metric.value}</div> <div class="text-sm text-gray-500">${metric.label}</div> </div>`)} </div>`} </div> </div> </div>`)} </div> </div> <!-- Controles del carrusel mejorados --> <button id="prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10" aria-label="Anterior"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10" aria-label="Siguiente"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> </section> ${renderScript($$result, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/Testimonials.astro", void 0);

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-white via-blue-50 to-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
Impulsa el futuro de tu empresa hoy
</h2> <p class="text-xl text-gray-700 mb-8 leading-relaxed">
Comienza tu viaje hacia la transformación digital con una consulta personalizada gratuita. Descubre cómo podemos adaptar nuestras soluciones a tus necesidades específicas.
</p> <div class="space-y-4 md:space-y-6"> <a href="https://cal.com/nexito/30min" target="_blank" rel="nofollow noreferrer" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 group">
Agenda una consulta gratuita
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> <p class="text-sm text-gray-600 mt-4">
✓ Sin compromiso
<span class="mx-2">•</span>
✓ 30 minutos
<span class="mx-2">•</span>
✓ Personalizado a tu negocio
</p> </div> <div class="mt-12 p-6 bg-white rounded-2xl shadow-lg"> <h3 class="text-lg font-semibold text-gray-800 mb-4">
¿Qué incluye la consulta gratuita?
</h3> <div class="grid md:grid-cols-3 gap-6 text-left"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg> </div> <div class="ml-4"> <p class="text-gray-700">Evaluación de necesidades específicas</p> </div> </div> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-4"> <p class="text-gray-700">Plan de acción personalizado</p> </div> </div> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div class="ml-4"> <p class="text-gray-700">Propuesta de solución a medida</p> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/CTASection.astro", void 0);

const $$ProcessSection = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "An\xE1lisis Inicial",
      description: "Evaluamos tus necesidades y procesos actuales para identificar oportunidades de mejora."
    },
    {
      number: "02",
      title: "Estrategia Personalizada",
      description: "Dise\xF1amos una soluci\xF3n a medida que se adapte a tus objetivos espec\xEDficos."
    },
    {
      number: "03",
      title: "Implementaci\xF3n",
      description: "Desplegamos las soluciones de forma \xE1gil y con m\xEDnimo impacto en tu operativa."
    },
    {
      number: "04",
      title: "Seguimiento y Optimizaci\xF3n",
      description: "Monitorizamos los resultados y optimizamos continuamente para maximizar el ROI."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden"> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
Nuestro Proceso
</h2> <p class="text-xl text-blue-100 max-w-3xl mx-auto">
Metodología probada para garantizar el éxito de tu transformación digital
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${steps.map((step) => renderTemplate`<div class="group relative"> <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-25 blur transition duration-200 group-hover:opacity-100"></div> <div class="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10"> <div class="text-5xl font-bold text-blue-300 mb-4">${step.number}</div> <h3 class="text-xl font-bold text-white mb-4">${step.title}</h3> <p class="text-blue-100">${step.description}</p> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/ProcessSection.astro", void 0);

export { $$ServicesSection as $, $$ProcessSection as a, $$Testimonials as b, $$CTASection as c };
