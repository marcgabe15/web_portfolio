module.exports = 
  {
    siteMetadata: {
      description: "Personal page of Marc Diaz",
      locale: "en",
      showThemeLogo: true,
      title: "Home | Marc Diaz",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")("blue")),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-146147780-1"
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Marc-Diaz`,
          short_name: `MD`,
          start_url: `/`,
          background_color: `#d0dde3'`,
          theme_color: `#d0dde3'`,
          display: `minimal-ui`,
          icon: `content/images/logo_marc.png`,
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: "content/",
        },
      },
      `gatsby-plugin-react-svg`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      
    ],
  }
// }

