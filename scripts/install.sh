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

sudo npm install
