rm -rf ./lib
rm -rf ./images
rm index.html
rm logo.png
cp -r dist/lib ./lib
cp -r dist/images ./images
cp dist/index.html .
cp dist/logo.png .