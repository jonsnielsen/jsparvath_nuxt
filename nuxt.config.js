const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "jsparvath - developer",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Jonathan Spavath - developer based in Copenhagen"
      },
      {
        name: "google-site-verification",
        content: "YsPjIyloLmi1VaAgXmrG3_w25aXWbGCKBmLSJ-5q8po"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/browser-logo.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,900"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    {
      src: "~/assets/sass/main.scss",
      lang: "sass"
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/polyfills.js",
      ssr: false
    },
    {
      src: "~plugins/ga.js",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["nuxt-sass-resources-loader", ["~assets/sass/helpers/_1-helpers.scss"]]
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: [
      require("autoprefixer")({
        browsers: ["> 1%"]
      })
    ]
  },
  router: {
    middleware: "pages"
  }
};
