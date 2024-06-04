var express = require('express');
var router = express.Router();
const { sysUserModel } = require('../model/sysUserModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
  var params = req.query;
  var skip = (params.page_num - 1) * params.page_size;
  var limit = params.page_size;
  var options = {};
  if (params.user_name != undefined && params.user_name != '') {
    options.login_name = {
      $regex: params.user_name
    }
  }
  if (params.phonenumber != undefined && params.phonenumber != '') {
    options.phonenumber = {
      $regex: params.phonenumber
    }
  }
  if (params.status != undefined && params.status != '') {
    options.status = params.status
  }
  if (params.create_start_time != undefined && params.create_start_time != '') {
    options.create_time = {
      $gt: params.create_start_time
    }
  }
  if (params.create_end_time != undefined && params.create_end_time != '') {
    options.create_time = {
      $lt: params.create_end_time
    }
  }
  sysUserModel.find(options).skip(skip).limit(limit).sort({create_time: -1}).then(r => {
    res.send(r);
  }).catch(err => {
    console.log(err);
    next();
  });
  
})

router.post('/insert', async function(req, res, next) {
  
  const sys_user = await sysUserModel.create(req.body).then(res => {
    const result = {
      code: 200,
      msg: '操作成功'
    }
    res.json(result);
  }).catch(err => {
    const result = {
      code: 500,
      msg: '操作失败'
    }
    res.json(result);
  });
  
  
})

module.exports = router;
