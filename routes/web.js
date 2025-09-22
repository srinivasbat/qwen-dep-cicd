 
const express = require('express');
const router = express.Router();
const path = require('path');

// Main page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// About page
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Dashboard page (protected)
router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = router;