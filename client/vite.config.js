import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: '..',
  server: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\//, '')
      },
      "/search": {
        target: "https://query1.finance.yahoo.com/v1/finance/search",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/search/, '')
      }
    }
  },
});
