const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Top',
    htmlAttrs: {
      lang: 'ja-JP'
    },
    titleTemplate: '%s - inductor.dev',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'inductor.dev'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://inductor.dev/img/icons/ogp.jpg'
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '400'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '400'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://inductor.dev/'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'inductor.dev'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@_inductor_'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@_inductor_'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://inductor.dev/img/icons/ogp.jpg'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/icons/ogp.jpg'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
