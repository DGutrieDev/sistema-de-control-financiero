const SavingsModel = require('../Models/Savings.Model');

class SavingsService {

    async createSavings(data) {
        try {
            const savings = await SavingsModel.create(data);
            return savings;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getSavingsById(dni) {
        try {
            const savings = await SavingsModel.findByPk(dni);
            return savings;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getSavingsByMonth(month,year) {
        try {
            const savings = await SavingsModel.findAll({
                where: {
                    month: month,
                    year: year
                }
            });
            return savings;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateSavings(dni, data) {
        try {
            const savings = await SavingsModel.findByPk(dni);
            if (!savings) {
                return null;
            }
            await savings.update(data);
            return savings;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteSavings(dni) {
        try {
            const savings = await SavingsModel.findByPk(dni);
            if (!savings) {
                return null;
            }
            await savings.destroy();
            return savings;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTotalSavings(dni) {
        try {
            const savings = await SavingsModel.findAll({
                where: {
                    user_dni: dni
                }
            });
            let amount = 0;
            savings.forEach(saving => {
                amount += saving.amount;
            });
            return amount;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = SavingsService;