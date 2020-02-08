#!/bin/bash

# Export the vars in .env into your shell:
eval "$(grep ^DIST_TARGET_REPO= .env)";
eval "$(grep ^DIST_TARGET_BRANCH= .env)";

git clone "$DIST_TARGET_REPO" -b "$DIST_TARGET_BRANCH" .tmp
cp -r public/data .tmp
cd .tmp
git add -A
git commit -m 'deploy:posts'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push origin "$DIST_TARGET_BRANCH"

cd ..
rm -rf .tmp

read -p "Press any key to continue..." x
