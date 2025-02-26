import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_BHlgMJLG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_poVgQfmX.mjs';
import { $ as $$JsonLD } from '../chunks/ClientRouter_a6kLtKrH.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const pageData = {
    title: "Transformaci\xF3n Digital | Nexito Technology",
    description: "Somos l\xEDderes en transformaci\xF3n digital empresarial. Especialistas en automatizaci\xF3n inteligente, IA, SAP y soluciones tecnol\xF3gicas avanzadas con m\xE1s de 50 proyectos exitosos y 98% de satisfacci\xF3n del cliente.",
    hero: {
      title: "Transformamos Empresas mediante Tecnolog\xEDa Avanzada",
      subtitle: "Tu Socio en Transformaci\xF3n Digital",
      description: "En Nexito Technology fusionamos innovaci\xF3n tecnol\xF3gica con experiencia empresarial para crear soluciones que impulsan el crecimiento y la eficiencia operativa."
    },
    stats: [
      {
        number: "98%",
        label: "Satisfacci\xF3n cliente",
        description: "Basado en encuestas post-proyecto",
        icon: "\u2B50"
      },
      {
        number: "50+",
        label: "Proyectos exitosos",
        description: "En m\xFAltiples sectores",
        icon: "\u{1F680}"
      },
      {
        number: "30%",
        label: "Mejora eficiencia",
        description: "Promedio en nuestros clientes",
        icon: "\u{1F4C8}"
      },
      {
        number: "24/7",
        label: "Soporte t\xE9cnico",
        description: "Respuesta garantizada",
        icon: "\u{1F6E0}"
      }
    ],
    mission: {
      title: "Nuestra Misi\xF3n",
      mainText: "Democratizar el acceso a tecnolog\xEDas avanzadas que impulsen la transformaci\xF3n digital empresarial",
      description: [
        "Nos dedicamos a hacer que la automatizaci\xF3n inteligente y la IA sean accesibles para empresas de todos los tama\xF1os, permiti\xE9ndoles competir y prosperar en la era digital.",
        "Como socio estrat\xE9gico, nos comprometemos con el \xE9xito de nuestros clientes, desarrollando soluciones que generan impacto real y ROI medible.",
        "Nuestra visi\xF3n es liderar la revoluci\xF3n digital en Espa\xF1a, estableciendo nuevos est\xE1ndares de excelencia en consultor\xEDa tecnol\xF3gica."
      ]
    },
    values: [
      {
        title: "Innovaci\xF3n Continua",
        description: "Investigamos y aplicamos constantemente las \xFAltimas tecnolog\xEDas para ofrecer soluciones de vanguardia que mantengan a nuestros clientes por delante de la competencia.",
        icon: "\u{1F4A1}"
      },
      {
        title: "Excelencia T\xE9cnica",
        description: "Nuestro equipo de expertos certificados garantiza soluciones robustas, escalables y de alta calidad, respaldadas por metodolog\xEDas probadas y mejores pr\xE1cticas.",
        icon: "\u{1F3C6}"
      },
      {
        title: "Enfoque Personalizado",
        description: "Desarrollamos soluciones \xFAnicas adaptadas a los objetivos espec\xEDficos de cada cliente, asegurando resultados \xF3ptimos y m\xE1ximo retorno de inversi\xF3n.",
        icon: "\u{1F3AF}"
      },
      {
        title: "Transparencia Total",
        description: "Mantenemos una comunicaci\xF3n clara y directa en cada fase del proyecto, con reportes regulares de progreso y m\xE9tricas de rendimiento accesibles.",
        icon: "\u{1F91D}"
      }
    ],
    expertise: {
      title: "Nuestra Especializaci\xF3n",
      areas: [
        {
          title: "Automatizaci\xF3n Inteligente",
          description: "Optimizaci\xF3n de procesos empresariales mediante RPA e IA",
          icon: "\u{1F916}"
        },
        {
          title: "Consultor\xEDa SAP",
          description: "Implementaci\xF3n y optimizaci\xF3n de soluciones SAP",
          icon: "\u{1F4BB}"
        },
        {
          title: "Business Intelligence",
          description: "An\xE1lisis avanzado de datos y visualizaci\xF3n",
          icon: "\u{1F4CA}"
        },
        {
          title: "Desarrollo IA",
          description: "Soluciones personalizadas de inteligencia artificial",
          icon: "\u{1F9E0}"
        }
      ]
    },
    team: {
      title: "Nuestro Equipo",
      description: "Un equipo multidisciplinar de expertos certificados en tecnolog\xEDas avanzadas",
      highlights: [
        "Consultores certificados SAP",
        "Especialistas en IA y Machine Learning",
        "Expertos en automatizaci\xF3n de procesos",
        "Arquitectos de soluciones empresariales"
      ]
    },
    cta: {
      title: "Construyamos Juntos el Futuro Digital",
      description: "Descubre c\xF3mo nuestras soluciones pueden transformar tu negocio y prepararlo para los desaf\xEDos del ma\xF1ana.",
      buttonText: "Agenda una Consultor\xEDa Gratuita",
      buttonLink: "https://nexito.tech/consultoria-gratuita/"
    }
  };
  const aboutSchema = {
    "@type": "Organization",
    name: "Nexito Technology",
    description: pageData.description,
    foundingDate: "2023",
    areaServed: "ES",
    knowsAbout: [
      "Automatizaci\xF3n de Procesos",
      "Inteligencia Artificial",
      "Consultor\xEDa SAP",
      "Business Intelligence",
      "Transformaci\xF3n Digital"
    ],
    slogan: "Transformando el futuro empresarial",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: "10",
      maxValue: "50"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageData.title, "description": pageData.description, "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Organization", "data": aboutSchema, "data-astro-cid-noeej2nj": true })}  ${maybeRenderHead()}<section class="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" data-astro-cid-noeej2nj> <!-- Patrones de fondo --> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-noeej2nj></div> <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" data-astro-cid-noeej2nj></div> <!-- Elementos decorativos --> <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-noeej2nj></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-noeej2nj></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative" data-astro-cid-noeej2nj> <div class="text-center max-w-3xl mx-auto" data-astro-cid-noeej2nj> <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200 text-sm font-medium backdrop-blur-sm mb-6" data-astro-cid-noeej2nj>
