import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: '..',
  server: {
    proxy: {
      '/search': {
        target: 'https://query1.finance.yahoo.com/v1/finance/search',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/search/, '')
      }
    }
  }
});
