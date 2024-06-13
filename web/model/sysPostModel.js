const mongoose = require('../db/db');
const { body } = require('express-validator');

const sysPostSchema = new mongoose.Schema({
    post_id: {
        type: String,
        default: null
    },
    post_code: {
        type: String,
        default: null
    },
    post_name: {
        type: String,
        default: null
    },
    order_num: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 0
    },
    del_flag: {
        type: Number,
        default: 0
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

const sysPostModel = mongoose.model('sys_post', sysPostSchema, "sys_post");

module.exports = { sysPostModel };