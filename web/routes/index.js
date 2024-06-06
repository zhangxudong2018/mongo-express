/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 21:10:05
 * @LastEditTime: 2024-06-05 21:13:46
 */
const express = require('express');
const router = express.Router();
const { jwtAuth} = require('../utils/token');

const loginRoute = require('./loginRoute');
const captchaRoute = require('./captchaRoute');
const sysDeptRoute = require('./sysDeptRoute');

router.use(jwtAuth);
router.use('/', loginRoute);
router.use('/captcha', captchaRoute);
router.use('/sys_dept', sysDeptRoute);

//设置跨域访问
// router.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
// // Access-Control-Allow-Headers：可根据浏览器的F12查看，把对应的粘贴在这里就行
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods","*");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// })

// 自定义统一异常处理中间件，需要放在代码最后
router.use((err, req, res, next) => {
  // 自定义用户认证失败的错误返回
  console.log('err===', err);
  if (err && err.name === 'UnauthorizedError') {
    const { status = 401, message } = err;
    // 抛出401异常
    res.status(status).json({
      code: status,
      msg: 'token失效，请重新登录',
      data: null
    })
  } else {
    const { output } = err || {};
    // 错误码和错误信息
    const errCode = (output && output.statusCode) || 500;
    const errMsg = (output && output.payload && output.payload.error) || err.message;
    res.status(errCode).json({
      code: errCode,
      msg: errMsg
    })
  }
})

module.exports = router
