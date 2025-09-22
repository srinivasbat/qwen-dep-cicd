#!/bin/bash
# Set DNS
echo nameserver 8.8.8.8 > /etc/resolv.conf

# Install Node.js 16
curl -sL https://rpm.nodesource.com/setup_16.x | bash -
yum install -y nodejs

# Install system dependencies
yum install -y gcc-c++ make

# Install PM2 globally
npm install -g pm2

echo "Before install completed"