import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VineVitePlugin } from 'vue-vine/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VineVitePlugin(), Inspect()],
  
})
