const userController = require('../Controllers/Users.Controller');
const express = require('express');
const router = express.Router();
const auth = require('../Auth/AuthMiddleware');

router
    .get('/:dni',auth, userController.getUserById)
    .post('/', userController.createUser)
    .put('/:dni',auth, userController.updateUser)
    .delete('/:dni',auth, userController.deleteUser);


module.exports = router;