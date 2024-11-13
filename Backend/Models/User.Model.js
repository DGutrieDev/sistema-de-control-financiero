const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const UsersModel = db.define('Users', {
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'Users'
}
);

UsersModel.sync(
    { force: false }
).then(() => {
    console.log('Users table created');
}
);

module.exports = UsersModel;