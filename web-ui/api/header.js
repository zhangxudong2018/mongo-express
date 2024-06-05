/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 22:41:28
 * @LastEditTime: 2024-06-04 22:58:21
 */
import axios from "axios"
import { ElMessageBox } from "element-plus"

let instance = axios.create({
    responseType: "json",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

instance.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            let code = error.response.code;
            let msg = error.response.msg;
        }
        return Promise.reject(error, response.data);
    }
)

export default instance;