const SavingsController = require('../Controllers/Savings.Contoller');
const express = require('express');
const router = express.Router();
const auth = require('../Auth/AuthMiddleware');

router
    .post('/',auth, SavingsController.createSavings)
    .get('/:dni',auth, SavingsController.getSavingsById)
    .get('/:month/:year',auth, SavingsController.getSavingsByMonth)
    .put('/:dni',auth, SavingsController.updateSavings)
    .delete('/:dni',auth, SavingsController.deleteSavings);

module.exports = router;