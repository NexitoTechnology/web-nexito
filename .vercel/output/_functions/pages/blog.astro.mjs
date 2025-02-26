import { d as createAstro, c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Chp2LETn.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BCozUWa-.mjs';
import { $ as $$Layout } from '../chunks/Layout_DC6V1zk0.mjs';
import { $ as $$JsonLD } from '../chunks/ClientRouter_DU15POOI.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nexito.tech");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.isPublished === true;
  });
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  const title = "Visita Nuestro Blog | Nexito Technology";
  const description = "Explora nuestros art\xEDculos sobre automatizaci\xF3n, IA y transformaci\xF3n digital. Mantente al d\xEDa con las \xFAltimas tendencias tecnol\xF3gicas.";
  const blogListSchema = {
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": new URL("/blog", Astro2.site).toString(),
    "isPartOf": {
      "@type": "Website",
      "name": "Nexito Technology"
    },
    "about": {
      "@type": "Organization",
      "name": "Nexito Technology"
    },
    "hasPart": sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.data.title,
      "description": post.data.description,
      "datePublished": post.data.date.toISOString(),
      "dateModified": post.data.lastModified?.toISOString() || post.data.date.toISOString(),
      "url": new URL(`/blog/${post.slug}`, Astro2.site).toString(),
      "author": {
        "@type": "Organization",
        "name": post.data.author
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "WebPage", "data": blogListSchema, "data-astro-cid-ijnerlr2": true })} ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-12" data-astro-cid-ijnerlr2> <header class="text-center mb-16" data-astro-cid-ijnerlr2> <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-astro-cid-ijnerlr2>
Blog de Nexito Technology
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-ijnerlr2>
Descubre las últimas tendencias en automatización, inteligencia artificial y transformación digital
</p> </header> <div id="posts-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-ijnerlr2> ${sortedPosts.map((post) => renderTemplate`<article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" data-astro-cid-ijnerlr2> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="block h-full" data-astro-cid-ijnerlr2> <div class="relative aspect-video overflow-hidden" data-astro-cid-ijnerlr2> ${post.data.image ? renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.imageAlt || post.data.title, "alt")} class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-ijnerlr2>` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" data-astro-cid-ijnerlr2></div>`} </div> <div class="p-6" data-astro-cid-ijnerlr2> ${post.data.tags && renderTemplate`<div class="flex flex-wrap gap-2 mb-3" data-astro-cid-ijnerlr2> ${post.data.tags.slice(0, 2).map((tag) => renderTemplate`<span class="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full" data-astro-cid-ijnerlr2> ${tag} </span>`)} </div>`} <h3 class="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors" data-astro-cid-ijnerlr2> ${post.data.title} </h3> <p class="text-gray-600 mb-4 line-clamp-2" data-astro-cid-ijnerlr2> ${post.data.description} </p> <div class="flex items-center justify-between text-sm text-gray-500" data-astro-cid-ijnerlr2> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-ijnerlr2> ${new Date(post.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.readingTime && renderTemplate`<span data-astro-cid-ijnerlr2>${post.data.readingTime} min de lectura</span>`} </div> </div> </a> </article>`)} </div> <!-- Loading indicator --> <div id="loading-spinner" class="hidden py-12 text-center" data-astro-cid-ijnerlr2> <div class="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" data-astro-cid-ijnerlr2></div> </div> </main> ` })} ${renderScript($$result, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/blog.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/blog.astro", void 0);

const $$file = "C:/ProyectosProgramacion/web-nexito-vercel/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
