const AuthService = require('../Services/Auth.Service');
const Auth = new AuthService();

const login = async (req, res) => {
    try {
        const result = await Auth.login(req.body);
        if (!result) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const logout = async (req, res) => {
    try {
        const result = await Auth.logout(req.user.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const refreshToken = async (req, res) => {
    try {
        const result = await Auth.refreshToken(req.body.refreshToken);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const verifyToken = async (req, res) => {
    try {
        const result = await Auth.verifyToken(req.body.token);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    login,
    logout,
    refreshToken,
    verifyToken
};