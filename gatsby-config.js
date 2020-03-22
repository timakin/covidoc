/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Covidoc`,
    description: `A website to catch up upstream and reliable sources about COVID-19.`,
    // siteUrl: ``,
    home: {
      title: `Covidoc`,
      description: `A website to catch up upstream and reliable sources about COVID-19.`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId: "1Ca54x1WzuLqq96VxJ23vdQkHiFty-AE4puu00JZhKto",
    //     worksheetTitle: "links",
    //     credentials: require("./credentials/client_secret.json")
    //   }
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
