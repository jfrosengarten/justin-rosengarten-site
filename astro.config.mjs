// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://justinrosengarten.com',
  integrations: [sitemap()],
  redirects: {
    '/work': '/',
    // Retired project pages
    '/also-true': '/',
    '/yarbrough-wedding': '/',
  },
});
