const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Leeds Sights Template',
    author: 'Robert Marshall',
    description: '',
    siteUrl: 'https://roundhayparkleeds.co.uk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Roundhay Park',
        short_name: 'Roundhay Park',
        start_url: '/',
        background_color: '#25b100',
        theme_color: '#25b100',
        display: 'minimal-ui',
        icon: 'src/assets/images/fav.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `400i`, `700`],
            subsets: ['latin-ext'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID || '',
        // Enables Google Optimize using your container Id
        optimizeId: process.env.GOOGLE_OPTIMIZE_ID || '',
        // Enables Google Optimize Experiment ID
        experimentId: process.env.GOOGLE_EXPERIMENT_ID || '',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: process.env.GOOGLE_VARIATION_ID || '',
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve('./arc-sw.js'),
      },
    },
  ],
}
