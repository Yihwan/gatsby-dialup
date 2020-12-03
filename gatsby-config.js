module.exports = {
  siteMetadata: {
    title: `Gatsby Dial-up`,
    description: `Explore the World Wide Web through Gatsby Dial-up, with performance, scalability, and security built-in. Call the number on your screen to learn more today.`,
    author: `@yihwan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-dialup`,
        short_name: `dialup`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
