import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ THIS IS REQUIRED FOR VERCEL STATIC HOSTING
  plugins: [react()],
})
