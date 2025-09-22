#!/bin/bash
# Stop the application
pm2 stop bluegreen-app 2>/dev/null || true
pm2 delete bluegreen-app 2>/dev/null || true

echo "Application stopped"