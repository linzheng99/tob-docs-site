import { defineConfig } from "vite";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    Unocss(),
  ],
});
