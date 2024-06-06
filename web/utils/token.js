const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { signkey, expiresIn } = require('./constant');

// 验证token是否过期
const jwtAuth = expressJwt.expressjwt({
  // 设置密钥
  secret: signkey,
  // 设置为true表示校验，false表示不校验
  credentialsRequired: true,
  // 加入算法 
  algorithms: ['HS256'],
  // 自定义获取token的函数
  getToken: (req) => {
    console.log('================');
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      const token = req.headers.authorization.split(' ')[1];
      return token
    } else if (req.query && req.query.token) {
      return req.query.token
    }
  }
  // 设置jwt认证白名单，比如/login登录接口不需要拦截
}).unless({
  path: [
    '/captcha/captchaImage',
    '/login'
  ]
})

const setToken = function(username, password, code, uuid) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      username: username,
      password: password,
      code: code,
      uuid: uuid
    }, signkey, expiresIn);
    resolve(token);
  })
}

const verToken = function(token) {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(token, signkey, (error, res) => {
      var data = {}
      if (error) {
        data.code = '01';
        data.obj = error;
      } else {
        data.code = '00';
        data.obj = res;
      }
      return data
    });
    resolve(info);
  })
}


module.exports = { jwtAuth, setToken, verToken }