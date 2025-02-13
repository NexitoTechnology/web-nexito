import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, e as renderSlot, f as renderHead, g as addAttribute, h as defineScriptVars } from './astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import { a as $$CookieConsent, b as $$Footer, c as $$Menu, d as $$ClientRouter, $ as $$JsonLD } from './ClientRouter_Cy0holhV.mjs';
/* empty css                               */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://nexito.tech");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Nexito Technology | Automatizaci\xF3n Inteligente y Soluciones IA",
    description = "Transformamos empresas mediante automatizaci\xF3n de procesos e Inteligencia Artificial. Soluciones personalizadas para impulsar la eficiencia de tu negocio.",
    image = "/icon-512x512.png",
    type = "website",
    schemaData = {}
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const siteURL = "https://nexito.tech";
  const baseSchema = {
    name: title,
    description,
    url: canonicalURL.toString(),
    image: new URL(image, siteURL).toString()
  };
  const getSchemaType = () => {
    switch (type) {
      case "article":
        return "Article";
      case "about":
        return "AboutPage";
      case "service":
        return "Service";
      default:
        return "WebPage";
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><link rel="stylesheet" href="/src/styles/globals.css"><!-- Google Tag Manager --><script>(function(){', '\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0];\n        var j = d.createElement(s);\n        var dl = l != "dataLayer" ? "&l=" + l : "";\n        j.setAttribute("async", "true");\n        j.setAttribute(\n          "src",\n          "https://www.googletagmanager.com/gtm.js?id=" + i + dl\n        );\n        if (f && f.parentNode) {\n          f.parentNode.insertBefore(j, f);\n        }\n      })(window, document, "script", "dataLayer", gtmId);\n    })();<\/script><!-- End Google Tag Manager --><!-- Google Analytics\n    <script\n      type="text/partytown"\n      src="https://www.googletagmanager.com/gtag/js?id=G-ZWTXV0T5GN"><\/script>\n    <script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "G-ZWTXV0T5GN");\n    <\/script> --><!-- Metadatos b\xE1sicos --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', "><title>", '</title><!-- SEO mejorado --><link rel="canonical"', '><meta name="robots" content="index, follow, max-image-preview:large"><meta name="author" content="Nexito Technology"><meta name="generator"', '><!-- Open Graph para WhatsApp y redes sociales --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content="https://nexito.tech/icon-512x512.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:url"', '><meta property="og:type"', '><meta property="og:site_name" content="Nexito Technology"><meta property="og:image:alt"', '><!-- Twitter Card mejorada --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><!-- Favicon y manifest mejorado --><!--<link rel="icon" href="/favicon.ico" sizes="32x32" /> --><!-- Favicon y manifest mejorado --><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/Logo.svg"><link rel="manifest" href="/manifest.json"><!-- Sitemaps --><link rel="sitemap" href="/sitemap-index.xml"><!-- JSON-LD Schemas -->', "", "", "<!-- Astro View Transitions -->", "", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQS3F67G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', ' <!-- Main content --> <div class="overflow-x-hidden"> <main id="main-content" class="flex-grow w-full px-4 mx-auto"> ', " </main> </div> ", " ", " </body></html>"])), defineScriptVars({ gtmId: "GTM-WQS3F67G" }), addAttribute(description, "content"), title, addAttribute(canonicalURL, "href"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(type === "article" ? "article" : "website", "content"), addAttribute(title, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, siteURL), "content"), addAttribute(title, "content"), renderComponent($$result, "JsonLD", $$JsonLD, { "type": "Organization", "data": {} }), renderComponent($$result, "JsonLD", $$JsonLD, { "type": "WebSite", "data": {} }), renderComponent($$result, "JsonLD", $$JsonLD, { "type": getSchemaType(), "data": {
    ...baseSchema,
    ...schemaData
  } }), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Menu", $$Menu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}));
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
