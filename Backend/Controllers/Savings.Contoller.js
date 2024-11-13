const SavingsService = require('../Services/Savings.Service');

const createSavings = async (req, res) => {
    try {
        const savings = await SavingsService.createSavings(req.body);
        res.status(201).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSavingsById = async (req, res) => {
    try {
        const savings = await SavingsService.getSavingsById(req.params.dni);
        if (!savings) {
            return res.status(404).json({ error: 'Savings not found' });
        }
        res.status(200).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getSavingsByMonth = async (req, res) => {
    try {
        const savings = await SavingsService.getSavingsByMonth(req.params.month, req.params.year);
        if (!savings) {
            return res.status(404).json({ error: 'Savings not found' });
        }
        res.status(200).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateSavings = async (req, res) => {
    try {
        const savings = await SavingsService.updateSavings(req.params.dni, req.body);
        if (!savings) {
            return res.status(404).json({ error: 'Savings not found' });
        }
        res.status(200).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteSavings = async (req, res) => {
    try {
        const savings = await SavingsService.deleteSavings(req.params.dni);
        if (!savings) {
            return res.status(404).json({ error: 'Savings not found' });
        }
        res.status(200).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTotalSavings = async (req, res) => {
    try {
        const savings = await SavingsService.getTotalSavings(req.params.dni);
        res.status(200).json(savings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createSavings,
    getSavingsById,
    getSavingsByMonth,
    updateSavings,
    deleteSavings,
    getTotalSavings
};