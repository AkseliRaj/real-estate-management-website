import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/isannointiliitto-rss': {
        target: 'https://www.isannointiliitto.fi',
        changeOrigin: true,
        rewrite: () => '/osio/uutinen/feed/',
      },
    },
  },
})
