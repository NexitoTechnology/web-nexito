import { c as createComponent, r as renderTemplate, f as renderHead } from '../chunks/astro/server_D2lW42M0.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$DownloadEbook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><title>Descarga tu eBook</title>${renderHead()}</head> <body> <div class="max-w-2xl mx-auto py-16 px-4"> <h1 class="text-3xl font-bold mb-6">¡Gracias por suscribirte!</h1> <p class="mb-8">Haz clic en el botón de abajo para descargar tu eBook.</p> <a href="/ruta-a-tu-ebook.pdf" class="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700" download>
Descargar eBook
</a> </div> </body></html>`;
}, "C:/Users/Adr\xEDan/Desktop/Nube Nexito/Proyectos Programacio\u0301n/web-nexito-vercel/src/pages/download-ebook.astro", void 0);

const $$file = "C:/Users/Adrían/Desktop/Nube Nexito/Proyectos Programación/web-nexito-vercel/src/pages/download-ebook.astro";
const $$url = "/download-ebook";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DownloadEbook,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
