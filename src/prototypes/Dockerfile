FROM node:16

USER root

# Install protoc and check this version
RUN apt-get update -y && \
    apt install -y protobuf-compiler && \
    protoc --version

WORKDIR /usr/app

RUN npm install -g ts-proto

ENTRYPOINT [ "/usr/app/build.sh" ]