/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/21
 * Desc
 */

const mongoose = require("../db/connect");

const AuctionSchema = new mongoose.Schema({
    number: {type: Number, index: true},
    amount: String,
    startAmount: String,
    overtime: Date,
    status: Number,
    highValue: String,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("auction", AuctionSchema);
