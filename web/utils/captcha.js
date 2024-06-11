/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-05 21:09:04
 * @LastEditTime: 2024-06-10 01:18:39
 */
const code = require("svg-captcha");

function createCode() {
    return code.create({
        size: 4,
        ignoreChars: "0o1iIl",
        noise: 3,
        color: true,
        background: "#fff",
        fontSize: 60,
        width: 115,
        height: 40
    });
}
module.exports = { createCode };