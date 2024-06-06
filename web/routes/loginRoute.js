const express = require('express');
const router = express.Router();
const service = require('../service/loginService');

router.post('/login', service.login);

module.exports = router;