const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

const Users = sequelize.define('Users',{
    dni : {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    token : {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false,
    tableName: 'users'
});

Users.sync({ force: false }).then(() => {
    console.log('Table Users created');
});

module.exports = Users;