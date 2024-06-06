var express = require('express');
var router = express.Router();
const { getCaptcha} = require('../service/captchaService')

router.get('/captchaImage', getCaptcha)

module.exports = router;