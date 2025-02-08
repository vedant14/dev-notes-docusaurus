- The process for adding styled components in a nextjs is easy but the styled components take some time for the initial load. 
- To remove this initial load time, these steps need to be followed
- Following this article - [link](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c)

### Install the styled components
```
npm i babel-plugin-styled-components
```


### Add the babel configs
- Create the `.babelrc` file
```
touch .babelrc
```

- The final `.babelrc` file should look like this
```
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

### In the _document.js page 
- Add the following code in the `_document.js` page.
- I wish I could understand this, however this is also recommended in the official documentation
- [Link](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js)

```
touch pages/_document.js
```

```
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```
