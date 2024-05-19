import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default'
      },
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@lib': path.resolve(__dirname, './src/shared/lib'),
      '@hooks': path.resolve(__dirname, './src/shared/lib/hooks'),
      '@images': path.resolve(__dirname, './src/shared/assets/images')
    }
  }
});
