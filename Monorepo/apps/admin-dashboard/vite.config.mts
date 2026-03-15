/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  resolve: {
    alias: {
      '@local/common/components': path.resolve(import.meta.dirname, '../../packages/common/src/lib/components/index.ts'),
      '@local/common/utils': path.resolve(import.meta.dirname, '../../packages/common/src/lib/utils/index.ts'),
      '@local/common': path.resolve(import.meta.dirname, '../../packages/common/src/index.ts'),
    },
  },
  cacheDir: '../../node_modules/.vite/apps/dashboard',
  server: {
    port: 4300,
    host: 'localhost',
  },
  preview: {
    port: 4300,
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
