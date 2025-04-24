
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
    }),
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
      filter: (page) => {
        const excludedRoutes = [
          '/aviso-legal',
          '/politica-de-cookies',
          '/politica-de-privacidad',
          '/consultoria-gratuita',
          '/download-ebook-index',
          '/landing'
        ];
        
        // Check if page URL ends with any of the excluded routes
        for (const route of excludedRoutes) {
          if (page.endsWith(route)) return false;
        }
        
        // Check for pages that start with '/landing'
        if (page.includes('/landing')) return false;
        
        return true;
      },
    }),
  ],
});