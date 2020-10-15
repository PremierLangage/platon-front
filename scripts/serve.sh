# project = argv[1] or platon if not defined
project=${1:-platon}
nx serve $project --open=false
