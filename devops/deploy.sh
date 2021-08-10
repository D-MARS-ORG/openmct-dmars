#!/bin/bash


echo "DEVOPS: Building and deploying openmct-dmars"

rm -rf dist/*

cp habitat-config/server/habitat.ts server/

npm run prod

scp -r dist/.env dist/* ddahan@34.90.40.209:/home/ddahan/openmct-dmars/

echo "DEVOPS: Building and deploying openmct-dmars-delayed"

rm -rf dist/*

cp msc-config/server/habitat.ts server/

npm run prod

scp -r dist/.env dist/* ddahan@34.90.40.209:/home/ddahan/openmct-dmars-delayed/

