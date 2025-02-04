## GraphCMS
- Good free tier
- Fast build speed
- Easy UI 
- JSON and other features

### Install the package
```
npm install gatsby-source-graphcms
```

### In the config file 
- Store the endpoint in the .env.development file (read dotenv for more info)
- For more options see [Link](https://www.gatsbyjs.com/plugins/gatsby-source-graphcms/)
```
{
  resolve: `gatsby-source-graphcms`,
  options: {
	endpoint: process.env.GRAPHCMS_ENDPOINT,
	// downloadLocalImages: true,
  },
},
```

### To create pages from graphCMS
- in the `gatsby-node.js` file
```
const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        pages: allGraphCmsTest(
          sort: { order: ASC, fields: testquestions___test___publishedAt }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.pages.nodes.forEach(page => {
    createPage({
      component: path.resolve("./src/templates/test.js"),
      context: {
        id: page.id,
        page,
      },
      path: `/tests/${page.slug}`,
    })
  })
}

```


- And in the template
```
export const query = graphql`
  query TestQuest($id: String!) {
    graphCmsTest(id: { eq: $id }) {
      slug
      id
      title
      description
      testquestions {
        questionString
        answers
        trivia {
          html
          text
        }
        gif {
          url
        }
      }
    }
  }
```


