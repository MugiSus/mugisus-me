import { defineConfig } from 'vite';
import { nitro } from 'nitro/vite';
import { solidStart } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), solidStart(), nitro()],
  nitro: {
    preset: 'vercel',
  },
  optimizeDeps: {
    // The lazy dev overlay needs its CommonJS dependencies pre-bundled.
    include: ['@solidjs/start > @jridgewell/trace-mapping'],
  },
  server: {
    host: true,
  },
});
