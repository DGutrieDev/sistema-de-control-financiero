const AuthService = require('../Services/Auth.Service');
const Auth = new AuthService();

const login = async (req, res) => {
    try {
        const token = await Auth.login(req.body);
        if (!token) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).send(token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

/*const logout = async (req, res) => {
    try {
        const result = await Auth.logout(req.body);
        if (!result) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).send('User logged out');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}*/

module.exports = {
    login
};