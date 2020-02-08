#!/bin/bash

# Export the vars in .env into your shell:
eval "$(grep ^DIST_TARGET_REPO= .env)";
eval "$(grep ^DIST_TARGET_BRANCH= .env)";

echo ${DIST_TARGET_REPO} master:${DIST_TARGET_BRANCH};
read -p "Press any key to continue..." x
