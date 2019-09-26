# uilab-kaist.github.io

This is a website of **Users & Information Lab. @ KAIST**.

This website is based on **vue.js** and GitHub Pages compatible, and is also based on a Google Spreadsheet document. 

To modify the content in this website, simply edit [this document](https://docs.google.com/spreadsheets/d/1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE/edit?usp=sharing). The changes of the document will be reflected to the website in about 10 minutes. 

## How does this work?

This website tells the client web browser to dynamically fetch the contents of the Google Spreadsheet document. Text contents are not stored in this repository. 

## How do I modify the core of this website?

Make sure to install [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) on your environment before you start working on this project.
This project is not compatible with Windows. Please use Linux or Mac. 

Install dependencies with:

```bash
$ yarn install
```

Compiles and hot-reloads for development:

```bash
$ yarn serve
```

After modifying this project, always **build** and commit.
Remember that this project is directly served as GitHub pages from the repository. 

Build with:

```bash
$ yarn build
```

**Be aware** that files in `/dist`, `/lib`, `/assets`, and `/index.html` are dynamically generated when building the project. Do **NOT** modify these files directly. 