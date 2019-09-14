
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portland Artist | Shelly J. Weasel' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favi.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap'},
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css'}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/custom.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  styleResources: {
    scss: [
        '@/assets/scss/global-vars.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-slick'],
    // extend (config, { isServer }) {
    //   if (isServer) {
    //     config.externals = [
    //       require('webpack-node-externals')({
    //         whitelist: [/^vue-slick/]
    //       })
    //     ]
    //   }
    // }
  }
}
