/**
 * Create with blockchainWatcher
 * Author: ChrisChiu
 * Date: 2022/4/19
 * Desc
 */

const mongoose = require("../../db/connect");

const UstnLoanSchema = new mongoose.Schema({
    account: {type: String, index: true},
    number: Number,
    unitAmount:String,
    totalDebt:String,
    pledgeRate:Number,
    status:Number,
    operationStatus:Number,
    ustn: String,
    unit: String,
    unitValue: String,
    pledgeRateBefore: Number,
    blockNum: Number,
    blockHash: String,
    transactionHash: String,
    timestamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model("ustnLoan", UstnLoanSchema);
