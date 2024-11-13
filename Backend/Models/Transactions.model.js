const { DataTypes } = require('sequelize');
const db = require('../config/db.config');
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
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type:{
        ENUM: ['deposit', 'withdrawal'],
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Transactions'
}
);

UsersModel.hasMany(TransactionsModel, { foreignKey: 'user_dni' });
TransactionsModel.belongsTo(UsersModel, { foreignKey: 'user_dni' });

TransactionsModel.sync(
    { force: false }
).then(() => {
    console.log('Transactions table created');
}
);

module.exports = TransactionsModel;