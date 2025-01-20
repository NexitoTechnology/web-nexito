/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DElV5CCb.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_D7fsvetn.mjs';
export { renderers } from '../renderers.mjs';

const $$PoliticaDeCookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 bg-white shadow-inner rounded-lg"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl font-bold mb-6 text-center text-gray-800">
Politica de Cookies
</h1> <p class="text-lg mb-4 text-gray-700">
Este es el aviso legal de Nexito Technology. En esta página, encontrarás
        toda la información legal relevante sobre nuestros servicios y
        políticas.
</p> <h2 class="text-2xl font-semibold mb-4 text-gray-800">Introducción</h2> <p class="text-lg mb-4 text-gray-700">
Bienvenido al aviso legal de Nexito Technology. Este documento establece
        los términos y condiciones bajo los cuales se proporcionan los servicios
        de nuestra empresa.
</p> <h2 class="text-2xl font-semibold mb-4 text-gray-800">
Uso de la Información
</h2> <p class="text-lg mb-4 text-gray-700">
La información proporcionada en este sitio web es de carácter
        informativo y no constituye una oferta de servicios. Nexito Technology
        se reserva el derecho de modificar estos términos en cualquier momento
        sin previo aviso.
</p> <!-- Añade más secciones y contenido según sea necesario --> </div> </section> ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/politica-de-cookies.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/politica-de-cookies.astro";
const $$url = "/politica-de-cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticaDeCookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
