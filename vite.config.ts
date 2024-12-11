import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<ibrahimemiraydin.github.io>/', // Repository adınızı buraya yazın
})
