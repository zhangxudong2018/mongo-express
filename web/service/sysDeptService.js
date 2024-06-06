const { sysDeptModel } = require('../model/sysDeptModel');
const { randomShortId } = require('../utils/random');
const { BizResult } = require('../utils/bizResult');
const { validationResult } = require('express-validator');

function add(req, res) {
    var params = req.body;
    const errors = validationResult(req)
    console.log('--------------------------');
    if (!errors.isEmpty()) {
        console.log(errors.errors[0].msg);
        const result = BizResult.validateFailedWithMeg(errors.errors[0].msg, null);
        res.json(result);
    }
    params.dep_id = randomShortId();
    // sysDeptModel.create(params).then(r => {
    //     const result = BizResult.success();
    //     res.json(result);
    // }).catch(e => {
    //     const result = BizResult.fail(e);
    //     res.json(result);
    // }) 
    res.send(params);
}

module.exports = {
    add
}