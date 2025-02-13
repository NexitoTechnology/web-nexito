import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BgiOjcVG.mjs';
import { $ as $$ServicesSection, a as $$ProcessSection, b as $$Testimonials, c as $$CTASection } from '../chunks/ProcessSection_BEBxXfJy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Servicios y Soluciones Tecnol\xF3gicas | Nexito Tech";
  const pageDescription = "Descubre nuestros servicios de automatizaci\xF3n inteligente, IA y consultor\xEDa tecnol\xF3gica. Soluciones personalizadas y escalables para optimizar tu negocio.";
  const schemaData = {
    "@type": "ServicePage",
    "name": pageTitle,
    "description": pageDescription,
    "provider": {
      "@type": "Organization",
      "name": "Nexito Technology"
    }
  };
  const heroContent = {
    title: "Nuestros Servicios",
    subtitle: "Soluciones Tecnol\xF3gicas que Transforman tu Negocio",
    description: "Ofrecemos un conjunto completo de servicios tecnol\xF3gicos dise\xF1ados para impulsar la eficiencia y el crecimiento de tu empresa."
  };
  const benefitsContent = [
    {
      title: "Experiencia Comprobada",
      description: "M\xE1s de 5 a\xF1os transformando empresas con tecnolog\xEDa de vanguardia"
    },
    {
      title: "Soluciones Personalizadas",
      description: "Adaptamos cada servicio a tus necesidades espec\xEDficas"
    },
    {
      title: "Soporte Continuo",
      description: "Acompa\xF1amiento en todo el proceso de implementaci\xF3n"
    },
    {
      title: "Tecnolog\xEDa de Punta",
      description: "Utilizamos las \xFAltimas herramientas y metodolog\xEDas del mercado"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "type": "service", "schemaData": schemaData }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-20 lg:py-32 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <div class="text-center max-w-3xl mx-auto"> <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
Servicios Profesionales
</span> <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> ${heroContent.title} <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> ${heroContent.subtitle} </span> </h1> <p class="text-xl text-gray-600 mb-8"> ${heroContent.description} </p> <div class="flex flex-wrap justify-center gap-4"> <a href="https://cal.com/nexito/30min" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200">
Consulta Gratuita
</a> <a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200">
Ver Servicios
</a> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefitsContent.map((benefit) => renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <h3 class="text-xl font-semibold text-gray-900 mb-2">${benefit.title}</h3> <p class="text-gray-600">${benefit.description}</p> </div>`)} </div> </div> </section>  ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})}  ${renderComponent($$result2, "ProcessSection", $$ProcessSection, {})}  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}  <section class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900">Preguntas Frecuentes</h2> <p class="text-xl text-gray-600 mt-4">Todo lo que necesitas saber sobre nuestros servicios</p> </div> <div class="max-w-3xl mx-auto space-y-6"> ${[
    {
      q: "\xBFC\xF3mo empiezo con vuestros servicios?",
      a: "El proceso comienza con una consultor\xEDa gratuita donde evaluamos tus necesidades espec\xEDficas y recomendamos las mejores soluciones para tu caso."
    },
    {
      q: "\xBFQu\xE9 soporte ofrec\xE9is despu\xE9s de la implementaci\xF3n?",
      a: "Proporcionamos soporte continuo, mantenimiento y actualizaciones para asegurar que tu soluci\xF3n funcione \xF3ptimamente."
    },
    {
      q: "\xBFCu\xE1nto tiempo toma implementar una soluci\xF3n?",
      a: "Los tiempos var\xEDan seg\xFAn el proyecto, pero t\xEDpicamente desde 2-4 semanas para soluciones b\xE1sicas hasta 2-3 meses para implementaciones m\xE1s complejas."
    }
  ].map((faq) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-sm"> <h3 class="text-lg font-semibold text-gray-900 mb-2">${faq.q}</h3> <p class="text-gray-600">${faq.a}</p> </div>`)} </div> </div> </section>  ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/index.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/servicios/index.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
