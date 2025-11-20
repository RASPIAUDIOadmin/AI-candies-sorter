import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT : Ceci doit correspondre EXACTEMENT au nom de votre dépôt GitHub
  base: '/AI-candies-sorter/', 
})