const TransactionsController = require('../Controllers/Transactions.Controller');
const express = require('express');
const router = express.Router();

router
    .get('/:id', TransactionsController.getTransactionsById)
    .get('/amount/:id', TransactionsController.getTransactionAmountByUserDni)
    .get('/transaction/:date', TransactionsController.getTransactionsByDate)
    .post('/', TransactionsController.createTransaction)
    .put('/:id', TransactionsController.updateTransaction)
    .delete('/:id', TransactionsController.deleteTransaction);

module.exports = router;