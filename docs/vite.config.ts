import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from '../config/unocss';
// https://vitejs.dev/config/

export default defineConfig({
    base: '/notes-blog',
    plugins: [vueJsx(), Unocss()],
    server: {
        hmr: true,
    },
});
