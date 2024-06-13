/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-06 20:29:19
 * @LastEditTime: 2024-06-10 01:07:03
 */
const { createCode } = require('../utils/captcha');
const { BizResult } = require('../utils/bizResult');``
const uuid = require('node-uuid');

function getCaptcha(req, res) {
    var code = createCode();
    var txt = code.text.toLowerCase();
    req.session.captcha = txt;
    const result = BizResult.success(String(code.data));
    result.uuid = uuid.v1();
    res.json(result);
}

module.exports = {
    getCaptcha
}