import Theme from 'vitepress/theme'
import './style/variable.css';
import ComponentUI from '../../../src/entry'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ComponentUI)
    app.use(ElementPlus)
  }
}
