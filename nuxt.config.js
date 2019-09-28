module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Milton Farm For Sale',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '132.5 acre picturesque farm for sale at 704 Klinetob Road, Milton, PA 17847.'
      },
      {
        name: 'keywords',
        content:
          'milton, farm, sale, house, real estate, property, 17847, agriculture, home, realtor, buy, house for sale, farm for sale'
      },
      {
        name: 'revisit-after',
        content: '1 days'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    port: 4005
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap'
  ],

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faCaretRight', 'faPause', 'faPlay']
      }
    ]
  },

  googleAnalytics: {
    id: 'UA-130438116-3'
    // debug: {
    //   enabled: true,
    //   sendHitTask: true
    // }
  },

  sitemap: {
    hostname: 'https://miltonpafarm.com'
  },

  // pwa: {
  //   icons: {
  //     iconSrc: '~@assets/images/favicon.png'
  //   }
  // },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    // analyze: true,
    extend(config, ctx) {}
  }
}
