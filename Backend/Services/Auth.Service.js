process.loadEnvFile();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User.Model');
const redis = require('../Config/redis');

class AuthService {
    async login(data) {
        try {
            const user = await User.findOne({ where: { email: data.email } });
            if (!user) {
                throw new Error('User not found');
            }
            const validPassword = await bcrypt.compare(data.password, user.password);
            if (!validPassword) {
                throw new Error('Invalid password');
            }
            
        } catch (err) {
            throw err;
        }
    }
}

module.exports = AuthService;