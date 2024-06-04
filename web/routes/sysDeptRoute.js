var express = require('express');
var router = express.Router();
const { sysDeptModel } = require('../model/sysDeptModel');
const { randomShortId } = require('../utils/random');

router.post('/add', function(req, res, err) {
    var params = req.body;
    params.dep_id = randomShortId();
    sysDeptModel.create(params).then(r => {
        const result = {
            code: 200,
            msg: '操作成功'
          }
          res.json(result);
    }).catch(e => {
        console.log(e);
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