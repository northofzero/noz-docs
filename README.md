# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Creating a "Doc" page

Sidebar elements are automatically generated from the `docs` folder.
Create a new markdown eg:`file-name.md` in the docs folder, and add customise the following frontmatter config:

```md
---
sidebar_position: 1
sidebar_label: "North of Zero"
author:
  name: North of Zero
  title: North of Zero
  url: https://northofzero.dev
  image_url: https://northofzero.dev/logo.png
---
```

To add custom sidebar elements, we need to edit the `sidebars.js` file.

Eg: Adding the following

```js
{
    type: "html",
    value: '<img src="/img/logo.png" alt="North of Zero" />',
    defaultStyle: true,
},
```
