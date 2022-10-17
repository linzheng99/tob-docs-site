import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress-template',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'VitePress-template',
    // navbar link
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linzhengGithub/vitepress-template' }
    ],
    // 需申请
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    //   appId: '<APP_ID>',
    // },
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        items: [
          { text: 'What is VitePress?', link: '/guide/introduction/' },
          { text: 'Getting Started', link: '/guide/gettingStarted/' },
        ]
      },
      {
        text: 'Component',
        collapsible: true,
        items: [
          { text: 'Child-one', link: '/guide/components/Child-one/' },
          { text: 'Child-two', link: '/guide/components/Child-two/' },
        ]
      }
    ]
  }
})
