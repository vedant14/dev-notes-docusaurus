

### Install Plugin 
- [Link to the plugin](https://www.gatsbyjs.com/plugins/gatsby-transformer-json/?=json)
    
```
npm install gatsby-transformer-json
```
    
### In the config file
- Take note of where your JSON files are stores in this case I created a folder in `./src/data`
    
```jsx
`gatsby-transformer-json`,
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		path: `./src/data/`,
	  },
	},
```
    
### Example `.json` file
    
```jsx
[
	{
		"question": "Something",
		"value": "a",
	}, 
	{
		"question": "Something",
		"value": "a",
	}, 
	{
		"question": "Something",
		"value": "a",
	}, 
]
```
    
