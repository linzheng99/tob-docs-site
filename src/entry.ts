import { App } from "vue";
import 'uno.css'
import CountBtn from './components/count/index.vue';
import JsxButton from './components/JsxButton/index';
// 导出单独组件
export { CountBtn, JsxButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App) {
    app.component('CountBtn', CountBtn);
    app.component('JsxButton', JsxButton);
  },
};
