var express = require('express');
var router = express.Router();
const service = require('../service/sysUserService');

router.post('/add', service.add);

module.exports = router;
