// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/globals.scss')
      ],
    })
}

module.exports = {
  siteName: 'shreyas.dev',
  siteUrl: 'https://shreyas.dev',
  siteDescription: "This site is created by Shreyas B",
  templates: {
    Doc: '/:slug',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        route: '/doc/:year/:month/:day/:title',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
        refs:{
          tags: {
            typeName: 'Tag',
            route:'/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-blog-cover',
      options: {
        typeName: 'Doc',
        outputDir: './static/content/images',
        domain: 'https://localhost:8080',
        coverField: 'cover_image',
        cloud_name: 'archduke',
        api_key: '171391321488816',
        api_secret: 'vZ6VvlqP7wfe_k2zE4RBlHfy4QY'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

