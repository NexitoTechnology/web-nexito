/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CJ6p3tUL.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../chunks/Layout_DSxI79ZF.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_C1eck_H9.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const pageData = {
    title: "Cont\xE1ctanos | Nexito Technology",
    description: "\xBFNecesitas ayuda con la automatizaci\xF3n o IA para tu empresa? Cont\xE1ctanos y te ayudaremos a transformar tu negocio con soluciones tecnol\xF3gicas innovadoras.",
    canonical: "https://nexito.technology/contacto",
    openGraph: {
      image: "https://nexito.technology/og-contact.jpg",
      // Asegúrate de tener esta imagen
      title: "Contacta con Nexito Technology",
      description: "Transforma tu empresa con automatizaci\xF3n e IA"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageData.title, "description": pageData.description, "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate`              ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "ContactPage", "data": {
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
  }, "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<main class="bg-gradient-to-br from-white via-gray-50 to-blue-50" data-astro-cid-2mxdoeuz> <!-- Sección de encabezado --> <section class="container mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-16 text-center" data-astro-cid-2mxdoeuz> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-2mxdoeuz>
Hablemos sobre tu proyecto
</h1> <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-2mxdoeuz>
Estamos aquí para ayudarte a transformar tu empresa con soluciones de automatización e inteligencia artificial.
</p> </section> <!-- Sección de información de contacto --> <section class="container mx-auto px-4 mb-12 md:mb-20" data-astro-cid-2mxdoeuz> <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12" data-astro-cid-2mxdoeuz> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-2mxdoeuz> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2mxdoeuz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-2mxdoeuz></path> </svg> </div> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>Email</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>info@nexito.technology</p> </div> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-2mxdoeuz> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2mxdoeuz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-2mxdoeuz></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-2mxdoeuz></path> </svg> </div> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>Ubicación</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>Madrid, España</p> </div> <div class="text-center p-6 rounded-xl bg-white shadow-md" data-astro-cid-2mxdoeuz> <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-2mxdoeuz> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2mxdoeuz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2mxdoeuz></path> </svg> </div> <h2 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-2mxdoeuz>Horario</h2> <p class="text-gray-600" data-astro-cid-2mxdoeuz>Lun - Vie: 9:00 - 18:00</p> </div> </div> </section> <!-- Formulario de contacto --> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-2mxdoeuz": true })} </main> `, "head": ($$result2) => renderTemplate`<link rel="canonical"${addAttribute(pageData.canonical, "href")}><meta property="og:title"${addAttribute(pageData.openGraph.title, "content")}><meta property="og:description"${addAttribute(pageData.openGraph.description, "content")}><meta property="og:image"${addAttribute(pageData.openGraph.image, "content")}><meta property="og:url"${addAttribute(pageData.canonical, "content")}><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageData.openGraph.title, "content")}><meta name="twitter:description"${addAttribute(pageData.openGraph.description, "content")}><meta name="twitter:image"${addAttribute(pageData.openGraph.image, "content")}>` })} `;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/contacto.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
