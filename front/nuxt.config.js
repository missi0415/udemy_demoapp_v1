export default {
  ssr: false,

  // Doc: https://ja.nuxtjs.org/blog/going-full-static/
  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },

  css: [
    '~/assets/sass/main.scss'
  ],

  plugins: [
    'plugins/axios'
  ],

  // Doc: https://nuxtjs.org/api/configuration-components
  components: true,

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://www.npmjs.com/package/@nuxtjs/vuetify
    '@nuxtjs/vuetify'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/nuxt-i18n
    'nuxt-i18n'
  ],

  // public ENV
  // Doc: https://nuxtjs.org/guide/runtime-config/
  publicRuntimeConfig: {
    appName: process.env.APP_NAME // 追加
  },

  axios: {
  },

  vuetify: {
    // 開発環境でcustomVariablesを有効にするフラグ
    // Doc: https://vuetifyjs.com/ja/customization/a-la-carte/
    treeShake: true,
    customVariables: ['~/assets/sass/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '4080BE',
          info: '4FC1E9',
          success: '44D69E',
          warning: 'FEB65E',
          error: 'FB8678',
          background: 'f6f6f4',
          myblue: '1867C0'
        }
      }
    }
  },

  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    // アプリがサポートしている言語
    locales: ['ja', 'en'],
    // デフォルトの言語
    defaultLocale: 'ja',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      // defaultLocale(ja.json)にkeyがない場合に参照される(フォールバック)言語
      fallbackLocale: 'ja',
      // true => 翻訳に失敗した場合の警告メッセージを出力しない
      // silentTranslationWarn: true,
      // true => keyが全くない場合のみ警告が発生し、フォールバック時には警告は発生しない
      silentFallbackWarn: true,
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },

  build: {
  }
}
