import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  output: 'static',
  site: 'https://nexito.tech',
  base: '/',
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
      SVG: true, // Compresión de SVG habilitada
      Logger: 1,
      minify: true,
      gzip: true,
      brotli: true,
      compress: {
        threshold: 0,
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
        formats: ['webp', 'avif', 'svg'],
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
    plugins: [
      {
        name: 'svg-loader',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('.svg')) return null;
          return {
            code: `export default ${JSON.stringify(code)}`,
            map: null
          };
        }
      }
    ],
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        }
      }
    }
  }
});