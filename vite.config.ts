import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-ts-ghactions-template/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['html', 'lcov']
    }
  }
});
