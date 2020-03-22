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
      description: `
Covidoc is a website that allows users to view only links to reliable public and medical documents in order to prevent the information flooding that comes with the COVID-19 epidemic.      
This website is based on the Google Spreadsheet, so anyone can add a link from that sheet.
I am publishing this site with the hope that we can make a calm and quick effort to support each other without inadvertently panicking.`,
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
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1Ca54x1WzuLqq96VxJ23vdQkHiFty-AE4puu00JZhKto",
        worksheetTitle: "links",
        typePrefix: "GoogleSpreadsheet",
        credentials: JSON.parse(`${process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS}`),
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
