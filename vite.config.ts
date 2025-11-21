import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base ajustée pour GitHub Pages : remplace si le nom du repo change
  base: '/AI-candies-sorter/',
});
