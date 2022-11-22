export function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction/whatisthis/', activeMatch: '/guide/' },
    { text: 'Components', link: '/components/Button/', activeMatch: '/components/' },
    {
      text: 'project',
      items: [
        {
          text: 'goGuide',
          link: '/guide/introduction/whatisthis/'
        }
      ]
    },{
      text: 'notes',
      items: [
        {
          text: 'goGuide',
          link: '/guide/introduction/whatisthis/'
        }
      ]
    }
  ]
}
