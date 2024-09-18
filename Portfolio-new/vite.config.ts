import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  
  base: process.env.NODE_ENV === 'production' ? '/' : './',
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})