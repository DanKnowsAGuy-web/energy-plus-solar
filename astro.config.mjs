import { defineConfig } from 'astro/config';

// The Energy Plus solar/vendor site, served at the repo root.
// https://danknowsaguy-web.github.io/energy-plus-solar/
export default defineConfig({
  site: 'https://danknowsaguy-web.github.io',
  base: '/energy-plus-solar',
  build: {
    // Inline all CSS into the HTML <head> so styles apply on first parse with
    // no separate render-blocking fetch. Eliminates the cold-load flash of
    // unstyled content seen on mobile (visible skip-link, giant arrows,
    // unmasked hero) before the linked stylesheet applied.
    inlineStylesheets: 'always',
  },
});
