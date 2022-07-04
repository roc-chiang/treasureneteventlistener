/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/15
 * Desc
 */
const mongoose = require("../../db/connect");

const DaoDetailSchema = new mongoose.Schema({
    account: {type: String, index: true},
    number: {type: Number, index: true},
    title: String,
    desc: String,
    vote: String,
    over: Number,
    status: Number,
    executeStatus: Number,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("daodetail", DaoDetailSchema);
