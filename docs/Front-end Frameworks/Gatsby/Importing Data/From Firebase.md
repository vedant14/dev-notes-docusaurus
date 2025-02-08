- A little more work than the others
- But free limit is good and is hosted by google.

### Install the plugin
- This was recommended on the course. Not sure if there are better plugins
```
npm i gatsby-firesource
```


### Get the firebase credentials
1. Go to firebase console
2. Go to Project Settings and then Service accounts
3. Click on "Generate new private key", save the key in the `src` folder. 
> Make sure the file is ignored by git
4. Follow the steps to include this file in `gatsby-config.js`

### In the gatsby config
- Point the credentials to the file you just stored in the previous step.
- Pay attention to the `author___NODE` syntax. That is used whenever we can to create a reference field.
- Read more here - [Link](https://www.gatsbyjs.com/plugins/gatsby-firesource/?=gatsby-fire)
```
{
  resolve: 'gatsby-firesource',
  options: {
	credential: require("./firebase.json"),
	types: [
	  {
		type: 'Book',
		collection: 'books',
		map: doc => ({
		  title: doc.title,
		  isbn: doc.isbn,
		  imageUrl: doc.imageUrl, 
		  author___NODE: doc.author.id,
		}),
	  },
	  {
		type: 'Author',
		collection: 'authors',
		map: doc => ({
		  name: doc.name,
		  country: doc.country,
		  books___NODE: doc.books.map(book => book.id),
		}),
	  },
	],
  },
},
```



### Creating pages
- In the node file
```
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = path.resolve("src/templates/bookTemplate.js")

  return graphql(`
    {
      allBook {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: { bookId: book.node.id },
      })
    })
  })
}

```

- In the template file 
```
export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}){
      summary
      title
      localImage{
        childImageSharp{
          fixed(width: 200){
            ...GatsbyImageSharpFixed
          }
        }
      }
      id
      author {
        name
      }
    }
  }
`
```


