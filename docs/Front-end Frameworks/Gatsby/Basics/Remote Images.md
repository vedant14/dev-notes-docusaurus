## Usage
- Download images from any string field on another node so that those images can be queried with `gatsby-image`.

### Install Plugin
```
npm install gatsby-plugin-remote-images
```

### Configure the gatsby config file
- Configure `gatsby-config.js`
- This is cool because I can specify the node type (Book in this case) and also the path to the image and then the `gatsby-image` plugin will do the magic
```
{
  resolve: `gatsby-plugin-remote-images`,
  options: {
    nodeType: 'Book',
    imagePath: 'imageUrl',
  },
},
```