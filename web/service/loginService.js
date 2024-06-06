const { setToken } = require('../utils/token');
const { BizResult } = require('../utils/bizResult');

function login(req, res) {
    const param = req.body;
    setToken(param.username, param.password, param.code, param.uuid)
    .then(r => {
        const result = BizResult.success(r);
        res.json(result);
    });
}

module.exports = {
    login
}