const nodeExternals = require('webpack-node-externals');
const routerBase = {
  router: {
    base: '/shelly_website_staged/'
  }
};

// add next line to export default when deploying
//...routerBase, 
//
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap'}
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/custom.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-slick', ssr: false },
    'plugins/BootstrapVue'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    //'bootstrap-vue/nuxt',
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
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-slick'],
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
