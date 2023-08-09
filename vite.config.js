import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/connexa-cli/comex',
  resolve: {
    alias: {
      '@': '/src' // Establece un alias para acceder a la carpeta src fácilmente
    }
  },
  build: {
    outDir: './dist/connexa-cli/comex', // Directorio de salida personalizado
  },
})
