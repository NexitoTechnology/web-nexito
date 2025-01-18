import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  output: 'server',
  site: 'https://nexito.tech',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US'
        }
      },
      filter: (page) => ![
        'aviso-legal',
        'politica-de-cookies',
        'politica-de-privacidad'
      ].some(path => page.includes(path))
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      SVG: true,
      Logger: 1,
      minify: true,
      gzip: true,
      brotli: true,
      compress: {
        threshold: 0
      }
    }),
    robotsTxt()
  ],
  image: {
    service: { 
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80, // Calidad de compresión por defecto
        format: 'webp' // Formato por defecto
      }
    }
  },
  build: {
    inlineStylesheets: "always" // Esto inlinea los estilos CSS críticos
  },
});