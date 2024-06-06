const { createCode } = require('../utils/captcha');

function getCaptcha(req, res) {
    var code = createCode();
    var txt = code.text.toLowerCase();
    req.session.captcha = txt;
    res.type('svg');
    res.send(code.data);
}

module.exports = {
    getCaptcha
}