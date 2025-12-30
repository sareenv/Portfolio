import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keep same port as CRA
    open: true
  },
  build: {
    outDir: 'build' // CRA uses 'build', Vite defaults to 'dist'
  },
  resolve: {
    alias: {
      // If you use absolute imports in CRA
      src: '/src'
    }
  }
});