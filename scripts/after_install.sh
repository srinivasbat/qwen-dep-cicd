#!/bin/bash
cd /home/ec2-user/app

# Install production dependencies only
npm ci --only=production

# The build folder is already deployed by CodeDeploy
# Logs folder will be created automatically by the application

echo "After install completed"