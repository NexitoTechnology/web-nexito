import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

export default defineConfig({
  headers: {
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
  viewTransitions: true,
  output: 'static',
  site: 'https://nexito.tech',
  base: '/',
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
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
      ].some((path) => page.includes(path)),
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
      inline: {
        css: true
      },
      compress: {
        threshold: 0,
      },
    }),
    robotsTxt(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
        formats: ['webp', 'avif'],
        svg: {
          optimization: true,
          cleanupAttrs: true,
          removeDoctype: true,
          removeXMLProcInst: true,
          removeComments: true,
          removeMetadata: true,
          removeTitle: true,
          removeDesc: true,
          removeUselessDefs: true,
          removeEditorsNSData: true,
          removeEmptyAttrs: true,
          removeEmptyContainers: true,
          minifyStyles: true,
          convertStyleToAttrs: true,
          convertColors: true,
          convertPathData: true,
          convertTransform: true,
          removeUnknownsAndDefaults: true,
          removeNonInheritableGroupAttrs: true,
          removeUselessStrokeAndFill: true,
          removeUnusedNS: true,
          cleanupIDs: true,
          cleanupNumericValues: true,
          cleanupListOfValues: true,
          moveGroupAttrsToElems: true,
          collapseGroups: true,
          removeRasterImages: false,
          mergePaths: true,
          convertShapeToPath: true,
          sortAttrs: true,
          removeDimensions: true,
        }
      },
    },
  },
  vite: {
    optimizeDeps: {
      entries: [],
    },
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').pop();
            if (/css/.test(extType)) {
              return `assets/css/[name]-[hash].${extType}`;
            }
            return `assets/[ext]/[name]-[hash].[ext]`;
          },
          entryFileNames: 'assets/js/[name]-[hash].js',
          chunkFileNames: 'assets/js/[name]-[hash].js'
        }
      },
      inlineDynamicImports: false,
      assets: {
        defaultCacheControl: 'public, max-age=31536000, immutable'
      }
    }
  }
});