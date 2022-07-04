/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/15
 * Desc
 */
const mongoose = require("../db/connect");

const BidSchema = new mongoose.Schema({
    account: {type: String, index: true},
    type: String,
    result: String,
    status: Number,
    amount: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("bid", BidSchema);
