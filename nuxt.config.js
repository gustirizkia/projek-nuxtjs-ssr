export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HMI Komfaktek melangkah maju',

    link: [
      { rel: 'icon', type: 'image/png', href: '/logo-komfaktek.png' },
      {
        rel: 'shortcut icon',
        hid: 'shortcut-icon',
        type: 'image/png',
        href: '/logo-komfaktek.png',
      },
      {
        rel: 'apple-touch-icon',
        hid: 'apple-touch-icon',
        type: 'image/png',
        href: '/logo-komfaktek.png',
      },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/install', ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    'vue-currency-filter/nuxt',
    // Or if you have custom options...
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
      },
    ],

    // for multiple instance
    [
      'vue-currency-filter/nuxt',
      [
        {
          // default name 'currency'
          symbol: '$',
          thousandsSeparator: ',',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: true,
          avoidEmptyDecimals: '##',
        },
        {
          // default name 'currency_2'
          name: 'currency_2',
          symbol: 'usd',
          thousandsSeparator: ' ',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: false,
          avoidEmptyDecimals: '',
        },
      ],
    ],
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 60 * 60 * 24 * 30,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: false,
          user: { url: 'profile', method: 'get' },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://komfaktek.nusacitateknologi.my.id/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          // This option is highly recommended
          preserveWhitespace: false,
        },
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
