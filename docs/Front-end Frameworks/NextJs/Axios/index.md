## Using Axios

### Post Request with Axios
- Import axios first
```
async function handleSubmit() {
	const adData = {
		title: title,
		description: adCopy,
		productData: selectedProduct,
		shopData: shopData,
	};
	axios
	.post("/api/db/post-advert", adData)
	.then(function (response) {
	// TODO: toast message and redirect
	})
	.catch(function (error) {
	console.error(error);
	});
}
```

### Get request
```
await axios.get("/api/db/get-testimonyal", {params: {shopId: shopId}})
.then(function (response) {
	// TODO: toast message and redirect
	console.log(response);
})
.catch(function (error) {
	console.error(error);
});
```