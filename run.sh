#!/bin/bash

# Theory Elite Landing Page — Run Script
# Usage: ./run.sh [dev|build|start]

cd "$(dirname "$0")"

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

MODE="${1:-dev}"

case "$MODE" in
  dev)
    echo "Starting dev server at http://localhost:3000 ..."
    npm run dev
    ;;
  build)
    echo "Building for production..."
    npm run build
    ;;
  start)
    echo "Building and starting production server at http://localhost:3000 ..."
    npm run build && npm run start
    ;;
  *)
    echo "Usage: ./run.sh [dev|build|start]"
    exit 1
    ;;
esac
