/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 22:34:07
 * @LastEditTime: 2024-06-04 23:24:34
 */
 const request = require('./request');

 export function getCaptchaImg() {
    return request({
        url: '/captcha/captchaImage',
        method: 'get'
    })
 }

 export function login(data) {
     return request({
         url: '/login',
         method: 'post',
         data: data
     })
 }

export function sysDeptAdd(data) {
    return request({
        url: '/sys_dept/add',
        method: 'post',
        data: data
    })
}