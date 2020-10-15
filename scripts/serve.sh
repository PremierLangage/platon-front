# project = argv[1] or platon if not defined
project=${1:-platon}
npm run start $project --open=false
