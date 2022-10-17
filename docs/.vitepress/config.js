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
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is VitePress?', link: '/guide/introduction/index' },
          { text: 'Getting Started', link: '/guide/gettingStarted/index' },
        ]
      }
    ]
  }
})
