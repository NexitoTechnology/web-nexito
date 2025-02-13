import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ContactForm } from './ContactForm_C-9k1orb.mjs';

const $$Astro = createAstro("https://nexito.tech");
const $$CTASectionServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASectionServices;
  const { title, description, buttonText, buttonLink, features = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl"> <h3 class="text-2xl md:text-3xl font-bold text-white mb-4"> ${title} </h3> <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"> ${description} </p> <a href="https://cal.com/nexito/30min" target="_blank" rel="nofollow" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-800 bg-white rounded-xl shadow-lg hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-200 group"> <span>${buttonText}</span> <span class="ml-2 bg-blue-100 rounded-lg px-2 py-1 text-sm">30min</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </a> ${features && features.length > 0 && renderTemplate`<div class="mt-8 pt-8 border-t border-white/20"> <div class="flex flex-wrap justify-center items-center gap-4 text-sm text-white"> ${features.map((feature) => renderTemplate`<span class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </span>`)} </div> </div>`} </div>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/CTASection_Services.astro", void 0);

const $$ContactServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-12 bg-gradient-to-br from-blue-800 to-blue-900 relative overflow-hidden"> <!-- Elementos decorativos de fondo --> <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div> <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob delay-[2000ms]"></div> <div class="relative"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </section>`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Contact_Services.astro", void 0);

export { $$CTASectionServices as $, $$ContactServices as a };
