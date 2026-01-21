import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 8000,
    allowedHosts: [
      'new-marleah-kimgame-2b677a93.koyeb.app',
      '.koyeb.app', // 모든 koyeb.app 서브도메인 허용
    ],
  },
  plugins: [react()],
})
