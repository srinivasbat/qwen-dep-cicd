const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Create build directory if it doesn't exist
const buildDir = path.join(__dirname, '..', 'build');
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
    console.log('Created build directory');
}

// Copy public files to build directory
function copyDir(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
        console.log(`Created directory: ${dest}`);
    }
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${srcPath} -> ${destPath}`);
        }
    }
}

try {
    // Copy public directory to build
    const publicDir = path.join(__dirname, '..', 'public');
    if (fs.existsSync(publicDir)) {
        copyDir(publicDir, buildDir);
        console.log('Build completed successfully!');
    } else {
        console.log('Public directory not found. Creating basic build files...');
        
        // Create basic index.html if public directory doesn't exist
        const basicHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blue-Green Deployment App</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .container { max-width: 800px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Blue-Green Deployment Demo</h1>
        <p>Application is running successfully!</p>
        <p>Build timestamp: ${new Date().toISOString()}</p>
    </div>
</body>
</html>`;

        fs.writeFileSync(path.join(buildDir, 'index.html'), basicHtml);
        console.log('Created basic index.html in build directory');
        console.log('Build completed successfully!');
    }
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}