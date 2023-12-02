#!/bin/bash

mkdir -p gen/ts

docker rmi generator:latest
docker rm protoc-generator

docker build -t generator:latest . && docker run --name protoc-generator -v $(pwd):/usr/app -t generator:latest