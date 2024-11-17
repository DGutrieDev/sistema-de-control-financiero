const AuthController = require('../Controllers/Auth.Controller');
const express = require('express');
const router = express.Router();

router
    .post('/login', AuthController.login);
    //.post('/logout', AuthController.logout);

module.exports = router;
