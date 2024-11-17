const jsonwebtoken = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JSON_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Invalid token');
    }
}

module.exports = AuthMiddleware;