const TransactionsService = require('../Services/Transactions.service');

async function createTransaction(req, res) {
    const data = req.body;
    const transaction = await TransactionsService.createTransaction(data);
    res.json(transaction);
}

async function getTransactions(req, res) {
    const transactions = await TransactionsService.getTransactions();
    res.json(transactions);
}

async function getTransaction(req, res) {
    const id = req.params.id;
    const transaction = await TransactionsService.getTransaction(id);
    res.json(transaction);
}

async function updateTransaction(req, res) {
    const id = req.params.id;
    const data = req.body;
    const transaction = await TransactionsService.updateTransaction(id, data);
    res.json(transaction);
}

async function deleteTransaction(req, res) {
    const id = req.params.id;
    const transaction = await TransactionsService.deleteTransaction(id);
    res.json(transaction);
}

module.exports = {
    createTransaction,
    getTransactions,
    getTransaction,
    updateTransaction,
    deleteTransaction
};

