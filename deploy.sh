#!/bin/sh
# This script is used to deploy the application

#run as root
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root. Please use sudo."
    exit 1
fi

echo "Starting deployment..."
# check docker compose
if ! command -v "docker" &> /dev/null; then
    echo "docker compose could not be found. Please install Docker Compose."
    exit 1
fi

cp .env.example .env

echo "starting docker compose build..."

#build the docker compose
docker compose build
if [ $? -ne 0 ]; then
    echo "Docker compose build failed. Please check the Dockerfile and try again."
    exit 1
fi

echo "Docker compose build completed successfully."

echo "Starting the application..."

# npm install
docker run --rm -v "$(pwd)":/app -w /app node:lts-alpine npm install
if [ $? -ne 0 ]; then
    echo "npm install failed. Please check your Node.js setup."
    exit 1
fi
# npm run build
docker run --rm -v "$(pwd)":/app -w /app node:lts-alpine npm run build
if [ $? -ne 0 ]; then
    echo "npm run build failed. Please check your build scripts."
    exit 1
fi
# start the docker compose
docker compose up -d
if [ $? -ne 0 ]; then
    echo "Docker compose up failed. Please check your docker-compose.yml file."
    exit 1
fi

docker compose ps
