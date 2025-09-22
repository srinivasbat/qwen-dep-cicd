#!/bin/bash
cd /home/ec2-user/app

# Set environment variables
export NODE_ENV=production
export PORT=3000

# Stop any existing process
sudo -E pm2 stop bluegreen-app 2>/dev/null || true
sudo -E pm2 delete bluegreen-app 2>/dev/null || true

# Start the application
sudo -E pm2 start server.js --name "bluegreen-app"

# Save PM2 process list
sudo -E pm2 save

echo "Application started"