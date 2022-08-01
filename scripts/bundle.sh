#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# main基座
cp -r ./packages/main/dist/* ./dist/

# sub-home子应用
cp -r ./packages/child-1/dist/ ./dist/subapp/child-1/

# sub-html
cp -r ./packages/child-2/dist/ ./dist/subapp/child-2/

# sub-first子应用
# cp -r ./packages/main/ ./dist/subapp/main/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
