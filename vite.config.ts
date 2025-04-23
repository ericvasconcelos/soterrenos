import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
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
  base: '/',
  build: {
    manifest: true,
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-helmet-async', 'react-router'],
          vendor: [
            'axios',
            'classnames',
            'dayjs',
            'usehooks-ts',
            'react-hook-form',
            'react-lazyload',
            '@hookform/resolvers',
            'yup',
            'jwt-decode',
          ],
          vendor2: [
            '@tanstack/react-query',
            '@vis.gl/react-google-maps',
            'react-easy-crop',
            'react-player',
            'react-toastify',
          ],
          components: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Ajuste o limite de tamanho do chunk para 500 KB
  },
  esbuild: {
    legalComments: 'none',
  },
});
