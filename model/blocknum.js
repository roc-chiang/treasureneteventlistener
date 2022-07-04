/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */

const mongoose = require("../db/connect");

const BlockNumSchema = new mongoose.Schema({
    blocknum: Number,
    contract: {type: String, index: true},
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("BlockNum", BlockNumSchema);
