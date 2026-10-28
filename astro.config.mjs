// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Same stack as trustledgerai-microsite: Astro 7 + Tailwind 4, static output.
// Wireframe phase: grayscale tokens only (src/styles/global.css). Brand tokens come later.
export default defineConfig({
  site: 'https://mediabarninc.com', // placeholder until the domain plan is decided
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
