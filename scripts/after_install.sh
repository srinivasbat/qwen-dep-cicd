#!/bin/bash
cd /home/ec2-user/app

# Install production dependencies only
sudo -E npm ci --only=production

# Ensure build directory exists
if [ ! -d "build" ]; then
  echo "Warning: No pre-built files found"
fi

echo "After install completed"