/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CJ6p3tUL.mjs';
import 'kleur/colors';
import { $ as $$JsonLD, a as $$Layout } from '../chunks/Layout_DSxI79ZF.mjs';
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Sobre Nosotros | Nexito Technology";
  const pageDescription = "Transformamos el futuro empresarial mediante soluciones de automatizaci\xF3n inteligente y tecnolog\xEDas IA. Descubre c\xF3mo Nexito Technology est\xE1 revolucionando la eficiencia empresarial.";
  const stats = [
    { number: "98%", label: "Satisfacci\xF3n del cliente" },
    { number: "50+", label: "Proyectos completados" },
    { number: "30%", label: "Mejora en eficiencia" },
    { number: "24/7", label: "Soporte t\xE9cnico" }
  ];
  const values = [
    {
      title: "Innovaci\xF3n Continua",
      description: "Nos mantenemos a la vanguardia de las \xFAltimas tecnolog\xEDas para ofrecer soluciones de \xFAltima generaci\xF3n."
    },
    {
      title: "Excelencia T\xE9cnica",
      description: "Nuestro compromiso con la calidad t\xE9cnica garantiza soluciones robustas y escalables."
    },
    {
      title: "Enfoque Personalizado",
      description: "Cada empresa es \xFAnica, por eso desarrollamos soluciones adaptadas a tus necesidades espec\xEDficas."
    },
    {
      title: "Transparencia",
      description: "Mantenemos una comunicaci\xF3n clara y directa en cada fase del proyecto."
    }
  ];
  const aboutSchema = {
    name: pageTitle,
    description: pageDescription,
    mainEntity: {
      "@type": "Organization",
      "name": "Nexito Technology",
      "description": pageDescription,
      "foundingDate": "2023",
      "areaServed": "Espa\xF1a",
      "knowsAbout": ["Automatizaci\xF3n de Procesos", "Inteligencia Artificial", "Transformaci\xF3n Digital"],
      "slogan": "Transformando el futuro empresarial"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JsonLD", $$JsonLD, { "type": "AboutPage", "data": aboutSchema })}  ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-gray-50 to-white"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Impulsando la Transformación Digital
</h1> <p class="text-xl text-gray-600 mb-8">
En Nexito Technology fusionamos tecnología avanzada con experiencia empresarial para crear soluciones que marcan la diferencia.
</p> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> ${stats.map((stat) => renderTemplate`<div class="text-center"> <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">${stat.number}</div> <div class="text-gray-600">${stat.label}</div> </div>`)} </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">Nuestra Misión</h2> <p class="text-lg text-gray-700 mb-6">
Nuestra misión es democratizar el acceso a la automatización inteligente y la IA, permitiendo que empresas de todos los tamaños aprovechen el poder de la tecnología avanzada para crecer y prosperar en la era digital.
</p> <p class="text-lg text-gray-700">
Nos esforzamos por ser más que un proveedor de tecnología - somos un socio estratégico comprometido con el éxito de nuestros clientes, ofreciendo soluciones que generan un impacto real y medible en sus operaciones.
</p> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Nuestros Valores</h2> <div class="grid md:grid-cols-2 gap-8"> ${values.map((value) => renderTemplate`<div class="bg-gray-50 p-8 rounded-lg"> <h3 class="text-xl font-semibold mb-4">${value.title}</h3> <p class="text-gray-600">${value.description}</p> </div>`)} </div> </div> </section>  <section class="py-20 bg-blue-600"> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
Construyamos el Futuro Juntos
</h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
Descubre cómo nuestras soluciones pueden transformar tu negocio y prepararlo para los desafíos del mañana.
</p>
href="/contacto"
        class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        Contacta con Nosotros
</div> </section> ` })}`;
}, "C:/Users/Adr\xEDan/Desktop/web-nexito/src/pages/nosotros.astro", undefined);

const $$file = "C:/Users/Adrían/Desktop/web-nexito/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
