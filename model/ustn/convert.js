/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/19
 * Desc
 */

const mongoose = require("../../db/connect");

const UstnConvertSchema = new mongoose.Schema({
    account: {type: String, index: true},
    unit: String,
    ustn: String,
    type: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("ustnConvert", UstnConvertSchema);
