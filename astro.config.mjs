// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.phoenixdecorator.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Pages are written as /about.html so Netlify serves clean URLs without a trailing slash.
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
