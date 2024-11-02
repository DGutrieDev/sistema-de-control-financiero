const express = require('express');
const app = express();
const sequelize = require('./Config/connection');
const userRoutes = require('./Routes/Users.routes');
const TransactionsRoutes = require('./Routes/Transactions.routes');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(express.json());
app.use('/users', userRoutes);
app.use('/transactions', TransactionsRoutes);

app.get('/', (req, res) => {
    res.send('System Backend is running');
});

app.listen(3000 || 5000, () => {
    console.log('Server is running on port 3000');
});


