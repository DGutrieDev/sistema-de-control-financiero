const redis = require('redis');

const client = redis.createClient({
    password: 'dLVnntUt6sEXPTsOaxaJpRY9HqktJVhB',
    socket: {
        host: 'redis-13474.c283.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 13474
    }
});

(async () => {
    try {
        await client.connect();
        console.log('Connected to Redis');
    } catch (error) {
        console.error('Error connecting to Redis:', error);
    }
})();

