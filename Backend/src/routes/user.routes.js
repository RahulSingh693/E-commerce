const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/profile', userController.getUserProfile);
router.get('/users', userController.getAllUsers);

module.exports = router;