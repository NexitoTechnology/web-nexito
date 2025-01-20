/* empty css                                          */
import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, e as addAttribute } from '../../chunks/astro/server_DElV5CCb.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BAfs8fuE.mjs';
import { a as $$Layout, $ as $$JsonLD } from '../../chunks/Layout_D7fsvetn.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://nexito.tech");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.filter((post) => post.data.isPublished).map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const allPosts = await getCollection("blog");
  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.data.isPublished && (p.data.categoria === post.data.categoria || p.data.tags?.some((tag) => post.data.tags?.includes(tag)))
  ).slice(0, 3);
  const seriesPosts = post.data.serie ? allPosts.filter(
    (p) => p.data.isPublished && p.data.serie === post.data.serie
  ).sort((a, b) => (a.data.ordenEnSerie || 0) - (b.data.ordenEnSerie || 0)) : [];
  const articleSchema = {
    "@type": "BlogPosting",
    "headline": post.data.metaTitle || post.data.title,
    "description": post.data.metaDescription || post.data.description,
    "datePublished": post.data.date.toISOString(),
    "dateModified": post.data.lastModified ? post.data.lastModified.toISOString() : post.data.date.toISOString(),
    "image": post.data.ogImage || post.data.image ? new URL(post.data.ogImage || post.data.image || "", Astro2.site).toString() : undefined,
    "author": {
      "@type": "Organization",
      "name": post.data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexito Technology",
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/Logo.svg", Astro2.site).toString()
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": new URL(Astro2.url.pathname, Astro2.site).toString()
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.metaTitle || `${post.data.title} | Blog Nexito Technology`, "description": post.data.metaDescription || post.data.description, "image": post.data.ogImage || post.data.image, "type": "article" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "Article", "data": articleSchema })} ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12"> <article class="prose lg:prose-xl prose-slate mx-auto"> <!-- Esta es la clase importante --> <header class="not-prose mb-12"> <nav class="text-sm mb-8"> <ol class="flex items-center space-x-2"> <li><a href="/" class="text-gray-500 hover:text-blue-600">Inicio</a></li> <li class="text-gray-400">/</li> <li><a href="/blog" class="text-gray-500 hover:text-blue-600">Blog</a></li> ${post.data.categoria && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <li class="text-gray-400">/</li> <li><a${addAttribute(`/blog/categoria/${post.data.categoria.toLowerCase()}`, "href")} class="text-gray-500 hover:text-blue-600">${post.data.categoria}</a></li> ` })}`} </ol> </nav> ${post.data.serie && renderTemplate`<div class="bg-blue-50 rounded-lg p-4 mb-8"> <p class="text-sm text-blue-600 font-medium">Serie: ${post.data.serie}</p> </div>`} ${post.data.image && renderTemplate`<div class="relative w-full aspect-[21/9] mb-8 rounded-xl overflow-hidden"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.imageAlt || post.data.title, "alt")} class="object-cover w-full h-full"> </div>`} <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight"> ${post.data.title} </h1> <p class="text-xl text-gray-600 mb-6 leading-relaxed"> ${post.data.description} </p> <div class="flex flex-wrap items-center gap-4 text-gray-600 mb-6"> <time${addAttribute(post.data.date.toISOString(), "datetime")} class="text-sm"> ${new Date(post.data.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.readingTime && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="text-gray-300">•</span> <span class="text-sm"> ${post.data.readingTime} min de lectura
</span> ` })}`} ${post.data.dificultad && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="text-gray-300">•</span> <span class="text-sm px-3 py-1 bg-gray-100 rounded-full"> ${post.data.dificultad} </span> ` })}`} ${post.data.lastModified && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="text-gray-300">•</span> <span class="text-sm">
Actualizado: ${new Date(post.data.lastModified).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </span> ` })}`} </div> ${post.data.tags && renderTemplate`<div class="flex flex-wrap gap-2 mb-6"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"> ${tag} </span>`)} </div>`} ${(post.data.requisitoPrevio || post.data.tiempoImplementacion) && renderTemplate`<div class="bg-gray-50 rounded-lg p-6 mb-8"> ${post.data.requisitoPrevio && renderTemplate`<div class="mb-4"> <h2 class="text-sm font-semibold text-gray-600 mb-2">Requisitos previos:</h2> <ul class="list-disc list-inside text-sm text-gray-600"> ${post.data.requisitoPrevio.map((req) => renderTemplate`<li>${req}</li>`)} </ul> </div>`} ${post.data.tiempoImplementacion && renderTemplate`<div> <h2 class="text-sm font-semibold text-gray-600 mb-2">Tiempo estimado:</h2> <p class="text-sm text-gray-600">${post.data.tiempoImplementacion}</p> </div>`} </div>`} </header> <div class="mt-8"> ${renderComponent($$result2, "Content", Content, {})} </div> ${(relatedPosts.length > 0 || seriesPosts.length > 0) && renderTemplate`<aside class="mt-16 pt-8 border-t not-prose"> ${seriesPosts.length > 0 && renderTemplate`<div class="mb-12"> <h2 class="text-2xl font-bold mb-6">Artículos de la serie</h2> <div class="space-y-4"> ${seriesPosts.map((seriesPost, index) => renderTemplate`<a${addAttribute(`/blog/${seriesPost.slug}`, "href")}${addAttribute(`block p-4 rounded-lg border ${post.slug === seriesPost.slug ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50 border-gray-200"}`, "class")}> <span class="text-sm text-gray-500 mb-1 block">Parte ${index + 1}</span> <h3 class="font-medium">${seriesPost.data.title}</h3> </a>`)} </div> </div>`} ${relatedPosts.length > 0 && renderTemplate`<div> <h2 class="text-2xl font-bold mb-6">Artículos relacionados</h2> <div class="grid md:grid-cols-3 gap-8"> ${relatedPosts.map((relatedPost) => renderTemplate`<a${addAttribute(`/blog/${relatedPost.slug}`, "href")} class="group block"> <article> <div class="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100"> ${relatedPost.data.image && renderTemplate`<img${addAttribute(relatedPost.data.image, "src")}${addAttribute(relatedPost.data.imageAlt || relatedPost.data.title, "alt")} class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105">`} </div> <h3 class="font-semibold mb-2 group-hover:text-blue-600 transition-colors"> ${relatedPost.data.title} </h3> <p class="text-sm text-gray-600 line-clamp-2"> ${relatedPost.data.description} </p> </article> </a>`)} </div> </div>`} </aside>`} <footer class="mt-12 pt-8 border-t not-prose"> <div class="flex justify-between items-center"> <a href="/blog" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
← Volver al blog
</a> </div> </footer> </article> </main> ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/blog/[...slug].astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
