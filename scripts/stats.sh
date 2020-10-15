# build script must be run before this one

# project = argv[1] or platon if not defined
project=${1:-platon}
npm run stats:$project
