// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown';
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://nexito.tech",
  output: "server",
  adapter: node({ mode: "standalone" }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({
      config: { forward: ['dataLayer.push', 'clarity', 'gtag']
      },
    }),        // ← aquí
    react(),
    robotsTxt(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      SVG: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      filter: (page) => ![
        'aviso-legal',
        'politica-de-cookies',
        'politica-de-privacidad',
        'consultoria-gratuita',
        'download-ebook-index',
        'landing',
      ].some((path) => page.includes(path)),
    }),
  ],
});
