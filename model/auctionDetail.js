/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/21
 * Desc
 */

const mongoose = require("../db/connect");

const AuctionDetailSchema = new mongoose.Schema({
    number: {type: Number, index: true},
    account: {type: String, index: true},
    amount: String,
    extractStatus: Number,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("auctiondetail", AuctionDetailSchema);
