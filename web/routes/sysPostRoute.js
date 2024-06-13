var express = require('express');
var router = express.Router();
const service = require('../service/sysPostService');

router.post('/add', service.add);

module.exports = router;