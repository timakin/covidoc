const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allGoogleSpreadsheetLinks(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            id
            title
            url
            date
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allGoogleSpreadsheetLinks.edges.forEach(({ node }) => {
    createPage({
      path: node.url,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
