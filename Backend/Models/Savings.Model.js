const { DataTypes } = require('sequelize');
const db = require('../config/connection');
const UsersModel = require('./User.Model');

const SavingsModel = db.define('Savings', {
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
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    month: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false, tableName: 'Savings' });

UsersModel.hasMany(SavingsModel, { foreignKey: 'user_dni' });
SavingsModel.belongsTo(UsersModel, { foreignKey: 'user_dni' });

SavingsModel.sync(
    { force: false }
).then(() => {
    console.log('Savings table created');
}
);

module.exports = SavingsModel;