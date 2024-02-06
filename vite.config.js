import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(), 
    eslintPlugin({ failOnError: false })
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
