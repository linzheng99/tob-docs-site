import { setupSidebar } from '../sidebar';
import { setupNav } from '../nav/index';

const config = {
  base: '/tob-docs-site/',
  title: 'tob-docs-site',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'tob-docs-site',
    nav: setupNav(),
    // navbar link
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linzhengGithub/notes-template' }
    ],
    // 需申请
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    //   appId: '<APP_ID>',
    // },
    sidebar: setupSidebar(),
    // footer: {
    //   message: '',
    //   copyright: '',
    // }
  }
}

export default config
