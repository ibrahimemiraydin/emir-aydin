import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Kullanıcı veya organizasyon sayfaları için bu şekilde bırakılır
})
