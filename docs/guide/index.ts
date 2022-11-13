export function sidebarGuide() {
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
