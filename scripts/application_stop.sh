#!/bin/bash
# Stop the application
sudo pm2 stop bluegreen-app 2>/dev/null || true
sudo pm2 delete bluegreen-app 2>/dev/null || true

echo "Application stopped"