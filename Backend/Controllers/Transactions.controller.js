const TransactionsService = require('../Services/Transactions.Service');

const createTransaction = async (req, res) => {
    try {
        const data = req.body;
        const transaction = await TransactionsService.createTransaction(data);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getTransactionsById = async (req, res) => {
    try {
        const dni = req.params.dni;
        const transactions = await TransactionsService.getTransactionsById(dni);
        if (!transactions) {
            res.status(404).json({ message: 'Transactions not found' });
        }
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getTransactionAmountByUserDni = async (req, res) => {
    try {
        const dni = req.params.dni;
        const amount = await TransactionsService.getTransactionAmountByUserDni(dni);
        res.status(200).json(amount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
} 

const updateTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const transaction = await TransactionsService.updateTransaction(id, data);
        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const transaction = await TransactionsService.deleteTransaction(id);
        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getTransactionsByDate = async (req, res) => {
    try {
        const start = req.params.start;
        const end = req.params.end;
        const transactions = await TransactionsService.getTransactionsByDate(start, end);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createTransaction,
    getTransactionsById,
    getTransactionAmountByUserDni,
    updateTransaction,
    deleteTransaction,
    getTransactionsByDate
};