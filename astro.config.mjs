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
  output: "static",
  //adapter: node({ mode: "standalone" }),
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
        // Log the page URL to understand what format we're receiving
        console.log(`Checking page: ${page}`);
        
        // These are the routes we want to exclude
        const excludedPaths = [
          'aviso-legal',
          'politica-de-cookies',
          'politica-de-privacidad',
          'consultoria-gratuita',
          'download-ebook-index',
          'terminos-y-condiciones',
          'landing'
        ];
        
        // Parse the URL to get just the pathname
        const url = new URL(page);
        const pathname = url.pathname;
        
        // Check if the pathname contains any excluded path
        for (const path of excludedPaths) {
          if (pathname.includes(`/${path}`)) {
            console.log(`Excluding: ${page}`);
            return false;
          }
        }
        
        // Additional check for pages that have 'landing' anywhere in the path
        if (pathname.includes('/landing')) {
          console.log(`Excluding landing page: ${page}`);
          return false;
        }
        
        return true;
      },
    }),
  ],
});