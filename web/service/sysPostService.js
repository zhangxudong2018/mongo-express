const { sysPostModel } = require('../model/sysPostModel');
const { randomShortId } = require('../utils/random');
const { BizResult } = require('../utils/bizResult');
const { validationResult } = require('express-validator');

function add(req, res) {
    const params = req.body;
    params.post_id = randomShortId();
    console.log(params);
    sysPostModel.create(params).then(r => {
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