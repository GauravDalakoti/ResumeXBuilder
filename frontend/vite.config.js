import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {

      "/api": "https://resume-builder-x.vercel.app"
    }
  },
  plugins: [react()],
})
