import Theme from 'vitepress/theme'
import './style/variable.css';
import ComponentUI from '../../../src/entry'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ComponentUI)
  }
}
