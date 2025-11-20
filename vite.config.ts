import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Les assets sont résolus relativement pour éviter les erreurs de chemin en production
  base: './',
})