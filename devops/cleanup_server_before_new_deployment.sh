#!/bin/bash

service openmct-dmars-delayed-service stop
service openmct-dmars-service stop

rm -rf /home/ddahan/openmct-dmars/*
rm -rf /home/ddahan/openmct-dmars-delayed/*

rm -rf /var/opt/openmct-dmars/*
rm -rf /var/opt/openmct-dmars-delayed/*

