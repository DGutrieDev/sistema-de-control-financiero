const UsersService = require('../Services/Users.Service');
const usersService = new UsersService();

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await usersService.createUser(data);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const dni = req.params.dni;
        const user = await usersService.getUserById(dni);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const dni = req.params.dni;
        const data = req.body;
        const user = await usersService.updateUser(dni, data);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const dni = req.params.dni;
        const user = await usersService.deleteUser(dni);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
