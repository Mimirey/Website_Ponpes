#!/bin/sh
# This script is used to deploy the application

#run as root
if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root. Please use sudo."
    exit 1
fi

echo "Starting deployment..."
echo "starting docker compose build..."

#build the docker compose
docker compose build
if [ $? -ne 0 ]; then
    echo "Docker compose build failed. Please check the Dockerfile and try again."
    exit 1
fi

echo "Docker compose build completed successfully."

echo "Starting the application..."
# start the docker compose
docker compose up -d
if [ $? -ne 0 ]; then
    echo "Docker compose up failed. Please check your docker-compose.yml file."
    exit 1
fi

docker compose logs
