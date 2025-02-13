import { d as createAstro, c as createComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead, a as renderComponent, g as addAttribute, b as renderScript } from './astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://nexito.tech");
const $$JsonLD = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JsonLD;
  const { type, data } = Astro2.props;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexito Technology",
    "url": "https://nexito.tech",
    "logo": "https://nexito.tech/Logo.svg",
    "sameAs": [
      // Añade aquí tus redes sociales cuando las tengas
      // "https://linkedin.com/company/nexito",
      // "https://twitter.com/nexito"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "soporte@nexito.tech"
      // Ajusta según tu email
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexito Technology",
    "url": "https://nexito.technology",
    "description": "Transformamos empresas mediante automatizaci\xF3n de procesos e Inteligencia Artificial"
  };
  const getSchema = () => {
    switch (type) {
      case "Organization":
        return { ...organizationSchema, ...data };
      case "WebSite":
        return { ...websiteSchema, ...data };
      case "WebPage":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          ...data
        };
      case "AboutPage":
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          ...data
        };
      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          ...data
        };
      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data
        };
      default:
        return {};
    }
  };
  const schema = getSchema();
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/JsonLD.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const menuData = {
    logo: {
      src: "/Logo.svg",
      alt: "Logo Nexito Technology",
      loading: "eager"
    },
    services: [
      { title: "Power BI", url: "/servicios/power-bi" },
      { title: "Automatizaci\xF3n", url: "/servicios/automatizacion" },
      { title: "Desarrollo IA", url: "/servicios/ia" },
      { title: "Consultor\xEDa Tecnologica", url: "/servicios/consultoria" },
      { title: "Servicios SAP", url: "/servicios/sap" },
      { title: "Business Intelligence", url: "/servicios/bi" }
    ]
  };
  const navigationSchema = {
    "@type": "WebSite",
    name: "Nexito Technology",
    url: "https://nexito.technology"
  };
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100"> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "WebSite", "data": navigationSchema })} <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="flex items-center justify-between h-20">  <a href="/" class="flex-shrink-0 transform hover:scale-105 transition-transform duration-200" aria-label="Ir a la página principal"> <img${addAttribute(menuData.logo.src, "src")}${addAttribute(menuData.logo.alt, "alt")}${addAttribute(menuData.logo.loading, "loading")} width="144" height="104" class="w-auto h-8 md:h-10"> </a>  <div class="absolute left-1/2 transform -translate-x-1/2"> <a href="https://cal.com/nexito/30min" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 relative group" aria-label="Agendar llamada gratuita"> <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-5 h-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="whitespace-nowrap">Agenda 30min</span> <div class="absolute -top-3 -right-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold transform rotate-12 shadow-md">
¡Gratis!
</div> </a> </div>  <div class="flex items-center gap-6">  <nav class="hidden md:flex items-center gap-6"> <div class="relative group"> <button class="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors py-2" aria-expanded="false" aria-controls="desktop-services-menu" aria-haspopup="true">
Servicios
<svg class="ml-1.5 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> <div id="desktop-services-menu" class="absolute right-0 mt-1 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 border border-gray-100" role="menu" aria-orientation="vertical"> <div class="py-2"> ${menuData.services.map((service) => renderTemplate`<a${addAttribute(service.url, "href")} class="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors" role="menuitem"> <span class="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 transition-opacity duration-200 mr-2 group-hover:opacity-100"></span> ${service.title} </a>`)} </div> </div> </div> <a href="/blog" class="text-gray-600 hover:text-blue-600 font-medium transition-colors" aria-label="Ir al blog">
Blog
</a> <a href="/contacto" class="inline-flex items-center justify-center px-5 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200" aria-label="Contactar con nosotros">
Contacto
</a> </nav>  <button type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors" id="menu-btn" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú móvil"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div>  <div class="hidden md:hidden border-t border-gray-100" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú móvil"> <div class="px-4 py-3 space-y-3"> <button class="w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" id="mobile-services-btn" aria-expanded="false" aria-controls="mobile-services-menu">
Servicios
<svg class="h-4 w-4 transform transition-transform duration-200" id="mobile-services-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> <div class="hidden pl-4 space-y-2" id="mobile-services-menu" role="menu"> ${menuData.services.map((service) => renderTemplate`<a${addAttribute(service.url, "href")} class="flex items-center px-4 py-2.5 text-base text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" role="menuitem"> ${service.title} </a>`)} </div> <a href="/blog" class="block px-4 py-2.5 text-base font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" role="menuitem">
Blog
</a> <a href="/contacto" class="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow" role="menuitem">
Contacto
</a> </div> </div> </header> ${renderScript($$result, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Menu.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const companyData = {
    name: "NEXITO TECHNOLOGY",
    email: "info@nexito.tech",
    phone: "+34 950 79 45 43",
    description: "Transformamos empresas a trav\xE9s de la automatizaci\xF3n inteligente y soluciones de IA personalizadas.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      discord: "#",
      stackoverflow: "#"
    }
  };
  const footerSchema = {
    "@type": "Organization",
    "name": companyData.name,
    "description": companyData.description,
    "url": "https://nexito.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nexito.tech/Logo.svg"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyData.phone,
      "contactType": "customer service",
      "email": companyData.email,
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      companyData.social.linkedin,
      companyData.social.twitter,
      companyData.social.github,
      companyData.social.discord,
      companyData.social.stackoverflow
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    }
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0B1120] text-white" data-astro-cid-sz7xmlte> ${renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Organization", "data": footerSchema, "data-astro-cid-sz7xmlte": true })} <div class="max-w-7xl mx-auto px-6 py-12" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-12" data-astro-cid-sz7xmlte>  <div class="space-y-4" data-astro-cid-sz7xmlte> <a href="/" aria-label="Inicio" data-astro-cid-sz7xmlte> <img src="/LogoFooter.svg"${addAttribute(companyData.name, "alt")} class="h-16 w-auto" width="400" height="120" data-astro-cid-sz7xmlte> </a> <p class="text-gray-300 text-sm leading-relaxed" data-astro-cid-sz7xmlte> ${companyData.description} </p> <div class="flex flex-wrap gap-3" data-astro-cid-sz7xmlte> <a${addAttribute(companyData.social.linkedin, "href")} class="bg-[#0A66C2] hover:bg-[#0A66C2]/80 p-2.5 rounded-lg transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en LinkedIn" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>LinkedIn</span> <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(companyData.social.twitter, "href")} class="bg-black hover:bg-black/80 p-2.5 rounded-lg transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en X (Twitter)" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>X (Twitter)</span> <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(companyData.social.github, "href")} class="bg-[#171515] hover:bg-[#171515]/80 p-2.5 rounded-lg transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en GitHub" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>GitHub</span> <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(companyData.social.discord, "href")} class="bg-[#5865F2] hover:bg-[#5865F2]/80 p-2.5 rounded-lg transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Únete a nuestro Discord" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Discord</span> <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" data-astro-cid-sz7xmlte></path> </svg> </a> <a${addAttribute(companyData.social.stackoverflow, "href")} class="bg-[#F48024] hover:bg-[#F48024]/80 p-2.5 rounded-lg transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en Stack Overflow" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Stack Overflow</span> <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div>  <nav class="space-y-4" aria-label="Legal" data-astro-cid-sz7xmlte> <h3 class="text-lg font-semibold text-white" data-astro-cid-sz7xmlte>Legal</h3> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/aviso-legal" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Aviso Legal
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/politica-de-privacidad" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Política de Privacidad
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/politica-de-cookies" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Política de Cookies
</a> </li> </ul> </nav>  <nav class="space-y-4" aria-label="Empresa" data-astro-cid-sz7xmlte> <h3 class="text-lg font-semibold text-white" data-astro-cid-sz7xmlte>Empresa</h3> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/nosotros" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Sobre nosotros
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/servicios" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Servicios
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/blog" class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group" data-astro-cid-sz7xmlte>
Blog
</a> </li> </ul> </nav>  <div class="space-y-4" role="contentinfo" aria-label="Información de contacto" data-astro-cid-sz7xmlte> <h3 class="text-lg font-semibold text-white" data-astro-cid-sz7xmlte>Contacto</h3> <ul class="space-y-3" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a${addAttribute(`mailto:${companyData.email}`, "href")} class="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-sz7xmlte></path> </svg> ${companyData.email} </a> </li> <li data-astro-cid-sz7xmlte> <div class="text-gray-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042  0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-sz7xmlte></path> </svg> ${companyData.phone} </div> </li> </ul> </div> </div>  <div class="mt-12 pt-6 border-t border-gray-800" data-astro-cid-sz7xmlte> <p class="text-center text-gray-400" data-astro-cid-sz7xmlte>
© ${currentYear} ${companyData.name}. Todos los derechos reservados.
</p> </div> </div> </footer> `;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/Footer.astro", void 0);

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-consent" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform translate-y-full transition-transform duration-300 z-50"> <div class="container mx-auto px-4 py-6 md:px-6"> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"> <div class="flex-1"> <p class="text-gray-600 text-sm md:text-base">
Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
<a href="/politica-de-cookies" class="text-blue-600 hover:text-blue-700 underline">
Ver política de cookies
</a> </p> </div> <div class="flex flex-col sm:flex-row gap-3"> <button id="reject-cookies" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Rechazar opcionales
</button> <button id="accept-cookies" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Aceptar todas
</button> </div> </div> </div> </div> ${renderScript($$result, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/components/CookieConsent.astro", void 0);

const $$Astro = createAstro("https://nexito.tech");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/ProyectosProgramacion/web-nexito-vercel/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/ProyectosProgramacion/web-nexito-vercel/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$JsonLD as $, $$CookieConsent as a, $$Footer as b, $$Menu as c, $$ClientRouter as d };
