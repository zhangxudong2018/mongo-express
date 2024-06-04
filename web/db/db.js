const mongoose = require('mongoose');
const { url, options } = require('./config');

mongoose.connect(url, options).then(res => {
    console.log('connect success.')
}).catch(err => {
    console.log(err)
});

module.exports = mongoose;