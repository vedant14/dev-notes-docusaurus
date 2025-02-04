
### Create a new folder and initialise the npm
```
npm init -y
```


### Install react / react-dom / next
```
npm install --save react react-dom next
```


### Create pages
```
mkdir pages
```

```
cd pages
```

```
touch index.js
```



### Add boiler plate for nextJs
- Add this in the scripts tag
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node server.js",
    "build": "next build",
    "start": "next start"
},
```


## Creating the shopify app
1. Install Ngrok and run it on https 3000
2. Create a new public app on shopify and add in the ngrok url
3. Then copy the shopify keys to the `.env` file
```
SHOPIFY_API_KEY='someapikey'
SHOPIFY_API_SECRET_KEY='somesecretapikey'
```

## To create the Oauth System
### install koa
```
npm install koa @shopify/koa-shopify-auth dotenv koa-session isomorphic-fetch @shopify/koa-shopify-graphql-proxy
```

### Create the node server
```
touch server.js
```



### Store js

- Storejs gives us the ability to store data in the user's local storage
```
npm install store-js
```

- Importing it
```
import store from "store-js"
```



### To avoid ngrok timeout
To avoid tunnels that timeout, it is recommended to signup for a free ngrok account at https://ngrok.com/signup. After you signup, install your personalized authorization token 
```
shopify node tunnel auth mytoke
```	
