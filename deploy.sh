#!/bin/bash
echo "IMPORTANT: run this script as root user: sudo -s"

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

if [ -z "$ML_OFERTAS_DATABASE" ]; then
    echo "ML_OFERTAS_DATABASE must be set for example"
    exit 1
fi


# Kill database process
killall surreal
# Start database process
nohup surreal start -A --auth --user $DB_USER --pass $DB_PASSWORD --bind $DB_IP_PORT file://./database > surreal.out &



# Remove old folders
rm -rf ./personal-website-nextjs
rm -rf ./jkominovic.dev

# Clone repo
git clone git@github.com:JulianKominovic/personal-website-nextjs.git

mkdir ./jkominovic.dev
# Move build to
mv personal-website-nextjs/build ./jkominovic.dev


# Killall node processes
killall next-server 2>/dev/null
# Create symbolic links
# ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"||true
# ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"||true
# ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npx" "/usr/local/bin/npx"||true
# Run server
nohup node ./jkominovic.dev/build/standalone/server.js &
echo "Check if server is running"
echo "If not, run: nohup node ./jkominovic.dev/build/standalone/server.js &"