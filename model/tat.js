/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */

const mongoose = require("../db/connect");

const TATSchema = new mongoose.Schema({
    account: {type: String, index: true},
    type: Number,
    from: String,
    amount: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("TAT", TATSchema);
