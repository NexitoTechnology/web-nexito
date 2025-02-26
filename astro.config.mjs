// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  //trailingSlash: 'always',
  site: "https://nexito.tech",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
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
      lastmod: new Date(),
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
      ].some((path) => page.includes(path)),
    }),
  ]
});
