#!/bin/bash

protoc --plugin=/usr/local/lib/node_modules/ts-proto --proto_path=. --ts_proto_out=gen/ts interfaces/*.proto