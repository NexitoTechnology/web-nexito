/* empty css                                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CJ6p3tUL.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../../chunks/Layout_DSxI79ZF.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_C1eck_H9.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Consultoria = createComponent(($$result, $$props, $$slots) => {
  const consultoriaData = {
    title: "Consultor\xEDa Tecnol\xF3gica | Nexito Technology",
    description: "Optimiza tu negocio con nuestros servicios de consultor\xEDa tecnol\xF3gica. Mejora la eficiencia, reduce costos y adopta las mejores pr\xE1cticas tecnol\xF3gicas.",
    heroTitle: "Consultor\xEDa Tecnol\xF3gica",
    heroSubtitle: "Optimiza tu Negocio con Soluciones Tecnol\xF3gicas",
    features: [
      {
        title: "Estrategia Digital",
        description: "Desarrollo de estrategias digitales personalizadas",
        icon: "\u{1F310}"
      },
      {
        title: "Transformaci\xF3n Digital",
        description: "Transformaci\xF3n de procesos y operaciones",
        icon: "\u{1F504}"
      },
      {
        title: "Gesti\xF3n de Proyectos",
        description: "Planificaci\xF3n y ejecuci\xF3n de proyectos tecnol\xF3gicos",
        icon: "\u{1F4CA}"
      },
      {
        title: "Ciberseguridad",
        description: "Protecci\xF3n y seguridad de la informaci\xF3n",
        icon: "\u{1F512}"
      }
    ],
    benefits: [
      "Mejora de la eficiencia operativa",
      "Reducci\xF3n de costos",
      "Adopci\xF3n de mejores pr\xE1cticas",
      "Innovaci\xF3n continua",
      "Ventaja competitiva"
    ],
    useCases: [
      {
        title: "Finanzas",
        description: "Optimizaci\xF3n de procesos financieros y gesti\xF3n de riesgos",
        image: "/images/finance-consulting.jpg"
      },
      {
        title: "Salud",
        description: "Implementaci\xF3n de sistemas de gesti\xF3n de pacientes y telemedicina",
        image: "/images/health-consulting.jpg"
      },
      {
        title: "Retail",
        description: "Mejora de la experiencia del cliente y gesti\xF3n de inventario",
        image: "/images/retail-consulting.jpg"
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
        description: "Implementaci\xF3n de soluciones tecnol\xF3gicas"
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
        question: "\xBFQu\xE9 es la consultor\xEDa tecnol\xF3gica?",
        answer: "La consultor\xEDa tecnol\xF3gica es un servicio que ayuda a las empresas a optimizar sus procesos y operaciones mediante el uso de tecnolog\xEDas avanzadas."
      },
      {
        question: "\xBFCu\xE1nto tiempo se tarda en implementar una soluci\xF3n tecnol\xF3gica?",
        answer: "La implementaci\xF3n puede variar de 2 a 12 semanas, dependiendo de la complejidad de los procesos a optimizar."
      },
      {
        question: "\xBFQu\xE9 procesos se pueden optimizar?",
        answer: "Cualquier proceso que involucre tecnolog\xEDa y datos es candidato para la consultor\xEDa tecnol\xF3gica."
      },
      {
        question: "\xBFSe necesita conocimientos t\xE9cnicos?",
        answer: "No necesariamente. Nuestras soluciones son accesibles y proporcionamos formaci\xF3n completa a tu equipo."
      }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    "name": consultoriaData.heroTitle,
    "description": consultoriaData.description,
    "provider": {
      "@type": "Organization",
      "name": "Nexito Technology"
    },
    "serviceType": "Technology Consulting",
    "areaServed": "ES"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": consultoriaData.title, "description": consultoriaData.description, "data-astro-cid-usrowph5": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Service", "data": serviceSchema, "data-astro-cid-usrowph5": true })}  ${maybeRenderHead()}<section class="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" data-astro-cid-usrowph5> <!-- Patrones de fondo --> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-usrowph5></div> <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" data-astro-cid-usrowph5></div> <!-- Elementos decorativos animados --> <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-usrowph5></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-usrowph5></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative" data-astro-cid-usrowph5> <div class="text-center max-w-4xl mx-auto" data-astro-cid-usrowph5> <!-- Encabezado principal --> <div class="inline-block mb-4" data-astro-cid-usrowph5> <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200 text-sm font-medium backdrop-blur-sm" data-astro-cid-usrowph5>
🚀 Transforma digitalmente tu empresa
</span> </div> <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight" data-astro-cid-usrowph5> ${consultoriaData.heroTitle} <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 mt-2" data-astro-cid-usrowph5> ${consultoriaData.heroSubtitle} </span> </h1> <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto" data-astro-cid-usrowph5>
Potencia tu negocio con estrategias innovadoras y soluciones tecnológicas de vanguardia
</p> <!-- CTAs mejorados --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-astro-cid-usrowph5> <a href="#calendar-booking" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-blue-800 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200" data-astro-cid-usrowph5> <span class="relative flex items-center" data-astro-cid-usrowph5> <span data-astro-cid-usrowph5>Agenda tu Consultoría Gratuita</span> <span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm font-normal" data-astro-cid-usrowph5>15min</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-usrowph5></path> </svg> </span> </a> <a href="#benefits" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-100 border-2 border-blue-400/30 rounded-xl hover:bg-blue-800/30 backdrop-blur-sm transition-colors" data-astro-cid-usrowph5>
Ver Beneficios
</a> </div> <!-- Elementos de confianza --> <div class="pt-8 border-t border-blue-600/30" data-astro-cid-usrowph5> <p class="text-blue-200 text-sm mb-4" data-astro-cid-usrowph5>
Empresas que confían en nosotros
</p> <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70" data-astro-cid-usrowph5> <img src="/images/client-logo-1.svg" alt="TechFlow" class="h-8" data-astro-cid-usrowph5> <img src="/images/client-logo-2.svg" alt="DataSphere" class="h-8" data-astro-cid-usrowph5> <img src="/images/client-logo-3.svg" alt="InnovateIQ" class="h-8" data-astro-cid-usrowph5> </div> </div> </div> </div> <!-- Indicador de scroll --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-usrowph5> <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-usrowph5></path> </svg> </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section class="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" data-astro-cid-usrowph5> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-usrowph5></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative" data-astro-cid-usrowph5> <div class="text-center mb-16" data-astro-cid-usrowph5> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4" data-astro-cid-usrowph5>
Funcionalidades Avanzadas
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>
Servicios <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" data-astro-cid-usrowph5>Especializados</span> de Consultoría
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-usrowph5>
Descubre las funcionalidades que harán tu negocio más eficiente
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-usrowph5> ${consultoriaData.features.map((feature) => renderTemplate`<div class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200" data-astro-cid-usrowph5> <div class="mb-6 transform group-hover:scale-110 transition-transform duration-300" data-astro-cid-usrowph5> <span class="text-5xl" data-astro-cid-usrowph5>${feature.icon}</span> </div> <h3 class="text-xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>${feature.title}</h3> <p class="text-gray-600 group-hover:text-gray-700 transition-colors" data-astro-cid-usrowph5> ${feature.description} </p> </div>`)} </div> </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section class="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50" data-astro-cid-usrowph5> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="text-center mb-16" data-astro-cid-usrowph5> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4" data-astro-cid-usrowph5>
Casos de Éxito
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>
Consultoría en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" data-astro-cid-usrowph5>Acción</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-usrowph5>
Explora cómo nuestras soluciones transforman diferentes sectores
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-usrowph5> ${consultoriaData.useCases.map((useCase) => renderTemplate`<div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200" data-astro-cid-usrowph5> <div class="aspect-video overflow-hidden" data-astro-cid-usrowph5> <img${addAttribute(useCase.image, "src")}${addAttribute(useCase.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" data-astro-cid-usrowph5> </div> <div class="p-8" data-astro-cid-usrowph5> <div class="flex items-center gap-4 mb-4" data-astro-cid-usrowph5> <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center" data-astro-cid-usrowph5> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-usrowph5></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-usrowph5>${useCase.title}</h3> </div> <p class="text-gray-600 group-hover:text-gray-700 transition-colors" data-astro-cid-usrowph5> ${useCase.description} </p> <div class="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700" data-astro-cid-usrowph5> <span data-astro-cid-usrowph5>Ver caso completo</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-usrowph5></path> </svg> </div> </div> </div>`)} </div> <!-- CTA adicional --> <div class="mt-12 text-center" data-astro-cid-usrowph5> <a href="#calendar-booking" class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors group" data-astro-cid-usrowph5> <span data-astro-cid-usrowph5>Explora más casos de éxito</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-usrowph5></path> </svg> </a> </div> </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section id="benefits" class="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50" data-astro-cid-usrowph5> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="text-center mb-16" data-astro-cid-usrowph5> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4" data-astro-cid-usrowph5>
Consultoría Tecnológica
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>
Beneficios que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" data-astro-cid-usrowph5>transformarán</span> tu empresa
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-usrowph5>
Descubre cómo la consultoría tecnológica puede revolucionar tu negocio y dar una ventaja competitiva a tu empresa
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-astro-cid-usrowph5> ${consultoriaData.benefits.map((benefit) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-blue-200" data-astro-cid-usrowph5> <div class="flex items-start space-x-4" data-astro-cid-usrowph5> <div class="flex-shrink-0" data-astro-cid-usrowph5> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors" data-astro-cid-usrowph5> <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-usrowph5></path> </svg> </div> </div> <div data-astro-cid-usrowph5> <p class="text-gray-700" data-astro-cid-usrowph5>${benefit}</p> </div> </div> </div>`)} </div> <!-- CTA Section --> <div class="text-center bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl" data-astro-cid-usrowph5> <h3 class="text-2xl md:text-3xl font-bold text-white mb-4" data-astro-cid-usrowph5>
¿Listo para mejorar tu empresa?
</h3> <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto" data-astro-cid-usrowph5>
Agenda una consultoría gratuita de 15 minutos y descubre cómo podemos
          ayudarte a optimizar tu negocio
</p> <!-- CTA Button --> <a href="#calendar-booking" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-800 bg-white rounded-xl shadow-lg hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-200 group" data-astro-cid-usrowph5> <span data-astro-cid-usrowph5>Reserva tu Consultoría Gratis</span> <span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm" data-astro-cid-usrowph5>15min</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-usrowph5></path> </svg> </a> <!-- Trust Elements --> <div class="mt-8 pt-8 border-t border-white/20" data-astro-cid-usrowph5> <div class="flex flex-wrap justify-center items-center gap-4 text-sm text-white" data-astro-cid-usrowph5> <span class="flex items-center" data-astro-cid-usrowph5> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-usrowph5></path> </svg>
Sin compromiso
</span> <span class="flex items-center" data-astro-cid-usrowph5> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-usrowph5></path> </svg>
100% Confidencial
</span> <span class="flex items-center" data-astro-cid-usrowph5> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-usrowph5></path> </svg>
Gratis
</span> </div> </div> </div> </div> </section>  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section class="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white" data-astro-cid-usrowph5> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="text-center mb-16" data-astro-cid-usrowph5> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4" data-astro-cid-usrowph5>
Implementación de Consultoría
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>
Proceso de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" data-astro-cid-usrowph5>Implementación</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-usrowph5>
Metodología probada y optimizada para garantizar el éxito de tu proyecto
</p> </div> <div class="relative" data-astro-cid-usrowph5> <div class="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-1/2 hidden md:block" data-astro-cid-usrowph5></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-8" data-astro-cid-usrowph5> ${consultoriaData.process.map((step) => renderTemplate`<div class="relative group" data-astro-cid-usrowph5> <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-blue-200 mx-auto z-10 relative shadow-lg group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300" data-astro-cid-usrowph5> ${step.step} </div> <div class="text-center mt-6 bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow" data-astro-cid-usrowph5> <h3 class="font-bold text-lg text-gray-900 mb-3" data-astro-cid-usrowph5>${step.title}</h3> <p class="text-gray-600" data-astro-cid-usrowph5>${step.description}</p> </div> </div>`)} </div> </div> </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section class="m-12 bg-gradient-to-b from-white to-gray-50" data-astro-cid-usrowph5> <div class="max-w-4xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="text-center mb-16" data-astro-cid-usrowph5> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4" data-astro-cid-usrowph5>
Resolvemos tus dudas
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-usrowph5>
Preguntas Frecuentes
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-usrowph5>
Todo lo que necesitas saber sobre consultoría tecnológica
</p> </div> <div class="space-y-4" data-astro-cid-usrowph5> ${consultoriaData.faq.map((item) => renderTemplate`<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100" data-astro-cid-usrowph5> <div class="p-6" data-astro-cid-usrowph5> <div class="flex items-start gap-4" data-astro-cid-usrowph5> <div class="flex-shrink-0" data-astro-cid-usrowph5> <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center" data-astro-cid-usrowph5> <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-usrowph5></path> </svg> </div> </div> <div data-astro-cid-usrowph5> <h3 class="text-lg font-semibold text-gray-900 mb-2" data-astro-cid-usrowph5>${item.question}</h3> <p class="text-gray-600" data-astro-cid-usrowph5>${item.answer}</p> </div> </div> </div> </div>`)} </div> <!-- FAQ CTA --> <div class="mt-12 text-center" data-astro-cid-usrowph5> <p class="text-gray-600 mb-6" data-astro-cid-usrowph5>
¿Tienes más preguntas? Estamos aquí para ayudarte
</p> <a href="#calendar-booking" class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 group" data-astro-cid-usrowph5> <span data-astro-cid-usrowph5>Agenda una llamada gratuita</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-usrowph5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-usrowph5></path> </svg> </a> </div> </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  <section id="contact" class="py-12 bg-gradient-to-br from-blue-800 to-blue-900 relative overflow-hidden" data-astro-cid-usrowph5> <!-- Elementos decorativos de fondo --> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-usrowph5></div> <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-usrowph5></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-usrowph5></div> <div class="relative" data-astro-cid-usrowph5> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-usrowph5": true })} </div> </section> <div class="w-full max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-usrowph5> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-usrowph5></div> </div>  ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/servicios/consultoria.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/servicios/consultoria.astro";
const $$url = "/servicios/consultoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Consultoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
