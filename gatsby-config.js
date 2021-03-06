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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID || '',
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
