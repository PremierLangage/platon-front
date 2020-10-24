# project = argv[1] or platon if not defined
project=${1:-platon}
port=${2:-4200}
npm run start $project -- --port $port --open=false
