const UserModel = require('../Models/Users.model');


class UserService {

    constructor () {}

    async createUser(data){
        const user = await UserModel.create(data);
        return user;
    }

    async getUsers(){
        const users = await UserModel.findAll();
        return users;
    }

    async getUser(dni){
        const user = await UserModel.findByPk(dni);
        return user;
    }

    async updateUser(dni, data){
        const user = await UserModel.update(data, {
            where: {
                dni: dni
            }
        });
        return user;
    }

    async deleteUser(dni){
        const user = await UserModel.destroy({
            where: {
                dni: dni
            }
        });
        return user;
    }
}

module.exports = UserService;