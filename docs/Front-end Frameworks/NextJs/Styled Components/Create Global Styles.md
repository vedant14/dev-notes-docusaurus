### Create Global Styles

```
mkdir styles
```

```
touch styles/GlobalStyles.js
```


### Paste the default Global Styles

```
import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlack: "#262626",
  darkGrey: "#BBC8D4",
  primaryBlue: "#0069FF",
  lightBlue: "#66A5FF",
  brandYellow: "#FFE866",
  white: "#FAFAFA",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    font-family: 'Inter', sans-serif;
    background-color: ${colors.white};
    border: 10px solid ${colors.brandYellow}; 
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{    
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1px;
    @media screen and (min-width: 768px) {
      font-size: 52px;
      line-height: 63px;
    }
    .bold {
      font-weight: 700;
    }
  }

  h2{    
    font-style: normal;
    font-weight: 200;
    font-size: 28px;
    line-height: 30px;
    @media screen and (min-width: 768px) {
      font-size: 38px;
      line-height: 46px;
    }
    .bold {
      font-weight: 400;
    }
  }

  h3{
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 22px;
    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 34px;
    }
  }

  h4{    
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 29px;
    }
  }

  p, a, li {
    color: ${colors.washedBlack};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 26px;
    }
  }

  li{
    margin-bottom: 20px;
  }

  small{
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 16px;
    > a {
      font-size: 14px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.primaryBlack};
    &:hover {
      text-decoration: none; 
    }
  }

  button {
    color: ${colors.primaryBlue};
    background: ${colors.white};
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 14px;
    margin: 5px 10px 5px 0px;
    border-radius: .25rem;
    border: 2px solid ${colors.primaryBlack};
    box-shadow: 3px 3px 0 ${colors.primaryBlack};
    transition: all 0.05s ease-in;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      padding: 15px 30px;
      margin: 10px 30px 10px 0px;
    }
    &:hover{
      transform: translate(4px, 4px);
      box-shadow: 1px 1px 0px ${colors.primaryBlack};
    }
    &:disabled{  
      background: ${colors.darkGrey};
      transform: translate(4px, 4px);
      box-shadow: 0px 0px 0px ${colors.primaryBlack}; 
    }
  }


  .Container {
    margin-left: 30px;
    margin-right: 30px;
    @media screen and (min-width: 768px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1324px) {
      margin-left: 150px;
      margin-right: 150px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

`;
```


### Adding the global styles
- Import globalstyles in `_app.js` file
```
import { GlobalStyles } from "../styles/GlobalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```