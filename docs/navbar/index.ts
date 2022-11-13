export function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction/whatisthis/', activeMatch: '/guide/' },
    { text: 'Components', link: '/components/Button/', activeMatch: '/components/' },
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
