const TransactionsContoller = require('../Controllers/Transactions.controller');
const express = require('express');
const router = express.Router();

router.post('/', TransactionsContoller.createTransaction);
router.get('/', TransactionsContoller.getTransactions);
router.get('/:id', TransactionsContoller.getTransaction);
router.put('/:id', TransactionsContoller.updateTransaction);
router.delete('/:id', TransactionsContoller.deleteTransaction);

module.exports = router;