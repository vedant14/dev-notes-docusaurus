- Works with `.yml` and `.yaml` files
###  Install Plugin -
- [Link to the plugin](https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/?=yaml)
    
    ```ruby
    npm install gatsby-transformer-yaml
    ```
    
### In config file
    
```jsx
module.exports = {
  plugins: [
	`gatsby-transformer-yaml`,
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		path: `./src/data/`,
	  },
	},
  ],
}
```
    
    
