// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://motherbench.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  // HTML stays legible for source-readers (federation Astra — anyone can mirror)
  compressHTML: false,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
});
