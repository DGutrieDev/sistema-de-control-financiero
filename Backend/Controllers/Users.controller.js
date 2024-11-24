const UsersService = require('../Services/Users.Service');
const usersService = new UsersService();

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const existingUser = await usersService.getUserById(data.dni);

        if (existingUser) {
            return res.status(400).json({
                message: `A user with DNI ${data.dni} already exists.`
            });
        }

        const user = await usersService.createUser(data);
        res.status(201).json({
            message: 'User created successfully.',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create the user. Please check the provided data.',
            error: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const dni = req.params.dni;
        const user = await usersService.getUserById(dni);
        if (!user) {
            return res.status(404).json({
                message: `User with DNI ${dni} not found.`
            });
        }
        res.status(200).json({
            message: 'User found successfully.',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'There was an error searching for the user. Please try again later.',
            error: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const dni = req.params.dni;
        const data = req.body;
        const user = await usersService.updateUser(dni, data);
        if (!user) {
            return res.status(404).json({
                message: `User with DNI ${dni} not found.`
            });
        }
        res.status(200).json({
            message: 'User updated successfully.',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to update the user. Please check the provided data.',
            error: error.message
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const dni = req.params.dni;
        const user = await usersService.deleteUser(dni);
        if (!user) {
            return res.status(404).json({
                message: `User with DNI ${dni} not found.`
            });
        }
        res.status(200).json({
            message: 'User deleted successfully.',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to delete the user. Please try again later.',
            error: error.message
        });
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
};