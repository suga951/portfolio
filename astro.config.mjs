// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: set `site` to your final URL (e.g. https://<username>.github.io).
// If deploying to a GitHub Pages *project* repo, also set `base: '/<repo-name>'`.
export default defineConfig({
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
