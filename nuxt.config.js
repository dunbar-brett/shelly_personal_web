const nodeExternals = require('webpack-node-externals');
const routerBase = {
  router: {
    base: '/'
  }
};

// add next line to export default when deploying
//...routerBase, 
//
export default {
  ...routerBase,
  mode: 'universal',
  generate: {
    fallback: '404.html'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'Portland Artist | Shelly J. Weasel | Contemporary Artist' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'Shelly, Weasel, Shelly Weasel, Art, Contemporary, watercolor, oil, painting, Portland, Oregon, OR' || '' },
      { hid: 'og:image', name: 'og:image', content: 'http://www.shellyweasel.com/gallery/desktop/Home1.jpg' || '' },
      { hid: 'og:description', name: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: 'Portland Artist | Shelly J. Weasel | Contemporary Artist' },
      { hid: 'og:url', name: 'og:url', content: 'http://www.shellyweasel.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favi.ico' }, /* routerBase.router.base +  */
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap'}
    ],
    script: [
      // {
      //   src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      //   type: "text/javascript"
      // },
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
    { src: '~/plugins/vue-toasted', ssr: false },
    { src: '~/plugins/ga', ssr: false },
    'plugins/BootstrapVue'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    //'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
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
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://shellyweasel.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/oil',
      '/watercolor',
      '/about',
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },
}
