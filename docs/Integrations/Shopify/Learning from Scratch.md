## CLI Template
- [LINK](https://github.com/Shopify/shopify-app-examples/tree/main/qr-code/node)
- How do I get information of a install
	- Webhook
- Current Store info
	- This should be enough
		- For this I need to know how do I get the session

```GET

https://particypants.myshopify.com/admin/oauth/authorize?client_id=dddbd358e076345b37623e7adedfcb0f&scope=read_locales,read_products&redirect_uri=http://http://localhost:3000/api/auth/callback&state=407023223723639&grant_options[]=
```


## NextJS template 
- [LINK](https://github.com/Checkout-Blocks/Shopify-App-Examples/tree/main/nextjs-app-starter/web)
- That template did not make it clear on how the login happens since it does not use the standard install flow