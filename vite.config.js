import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite base must match the repository name when deploying to GitHub Pages
export default defineConfig({
  // Use a relative base so the built HTML references assets relative to the
  // current location. This works for Firebase Hosting (root) and GitHub
  // Pages (project pages under /<repo>/).
  base: './',
  plugins: [react()],
})
