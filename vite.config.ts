import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig(({ mode }) => {
  
  return {
    plugins: [vue(), svgLoader()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'envConfig': fileURLToPath(new URL(`./src${mode}.ts`, import.meta.url))
      }
    }
  }
})
