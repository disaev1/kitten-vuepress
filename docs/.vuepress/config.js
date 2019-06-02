module.exports = {
  title: 'Kitten VuePress',
  description: 'Демо-документация на VuePress',
  themeConfig: {
    nav: [
      { text: 'COUNTER', link: '/counter/' },
      { text: 'GUIDE', link: '/guide/' },
    ],
    sidebar: [
      {
        title: 'Счетчик',
        collapsable: false,
        children: [
          '/counter/counter-app',
        ],
      },
      {
        title: 'Руководство по API',
        collapsable: true,
        children: [
          '/guide/guide',
          '/guide/api',
        ],
      },
    ],
  },
};
