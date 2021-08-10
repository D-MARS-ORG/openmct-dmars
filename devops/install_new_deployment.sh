#!/bin/bash

cp -r /home/ddahan/openmct-dmars/* /var/opt/openmct-dmars/
cp -r /home/ddahan/openmct-dmars-delayed/* /var/opt/openmct-dmars-delayed/

cd /var/opt/openmct-dmars

npm i

cd /var/opt/openmct-dmars-delayed

npm i

service openmct-dmars-delayed-service start
service openmct-dmars-service start