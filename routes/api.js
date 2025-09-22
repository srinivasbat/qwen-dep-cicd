 
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// Auth routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// User routes (protected)
router.get('/users', authMiddleware, userController.getAllUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

// Sample data routes
router.get('/data', (req, res) => {
  res.json({
    message: 'Sample API data',
    timestamp: new Date().toISOString(),
    data: [
      { id: 1, name: 'Item 1', value: 100 },
      { id: 2, name: 'Item 2', value: 200 },
      { id: 3, name: 'Item 3', value: 300 }
    ]
  });
});

module.exports = router;