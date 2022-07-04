/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/15
 * Desc
 */
const mongoose = require("../../db/connect");

const DaoVoteSchema = new mongoose.Schema({
    account: {type: String, index: true},
    number: {type: Number, index: true},
    voteNow: String,
    voteTotal: String,
    extractStatus: Number,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("daovote", DaoVoteSchema);
