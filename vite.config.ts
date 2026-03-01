import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gdc/',
  plugins: [react()],
  server: {
    hmr: {
      host: 'g-dc.be',
      clientPort: 446,
      protocol: 'wss'
    }
  }
})
