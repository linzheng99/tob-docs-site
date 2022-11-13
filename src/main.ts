import { createApp } from "vue";
import 'uno.css'
import App from './App.vue'

import Components from './entry';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

async function bootstrap() {
  const app = createApp(App)

  app.use(Components)

  app.use(ElementPlus)

  app.mount('#app')
}

bootstrap()
