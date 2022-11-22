import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  base: '/notes-blog',
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss({})
  ],
});
