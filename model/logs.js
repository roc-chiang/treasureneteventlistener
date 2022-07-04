/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/3/25
 * Desc
 */

const mongoose = require("../db/connect");

const LogsSchema = new mongoose.Schema({
    blocknum: Number,
    contract: String,
    count: Number,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("Logs", LogsSchema);
