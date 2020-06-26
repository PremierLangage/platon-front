#!/bin/bash

current_dir=$(pwd)
script_dir=$(dirname $0)

if [ ! -f "$current_dir/scripts/install.sh" ]; then
    echo "You must run this script from the root directory of the project !"
    exit 1
fi

echo -e "\nChecking requirements...\n"

if which node > /dev/null
then
    echo "node is installed, skipping..."
else
    echo "ERROR: node should be installed. visit https://www.npmjs.com/get-npm"
    exit 1
fi

if which npx > /dev/null
then
    echo "npx is installed, skipping..."
else
    echo "installing npx"
    npm i -g npx
fi

if which ng > /dev/null
then
    echo "ng is installed, skipping..."
else
    echo "installing ng"
    npm i -g @angular/cli@9.1.9
fi

if which nx > /dev/null
then
    echo "nx is installed, skipping..."
else
    echo "installing nx"
    npm i -g @nrwl/cli@9.4.5
fi

sudo npm install
