const mongoose = require('../db/db');


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
module.exports = { sysDeptModel };