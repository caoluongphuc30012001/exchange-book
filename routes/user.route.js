const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
router.post('/login-user', userController.loginUser);
router.post('/create-user', userController.createUser);
router.post('/get-detail-user', userController.getDetailUser);

module.exports = router;
