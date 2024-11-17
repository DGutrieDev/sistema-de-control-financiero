const express = require('express');
const router = express.Router();

const userRoutes = require('./User.Routes');
const TransactionsRoutes = require('./Transactions.Routes');
const SavingsRoutes = require('./Savings.Routes');
const AuthRoutes = require('./Auth.Routes');

router
    .use('/users', userRoutes)
    .use('/transactions', TransactionsRoutes)
    .use('/savings', SavingsRoutes)
    .use('/auth', AuthRoutes);

module.exports = router;