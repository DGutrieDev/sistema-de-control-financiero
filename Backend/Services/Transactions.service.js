const TrasnactionsModel = require('../Models/Transactions.Model');

class TransactionsService {

    async createTransaction(data) {
        try {
            const transaction = await TrasnactionsModel.create(data);
            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTranscationByUserDni(dni) {
        try {
            const transactions = await TrasnactionsModel.findAll({
                where: {
                    user_dni: dni
                }
            });
            return transactions;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTransactionAmountByUserDni(dni) {
        try {
            const transactions = await TrasnactionsModel.findAll({
                where: {
                    user_dni: dni
                }
            });
            let amount = 0;
            transactions.forEach(transaction => {
                amount += transaction.amount;
            });
            return amount;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTransactionById(id) {
        try {
            const transaction = await TrasnactionsModel.findByPk(id);
            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTransactionsByDate(start, end) {
        try {
            const transactions = await TrasnactionsModel.findAll({
                where: {
                    date: {
                        [Op.between]: [start, end]
                    }
                }
            });
            return transactions;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateTransaction(id, data) {
        try {
            const transaction = await TrasnactionsModel.findByPk(id);
            if (!transaction) {
                return null;
            }
            await transaction.update(data);
            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteTransaction(id) {
        try {
            const transaction = await TrasnactionsModel.findByPk(id);
            if (!transaction) {
                return null;
            }
            await transaction.destroy();
            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = TransactionsService;