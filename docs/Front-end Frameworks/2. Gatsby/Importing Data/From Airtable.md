### Install the plugin
- First things first, run the command to install the plugin  
```bash
	npm install gatsby-source-airtable
```
    

### Config
- Use the plugin in the in the `gatsby-config.js`
- Ensure that columns in and across the tables have unique names.
- This method is **recommended** since the `apiKey` is not exposed. Read more at [dotenv](../Basics/Using Dotenv.md)
- Read more about the options [here](https://www.gatsbyjs.com/plugins/gatsby-source-airtable/)
```jsx
{
	  resolve: `gatsby-source-airtable`,
	  options: {
		apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
		tables: [
		  {
			baseId: `mybase`,
			tableName: `Boxes`,
			mapping: {
						BoxAttachments: `fileNode`,
						BoxAdditional: `text/markdown`
					},
			tableLinks: [`BoxItems`],
		  },
		],
	  },
	},
```
    
### Creating Pages from Airtable Records
-[ ] Vedant to add


### Use Airtable for backend of forms
- Go to [Link](../Forms/Form with Airtable as Backend.md)


