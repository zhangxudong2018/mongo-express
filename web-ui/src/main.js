/*
 * @Descripttion: 
 * @Author: zhangxudong
 * @version: 
 * @Date: 2024-06-04 21:30:46
 * @LastEditTime: 2024-06-04 22:13:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { zhCn } from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn
});
app.mount('#app');
