const url = 'mongodb://localhost:27017/ry';

const options = {
    maxPoolSize: 100,
    minPoolSize: 2,
    socketTimeoutMS: 100
}

module.exports = { url, options };