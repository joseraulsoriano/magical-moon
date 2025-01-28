import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// Configuración de Astro con Vue
export default defineConfig({
  integrations: [vue(), tailwind(), netlify()],
});