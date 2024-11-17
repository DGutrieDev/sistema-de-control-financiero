const { DataTypes } = require('sequelize');
const db = require('../config/connection');
const UsersModel = require('./User.Model');

const TransactionsModel = db.define('Transactions', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_dni: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: UsersModel,
            key: 'dni'
        }
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        ENUM: ['DEPOSIT', 'WITHDRAWAL']
        
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false, tableName: 'Transactions' });

UsersModel.hasMany(TransactionsModel, { foreignKey: 'user_dni' });
TransactionsModel.belongsTo(UsersModel, { foreignKey: 'user_dni' });

TransactionsModel.sync(
    { force: false }
).then(() => {});

module.exports = TransactionsModel;