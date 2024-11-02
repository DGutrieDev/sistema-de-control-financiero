const TransactionsModel = require('../Models/Transactions.model');

class TransactionsService {

    constructor () {}

    async createTransaction(data){
        const transaction = await TransactionsModel.create(data);
        return transaction;
    }

    async getTransactions(){
        const transactions = await TransactionsModel.findAll();
        return transactions;
    }

    async getTransaction(id){
        const transaction = await TransactionsModel.findByPk(id);
        return transaction;
    }

    async updateTransaction(id, data){
        const transaction = await TransactionsModel.update(data, {
            where: {
                id: id
            }
        });
        return transaction;
    }

    async deleteTransaction(id){
        const transaction = await TransactionsModel.destroy({
            where: {
                id: id
            }
        });
        return transaction;
    }
}

module.exports = TransactionsService;