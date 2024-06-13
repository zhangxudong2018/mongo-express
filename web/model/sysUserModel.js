const mongoose = require('../db/db');
const bcrypt = require('bcrypt');
const { body } = require('express-validator');

const sysUserSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    dept_id: {
        type: String
    },
    login_name: {
        type: String
    },
    user_name: {
        type: String
    },
    user_type: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: String
    },
    sex: {
        type: Number,
        default: 2
    },
    avatar: {
        type: String,
        default: null
    },
    password: {
        type: String,
        set(val) {
            return bcrypt.hashSync(val, 10);
        }
    },
    status: {
        type: Number,
        default: 0
    },
    del_flag: {
        type: Number,
        default: 0
    },
    login_ip: {
        type: String,
        default: null
    },
    login_date: {
        type: Date,
        default: null
    },
    pwd_update_date: {
        type: Date,
        default: null
    },
    create_by: {
        type: String,
        default: null
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    update_by: {
        type: String,
        default: null
    },
    update_time: {
        type: Date,
        default: null
    },
    remark: {
        type: String,
        default: null
    }
});

const sysUserModel = mongoose.model('sys_user', sysUserSchema, "sys_user");

const valid = [
    body('parent_id').notEmpty().withMessage('parent_id不能为空'),
    body('dept_name').notEmpty().withMessage('dept_name不能为空'),
    body('order_num').notEmpty().withMessage('order_num不能为空'),
    body('leader').notEmpty().withMessage('leader不能为空'),
    body('phone').notEmpty().withMessage('phone不能为空'),
    body('email').notEmpty().withMessage('email不能为空'),
    body('status').notEmpty().withMessage('status不能为空')
];

module.exports = { sysUserModel };