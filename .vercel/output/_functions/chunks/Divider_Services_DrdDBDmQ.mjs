import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as renderScript, g as addAttribute, a as renderComponent } from './astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
import { $ as $$Image } from './_astro_assets_xqTz5_E2.mjs';

const $$Astro$6 = createAstro("https://nexito.tech");
const $$HeroServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroServices;
  const {
    title,
    subtitle,
    description,
    tag,
    ctaButtons = [
      {
        text: "Agenda tu Consultor\xEDa Gratuita",
        href: "https://cal.com/nexito/30min",
        isMain: true,
        duration: "30min"
      },
      {
        text: "Ver Beneficios",
        href: "#benefits",
        isMain: false
      }
    ],
    showTrustBar = true,
    companyLogos = [
      { src: "/images/client-logo-1.svg", alt: "TechFlow" },
      { src: "/images/client-logo-2.svg", alt: "DataSphere" },
      { src: "/images/client-logo-3.svg", alt: "InnovateIQ" }
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" data-astro-cid-gwwoilj5> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative" data-astro-cid-gwwoilj5> <div class="text-center" data-astro-cid-gwwoilj5> <!-- Tag --> <div class="mb-4" data-astro-cid-gwwoilj5> <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200 text-sm font-medium" data-astro-cid-gwwoilj5> ${tag} </span> </div> <!-- Títulos optimizados --> <div class="max-w-4xl mx-auto text-center" data-astro-cid-gwwoilj5> <h1 class="
      text-4xl md:text-5xl lg:text-6xl 
      font-extrabold 
      text-white 
      mb-4 
      tracking-tight 
      bg-clip-text 
      text-transparent 
      bg-gradient-to-r 
      from-white 
      to-blue-200
    " data-astro-cid-gwwoilj5> ${title} </h1> <h2 class="
      text-3xl md:text-4xl lg:text-5xl 
      font-bold 
      text-blue-100 
      mb-6 
      opacity-90
    " data-astro-cid-gwwoilj5> ${subtitle} </h2> <p class="
      mt-10 mb-12
      text-xl md:text-2xl 
      text-blue-50 
      max-w-3xl 
      mx-auto 
      leading-relaxed
    " data-astro-cid-gwwoilj5> ${description} </p> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2" data-astro-cid-gwwoilj5> ${ctaButtons.map((button) => button.isMain ? renderTemplate`<a${addAttribute(button.href, "href")} target="_blank" rel="nofollow" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold text-blue-800 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200" data-astro-cid-gwwoilj5> <span class="relative flex items-center" data-astro-cid-gwwoilj5> <span data-astro-cid-gwwoilj5>${button.text}</span> ${button.duration && renderTemplate`<span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm font-normal" data-astro-cid-gwwoilj5> ${button.duration} </span>`} <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-gwwoilj5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-gwwoilj5></path> </svg> </span> </a>` : renderTemplate`<a${addAttribute(button.href, "href")} class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-100 border-2 border-blue-400/30 rounded-xl hover:bg-blue-800/30 backdrop-blur-sm transition-colors" data-astro-cid-gwwoilj5> ${button.text} </a>`)} </div> <!-- Slot para contenido personalizado --> ${renderSlot($$result, $$slots["default"])} ${showTrustBar && renderTemplate`<!-- Elementos de confianza -->
        <div class="pt-8 border-t border-blue-600/30" data-astro-cid-gwwoilj5> <p class="text-blue-200 text-sm mb-4" data-astro-cid-gwwoilj5>
Empresas que confían en nosotros
</p> <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70" data-astro-cid-gwwoilj5> ${companyLogos.map((logo) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} width="200" height="100" class="h-8" loading="lazy" data-astro-cid-gwwoilj5>`)} </div> </div>`} </div> </div> <!-- Elementos de fondo movidos al final --> <div class="absolute inset-0 -z-20 bg-grid-white/[0.05] bg-[size:20px_20px]" data-astro-cid-gwwoilj5></div> <div class="absolute inset-0 -z-10 bg-gradient-to-t from-blue-900/50 to-transparent" data-astro-cid-gwwoilj5></div> <!-- Blobs decorativos --> <div class="absolute -top-40 -right-40 -z-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" data-astro-cid-gwwoilj5></div> <div class="absolute -bottom-40 -left-40 -z-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" data-astro-cid-gwwoilj5></div> </section> ${renderScript($$result, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Hero_Services.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Hero_Services.astro", void 0);

const $$Astro$5 = createAstro("https://nexito.tech");
const $$FeaturesServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesServices;
  const { title, subtitle, description, tag, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative"> <div class="text-center mb-16"> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> ${tag} </span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">${subtitle}</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${description} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${features.map((feature) => renderTemplate`<div class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"> <div class="mb-6 transform group-hover:scale-110 transition-transform duration-300"> <span class="text-5xl">${feature.icon}</span> </div> <h3 class="text-xl font-bold text-gray-900 mb-4"> ${feature.title} </h3> <p class="text-gray-600 group-hover:text-gray-700 transition-colors"> ${feature.description} </p> </div>`)} </div> </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Features_Services.astro", void 0);

const $$Astro$4 = createAstro("https://nexito.tech");
const $$UseCasesServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UseCasesServices;
  const {
    title,
    subtitle,
    description,
    tag,
    useCases,
    showExtraContent = false,
    extraCTA = {
      text: "Explora m\xE1s casos de \xE9xito",
      href: "#calendar-booking"
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> ${tag} </span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">${subtitle}</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${description} </p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${useCases.map((useCase) => renderTemplate`<div class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"> <div class="aspect-video overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": useCase.image, "alt": useCase.title, "loading": "lazy", "width": 400, "height": 300, "format": "webp", "class": "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" })} </div> <div class="p-8"> <div class="flex items-center gap-4 mb-4"> <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900"> ${useCase.title} </h3> </div> <p class="text-gray-600 group-hover:text-gray-700 transition-colors"> ${useCase.description} </p> ${useCase.link && renderTemplate`<a${addAttribute(useCase.link, "href")} class="mt-6 inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"> <span>${useCase.linkText || "Ver caso completo"}</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a>`} </div> </div>`)} </div> ${showExtraContent && renderTemplate`<div class="mt-12 text-center"> <a${addAttribute(extraCTA.href, "href")} class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors group"> <span>${extraCTA.text}</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div>`} </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/UseCases_Services.astro", void 0);

const $$Astro$3 = createAstro("https://nexito.tech");
const $$BenefitsServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BenefitsServices;
  const { title, subtitle, description, tag, benefits } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="benefits" class="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> ${tag} </span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">${subtitle}</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${description} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> ${benefits.map((benefit) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-blue-200"> <div class="flex items-center h-full"> <div class="flex-shrink-0 mr-4"> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors"> <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div class="flex-grow flex items-center justify-center"> <p class="text-gray-700 font-semibold text-lg text-center"> ${benefit} </p> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Benefits_Services.astro", void 0);

const $$Astro$2 = createAstro("https://nexito.tech");
const $$ProcessServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProcessServices;
  const { title, subtitle, description, tag, steps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> ${tag} </span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">${subtitle}</span> </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto"> ${description} </p> </div> <div class="relative"> <div class="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-1/2 hidden md:block"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`<div class="relative group"> <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-blue-200 mx-auto z-10 relative shadow-lg group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300"> ${step.step} </div> <div class="text-center mt-6 bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow"> <h3 class="font-bold text-lg text-gray-900 mb-3"> ${step.title} </h3> <p class="text-gray-600">${step.description}</p> </div> </div>`)} </div> </div> </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Process_Services.astro", void 0);

const $$Astro$1 = createAstro("https://nexito.tech");
const $$FAQServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQServices;
  const { title, subtitle, description, tag, faqItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-gradient-to-b from-white to-gray-50"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"> ${tag} </span> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> ${title} ${subtitle && renderTemplate`<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">${subtitle}</span>`} </h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto"> ${description} </p> </div> <div class="space-y-4"> ${faqItems.map((item) => renderTemplate`<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"> <div class="p-6"> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> </div> <div> <h3 class="text-lg font-semibold text-gray-900 mb-2"> ${item.question} </h3> <p class="text-gray-600">${item.answer}</p> </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/FAQ_Services.astro", void 0);

const $$Astro = createAstro("https://nexito.tech");
const $$FaqCtaServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqCtaServices;
  const {
    question = "\xBFTienes m\xE1s preguntas? Estamos aqu\xED para ayudarte",
    ctaText = "Agenda una llamada gratuita",
    ctaLink = "https://cal.com/nexito/30min"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-12 text-center"> <p class="text-gray-600 mb-6"> ${question} </p> <a${addAttribute(ctaLink, "href")} target="_blank" rel="nofollow" class="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 group"> <span>${ctaText}</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/FaqCta_Services.astro", void 0);

const $$DividerServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-7xl mx-auto px-4 sm:px-6"> <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div> </div>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Divider_Services.astro", void 0);

export { $$HeroServices as $, $$DividerServices as a, $$FeaturesServices as b, $$UseCasesServices as c, $$BenefitsServices as d, $$ProcessServices as e, $$FAQServices as f, $$FaqCtaServices as g };
