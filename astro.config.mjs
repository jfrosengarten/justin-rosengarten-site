// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://justinrosengarten.com',
  // Private video page stays out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/coverletter') })],
  redirects: {
    '/work': '/',
    // Retired project pages
    '/also-true': '/',
    '/yarbrough-wedding': '/',
  },
});
