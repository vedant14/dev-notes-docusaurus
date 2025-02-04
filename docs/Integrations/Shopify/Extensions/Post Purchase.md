###To enable the post purchase

### Use Ngrok to create the tunnel 
```
ngrok http 4000
```


### Serve the extension
```
npm run dev -- --tunnel-url <ngrok tunnel>:4000
```

### Final steps
1. Add the URL to the chrome extension
2. And the transaction has to be a credit card transaction