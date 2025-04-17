// src/env.d.ts
declare module '@astrojs/partytown/components' {
    import { AstroComponentFactory } from 'astro/dist/runtime/server'; 
    export const Partytown: AstroComponentFactory;
  }
  