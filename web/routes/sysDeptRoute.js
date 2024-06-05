var express = require('express');
var router = express.Router();
const { sysDeptModel, valid } = require('../model/sysDeptModel');
const { randomShortId } = require('../utils/random');
const { BizResult } = require('../utils/bizResult');
const { validationResult } = require('express-validator');

router.post('/add', valid, function(req, res, err) {
    var params = req.body;
    const errors = validationResult(req)
    console.log('--------------------------');
    if (!errors.isEmpty()) {
        console.log(errors.errors[0].msg);
        const result = BizResult.validateFailedWithMeg(errors.errors[0].msg, null);
        res.json(result);
    }
    params.dep_id = randomShortId();
    sysDeptModel.create(params).then(r => {
        const result = BizResult.success();
        res.json(result);
    }).catch(e => {
        const result = BizResult.fail(e);
        res.json(result);
    }) 
})

router.get('/all', function(req, res, err) {
    console.log(req.query);
})

router.get('/select', function(req, res, err) {
    sysDeptModel.aggregate([
    {
        $graphLookup: {
            from: "sys_dept",
            startWith: '$dep_id',
            connectFromField: "dep_id",
            connectToField: "parent_id",
            as: "children"
        }
    }
]).then(r => {
        console.log(r);
        res.send(r);
    })

})

module.exports = router;