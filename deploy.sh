#!/bin/bash

# Export the vars in .env into your shell:
export $(egrep -v '^#' .env | xargs)

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f $DIST_TARGET_REPO master:$DIST_TARGET_BRANCH

cd -
