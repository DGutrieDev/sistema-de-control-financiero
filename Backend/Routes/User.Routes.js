const userController = require('../Controllers/Users.Controller');
const express = require('express');
const router = express.Router();

router
    .get('/:dni', userController.getUserById)
    .post('/', userController.createUser)
    .put('/:dni', userController.updateUser)
    .delete('/:dni', userController.deleteUser);


module.exports = router;