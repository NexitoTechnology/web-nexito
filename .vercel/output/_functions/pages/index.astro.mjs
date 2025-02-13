import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, g as addAttribute, b as renderScript } from '../chunks/astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BNqpp_f4.mjs';
import { $ as $$JsonLD } from '../chunks/ClientRouter_Cy0holhV.mjs';
/* empty css                                 */
import { $ as $$ServicesSection, a as $$ProcessSection, b as $$Testimonials, c as $$CTASection } from '../chunks/ProcessSection_5Sj3J3Ug.mjs';
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
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[calc(100vh-4rem)] flex items-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" style="will-change: transform; backface-visibility: hidden;" data-astro-cid-nlow4r3u> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "WebPage", "data": heroSchema, "data-astro-cid-nlow4r3u": true })} <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] pointer-events-none" data-astro-cid-nlow4r3u></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-nlow4r3u> <div class="inline-block mb-8" data-astro-cid-nlow4r3u> <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200 text-sm font-medium backdrop-blur-sm" data-astro-cid-nlow4r3u>
🚀 Transforma tu empresa con tecnología inteligente
</span> </div> <h1 class="font-extrabold lg:text-7xl mb-6 md:text-6xl text-4xl text-white tracking-tight" data-priority="high" data-astro-cid-nlow4r3u> ${heroData.title} <span class="bg-clip-text bg-gradient-to-r text-transparent block from-blue-200 mt-2 to-white" data-astro-cid-nlow4r3u>
Para Tu Empresa
</span> </h1> <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto [text-wrap:balance]" data-astro-cid-nlow4r3u> ${heroData.description} </p> <!-- Estadísticas --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in" data-astro-cid-nlow4r3u> ${heroData.stats.map((stat) => renderTemplate`<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10" data-astro-cid-nlow4r3u> <div class="text-3xl font-bold text-white mb-2" data-astro-cid-nlow4r3u>${stat.value}</div> <div class="text-blue-200" data-astro-cid-nlow4r3u>${stat.label}</div> </div>`)} </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" data-astro-cid-nlow4r3u> <a href="https://cal.com/nexito/30min" target="_blank" rel="nofollow" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-blue-900 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200" data-astro-cid-nlow4r3u> <span class="relative flex items-center" data-astro-cid-nlow4r3u> <span data-astro-cid-nlow4r3u>Agenda tu Consultoría Gratuita</span> <span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm font-normal" data-astro-cid-nlow4r3u>30min</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-nlow4r3u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-nlow4r3u></path> </svg> </span> </a> </div> <!-- Elementos de confianza --> <div class="pt-8 border-t border-white/10 animate-fade-in" data-astro-cid-nlow4r3u> <p class="text-blue-200 text-sm mb-6" data-astro-cid-nlow4r3u>
Empresas que confían en nosotros
</p> <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-12" data-astro-cid-nlow4r3u> ${heroData.trustedCompanies.map((brand) => renderTemplate`<div class="h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" data-astro-cid-nlow4r3u> <img${addAttribute(`/images/${brand}.svg`, "src")}${addAttribute(brand, "alt")} width="300" height="150" class="h-10 w-auto" loading="lazy" data-astro-cid-nlow4r3u> </div>`)} </div> </div> <!-- Indicador de scroll --> <!--<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>--> </div></section> `;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/HeroSection.astro", void 0);

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
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefits.map((benefit) => renderTemplate`<div class="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"> <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform"> ${benefit.icon} </div> <h3 class="text-xl font-bold text-gray-900 mb-4"> ${benefit.title} </h3> <p class="text-gray-600"> ${benefit.description} </p> </div>`)} </div> <div class="mt-16 text-center"> <div class="inline-flex items-center justify-center p-1 rounded-full bg-blue-100/80 backdrop-blur-sm"> <span class="px-4 py-2"> <span class="text-blue-900 font-medium">¿Quieres conocer más beneficios?</span> </span> <a href="https://cal.com/nexito/30min" target="_blank" rel="nofollow noreferrer" class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"> Agenda una demo </a> </div> </div> </div> </section>`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/BenefitsSection.astro", void 0);

const $$PopupNewsletter = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`// src/components/PopupNewsletter.astro  ${maybeRenderHead()}<div id="popup-overlay" class="invisible opacity-0 transition-all duration-300 fixed inset-0 z-40 flex items-center justify-center"> <div class="absolute inset-0 bg-slate-800/85 backdrop-blur-md"></div> <div id="popup-content" style="border: 12px solid rgba(255, 255, 255, 0.733);" class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 w-[500px] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform transition-all p-8 mx-4"> <!-- Resto del contenido igual... --> <!-- Close button --> <button id="close-popup" class="absolute right-4 bg-white hover:bg-gray-500 rounded-full p-1.5 transition-all shadow-lg"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-sky-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Badge --> <div class="inline-flex items-center mb-6"> <span class="text-sm font-medium bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full border border-blue-500/30">
📚 eBook Exclusivo
</span> </div> <h2 class="text-3xl font-bold text-white mb-2">
Automatización Inteligente
<span class="text-blue-200 block">
Para Tu Empresa
</span> </h2> <p class="text-blue-200 mb-6">
Descubre cómo multiplicar la productividad de tu empresa con RPA y análisis de datos
</p> <div class="space-y-3 mb-8"> <div class="flex items-center gap-2 text-blue-200"> <svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
+500 procesos automatizados explicados
</div> <div class="flex items-center gap-2 text-blue-200"> <svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Casos de éxito reales
</div> <div class="flex items-center gap-2 text-blue-200"> <svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Templates listos para usar
</div> </div> <form id="newsletter-form" class="space-y-4"> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre"> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@email.com"> <button type="submit" class="w-full bg-white text-blue-900 font-bold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
Descargar eBook Gratis
<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </button> <div class="text-center"> <p class="text-sm text-blue-200">
🔒 Tu información está segura con nosotros
</p> </div> </form> </div> </div> ${renderScript($$result, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/PopupNewsletter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/components/PopupNewsletter.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Nexito Tech: Automatizaci\xF3n y Soluciones IA";
  const pageDescription = "Transformamos empresas mediante automatizaci\xF3n de procesos e Inteligencia Artificial. Soluciones personalizadas para impulsar la eficiencia de tu negocio.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "BenefitsSection", $$BenefitsSection, {})} ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})} ${renderComponent($$result2, "ProcessSection", $$ProcessSection, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "PopupNewsletter", $$PopupNewsletter, {})} ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/pages/index.astro", void 0);

const $$file = "C:/Users/Adrían/Desktop/Nube Nexito/Proyectos Programación/web-nexito-vercel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
