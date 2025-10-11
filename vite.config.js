import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite base must match the repository name when deploying to GitHub Pages
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
