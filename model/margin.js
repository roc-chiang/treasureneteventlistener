/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

/* 保证金 */

const mongoose = require("../db/connect");

const MarginSchema = new mongoose.Schema({
    account: {type: String, index: true},
    type: Number,
    amount: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("margin", MarginSchema);
