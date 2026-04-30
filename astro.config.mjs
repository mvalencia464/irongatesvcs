import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  integrations: [sitemap()],
  image: {
    // Add your R2 public domain here so Astro can optimize images from it
    domains: ['pub-CHANGEME.r2.dev'],
    remotePatterns: [{ protocol: 'https', hostname: '*.r2.dev' }],
  },
});
