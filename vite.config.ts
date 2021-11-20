import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-ts-ghactions-template/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true
  }
});
