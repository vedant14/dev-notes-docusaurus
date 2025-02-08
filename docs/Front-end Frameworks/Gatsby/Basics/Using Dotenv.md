- We will use Dotenv to pass the api keys or other sensitive information 
- Read more [here](https://www.npmjs.com/package/dotenv). 

### Install the plugin from npm 
```
npm i dotenv --save-dev
```

### Create the .env file in your source directory
- This command will create a file in the root of your directory
```
touch .env.development
```

- Open it and add your keys in
```
AIRTABLE_API_KEY=heythisisvedantskey
```

### Add the following code in your config file
- In the `gatsby-config.js`
- This goes right at the top above the `module.exports line` too
```
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
```

- and whereever you want to call the keys you can now use

```
process.env.AIRTABLE_API_KEY
```

### Hosting on Netlify
- When you are hosting on netlify add the environment variables in the same format i.e 
```
AIRTABLE_API_KEY=heythisisvedantskey
```

