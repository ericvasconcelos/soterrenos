import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/constants': resolve(__dirname, 'src/constants'),
      '@/contexts': resolve(__dirname, 'src/contexts'),
      '@/hooks': resolve(__dirname, 'src/hooks'),
      '@/layouts': resolve(__dirname, 'src/layouts'),
      '@/services': resolve(__dirname, 'src/services'),
      '@/types': resolve(__dirname, 'src/types'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-helmet', 'react-router'],
          vendor: [
            'axios',
            'classnames',
            'yup',
            'usehooks-ts',
            'react-hook-form',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Ajuste o limite de tamanho do chunk para 500 KB
  },
});
