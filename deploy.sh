#!/bin/bash

# Check for env variables
if [ -z "$DB_PASSWORD" ]; then
    echo "DB_PASSWORD must be set"
    exit 1
fi

if [ -z "$DB_USER" ]; then
    echo "DB_USER must be set"
    exit 1
fi

if [ -z "$DB_IP_PORT" ]; then
    echo "DB_IP_PORT must be set for example: 0.0.0.0:3002"
    exit 1
fi

if [ -z "$PORT" ]; then
    echo "PORT must be set for example: 10001"
    exit 1
fi

if [ -z "$AUTH_SECRET" ]; then
    echo "AUTH_SECRET must be set for example"
    exit 1
fi

if [ -z "$RESOURCES_DB_ID" ]; then
    echo "RESOURCES_DB_ID must be set for example"
    exit 1
fi


# Kill database process
killall surreal
# Start database process
surreal start -A --auth --user $DB_USER --pass $DB_PASSWORD --bind $DB_IP_PORT file://./database &



# Remove old folders
rm -rf ./personal-website-nextjs
rm -rf ./jkominovic.dev

# Clone repo
git clone git@github.com:JulianKominovic/personal-website-nextjs.git

mkdir ./jkominovic.dev
# Move build to
mv personal-website-nextjs/build ./jkominovic.dev


# Killall node processes
killall next-server
# Run server
source /home/web/.nvm/nvm.sh
node ./jkominovic.dev/build/standalone/server.js &