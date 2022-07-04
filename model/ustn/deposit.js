/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/19
 * Desc
 */

const mongoose = require("../../db/connect");

const UstnDepositSchema = new mongoose.Schema({
    account: {type: String, index: true},
    type: Number,
    amount: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("ustnDeposit", UstnDepositSchema);
