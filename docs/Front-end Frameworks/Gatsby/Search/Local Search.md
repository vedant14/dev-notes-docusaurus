
### Install the plugin 
- Link for the documentation [here](https://www.gatsbyjs.com/plugins/gatsby-plugin-local-search/)
```
npm install --save gatsby-plugin-local-search
```


### Creating the index
- I used it to index data from my airtable so the code for `gatsby-config.js` is

```
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "brands",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
        {
          allAirtable(filter: {table: {eq: "Brands"}}) {
            nodes {
              id
              data {
                CategorySearchName
                Name
                Description
                slug
                CategoryDisplayName
                Image {
                  localFiles {
                    publicURL
                  }
                }
              }
            }
          }
        }
        `,
        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["Name", "CategoryID"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: [
          "id",
          "Name",
          "CategoryID",
          "Category",
          "path",
          "Description",
          "Image",
        ],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allAirtable.nodes.map(node => ({
            id: node.id,
            path: node.data.slug,
            Name: node.data.Name,
            CategoryID: node.data.CategorySearchName,
            Description: node.data.Description,
            Category: node.data.CategoryDisplayName,
            Image: node.data.Image,
          })),
      },
    },
```