🚀 Líderes en Transformación Digital
</span> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6" data-astro-cid-noeej2nj> ${pageData.hero.title} <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300 mt-2" data-astro-cid-noeej2nj> ${pageData.hero.subtitle} </span> </h1> <p class="text-xl text-blue-100 mb-8" data-astro-cid-noeej2nj> ${pageData.hero.description} </p> </div> </div> </section>  <section class="py-16 bg-white relative z-10 -mt-8" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-noeej2nj> <div class="bg-white rounded-xl shadow-xl p-8" data-astro-cid-noeej2nj> <div class="grid grid-cols-2 md:grid-cols-4 gap-8" data-astro-cid-noeej2nj> ${pageData.stats.map((stat) => renderTemplate`<div class="text-center group" data-astro-cid-noeej2nj> <div class="text-4xl mb-2" data-astro-cid-noeej2nj>${stat.icon}</div> <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform" data-astro-cid-noeej2nj> ${stat.number} </div> <div class="text-gray-900 font-medium mb-1" data-astro-cid-noeej2nj>${stat.label}</div> <div class="text-sm text-gray-600" data-astro-cid-noeej2nj>${stat.description}</div> </div>`)} </div> </div> </div> </section>  <section class="py-20 bg-gradient-to-b from-white to-gray-50" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-noeej2nj> <div class="max-w-3xl mx-auto text-center" data-astro-cid-noeej2nj> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8" data-astro-cid-noeej2nj> ${pageData.mission.title} </h2> <p class="text-xl font-medium text-blue-600 mb-8" data-astro-cid-noeej2nj> ${pageData.mission.mainText} </p> <div class="space-y-6" data-astro-cid-noeej2nj> ${pageData.mission.description.map((paragraph) => renderTemplate`<p class="text-lg text-gray-600" data-astro-cid-noeej2nj>${paragraph}</p>`)} </div> </div> </div> </section>  <section class="py-20 bg-white" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-noeej2nj> <div class="text-center mb-16" data-astro-cid-noeej2nj> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-noeej2nj> ${pageData.expertise.title} </h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-noeej2nj> ${pageData.expertise.areas.map((area) => renderTemplate`<div class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group" data-astro-cid-noeej2nj> <div class="text-4xl mb-4 group-hover:scale-110 transition-transform" data-astro-cid-noeej2nj> ${area.icon} </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-noeej2nj> ${area.title} </h3> <p class="text-gray-600" data-astro-cid-noeej2nj>${area.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-b from-gray-50 to-white" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-noeej2nj> <div class="text-center mb-16" data-astro-cid-noeej2nj> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-noeej2nj>
Nuestros Valores
</h2> </div> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-noeej2nj> ${pageData.values.map((value) => renderTemplate`<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group border border-gray-100" data-astro-cid-noeej2nj> <div class="flex items-start gap-4" data-astro-cid-noeej2nj> <div class="flex-shrink-0" data-astro-cid-noeej2nj> <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform" data-astro-cid-noeej2nj> ${value.icon} </div> </div> <div data-astro-cid-noeej2nj> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-noeej2nj> ${value.title} </h3> <p class="text-gray-600" data-astro-cid-noeej2nj>${value.description}</p> </div> </div> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-b from-white to-gray-50" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-noeej2nj> <div class="text-center mb-16" data-astro-cid-noeej2nj> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-noeej2nj> ${pageData.team.title} </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-noeej2nj> ${pageData.team.description} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-noeej2nj> ${pageData.team.highlights.map((highlight) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center" data-astro-cid-noeej2nj> <p class="text-gray-900 font-medium" data-astro-cid-noeej2nj>${highlight}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-gradient-to-r from-blue-800 to-blue-900" data-astro-cid-noeej2nj> <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center" data-astro-cid-noeej2nj> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-astro-cid-noeej2nj> ${pageData.cta.title} </h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-astro-cid-noeej2nj> ${pageData.cta.description} </p> <a${addAttribute(pageData.cta.buttonLink, "href")} onclick="window.dataLayer.push({
          'event': 'schedule_call_nosotros',
          'eventCategory': 'engagement',
          'eventAction': 'click',
          'eventLabel': 'free_call_30min'
        })" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-800 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200" data-astro-cid-noeej2nj> <span data-astro-cid-noeej2nj>${pageData.cta.buttonText}</span> <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-noeej2nj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-noeej2nj></path> </svg> </a> <!-- Trust Elements --> <div class="mt-8 pt-8 border-t border-white/20" data-astro-cid-noeej2nj> <div class="flex flex-wrap justify-center items-center gap-4 text-sm text-white" data-astro-cid-noeej2nj> <span class="flex items-center" data-astro-cid-noeej2nj> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-noeej2nj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-noeej2nj></path> </svg>
Sin compromiso
</span> <span class="flex items-center" data-astro-cid-noeej2nj> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-noeej2nj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-noeej2nj></path> </svg>
100% Confidencial
</span> <span class="flex items-center" data-astro-cid-noeej2nj> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-noeej2nj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-noeej2nj></path> </svg>
Consultoría Inicial Gratuita
</span> </div> </div> </div> </section>  ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/nosotros.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
