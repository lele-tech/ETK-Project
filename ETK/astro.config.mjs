// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
  proxy: {
    '/owncast': {
      target: 'http://209.148.103.84:8080',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/owncast/, ''),
    },
  },
},

  }
});


