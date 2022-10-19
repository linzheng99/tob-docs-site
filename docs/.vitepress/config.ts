
const config = {
  title: 'VitePress-template',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'VitePress-template',
    nav: nav(),
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
    sidebar: {
      '/guide/': sidebarGuide()
    },
    // footer: {
    //   message: '',
    //   copyright: '',
    // }
  }
}

function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction/whatisthis/', activeMatch: '/guide/' },
    {
      text: 'items',
      items: [
        {
          text: 'goGuide',
          link: '/guide/introduction/whatisthis/'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/introduction/whatisthis/' },
        { text: 'Getting Started', link: '/guide/introduction/gettingStarted/' },
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

export default config
