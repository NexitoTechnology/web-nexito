import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Chp2LETn.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7-sRKkJk.mjs';
import { $ as $$IndexServicesSection, a as $$IndexProcessSection, b as $$IndexCtaSection } from '../chunks/index_process_section_CPqsMjrb.mjs';
import { $ as $$TestimonialsSection, a as $$FaqSection } from '../chunks/testimonials_section_BFo8xpjU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const homeFAQs = {
    title: "Preguntas Frecuentes",
    description: "Resolvemos tus dudas sobre nuestros servicios de automatizaci\xF3n e Inteligencia Artificial",
    tag: "FAQ",
    faqItems: [
      {
        question: "\xBFQu\xE9 servicios ofrece Nexito Technology?",
        answer: "Ofrecemos servicios especializados en automatizaci\xF3n de procesos, desarrollo de soluciones con Inteligencia Artificial, consultor\xEDa tecnol\xF3gica, implementaci\xF3n de Business Intelligence, Power BI y servicios SAP. Nuestro objetivo es transformar y optimizar los procesos empresariales mediante tecnolog\xEDa avanzada."
      },
      {
        question: "\xBFC\xF3mo puedo saber si mi empresa necesita automatizaci\xF3n?",
        answer: "Si tu empresa dedica mucho tiempo a tareas repetitivas, maneja grandes vol\xFAmenes de datos manualmente, o busca mejorar la eficiencia operativa, probablemente te beneficiar\xEDas de la automatizaci\xF3n. Ofrecemos una consulta inicial gratuita para evaluar tus necesidades espec\xEDficas."
      },
      {
        question: "\xBFCu\xE1nto tiempo lleva implementar una soluci\xF3n de automatizaci\xF3n?",
        answer: "El tiempo de implementaci\xF3n var\xEDa seg\xFAn la complejidad del proyecto y las necesidades espec\xEDficas de tu empresa. T\xEDpicamente, los proyectos pueden llevar desde algunas semanas para automatizaciones simples hasta varios meses para transformaciones m\xE1s completas. Siempre proporcionamos un cronograma detallado al inicio del proyecto."
      },
      {
        question: "\xBFQu\xE9 soporte ofrec\xE9is despu\xE9s de la implementaci\xF3n?",
        answer: "Proporcionamos soporte t\xE9cnico continuo, mantenimiento y actualizaciones para todas nuestras soluciones. Adem\xE1s, ofrecemos formaci\xF3n para tu equipo y asistencia permanente para asegurar que obtienes el m\xE1ximo beneficio de nuestras implementaciones."
      },
      {
        question: "\xBFTrabaj\xE1is con empresas de cualquier tama\xF1o?",
        answer: "S\xED, adaptamos nuestras soluciones a empresas de todos los tama\xF1os. Desde startups hasta grandes corporaciones, desarrollamos soluciones escalables que se ajustan a tus necesidades y presupuesto espec\xEDficos."
      }
    ]
  };
  const pageTitle = "Servicios y Soluciones Tecnol\xF3gicas | Nexito Tech";
  const pageDescription = "Descubre nuestros servicios de automatizaci\xF3n inteligente, IA y consultor\xEDa tecnol\xF3gica. Soluciones personalizadas y escalables para optimizar tu negocio.";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-20 lg:py-32 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <div class="text-center max-w-3xl mx-auto"> <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
Servicios Profesionales
</span> <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> ${heroContent.title} <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> ${heroContent.subtitle} </span> </h1> <p class="text-xl text-gray-600 mb-8"> ${heroContent.description} </p> <div class="flex flex-wrap justify-center gap-4"> <a href="https://nexito.tech/consultoria-gratuita/" onclick="window.dataLayer.push({
              'event': 'schedule_call_services_index',
              'eventCategory': 'engagement',
              'eventAction': 'click',
              'eventLabel': 'free_call_30min'
            })" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200">
Consulta Gratuita
</a> <a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200">
Ver Servicios
</a> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefitsContent.map((benefit) => renderTemplate`<div class="bg-gray-50 p-6 rounded-xl"> <h3 class="text-xl font-semibold text-gray-900 mb-2">${benefit.title}</h3> <p class="text-gray-600">${benefit.description}</p> </div>`)} </div> </div> </section>  ${renderComponent($$result2, "ServicesSection", $$IndexServicesSection, {})}  ${renderComponent($$result2, "ProcessSection", $$IndexProcessSection, {})}  ${renderComponent($$result2, "Testimonials", $$TestimonialsSection, {})}  ${renderComponent($$result2, "CTASection", $$IndexCtaSection, {})}  ${renderComponent($$result2, "FAQ_Services", $$FaqSection, { ...homeFAQs })} ` })}`;
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
