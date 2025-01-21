import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DYcJBUGA.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/aviso-legal.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contacto.astro.mjs');
const _page6 = () => import('./pages/nosotros.astro.mjs');
const _page7 = () => import('./pages/politica-de-cookies.astro.mjs');
const _page8 = () => import('./pages/politica-de-privacidad.astro.mjs');
const _page9 = () => import('./pages/servicios/automatizacion.astro.mjs');
const _page10 = () => import('./pages/servicios/bi.astro.mjs');
const _page11 = () => import('./pages/servicios/consultoria.astro.mjs');
const _page12 = () => import('./pages/servicios/ia.astro.mjs');
const _page13 = () => import('./pages/servicios/power-bi.astro.mjs');
const _page14 = () => import('./pages/servicios/sap.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.ts", _page1],
    ["src/pages/aviso-legal.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/contacto.astro", _page5],
    ["src/pages/nosotros.astro", _page6],
    ["src/pages/politica-de-cookies.astro", _page7],
    ["src/pages/politica-de-privacidad.astro", _page8],
    ["src/pages/servicios/automatizacion.astro", _page9],
    ["src/pages/servicios/bi.astro", _page10],
    ["src/pages/servicios/consultoria.astro", _page11],
    ["src/pages/servicios/ia.astro", _page12],
    ["src/pages/servicios/power-bi.astro", _page13],
    ["src/pages/servicios/sap.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "04fbb9e6-66dd-4701-bcdb-b5309652bc52"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
