/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 21:39:01
 * @LastEditTime: 2024-06-04 21:45:09
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/*webpackChunkName: 'Login'*/'@/page/login/login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;