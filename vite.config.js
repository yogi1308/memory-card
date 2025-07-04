import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? '/memory-card/'    // running on GH Actions → GitHub Pages
    : '/',                  // anything else (Netlify, local dev) → root
  plugins: [react()],
})
