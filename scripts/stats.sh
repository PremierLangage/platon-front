# project = argv[1] or platon if not defined
project=${1:-platon}

./scripts/build.sh $project && npx webpack-bundle-analyzer dist/apps/$project/stats-es2015.json
