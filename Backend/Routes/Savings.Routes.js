const SavingsController = require('../Controllers/Savings.Contoller');
const express = require('express');
const router = express.Router();

router
    .post('/', SavingsController.createSavings)
    .get('/:dni', SavingsController.getSavingsById)
    .get('/:month/:year', SavingsController.getSavingsByMonth)
    .put('/:dni', SavingsController.updateSavings)
    .delete('/:dni', SavingsController.deleteSavings);

module.exports = router;