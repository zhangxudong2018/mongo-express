const mongoose = require('../db/db');
const bcrypt = require('bcrypt');
const { randomSalt } = require('../utils/random');

const sysUserSchema = new mongoose.Schema({
    dept_id: {
        type: Number,
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
module.exports = { sysUserModel };