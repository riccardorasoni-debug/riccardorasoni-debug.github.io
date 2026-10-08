import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This is a user/organization Pages repository, not a project Pages repo.
// Therefore all routes are served at /, and no `base` is required.
export default defineConfig({
  site: 'https://riccardorasoni-debug.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
