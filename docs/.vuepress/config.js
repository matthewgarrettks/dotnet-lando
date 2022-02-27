const {path} = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'The offical Lando plugin for Dotnet.',
  base: '/dotnet/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/dotnet/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/dotnet',
    sidebarHeader: {
      enabled: true,
      title: 'Dotnet Plugin',
      icon: '/images/dotneticon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.md',
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/dotnet/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/dotnet/releases'},
      '/development.md',
    ],
  },
};
