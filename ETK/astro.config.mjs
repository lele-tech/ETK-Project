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
          target: 'http://192.168.50.228:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/owncast/, ''),
        },
      },
    },
  }
});

