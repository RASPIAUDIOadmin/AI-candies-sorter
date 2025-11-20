import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // "base: './'" permet au site de fonctionner peu importe le nom du dépôt GitHub
  base: './', 
})