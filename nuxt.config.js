import colors from 'vuetify/es5/util/colors'
require('dotenv').config();

export default {
  target: 'static',  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - weather-app',
    title: 'weather-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: "test",
    // base: '/weather-app/'
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],

    fontawesome: {
      component: "fa",
      icons: {
        solid: true,
        brands: true
      }
    },

    googleFonts: {
      families: {
        Roboto: true,
        'Josefin+Sans': true,
        Montserrat: true,
        Inter: true,
        Nunito: true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
    },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/dotenv'
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
      name: 'Emino\'s Weather App',
      short_name: 'Weather',
      theme_color: '#000',
      background_color: '#000',
    },
    meta: {
      theme_color: '#000',
    },
    icon: {
      source: '~/static/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  content: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  },
}
