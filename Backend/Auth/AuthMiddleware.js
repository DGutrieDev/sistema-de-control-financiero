const jsonwebtoken = require('jsonwebtoken');
const redisClient = require('../Config/redis');

const AuthMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Access denied');
    }

    try {
        const decoded = jsonwebtoken.verify(token, process.env.JSON_SECRET_KEY);
        req.user = decoded;
        const redisToken = await redisClient.get(`user:${decoded.id}`);
        if (!redisToken || redisToken !== token) {
            return res.status(401).send('Invalid or expired token');
        }
        next();
    } catch (error) {
        return res.status(401).send('Invalid token');
    }
};

module.exports = AuthMiddleware;