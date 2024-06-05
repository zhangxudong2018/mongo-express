var express = require('express');
var router = express.Router();
const { BizResult } = require('../utils/bizResult');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  const result = req.body
  console.log(result);
});

module.exports = router;
