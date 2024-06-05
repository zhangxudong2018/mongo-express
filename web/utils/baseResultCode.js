class BaseResultCode {
    code;
    desc;
    constructor(code, desc) {
        this.code = code;
        this.desc = desc;
    }

    static SUCCESS = new BaseResultCode(200, '操作成功');
    static FAILED = new BaseResultCode(500, '操作失败');
    static VALIDATE_FAILED = new BaseResultCode(400, '参数校验失败');
    static API_NOT_FOUNT = new BaseResultCode(404, '接口不存在');
}

module.exports =  { BaseResultCode };