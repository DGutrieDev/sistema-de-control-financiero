const UsersModel = require('../Models/User.Model');
const bcrypt = require('bcrypt');

class UsersService {

    async createUser(data) {
        try {
            data.password = await bcrypt.hash(data.password, 10);
            const user = await UsersModel.create(data);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUsers() {
        try {
            const users = await UsersModel.findAll();
            return users;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUserById(dni) {
        try {
            const user = await UsersModel.findByPk(dni);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateUser(dni, data) {
        try {
            const user = await UsersModel.findByPk(dni);
            if (!user) {
                return null;
            }
            await user.update(data);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteUser(dni) {
        try {
            const user = await UsersModel.findByPk(dni);
            if (!user) {
                return null;
            }
            await user.destroy();
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = UsersService;