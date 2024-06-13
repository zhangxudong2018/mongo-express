const mongoose = require('../db/db');
const { body } = require('express-validator');

const sysDeptSchema = new mongoose.Schema({
    dep_id: {
        type: String,
        default: null
    },
    parent_id: {
        type: String,
        default: null
    },
    dept_name: {
        type: String,
        default: null
    },
    order_num: {
        type: Number,
        default: 0
    },
    leader: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
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
    children: []
});

const sysDeptModel = mongoose.model('sys_dept', sysDeptSchema, "sys_dept");

const valid = [
    body('parent_id').notEmpty().withMessage('parent_id不能为空'),
    body('dept_name').notEmpty().withMessage('dept_name不能为空'),
    body('order_num').notEmpty().withMessage('order_num不能为空'),
    body('leader').notEmpty().withMessage('leader不能为空'),
    body('phone').notEmpty().withMessage('phone不能为空'),
    body('email').notEmpty().withMessage('email不能为空'),
    body('status').notEmpty().withMessage('status不能为空')
];

module.exports = { sysDeptModel, valid };