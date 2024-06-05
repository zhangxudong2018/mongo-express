/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 21:10:05
 * @LastEditTime: 2024-06-04 23:29:12
 */
var express = require('express');
var router = express.Router();

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
});

module.exports = router;
