module.exports = {

  siteMetadata: {
    title: "Dac Dao | Software Engineer",
    author: "Dac Dao",
    description: "A Gatsby.js portfolio that is created with love."
  },


  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-138454554-1",
        head: false,
        anonymize: true,
      },

    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
