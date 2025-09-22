#!/bin/bash
cd /opt/app

# Install production dependencies only
sudo npm ci --only=production

# Ensure build directory exists
if [ ! -d "build" ]; then
  echo "Warning: No pre-built files found"
fi

echo "After install completed"