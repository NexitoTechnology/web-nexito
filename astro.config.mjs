// astro.config.mjs
import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown';
import tailwind from "@tailwindcss/vite";
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://nexito.tech",
  output: "static",
  vite: {
    plugins: [tailwind()],
    build: {
      cssMinify: true,
      minify: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            // Definir chunks manualmente para optimizar la carga
            'vendor': ['react', 'react-dom'],
            'ui': [
              // Incluir componentes de UI comunes
              './src/components/JsonLD.astro',
              './src/components/layout_menu.astro',
              './src/components/layout_footer.astro'
            ],
          }
        }
      }
    },
    ssr: {
      // Optimización para SSR
      noExternal: ['tailwindcss'],
    },
    // Optimizaciones adicionales
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: []
    }
  },
  integrations: [
    // Mover scripts de terceros a Web Workers
    partytown({
      config: { 
        forward: ['dataLayer.push', 'clarity', 'gtag'],
        // La nueva opción de debug puede ayudarte durante el desarrollo
        debug: false
      },
    }),
    // Soporte para React cuando sea necesario
    react(),
    
    // Generar robots.txt optimizado
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/aviso-legal/',
            '/politica-de-cookies/',
            '/politica-de-privacidad/',
            '/consultoria-gratuita/',
            '/download-ebook-index/',
            '/terminos-y-condiciones/',
            '/landing/'
          ],
          crawlDelay: 10
        }
      ],
      sitemap: true
    }),
    
    // Comprimir HTML, CSS, JS, imágenes
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false, // Mantener comillas para mejor compatibilidad
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      },
      JavaScript: {
        compress: {
          drop_console: false, // Mantener console en producción para posibles diagnósticos
          drop_debugger: true
        }
      },
      Image: {
        quality: 80, // Buen equilibrio entre calidad y tamaño
      },
      SVG: true
    }),
    
    // Generador de sitemap mejorado
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        },
      },
      // Filtros mejorados para excluir páginas no indexables
      filter: (page) => {
        const excludedPatterns = [
          /\/aviso-legal\/?$/,
          /\/politica-de-cookies\/?$/,
          /\/politica-de-privacidad\/?$/,
          /\/consultoria-gratuita\/?$/,
          /\/download-ebook-index\/?$/,
          /\/terminos-y-condiciones\/?$/,
          /\/landing\//
        ];
        
        // Evaluar con expresiones regulares para mayor precisión
        return !excludedPatterns.some(pattern => pattern.test(page));
      },
      // Customización adicional del sitemap
      customPages: [
        'https://nexito.tech/servicios/power-bi/',
        'https://nexito.tech/servicios/automatizacion/',
        'https://nexito.tech/servicios/ia/',
        'https://nexito.tech/servicios/consultoria/',
        'https://nexito.tech/servicios/sap/',
        'https://nexito.tech/servicios/bi/'
      ]
    }),
  ],
  
  // Opciones de construcción
  build: {
    format: 'file',
    assets: '_assets'
  },
  
  // Configuración de caché para desarrollo
  server: {
    host: true
  }
});