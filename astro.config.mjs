// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankalayza.me',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // La página interna dev-iconos es solo verificación visual (noindex);
      // no debe aparecer en el sitemap.
      filter: (page) => !page.includes('/dev-iconos'),
      // Alinea las URLs del sitemap con las canónicas: con build.format 'file'
      // las URLs reales servidas terminan en .html (paridad 1:1 con el sitio
      // antiguo), igual que el <link rel="canonical"> de cada página. La home
      // se mantiene como raíz.
      serialize(item) {
        const root = 'https://frankalayza.me';
        if (item.url === root || item.url === `${root}/`) {
          item.url = root;
        } else if (!item.url.endsWith('.html')) {
          item.url = item.url.replace(/\/$/, '') + '.html';
        }
        return item;
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
