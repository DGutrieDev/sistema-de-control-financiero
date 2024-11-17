const { DataTypes } = require('sequelize');
const db = require('../config/connection');
const UsersModel = require('./User.Model');

const BalanceModel = db.define('Balance', {
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
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false, tableName: 'Balance' });

UsersModel.hasMany(BalanceModel, { foreignKey: 'user_dni' });
BalanceModel.belongsTo(UsersModel, { foreignKey: 'user_dni' });

BalanceModel.sync(
    { force: false }
).then(() => {});

module.exports = BalanceModel;