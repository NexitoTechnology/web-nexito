import { c as createComponent, r as renderComponent, b as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Chp2LETn.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_7-sRKkJk.mjs';
import { $ as $$ContactForm } from '../chunks/contact_form_A3F1oWpZ.mjs';
import { $ as $$JsonLD } from '../chunks/ClientRouter_COC8QvaM.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const pageData = {
    title: "Cont\xE1ctanos | Nexito Technology",
    description: "\xBFNecesitas ayuda con la automatizaci\xF3n o IA para tu empresa? Cont\xE1ctanos y te ayudaremos a transformar tu negocio con soluciones tecnol\xF3gicas innovadoras.",
    canonical: "https://nexito.tech/contacto"};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageData.title, "description": pageData.description, "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "ContactPage", "data": {
    name: pageData.title,
    description: pageData.description,
    url: pageData.canonical,
    mainEntity: {
      "@type": "Organization",
      "name": "Nexito Technology",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@nexito.technology",
        "availableLanguage": ["Spanish", "English"]
      }
    }
  }, "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<main class="bg-gradient-to-br from-white via-gray-50 to-blue-50" data-astro-cid-2mxdoeuz> <section class="container mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-16 text-center" data-astro-cid-2mxdoeuz> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-2mxdoeuz>
Hablemos sobre tu proyecto 🚀
</h1> <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-2mxdoeuz>
Estamos aquí para ayudarte a transformar tu empresa con soluciones de automatización e inteligencia artificial. Escríbenos y te asesoraremos sin compromiso.
</p> </section> <section class="container mx-auto px-4 mb-12 md:mb-20" data-astro-cid-2mxdoeuz> <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12" data-astro-cid-2mxdoeuz> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>📧 Email</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>info@nexito.tech</p> </div> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>📍 Ubicación</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>España</p> </div> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>⏰ Horario</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>Lun - Vie: 9:00 - 18:00</p> </div> </div> </section> <!-- Call to Action: Agendar reunión --> <section class="container mx-auto px-4 py-12 text-center bg-blue-600 text-white rounded-xl shadow-md" data-astro-cid-2mxdoeuz> <h2 class="text-3xl font-bold mb-4" data-astro-cid-2mxdoeuz>🚀 ¡Transforma tu negocio ahora!</h2> <p class="text-lg mb-6" data-astro-cid-2mxdoeuz>Agendar una reunión con nuestro equipo y descubre cómo nuestras soluciones pueden ayudarte a automatizar procesos y escalar tu empresa.</p> <a href="https://calendly.com/nexito-tech/consulta" target="_blank" class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition" data-astro-cid-2mxdoeuz>
📅 Agendar una reunión gratis
</a> </section> <!-- Formulario de contacto --> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-2mxdoeuz": true })} <!-- Sección de preguntas frecuentes --> <section class="container mx-auto px-4 py-12 bg-white rounded-xl shadow-md max-w-4xl" data-astro-cid-2mxdoeuz> <h2 class="text-3xl font-bold text-gray-900 text-center mb-6" data-astro-cid-2mxdoeuz>Preguntas Frecuentes</h2> <div class="space-y-6" data-astro-cid-2mxdoeuz> <details class="p-4 bg-gray-100 rounded-lg" data-astro-cid-2mxdoeuz> <summary class="font-semibold cursor-pointer" data-astro-cid-2mxdoeuz>¿Qué servicios ofrece Nexito Technology?</summary> <p class="mt-2 text-gray-600" data-astro-cid-2mxdoeuz>Ofrecemos automatización de procesos, integración de IA en negocios y soluciones SaaS personalizadas.</p> </details> <details class="p-4 bg-gray-100 rounded-lg" data-astro-cid-2mxdoeuz> <summary class="font-semibold cursor-pointer" data-astro-cid-2mxdoeuz>¿Cómo funciona la integración de IA en mi empresa?</summary> <p class="mt-2 text-gray-600" data-astro-cid-2mxdoeuz>Analizamos tus procesos actuales y desarrollamos una solución de IA personalizada que optimiza la productividad y reduce costos.</p> </details> <details class="p-4 bg-gray-100 rounded-lg" data-astro-cid-2mxdoeuz> <summary class="font-semibold cursor-pointer" data-astro-cid-2mxdoeuz>¿Puedo solicitar una demostración gratuita?</summary> <p class="mt-2 text-gray-600" data-astro-cid-2mxdoeuz>Sí, ofrecemos demostraciones gratuitas donde mostramos cómo nuestras soluciones pueden impactar en tu empresa.</p> </details> </div> </section> </main> `, "head": ($$result2) => renderTemplate`<link rel="canonical"${addAttribute(pageData.canonical, "href")}>` })} `;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/contacto.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
