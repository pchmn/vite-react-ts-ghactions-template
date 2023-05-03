/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-ts-ghactions-template/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'c8',
      reporter: ['html', 'lcov'],
    },
  },
});
