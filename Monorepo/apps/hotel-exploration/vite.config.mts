/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  resolve: {
    alias: {
      '@local/common/components': resolve(import.meta.dirname, '../../packages/common/src/Lib/Components/Index.ts'),
      '@local/common/utils': resolve(import.meta.dirname, '../../packages/common/src/Lib/Utils/Index.ts'),
      '@local/common': resolve(import.meta.dirname, '../../packages/common/src/Index.ts'),
    },
  },
  cacheDir: '../../node_modules/.vite/apps/hotel-exploration',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
