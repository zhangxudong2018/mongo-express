const { BaseResultCode } = require('./baseResultCode')

class BizResult {
    code;
    msg;
    data;
    time;

    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        this.time = Date.now();
    }

    static success(data) {
        return new BizResult(BaseResultCode.SUCCESS.code, BaseResultCode.SUCCESS.desc, data);
    }

    static fail(errData) {
        return new BizResult(BaseResultCode.FAILED.code, BaseResultCode.FAILED.desc, errData);
    }

    static validateFailed(param) {
        return new BizResult(BaseResultCode.VALIDATE_FAILED.code, BaseResultCode.VALIDATE_FAILED.desc, param);
    }

    static validateFailedWithMeg(msg, param) {
        return new BizResult(BaseResultCode.VALIDATE_FAILED.code, msg, param);
    }
}

module.exports = { BizResult };