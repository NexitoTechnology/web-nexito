/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as addAttribute, d as createAstro, b as renderScript } from '../chunks/astro/server_DElV5CCb.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../chunks/Layout_D7fsvetn.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Dxaih0Ih.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const heroData = {
    title: "Automatizaci\xF3n Inteligente y An\xE1lisis de Datos",
    description: "Optimiza procesos y toma mejores decisiones con automatizaci\xF3n RPA y dashboards en Power BI",
    stats: [
      {
        value: "+500",
        label: "Procesos Automatizados"
      },
      {
        value: "+1000",
        label: "Dashboards Creados"
      },
      {
        value: "+50",
        label: "Empresas Conf\xEDan en Nosotros"
      }
    ],
    trustedCompanies: ["Empresa1", "Empresa2", "Empresa3", "Empresa4", "Empresa5", "Empresa6"]
  };
  const heroSchema = {
    "@type": "WebPageElement",
    "name": heroData.title,
    "description": heroData.description,
    "mainEntity": {
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "Nexito Technology"
      },
      "offers": {
        "@type": "Offer",
        "description": "Consultor\xEDa Gratuita de 15 minutos"
      }
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[calc(100vh-4rem)] flex items-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" data-astro-cid-nlow4r3u> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "WebPage", "data": heroSchema, "data-astro-cid-nlow4r3u": true })} <!-- Patrones de fondo --> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-nlow4r3u></div> <!-- Elementos decorativos animados --> <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-nlow4r3u></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-nlow4r3u></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-nlow4r3u> <!-- Badge superior --> <div class="inline-block mb-8 animate-fade-in" data-astro-cid-nlow4r3u> <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200 text-sm font-medium backdrop-blur-sm" data-astro-cid-nlow4r3u>
🚀 Transforma tu empresa con tecnología inteligente
</span> </div> <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in [text-wrap:balance]" data-astro-cid-nlow4r3u> ${heroData.title} <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white mt-2" data-astro-cid-nlow4r3u>
Para Tu Empresa
</span> </h1> <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in [text-wrap:balance]" data-astro-cid-nlow4r3u> ${heroData.description} </p> <!-- Estadísticas --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" data-astro-cid-nlow4r3u> ${heroData.stats.map((stat) => renderTemplate`<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10" data-astro-cid-nlow4r3u> <div class="text-3xl font-bold text-white mb-2" data-astro-cid-nlow4r3u>${stat.value}</div> <div class="text-blue-200" data-astro-cid-nlow4r3u>${stat.label}</div> </div>`)} </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" data-astro-cid-nlow4r3u> <a href="#calendar-booking" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-blue-900 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200" data-astro-cid-nlow4r3u> <span class="relative flex items-center" data-astro-cid-nlow4r3u> <span data-astro-cid-nlow4r3u>Agenda tu Consultoría Gratuita</span> <span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm font-normal" data-astro-cid-nlow4r3u>15min</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-nlow4r3u></path> </svg> </span> </a> <a href="#ver-demo" class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm" data-astro-cid-nlow4r3u> <span class="flex items-center" data-astro-cid-nlow4r3u> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" data-astro-cid-nlow4r3u></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-nlow4r3u></path> </svg>
Ver Demo
</span> </a> </div> <!-- Elementos de confianza --> <div class="pt-8 border-t border-white/10 animate-fade-in" data-astro-cid-nlow4r3u> <p class="text-blue-200 text-sm mb-6" data-astro-cid-nlow4r3u>
Empresas que confían en nosotros
</p> <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-12" data-astro-cid-nlow4r3u> ${heroData.trustedCompanies.map((brand) => renderTemplate`<div class="h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" data-astro-cid-nlow4r3u> <img${addAttribute(`/images/${brand}.svg`, "src")}${addAttribute(brand, "alt")} class="h-10 w-auto" data-astro-cid-nlow4r3u> </div>`)} </div> </div> <!-- Indicador de scroll --> <!--<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>--> </div></section>`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/HeroSection.astro", undefined);

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
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Service", "data": servicesSchema })} <!-- Fondo con gradiente y efecto de grid --> <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-5"></div> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <!-- Header mejorado --> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
Nuestras Soluciones
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Tecnología que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Impulsa</span> tu Negocio
</h2> <p class="text-xl text-gray-600">
Soluciones personalizadas que transforman la manera en que trabajas
</p> </div> <!-- Grid de servicios mejorado --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group relative"> <!-- Efecto de blur en hover --> <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-200"></div> <div class="relative h-full bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100"> <!-- Header del servicio --> <div class="flex items-center mb-6"> <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"> ${service.icon} </div> <h3 class="text-2xl font-bold ml-4 text-gray-900">${service.title}</h3> </div> <p class="text-gray-600 mb-6">${service.description}</p> <!-- Lista de características --> <ul class="space-y-3 mb-8"> ${service.items.map((item) => renderTemplate`<li class="flex items-start"> <svg class="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-600">${item}</span> </li>`)} </ul> <!-- CTAs mejorados --> <div class="flex flex-col gap-3 mt-auto pt-6 border-t border-gray-100"> <a${addAttribute(`/servicios/${service.id}`, "href")} class="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-between group/link">
Ver más detalles
<svg class="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="contacto" class="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"> ${service.cta.text} <span class="text-blue-200 text-sm">${service.cta.subtext}</span> </a> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/ServicesSection.astro", undefined);

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const testimonials = await getCollection("testimonials");
  const sortedTestimonials = testimonials.sort(
    (a, b) => a.data.order - b.data.order
  );
  const testimonialSchema = {
    "@type": "Organization",
    "review": sortedTestimonials.map((testimonial) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
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
      "datePublished": (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    }))
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Organization", "data": testimonialSchema })} <!-- Fondo con patrón --> <div class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <!-- Header mejorado --> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
Testimonios
</span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Lo que Dicen Nuestros <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Clientes</span> </h2> <p class="text-xl text-gray-600">
Descubre cómo hemos ayudado a otras empresas a alcanzar sus objetivos
</p> </div> <!-- Carrusel mejorado --> <div class="testimonials-carousel relative"> <div class="overflow-hidden"> <div id="testimonials-container" class="flex transition-transform duration-500"> ${sortedTestimonials.map((testimonial) => renderTemplate`<div class="w-full lg:w-1/3 flex-shrink-0 px-4"> <div class="bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100"> <!-- Quote icon --> <div class="mb-6"> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path> </svg> </div> </div> <blockquote class="mb-8"> <p class="text-gray-700 text-lg leading-relaxed">${testimonial.data.quote}</p> </blockquote> <div class="flex justify-between items-center"> <div class="flex items-center"> <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold"> ${testimonial.data.name[0]} </div> <div class="ml-4"> <h4 class="font-bold text-gray-900">${testimonial.data.name}</h4> <p class="text-gray-600">${testimonial.data.role}</p> <p class="text-sm text-gray-500">${testimonial.data.company}</p> </div> </div> ${testimonial.data.metrics && renderTemplate`<div class="flex flex-col gap-2"> ${testimonial.data.metrics.map((metric) => renderTemplate`<div class="text-right"> <div class="text-xl font-bold text-blue-600">${metric.value}</div> <div class="text-sm text-gray-500">${metric.label}</div> </div>`)} </div>`} </div> </div> </div>`)} </div> </div> <!-- Controles del carrusel mejorados --> <button id="prev" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="next" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 transition-all z-10"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> </section> ${renderScript($$result, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/Testimonials.astro", undefined);

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
¿Listo para transformar tu empresa?
</h2> <p class="text-xl text-gray-600 mb-12">
Únete a las empresas que ya están optimizando sus procesos y mejorando sus resultados con nuestras soluciones
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200">
Solicita una Demo Gratuita
</a> <a href="/casos-exito" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors">
Ver Casos de Éxito
</a> </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/CTASection.astro", undefined);

