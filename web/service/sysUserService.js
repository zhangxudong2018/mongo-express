const { sysUserModel } = require('../model/sysUserModel');
const { randomShortId } = require('../utils/random');
const { BizResult } = require('../utils/bizResult');
const { validationResult } = require('express-validator');

function add(req, res) {
    const params = req.body;
    params.user_id = randomShortId();
    sysUserModel.create(params).then(r => {
        const result = BizResult.success();
        res.json(result);
    }).catch(e => {
        const result = BizResult.fail(e);
        res.json(result);
    })
}

module.exports = {
    add
}