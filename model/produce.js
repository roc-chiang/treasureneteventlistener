/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/14
 * Desc
 */
/* 产量 */
const mongoose = require("../db/connect");

const ProduceSchema = new mongoose.Schema({
    number: {type: Number, index: true},
    account: {type: String, index: true},
    UWI: String,
    type: String,
    status: Number,
    month: Number,
    deviation: Number, //偏差
    produce: Number, //产量
    value: Number,  //价值
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("produce", ProduceSchema);
