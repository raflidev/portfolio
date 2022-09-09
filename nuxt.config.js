export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Muhammad Rafli Ramadhan - Frontend Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'I am Rafli, a Frontend Web Developer. This is my portfolio and learning progress I put together on this website' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Muhammad Rafli Ramadhan' },
      { name: 'keywords', content: 'Web Developer, Web Designer, Web Frontend Developer' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://raflidev.netlify.app/' },
      { property: 'og:title', content: 'Muhammad Rafli Ramadhan - Frontend Web Developer' },
      { property: 'og:description', content: 'I am Rafli, a Frontend Web Developer. This is my portfolio and learning progress I put together on this website' },
      { property: 'og:image', content: 'https://raflidev.netlify.app/logo.jpg' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://raflidev.netlify.app/' },
      { property: 'twitter:title', content: 'Muhammad Rafli Ramadhan - Frontend Web Developer' },
      { property: 'twitter:description', content: 'I am Rafli, a Frontend Web Developer. This is my portfolio and learning progress I put together on this website' },
      { property: 'twitter:image', content: 'https://raflidev.netlify.app/logo.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~assets/style.css', lang: 'css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/owl.js', mode: 'client' },
    { src: '~/plugins/pdf.js', mode: 'client' },
  ],

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
    ['vue-scrollto/nuxt', { duration: 800 }],
    '@nuxtjs/google-analytics',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'G-Z4DPKJZL19'
  }
}
