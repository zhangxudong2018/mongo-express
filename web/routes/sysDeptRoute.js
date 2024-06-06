var express = require('express');
var router = express.Router();
const { valid } = require('../model/sysDeptModel');
const service = require('../service/sysDeptService');

router.post('/add', valid, service.add)

// router.get('/all', function(req, res, err) {
//     console.log(req.query);
// })

// router.get('/select', function(req, res, err) {
//     sysDeptModel.aggregate([
//     {
//         $graphLookup: {
//             from: "sys_dept",
//             startWith: '$dep_id',
//             connectFromField: "dep_id",
//             connectToField: "parent_id",
//             as: "children"
//         }
//     }
// ]).then(r => {
//         console.log(r);
//         res.send(r);
//     })

// })

module.exports = router;