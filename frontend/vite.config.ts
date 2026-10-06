import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
const alias = (path: string) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    VueRouter(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': alias('./src'),
      '@app': alias('./src/app'),
      '@entities': alias('./src/entities'),
      '@feature': alias('./src/features'),
      '@pages': alias('./src/pages'),
      '@shared': alias('./src/shared'),
      '@widgets': alias('./src/widgets'),

    },
  },
})
