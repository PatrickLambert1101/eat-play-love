module.exports = {
  siteMetadata: {
    title: 'Eat Play Love',
    description: 'Health, wellness, retreats',
    icon32: `${__dirname}/static/img/favicon-32x32.png`,
    icon16: `${__dirname}/static/img/favicon-16x16.png`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layouts/index.js`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eat Play Love`,
        short_name: `EatPlayLove`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/static/img/fav.png`,
        include_favicon: true
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custon: {
          families: ['RV'],
          urls: [`${__dirname}/static/fonts.css`]
        }
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `eatplaylove.events`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#faf1c9`,
        showSpinner: true
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