const $$BenefitsSection = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      title: "Reducci\xF3n de Costes",
      description: "Optimiza tus recursos y reduce gastos operativos hasta un 70% con nuestras soluciones de automatizaci\xF3n.",
      icon: "\u{1F4B0}"
    },
    {
      title: "Mayor Productividad",
      description: "Automatiza tareas repetitivas y libera a tu equipo para focalizarse en actividades de mayor valor.",
      icon: "\u26A1"
    },
    {
      title: "Decisiones Basadas en Datos",
      description: "Obt\xE9n insights valiosos con nuestras soluciones de Business Intelligence y anal\xEDtica avanzada.",
      icon: "\u{1F4CA}"
    },
    {
      title: "Escalabilidad",
      description: "Crece sin l\xEDmites con soluciones flexibles que se adaptan a tus necesidades.",
      icon: "\u{1F4C8}"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gradient-to-b from-gray-50 to-white relative"> <div class="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Por Qué Elegir <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Nexito Technology</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Impulsamos la transformación digital de tu empresa con soluciones tecnológicas avanzadas y resultados medibles
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefits.map((benefit) => renderTemplate`<div class="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"> <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"> ${benefit.icon} </div> <h3 class="text-xl font-bold text-gray-900 mb-4"> ${benefit.title} </h3> <p class="text-gray-600"> ${benefit.description} </p> </div>`)} </div> <div class="mt-16 text-center"> <div class="inline-flex items-center justify-center p-1 rounded-full bg-blue-100/80 backdrop-blur-sm"> <span class="px-4 py-2"> <span class="text-blue-900 font-medium">¿Quieres conocer más beneficios?</span> </span> <a href="#contact" class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
Agenda una demo
</a> </div> </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/BenefitsSection.astro", undefined);

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
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/components/ProcessSection.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Nexito Technology | Automatizaci\xF3n Inteligente y Soluciones IA";
  const pageDescription = "Transformamos empresas mediante automatizaci\xF3n de procesos e Inteligencia Artificial. Soluciones personalizadas para impulsar la eficiencia de tu negocio.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "BenefitsSection", $$BenefitsSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "ProcessSection", $$ProcessSection, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/index.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
