const shortid = require('shortid');

/**
 * 生成随机ID
 * @returns 
 */
function randomShortId() {
    return shortid.generate();
}

module.exports = { randomShortId };