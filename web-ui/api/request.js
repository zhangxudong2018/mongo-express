/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 22:37:21
 * @LastEditTime: 2024-06-04 23:35:03
 */
import instance from "./header.js"

const request = class {
    constructor(url, arg) {
        this.url = url;
        this.arg = arg;
    }

    modepost() {
        return new Promise((resolve, reject) =>{
            instance.post(this.url, this.arg)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
        })
    }

    modeget() {
        return new Promise((resolve, reject) =>{
            instance.get(this.url)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
        })
    }
}

export default request;