var express = require('express');
var router = express.Router();
const { createCode } = require('../utils/captcha');
const { BizResult } = require('../utils/bizResult');

router.get('/captchaImage', function(req, res, err) {
    var code = createCode();
    var sessionId = req.sessionID;
    console.log(sessionId);
    var txt = code.text.toLowerCase();
    console.log(txt);
    res.type('svg');
    res.send(code.data);
})

module.exports = router;