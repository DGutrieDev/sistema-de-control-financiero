const TransactionsController = require('../Controllers/Transactions.Controller');
const express = require('express');
const router = express.Router();
const auth = require('../Auth/AuthMiddleware');

router
    .get('/:id', auth, TransactionsController.getTransactionsById)
    .get('/amount/:id', auth, TransactionsController.getTransactionAmountByUserDni)
    .get('/transaction/:date', auth, TransactionsController.getTransactionsByDate)
    .post('/', auth, TransactionsController.createTransaction)
    .put('/:id', auth, TransactionsController.updateTransaction)
    .delete('/:id', auth, TransactionsController.deleteTransaction);

module.exports = router;