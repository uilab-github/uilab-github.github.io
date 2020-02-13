# uilab-kaist.github.io

This is a website of **Users & Information Lab. @ KAIST**.

This website is based on **vue.js** and GitHub Pages compatible, and is also based on a Google Spreadsheet document. 

To modify the content in this website, simply edit [this document](https://docs.google.com/spreadsheets/d/1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE/edit?usp=sharing). The changes of the document will be reflected to the website in about 10 minutes. 

## How does this website work?

This website tells the client web browser to dynamically fetch the contents of the Google Spreadsheet document. Text contents are not stored in this repository. 

## How do I upload static files to this website?

If you need to upload static files like dataset archives or PDF files to use in the website, we strongly recommend you to include your files in [uilab-files](https://github.com/uilab-github/uilab-files) repository and link from this website. (Use raw file links. e.g. https://github.com/uilab-github/uilab-files/blob/master/TACL2017/TACL2017.zip?raw=true) This way we can edit this website without downloading big chunks of files when cloning the repository. 

However, if you need to upload image files to use in the website or you can't use the separate repository to serve the file because of whatever reasons, please put your files in `{repository}/public/assets/{your_file_path}` and run `$ yarn build` to make sure that your files are copied and served in `uilab.kr/assets/{your_file_path}`. 

**Be aware** of the fact that **`{repository}/assets` directory is dynamically generated** when building the project. **Your files in that directory will be erased** and replaced by the files in `{repository}/public/assets` when someone builds the project later.

If you are too lazy to setup `yarn` or are accessible to the Windows machines only at the time, simply put your files in `{repository}/public/assets/{your_file_path}` and copy those files to `{repository}/assets/{your_file_path}`. 

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