const UserController = require('../Controllers/Users.controller');
const express = require('express');
const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:dni', UserController.getUser);
router.put('/:dni', UserController.updateUser);
router.delete('/:dni', UserController.deleteUser);

module.exports = router;