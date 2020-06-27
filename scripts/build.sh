# project = argv[1] or platon if not defined
project=${1:-platon}

ng build --extra-webpack-config webpack.externals.js --prod --project $project --single-bundle --stats-json
