const BalanceModel = require('../Models/Balance.Model');

class BalanceService {

    async createBalance(data) {
        try {
            const balance = await BalanceModel.create(data);
            return balance;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBalanceById(dni) {
        try {
            const balance = await BalanceModel.findByPk(dni);
            return balance;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getBalanceByMonth(month,year) {
        try {
            const balance = await BalanceModel.findAll({
                where: {
                    month: month,
                    year: year
                }
            });
            return balance;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateBalance(dni, data) {
        try {
            const balance = await BalanceModel.findByPk(dni);
            if (!balance) {
                return null;
            }
            await balance.update(data);
            return balance;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteBalance(dni) {
        try {
            const balance = await BalanceModel.findByPk(dni);
            if (!balance) {
                return null;
            }
            await balance.destroy();
            return balance;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = BalanceService;