const UserServices = require('../Services/Users.service');

    async function createUser(req, res){
        const data = req.body;
        const user = await UserServices.createUser(data);
        res.json(user);
    }

    async function getUsers(req, res){
        const users = await UserServices.getUsers();
        res.json(users);
    }

    async function getUser(req, res){
        const dni = req.params.dni;
        const user = await UserServices.getUser(dni);
        res.json(user);
    }

    async function updateUser(req, res){
        const dni = req.params.dni;
        const data = req.body;
        const user = await UserServices.updateUser(dni, data);
        res.json(user);
    }

    async function deleteUser(req, res){
        const dni = req.params.dni;
        const user = await UserServices.deleteUser(dni);
        res.json(user);
    }

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
