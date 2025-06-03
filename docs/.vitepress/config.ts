import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import vite from './vite.config'

const GUIDES: DefaultTheme.NavItemWithLink[] = [
  // { text: 'Getting Started', link: '/guide/' },
  { text: 'Core Modules', link: '/guide/core/' },
]

const VERSIONS: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  { text: `v${version} (current)`, link: '/' },
  { text: `Release Notes`, link: 'https://github.com/ryanuo/textcss/releases' },
  { text: `Contributing`, link: 'https://github.com/ryanuo/textcss/blob/main/CONTRIBUTING.md' },
]

export default defineConfig({
  title: 'TextCSS',
  description: 'A modern CSS utility library for text styling and animations',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash() as any,
    ],
    languages: ['js', 'jsx', 'ts', 'tsx', 'css', 'scss'],
    config: (md) => {
      md.use(groupIconMdPlugin)
      md.use(vitepressDemoPlugin)
    },
  },
  cleanUrls: true,
  vite,
  themeConfig: {
    // logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        items: [
          {
            items: GUIDES,
          },
        ],
      },
      {
        text: `v${version}`,
        items: VERSIONS,
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: GUIDES,
        },
        {
          text: 'Core Modules',
          items: [
            { text: 'Overview', link: '/guide/core/' },
            { text: 'Text Animation', link: '/guide/core/text-animation' },
            { text: 'Outline', link: '/guide/core/outline' },
            { text: 'Neon', link: '/guide/core/neon' },
            { text: 'Transform', link: '/guide/core/transform' },
            { text: 'Fancy Underline', link: '/guide/core/fancy-underline' },
            { text: 'Text Shadow', link: '/guide/core/text-shadow' },
          ],
        },
      ],
    },
    editLink: {
      pattern: 'https://github.com/ryanuo/textcss/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ryanuo/textcss' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT RYANUO.',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'RYANUO' }],
    ['meta', { property: 'og:title', content: 'TextCSS - Modern Text Styling Library' }],
    ['meta', { property: 'og:description', content: 'A modern CSS utility library for text styling and animations' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
  ],
})
