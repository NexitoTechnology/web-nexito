// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelServerless from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: 'https://nexito.tech', 
  output: 'server',
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
      },
      maxDuration: 8,
    }),
  vite: {
    plugins: [tailwindcss()],
  },
});