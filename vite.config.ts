import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), DefineOptions()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 静态资源目录 全局通用
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/assets/style/mixin.less";',
      },
    },
  },
})
