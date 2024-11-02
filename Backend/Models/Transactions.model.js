const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');
const Users = require('./Users.model');

const Transactions = sequelize.define('Transactions',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        model: 'Users',
        key: 'dni'
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        Enum: ['earnings', 'expenses']
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'transactions'
});

Users.hasMany(Transactions, { foreignKey: 'user_id', sourceKey: 'dni' });

Transactions.sync({ force: false }).then(() => {
    console.log('Table Transactions created');
});

module.exports = Transactions;