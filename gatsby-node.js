/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            title
            urlSegment
          }
        }
      }
    }
  `)
  
  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.urlSegment,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        urlSegment: node.urlSegment
      },
    })
  })
}