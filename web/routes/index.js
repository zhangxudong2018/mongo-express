/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 21:10:05
 * @LastEditTime: 2024-06-05 21:13:46
 */
var express = require('express');
var router = express.Router();
const { BizResult } = require('../utils/bizResult');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//设置跨域访问
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
// Access-Control-Allow-Headers：可根据浏览器的F12查看，把对应的粘贴在这里就行
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods","*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
  router.post('/login', function(req, res, next) {
    const result = req.body
    console.log(result);
  })
})

module.exports = router
